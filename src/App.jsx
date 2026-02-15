import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      minHeight: '100vh', margin: 0,
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Hello, Hyperdrive!</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>React + Vite - Modern frontend stack</p>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{
            marginTop: '2rem', padding: '0.75rem 2rem',
            fontSize: '1.1rem', border: 'none', borderRadius: '2rem',
            background: 'rgba(255,255,255,0.25)', color: 'white',
            cursor: 'pointer', backdropFilter: 'blur(10px)'
          }}
        >
          Count: {count}
        </button>
        <div style={{
          marginTop: '2rem', padding: '0.5rem 1.5rem',
          background: 'rgba(255,255,255,0.2)', borderRadius: '2rem',
          fontSize: '0.9rem', display: 'inline-block'
        }}>
          Deployed via Hyperdrive
        </div>
      </div>
    </div>
  )
}

export default App
