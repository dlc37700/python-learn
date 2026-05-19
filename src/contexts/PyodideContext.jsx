import { createContext, useContext, useState, useEffect, useRef } from 'react'

const PyodideContext = createContext(null)

export function PyodideProvider({ children }) {
  const [pyodide, setPyodide] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const initRef = useRef(false)

  useEffect(() => {
    if (initRef.current) return
    initRef.current = true

    async function loadPyodide() {
      try {
        const py = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/',
        })
        // Set up stdout capture helper
        await py.runPythonAsync(`
import sys
import io
`)
        setPyodide(py)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    // Wait for the script to be available
    if (window.loadPyodide) {
      loadPyodide()
    } else {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js'
      script.onload = loadPyodide
      script.onerror = () => {
        setError('Impossible de charger Pyodide')
        setLoading(false)
      }
      document.head.appendChild(script)
    }
  }, [])

  async function runCode(code) {
    if (!pyodide) return { output: '', error: 'Pyodide non chargé' }
    try {
      await pyodide.runPythonAsync(`
import sys, io
sys.stdout = io.StringIO()
sys.stderr = io.StringIO()
`)
      await pyodide.runPythonAsync(code)
      const output = await pyodide.runPythonAsync('sys.stdout.getvalue()')
      return { output: output || '(pas de sortie)', error: null }
    } catch (e) {
      // Clean up the traceback for readability
      const msg = e.message || String(e)
      const lines = msg.split('\n')
      const cleaned = lines
        .filter(l => !l.includes('File "<exec>"') && !l.includes('Traceback (most'))
        .join('\n')
        .trim()
      return { output: '', error: cleaned || msg }
    }
  }

  return (
    <PyodideContext.Provider value={{ pyodide, loading, error, runCode }}>
      {children}
    </PyodideContext.Provider>
  )
}

export function usePyodide() {
  return useContext(PyodideContext)
}
