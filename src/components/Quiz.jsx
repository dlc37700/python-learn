import { useState } from 'react'

export default function Quiz({ mod, progress, onComplete }) {
  const p = progress[mod.id] || {}
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  function selectAnswer(qi, optIdx) {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qi]: optIdx }))
  }

  function handleSubmit() {
    let s = 0
    mod.quiz.forEach((q, i) => {
      if (answers[i] === q.answer) s++
    })
    setScore(s)
    setSubmitted(true)
    onComplete(mod.id)
  }

  function handleReset() {
    setAnswers({})
    setSubmitted(false)
    setScore(0)
  }

  const allAnswered = mod.quiz.every((_, i) => answers[i] !== undefined)

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800/50 border border-gray-700/50">
        <div className="flex items-center gap-4">
          <span className="text-5xl">❓</span>
          <div>
            <div className="text-xs text-purple-400 font-semibold uppercase tracking-widest mb-1">Quiz</div>
            <h1 className="text-2xl font-bold text-white">{mod.title}</h1>
            <p className="text-gray-400 mt-1">{mod.quiz.length} questions — bonne chance !</p>
          </div>
        </div>
      </div>

      {submitted && (
        <div className={`mb-8 p-6 rounded-2xl border text-center ${
          score === mod.quiz.length
            ? 'bg-green-900/30 border-green-500/50'
            : score >= mod.quiz.length / 2
            ? 'bg-yellow-900/20 border-yellow-500/50'
            : 'bg-red-900/20 border-red-500/40'
        }`}>
          <div className="text-5xl mb-3">
            {score === mod.quiz.length ? '🏆' : score >= mod.quiz.length / 2 ? '👍' : '💪'}
          </div>
          <div className="text-2xl font-bold text-white mb-1">
            {score} / {mod.quiz.length}
          </div>
          <div className="text-gray-400">
            {score === mod.quiz.length
              ? 'Parfait ! Tu maîtrises ce module !'
              : score >= mod.quiz.length / 2
              ? 'Pas mal ! Relis le cours pour consolider.'
              : 'Continue à pratiquer, tu vas y arriver !'}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {mod.quiz.map((q, qi) => {
          const selected = answers[qi]
          const isCorrect = submitted && selected === q.answer
          const isWrong = submitted && selected !== undefined && selected !== q.answer

          return (
            <div
              key={qi}
              className={`rounded-2xl border overflow-hidden transition-all ${
                isCorrect ? 'border-green-500/50' : isWrong ? 'border-red-500/40' : 'border-gray-700/50'
              } bg-gray-900/60`}
            >
              <div className="px-5 py-4 border-b border-gray-700/50 bg-gray-800/40">
                <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  Question {qi + 1}
                </span>
                <p className="text-white font-semibold mt-1">{q.question}</p>
              </div>

              <div className="p-4 space-y-2">
                {q.options.map((opt, oi) => {
                  let style = 'border-gray-700/50 text-gray-300 hover:border-cyan-500/50 hover:text-white hover:bg-cyan-900/10'
                  if (!submitted && selected === oi) style = 'border-cyan-400 text-cyan-300 bg-cyan-900/20'
                  if (submitted && oi === q.answer) style = 'border-green-500 text-green-300 bg-green-900/20'
                  if (submitted && selected === oi && oi !== q.answer) style = 'border-red-500 text-red-300 bg-red-900/20'

                  return (
                    <button
                      key={oi}
                      onClick={() => selectAnswer(qi, oi)}
                      disabled={submitted}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm font-medium ${style} ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <span className="text-gray-500 mr-2">{String.fromCharCode(65 + oi)}.</span>
                      {opt}
                      {submitted && oi === q.answer && <span className="ml-2 text-green-400">✓</span>}
                      {submitted && selected === oi && oi !== q.answer && <span className="ml-2 text-red-400">✗</span>}
                    </button>
                  )
                })}
              </div>

              {submitted && (
                <div className="px-5 py-3 bg-blue-900/20 border-t border-blue-700/30 text-sm text-blue-300">
                  💡 {q.explanation}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex gap-4 justify-center">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
              allAnswered
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-400 hover:to-cyan-400 shadow-lg'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            Valider mes réponses
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-xl font-bold text-sm border border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-300 transition-all"
          >
            ↺ Recommencer
          </button>
        )}
      </div>
    </div>
  )
}
