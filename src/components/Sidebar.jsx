import { modules } from '../data/modules.js'
import ProgressBar from './ProgressBar.jsx'

export default function Sidebar({ currentModule, currentView, onSelect, onTerminal, progress }) {
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
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {modules.map((mod) => {
          const p = progress[mod.id] || {}
          const done = [p.lesson, p.exercises, p.quiz].filter(Boolean).length
          const isActive = currentModule === mod.id && currentView !== 'terminal' && currentView !== 'home'

          return (
            <button
              key={mod.id}
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
                    {[
                      { key: 'lesson', title: 'Cours' },
                      { key: 'exercises', title: 'Exercices' },
                      { key: 'quiz', title: 'Quiz' },
                    ].map(s => (
                      <div
                        key={s.key}
                        title={s.title}
                        className={`h-1.5 flex-1 rounded-full transition-all ${p[s.key] ? 'bg-green-400' : 'bg-gray-700'}`}
                      />
                    ))}
                  </div>
                </div>
                {done === 3 && <span className="text-green-400 text-sm">✓</span>}
              </div>
            </button>
          )
        })}
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
