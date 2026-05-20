import { useEffect, useRef } from 'react'
import CodeEditor from './CodeEditor.jsx'

export default function Lesson({ mod, progress, onLessonRead, onExerciseComplete }) {
  const contentRef = useRef(null)
  const p = progress[mod.id] || {}

  useEffect(() => {
    if (window.hljs && contentRef.current) {
      contentRef.current.querySelectorAll('pre code').forEach(block => {
        window.hljs.highlightElement(block)
      })
    }
  }, [mod.id])

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      {/* Module header */}
      <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800/50 border border-gray-700/50">
        <div className="flex items-center gap-4">
          <span className="text-5xl animate-float">{mod.emoji}</span>
          <div>
            <div className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-1">
              Module {mod.id}
            </div>
            <h1 className="text-2xl font-bold text-white">{mod.title}</h1>
            <p className="text-gray-400 mt-1">{mod.description}</p>
          </div>
        </div>
      </div>

      {/* Lesson content */}
      <div
        ref={contentRef}
        className="lesson-content mb-8"
        dangerouslySetInnerHTML={{ __html: mod.lesson.content || mod.lesson.html || '' }}
      />

      {/* Mark as read */}
      {!p.lesson && (
        <div className="mb-10 flex justify-center">
          <button
            onClick={() => onLessonRead(mod.id)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            ✓ Marquer le cours comme lu
          </button>
        </div>
      )}
      {p.lesson && (
        <div className="mb-10 text-center text-green-400 text-sm font-semibold">
          ✓ Cours terminé !
        </div>
      )}

      {/* Exercises */}
      <section>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🧩</span> Exercices pratiques
        </h2>
        <div className="space-y-8">
          {mod.exercises.map((ex, i) => (
            <div key={ex.id} className="rounded-2xl bg-gray-900/60 border border-gray-700/50 overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-700/50 bg-gray-800/40">
                <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-1">
                  Exercice {i + 1}
                </div>
                <h3 className="text-white font-semibold">{ex.title}</h3>
                <p
                  className="text-gray-400 text-sm mt-1"
                  dangerouslySetInnerHTML={{ __html: ex.description || ex.instruction || '' }}
                />
                {ex.hint && (
                  <p className="text-xs text-yellow-500/80 mt-2">💡 Indice : {ex.hint}</p>
                )}
              </div>
              <div className="p-5">
                <CodeEditor
                  starterCode={ex.starter || ex.starterCode}
                  solution={ex.solution}
                  exerciseId={`${mod.id}-${ex.id}`}
                  onComplete={() => onExerciseComplete(mod.id, ex.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final activity */}
      {mod.activity && (
        <section className="mt-12">
          <div className="relative rounded-2xl overflow-hidden border border-yellow-500/40 bg-gradient-to-br from-yellow-950/40 via-orange-950/30 to-gray-900/60">
            <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400" />
            <div className="px-6 py-5 border-b border-yellow-800/30 bg-yellow-900/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <div className="text-xs text-yellow-400 font-bold uppercase tracking-widest mb-0.5">
                    Activité finale
                  </div>
                  <h2 className="text-xl font-bold text-white">{mod.activity.title}</h2>
                </div>
              </div>
              <p
                className="text-gray-300 text-sm leading-relaxed mt-2"
                dangerouslySetInnerHTML={{ __html: mod.activity.description }}
              />
              {mod.activity.goal && (
                <div className="mt-3 flex items-start gap-2 text-xs text-yellow-300/80 bg-yellow-900/20 border border-yellow-700/30 rounded-lg px-3 py-2">
                  <span className="mt-0.5 flex-shrink-0">🎯</span>
                  <span>{mod.activity.goal}</span>
                </div>
              )}
            </div>
            <div className="p-5">
              <CodeEditor
                starterCode={mod.activity.starter}
                solution={mod.activity.solution}
                exerciseId={`${mod.id}-activity`}
                onComplete={() => {}}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
