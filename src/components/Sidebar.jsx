import { modules } from '../data/modules.js'

const level1 = modules.filter(m => !m.level || m.level === 1)
const level2 = modules.filter(m => m.level === 2)

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
              <div
                key={k}
                className={`h-1.5 flex-1 rounded-full transition-all ${p[k] ? 'bg-green-400' : 'bg-gray-700'}`}
              />
            ))}
          </div>
        </div>
        {done === 3 && <span className="text-green-400 text-sm">✓</span>}
      </div>
    </button>
  )
}

export default function Sidebar({ currentModule, currentView, onSelect, onTerminal, progress }) {
  const isActive = (id) => currentModule === id && currentView !== 'terminal' && currentView !== 'home'

  return (
    <aside className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-lg font-bold text-white">
            Py
          </div>
          <div>
            <div className="font-bold text-white text-sm">Python Learn</div>
            <div className="text-xs text-gray-400">Pour les 3èmes 🎓</div>
          </div>
        </div>
      </div>

      {/* Module list */}
      <nav className="flex-1 overflow-y-auto p-3">
        {/* Niveau 1 */}
        <div className="mb-1">
          <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Niveau 1</span>
            <div className="flex-1 h-px bg-cyan-900/50" />
          </div>
          <div className="space-y-0.5">
            {level1.map(mod => (
              <ModuleButton key={mod.id} mod={mod} isActive={isActive(mod.id)} progress={progress} onSelect={onSelect} />
            ))}
          </div>
        </div>

        {/* Niveau 2 */}
        <div className="mt-3">
          <div className="flex items-center gap-2 px-2 py-1.5 mb-1">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Niveau 2</span>
            <div className="flex-1 h-px bg-purple-900/50" />
          </div>
          <div className="space-y-0.5">
            {level2.map(mod => (
              <ModuleButton key={mod.id} mod={mod} isActive={isActive(mod.id)} progress={progress} onSelect={onSelect} />
            ))}
          </div>
        </div>
      </nav>

      {/* Terminal button */}
      <div className="p-3 border-t border-gray-800">
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
