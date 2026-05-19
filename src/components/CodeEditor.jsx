import { useState, useEffect, useRef } from 'react'
import { usePyodide } from '../contexts/PyodideContext.jsx'

export default function CodeEditor({ starterCode, solution, exerciseId, onComplete }) {
  const { runCode, loading: pyLoading } = usePyodide()
  const [code, setCode] = useState(starterCode || '')
  const [output, setOutput] = useState(null)
  const [running, setRunning] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [ran, setRan] = useState(false)
  const textareaRef = useRef(null)

  // Reset when exercise changes
  useEffect(() => {
    setCode(starterCode || '')
    setOutput(null)
    setShowSolution(false)
    setRan(false)
  }, [exerciseId, starterCode])

  // Highlight code blocks on mount
  useEffect(() => {
    if (window.hljs) window.hljs.highlightAll()
  }, [showSolution])

  async function handleRun() {
    if (pyLoading || running) return
    setRunning(true)
    const result = await runCode(code)
    setOutput(result)
    setRunning(false)
    if (!ran) {
      setRan(true)
      onComplete?.()
    }
  }

  function handleKeyDown(e) {
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
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleRun()
    }
  }

  return (
    <div className="rounded-xl border border-gray-700/50 overflow-hidden">
      {/* Editor header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900/80 border-b border-gray-700/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-gray-500 font-mono">main.py</span>
        <span className="text-xs text-gray-600">Ctrl+Entrée pour exécuter</span>
      </div>

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        className="code-editor w-full min-h-[140px] rounded-none border-0 border-b border-gray-700/50"
        value={code}
        onChange={e => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />

      {/* Action buttons */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-900/60">
        <button
          onClick={handleRun}
          disabled={pyLoading || running}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
            pyLoading || running
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-400 text-black'
          }`}
        >
          {running ? (
            <><span className="animate-spin inline-block">⟳</span> Exécution...</>
          ) : pyLoading ? (
            <><span className="animate-spin inline-block">⟳</span> Chargement...</>
          ) : (
            <>▶ Exécuter</>
          )}
        </button>

        <button
          onClick={() => { setCode(starterCode || ''); setOutput(null) }}
          className="px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
        >
          ↺ Réinitialiser
        </button>

        {solution && (
          <button
            onClick={() => setShowSolution(s => !s)}
            className="ml-auto px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-yellow-300 hover:bg-yellow-900/20 transition-all"
          >
            {showSolution ? '🙈 Cacher la solution' : '💡 Voir la solution'}
          </button>
        )}
      </div>

      {/* Output console */}
      {output !== null && (
        <div className="border-t border-gray-700/50">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40">
            <span className="text-xs font-mono text-gray-500">Console</span>
            {output.error ? (
              <span className="text-xs text-red-400">● Erreur</span>
            ) : (
              <span className="text-xs text-green-400">● OK</span>
            )}
          </div>
          <pre className={`px-4 py-3 text-sm font-mono whitespace-pre-wrap break-words ${output.error ? 'text-red-300' : 'text-green-200'}`}>
            {output.error || output.output}
          </pre>
        </div>
      )}

      {/* Solution */}
      {showSolution && solution && (
        <div className="border-t border-yellow-700/30 bg-yellow-900/10">
          <div className="px-4 py-2 text-xs text-yellow-400 font-semibold">💡 Solution</div>
          <pre className="px-4 pb-4"><code className="language-python">{solution}</code></pre>
        </div>
      )}
    </div>
  )
}
