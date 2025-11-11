import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId

    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const buffer = new Uint32Array(imageData.data.buffer)
      const len = buffer.length

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          const noise = Math.random() * 255
          buffer[i] = (255 << 24) | (noise << 16) | (noise << 8) | noise
        }
      }

      ctx.putImageData(imageData, 0, 0)
    }

    const animate = () => {
      createNoise()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="container">
      <canvas ref={canvasRef} className="noise"></canvas>
      <div className="gradient"></div>
      <div className="content">
        <h1>Unlock insights.<br />Discover connections.</h1>
        <p className="secondary-text-2">
          Transform how you explore knowledge.<br />
          Let Tropiflo scale your research.
        </p>
        <p className="tertiary-text">
          <a href="https://medium.com/@oz.kilim/the-buzz-on-wall-street-how-a-fruit-fly-outsmarted-the-market-4a2a2bd28c7e" target="_blank" rel="noopener noreferrer" className="link-button">blog</a>{' '}
          <a href="mailto:info@adgecy.io?subject=Careers Inquiry" className="link-button">careers</a>{' '}
          <a href="mailto:Sales@adgecy.io?subject=Corporate Inquiry" className="link-button">corporate</a>
        </p>
      </div>
    </div>
  )
}

export default App

