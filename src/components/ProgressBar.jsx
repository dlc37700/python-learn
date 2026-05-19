export default function ProgressBar({ moduleId, progress }) {
  const p = progress[moduleId] || {}
  const steps = [
    { key: 'lesson', label: 'Cours', icon: '📖' },
    { key: 'exercises', label: 'Exercices', icon: '🧩' },
    { key: 'quiz', label: 'Quiz', icon: '❓' },
  ]
  const done = steps.filter(s => p[s.key]).length
  const pct = Math.round((done / steps.length) * 100)

  return (
    <div className="mt-3">
      <div className="flex items-center gap-2 mb-2">
        {steps.map((step, i) => (
          <div key={step.key} className="flex items-center gap-1">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                p[step.key]
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-gray-400'
              }`}
              title={step.label}
            >
              {p[step.key] ? '✓' : i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`h-0.5 w-6 transition-all ${p[steps[i + 1]?.key] ? 'bg-green-500' : 'bg-gray-700'}`} />
            )}
          </div>
        ))}
        <span className="ml-auto text-xs text-gray-400">{pct}%</span>
      </div>
      <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-cyan-400 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
