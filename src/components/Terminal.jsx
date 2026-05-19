import { useState, useRef, useEffect } from 'react'
import { usePyodide } from '../contexts/PyodideContext.jsx'

export default function Terminal() {
  const { runCode, loading: pyLoading } = usePyodide()
  const [code, setCode] = useState('')
  const [history, setHistory] = useState([
    { type: 'system', content: '🐍 Terminal Python — Tape ton code et appuie sur Exécuter !' },
  ])
  const [running, setRunning] = useState(false)
  const bottomRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  async function handleRun() {
    if (!code.trim() || pyLoading || running) return
    const cmd = code.trim()
    setCode('')
    setRunning(true)

    setHistory(h => [...h, { type: 'input', content: cmd }])

    const result = await runCode(cmd)

    if (result.error) {
      setHistory(h => [...h, { type: 'error', content: result.error }])
    } else if (result.output && result.output !== '(pas de sortie)') {
      setHistory(h => [...h, { type: 'output', content: result.output }])
    } else {
      setHistory(h => [...h, { type: 'info', content: '(aucune sortie)' }])
    }

    setRunning(false)
    textareaRef.current?.focus()
  }

  function handleKeyDown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleRun()
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      const start = e.target.selectionStart
      const end = e.target.selectionEnd
      const newCode = code.substring(0, start) + '    ' + code.substring(end)
      setCode(newCode)
      requestAnimationFrame(() => {
        textareaRef.current.selectionStart = start + 4
        textareaRef.current.selectionEnd = start + 4
      })
    }
  }

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <div className="mb-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800/50 border border-gray-700/50">
        <div className="flex items-center gap-4">
          <span className="text-5xl">🖥️</span>
          <div>
            <div className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-1">Terminal libre</div>
            <h1 className="text-2xl font-bold text-white">Python REPL</h1>
            <p className="text-gray-400 mt-1">Teste n'importe quel code Python ici !</p>
          </div>
        </div>
      </div>

      {/* Output history */}
      <div className="rounded-2xl border border-gray-700/50 overflow-hidden bg-black/60 mb-4">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900/80 border-b border-gray-700/50">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-gray-500 font-mono">Python Terminal</span>
          <button
            onClick={() => setHistory([{ type: 'system', content: '🐍 Terminal effacé.' }])}
            className="text-xs text-gray-500 hover:text-gray-300 transition-all"
          >
            Effacer
          </button>
        </div>

        <div className="p-4 min-h-[300px] max-h-[400px] overflow-y-auto font-mono text-sm space-y-2">
          {history.map((entry, i) => (
            <div key={i}>
              {entry.type === 'input' && (
                <div>
                  <span className="text-cyan-400">{'>>> '}</span>
                  <span className="text-white whitespace-pre-wrap">{entry.content}</span>
                </div>
              )}
              {entry.type === 'output' && (
                <pre className="text-green-300 whitespace-pre-wrap ml-4">{entry.content}</pre>
              )}
              {entry.type === 'error' && (
                <pre className="text-red-300 whitespace-pre-wrap ml-4">{entry.content}</pre>
              )}
              {entry.type === 'info' && (
                <div className="text-gray-500 ml-4 italic">{entry.content}</div>
              )}
              {entry.type === 'system' && (
                <div className="text-purple-400">{entry.content}</div>
              )}
            </div>
          ))}
          {running && (
            <div className="text-yellow-400 animate-pulse">⟳ Exécution en cours...</div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="rounded-2xl border border-gray-700/50 overflow-hidden bg-gray-900/60">
        <div className="px-4 py-2 border-b border-gray-700/50 flex items-center gap-2">
          <span className="text-cyan-400 font-mono text-sm">{'>>>'}</span>
          <span className="text-xs text-gray-500">Ctrl+Entrée pour exécuter</span>
        </div>
        <textarea
          ref={textareaRef}
          className="code-editor w-full min-h-[120px] rounded-none border-0"
          value={code}
          onChange={e => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="# Écris ton code Python ici..."
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <div className="flex gap-3 px-4 py-3 bg-gray-900/80">
          <button
            onClick={handleRun}
            disabled={pyLoading || running || !code.trim()}
            className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-bold transition-all ${
              pyLoading || running || !code.trim()
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-purple-500 hover:bg-purple-400 text-white'
            }`}
          >
            {pyLoading ? '⟳ Chargement Pyodide...' : running ? '⟳ Exécution...' : '▶ Exécuter'}
          </button>
          <button
            onClick={() => setCode('')}
            className="px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
          >
            Effacer
          </button>
        </div>
      </div>
    </div>
  )
}
