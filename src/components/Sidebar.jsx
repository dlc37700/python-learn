import { useState } from 'react'
import { modules } from '../data/modules.js'

const byLevel = {
  1: modules.filter(m => !m.level || m.level === 1),
  2: modules.filter(m => m.level === 2),
  3: modules.filter(m => m.level === 3),
}

const levelLabels = {
  1: { label: 'Niveau 1', color: 'text-cyan-400', line: 'bg-cyan-900/50' },
  2: { label: 'Niveau 2', color: 'text-purple-400', line: 'bg-purple-900/50' },
  3: { label: 'Niveau 3', color: 'text-orange-400', line: 'bg-orange-900/50' },
}

function ModuleButton({ mod, isActive, progress, onSelect }) {
  const p = progress[mod.id] || {}
  const done = [p.lesson, p.exercises, p.quiz].filter(Boolean).length
  return (
    <button
      onClick={() => onSelect(mod.id)}
      className={`w-full text-left rounded-xl p-3 transition-all duration-200 group ${
        isActive
          ? 'bg-gradient-to-r from-cyan-900/60 to-purple-900/40 border border-cyan-700/50'
          : 'hover:bg-gray-800/60 border border-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{mod.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className={`text-sm font-semibold truncate ${isActive ? 'text-cyan-300' : 'text-gray-200 group-hover:text-white'}`}>
            {mod.title}
          </div>
          <div className="flex gap-1 mt-1">
            {['lesson', 'exercises', 'quiz'].map(k => (
              <div key={k} className={`h-1.5 flex-1 rounded-full transition-all ${p[k] ? 'bg-green-400' : 'bg-gray-700'}`} />
            ))}
          </div>
        </div>
        {done === 3 && <span className="text-green-400 text-sm flex-shrink-0">✓</span>}
      </div>
    </button>
  )
}

function LevelSection({ level, mods, isActive, progress, onSelect, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  const { label, color, line } = levelLabels[level]
  const doneCount = mods.filter(m => {
    const p = progress[m.id] || {}
    return p.lesson && p.exercises && p.quiz
  }).length

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-gray-800/40 transition-all group"
      >
        <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>{label}</span>
        <div className={`flex-1 h-px ${line}`} />
        <span className="text-xs text-gray-500">{doneCount}/{mods.length}</span>
        <span className={`text-gray-500 text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && (
        <div className="space-y-0.5 mt-0.5">
          {mods.map(mod => (
            <ModuleButton key={mod.id} mod={mod} isActive={isActive(mod.id)} progress={progress} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Sidebar({ currentModule, currentView, onSelect, onTerminal, progress }) {
  const isActive = (id) => currentModule === id && currentView !== 'terminal' && currentView !== 'home'

  return (
    <aside className="flex-1 flex flex-col overflow-hidden">
      {/* Module list — scrollable */}
      <nav className="flex-1 overflow-y-auto p-3">
        {[1, 2, 3].map(lvl => (
          <LevelSection
            key={lvl}
            level={lvl}
            mods={byLevel[lvl]}
            isActive={isActive}
            progress={progress}
            onSelect={onSelect}
            defaultOpen={lvl === 1}
          />
        ))}
      </nav>

      {/* Terminal button — always visible at bottom */}
      <div className="p-3 border-t border-gray-800 shrink-0">
        <button
          onClick={onTerminal}
          className={`w-full rounded-xl p-3 flex items-center gap-3 transition-all duration-200 ${
            currentView === 'terminal'
              ? 'bg-purple-900/50 border border-purple-600/50 text-purple-300'
              : 'hover:bg-gray-800/60 border border-transparent text-gray-300 hover:text-white'
          }`}
        >
          <span className="text-xl">🖥️</span>
          <span className="text-sm font-semibold">Terminal libre</span>
        </button>
      </div>
    </aside>
  )
}
