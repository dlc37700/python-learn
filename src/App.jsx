import { useState, useEffect, useRef } from 'react'
import { PyodideProvider, usePyodide } from './contexts/PyodideContext.jsx'
import Sidebar from './components/Sidebar.jsx'
import Lesson from './components/Lesson.jsx'
import Quiz from './components/Quiz.jsx'
import Terminal from './components/Terminal.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import { modules } from './data/modules.js'

const STORAGE_KEY = 'python-learn-progress'

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function PyodideLoader() {
  const { loading, error } = usePyodide()
  if (!loading && !error) return null
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950/95 backdrop-blur">
      <div className="text-6xl mb-6 animate-float">🐍</div>
      {error ? (
        <>
          <div className="text-red-400 font-bold text-lg mb-2">Erreur de chargement</div>
          <div className="text-gray-400 text-sm max-w-xs text-center">{error}</div>
          <div className="text-gray-500 text-xs mt-2">Vérifie ta connexion internet et recharge la page.</div>
        </>
      ) : (
        <>
          <div className="text-white font-bold text-lg mb-2">Chargement de Python…</div>
          <div className="text-gray-400 text-sm mb-4">Initialisation de Pyodide (WebAssembly)</div>
          <div className="w-48 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse rounded-full w-3/4" />
          </div>
        </>
      )}
    </div>
  )
}

function HomePage({ progress, onSelect }) {
  const total = modules.length
  const completed = modules.filter(m => {
    const p = progress[m.id] || {}
    return p.lesson && p.exercises && p.quiz
  }).length

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-2">
      <div className="text-center mb-12 pt-8">
        <div className="text-7xl mb-4 animate-float">🐍</div>
        <h1 className="text-4xl font-extrabold text-white mb-3">
          Apprends{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Python
          </span>
          {' '}!
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          7 modules pour maîtriser les bases de Python, avec des exercices interactifs et des quiz.
        </p>
        <div className="mt-6 inline-flex items-center gap-3 bg-gray-800/60 px-5 py-3 rounded-full border border-gray-700">
          <span className="text-green-400 font-bold text-lg">{completed}</span>
          <span className="text-gray-400 text-sm">/ {total} modules terminés</span>
          <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-cyan-400 transition-all"
              style={{ width: `${(completed / total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modules.map((mod) => {
          const p = progress[mod.id] || {}
          const isComplete = p.lesson && p.exercises && p.quiz

          return (
            <button
              key={mod.id}
              onClick={() => onSelect(mod.id)}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 group hover:scale-[1.02] ${
                isComplete
                  ? 'border-green-600/40 bg-green-900/10 hover:border-green-500/60'
                  : 'border-gray-700/50 bg-gray-900/40 hover:border-cyan-600/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{mod.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500">Module {mod.id}</span>
                    {isComplete && <span className="text-xs text-green-400 font-semibold">✓ Terminé</span>}
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{mod.description}</p>
                  <ProgressBar moduleId={mod.id} progress={progress} />
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function AppInner() {
  const [progress, setProgress] = useState(loadProgress)
  const [currentModule, setCurrentModule] = useState(null)
  const [view, setView] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const mainRef = useRef(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentModule, view])

  function updateProgress(moduleId, key) {
    setProgress(prev => ({
      ...prev,
      [moduleId]: { ...(prev[moduleId] || {}), [key]: true },
    }))
  }

  function handleSelectModule(id) {
    setCurrentModule(id)
    setView('lesson')
    setSidebarOpen(false)
  }

  function handleTerminal() {
    setView('terminal')
    setSidebarOpen(false)
  }

  function handleHome() {
    setView('home')
    setSidebarOpen(false)
  }

  const mod = modules.find(m => m.id === currentModule)

  return (
    <div className="flex h-screen bg-gray-950 text-gray-100 overflow-hidden">
      <PyodideLoader />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-950 border-r border-gray-800/60 z-30 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <button
          onClick={handleHome}
          className="w-full flex items-center gap-2 px-5 py-3 text-sm text-gray-400 hover:text-white hover:bg-gray-800/40 transition-all border-b border-gray-800/60"
        >
          <span>🏠</span> Accueil
        </button>
        <Sidebar
          currentModule={currentModule}
          currentView={view}
          onSelect={handleSelectModule}
          onTerminal={handleTerminal}
          progress={progress}
        />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center gap-4 px-4 py-3 border-b border-gray-800/60 bg-gray-950/80 backdrop-blur shrink-0">
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-all"
            onClick={() => setSidebarOpen(s => !s)}
          >
            <div className="w-5 h-0.5 bg-gray-400 mb-1" />
            <div className="w-5 h-0.5 bg-gray-400 mb-1" />
            <div className="w-5 h-0.5 bg-gray-400" />
          </button>

          {mod && view !== 'home' && view !== 'terminal' && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{mod.emoji}</span>
              <span className="text-white font-semibold">{mod.title}</span>
            </div>
          )}

          {mod && view !== 'home' && view !== 'terminal' && (
            <div className="ml-auto flex gap-2">
              <button
                onClick={() => setView('lesson')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  view === 'lesson'
                    ? 'bg-cyan-900/60 text-cyan-300 border border-cyan-700/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                📖 Cours & Exercices
              </button>
              <button
                onClick={() => setView('quiz')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  view === 'quiz'
                    ? 'bg-purple-900/60 text-purple-300 border border-purple-700/50'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                ❓ Quiz
              </button>
            </div>
          )}
        </header>

        <main ref={mainRef} className="flex-1 overflow-y-auto p-6">
          {view === 'home' && (
            <HomePage progress={progress} onSelect={handleSelectModule} />
          )}
          {view === 'lesson' && mod && (
            <Lesson
              mod={mod}
              progress={progress}
              onLessonRead={(id) => updateProgress(id, 'lesson')}
              onExerciseComplete={(id) => updateProgress(id, 'exercises')}
            />
          )}
          {view === 'quiz' && mod && (
            <Quiz
              mod={mod}
              progress={progress}
              onComplete={(id) => updateProgress(id, 'quiz')}
            />
          )}
          {view === 'terminal' && <Terminal />}
        </main>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <PyodideProvider>
      <AppInner />
    </PyodideProvider>
  )
}
