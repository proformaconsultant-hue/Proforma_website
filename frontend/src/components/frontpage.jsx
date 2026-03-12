import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calculator,
  Monitor,
  ArrowRight,
  BookOpen,
  FileText,
  TrendingUp,
  Pen,
  Layers,
  Shield,
  Code,
  Globe,
  Lock,
  Cloud,
  Zap
} from 'lucide-react'
import './newfrontpage.css'
import { api } from '../services/api'

// Icon mapping
const iconMap = {
  BookOpen, FileText, TrendingUp, Shield, Code, Globe, Lock, Cloud, Calculator, Monitor,Pen,Layers
}

/* ── Particle Line Canvas ── */
const ParticleCanvas = ({ colorScheme = 'blue' }) => {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: -999, y: -999 })

  const colors = colorScheme === 'blue'
    ? { particle: '#60a5fa', line: '96,165,250', glow: '#3b82f6', bg1: '#020824', bg2: '#0a1a3f' }
    : { particle: '#38bdf8', line: '56,189,248', glow: '#0ea5e9', bg1: '#020820', bg2: '#071e3d' }

  const initParticles = useCallback((w, h) => {
    const count = Math.min(Math.floor((w * h) / 8000), 100)
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * Math.PI * 2,
      })
    }
    return arr
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas.parentElement
      canvas.width = w
      canvas.height = h
      particlesRef.current = initParticles(w, h)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleLeave = () => { mouseRef.current = { x: -999, y: -999 } }
    canvas.addEventListener('mousemove', handleMouse)
    canvas.addEventListener('mouseleave', handleLeave)

    const CONNECTION_DIST = 130
    const MOUSE_DIST = 180

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      const particles = particlesRef.current
      const mouse = mouseRef.current

      ctx.clearRect(0, 0, w, h)

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.pulse += 0.02
        p.x += p.vx
        p.y += p.vy

        // Bounce off edges
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
        p.x = Math.max(0, Math.min(w, p.x))
        p.y = Math.max(0, Math.min(h, p.y))

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_DIST && dist > 0) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.02
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Clamp velocity
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2
          p.vy = (p.vy / speed) * 1.2
        }

        const pulseAlpha = p.alpha + Math.sin(p.pulse) * 0.15
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = colors.particle
        ctx.globalAlpha = pulseAlpha
        ctx.fill()

        // Glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3)
        grad.addColorStop(0, colors.glow)
        grad.addColorStop(1, 'transparent')
        ctx.fillStyle = grad
        ctx.globalAlpha = pulseAlpha * 0.3
        ctx.fill()
      }

      // Draw connections
      ctx.globalAlpha = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.35
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${colors.line}, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Mouse connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_DIST) {
          const opacity = (1 - dist / MOUSE_DIST) * 0.5
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(${colors.line}, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouse)
      canvas.removeEventListener('mouseleave', handleLeave)
    }
  }, [colors, initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="service-hero__canvas"
      style={{ position: 'absolute', inset: 0, zIndex: 1 }}
    />
  )
}

export const ServiceHero = () => {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await api.getHomepage()
        setContent(data)
      } catch (error) {
        console.error('Error fetching homepage content:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchContent()
  }, [])

  if (loading || !content) {
    return <div className="service-hero">Loading...</div>
  }

  return (
    <section className="service-hero">
      {/* ── ACCOUNTING PANEL ── */}
      <div className="service-hero__panel service-hero__panel--accounting">
        <ParticleCanvas colorScheme="blue" />
        <div className="service-hero__overlay" />

        <div className="service-hero__content">
          <div className="service-hero__tag">
            <Calculator size={16} />
            {content.accounting_tag}
          </div>

          <h2 className="service-hero__title">
            {content.accounting_title}
          </h2>

          <p className="service-hero__desc">
            {content.accounting_description}
          </p>

          <div className="service-hero__features">
            {content.accounting_features?.map((feature, index) => {
              const Icon = iconMap[feature.icon] || BookOpen
              return (
                <span key={index} className="service-hero__feature">
                  <Icon size={14} /> {feature.text}
                </span>
              )
            })}
          </div>

          <div className="service-hero__buttons">
            <Link to={content.accounting_button1_link} className="service-hero__btn service-hero__btn--primary">
              {content.accounting_button1_text} <ArrowRight size={16} />
            </Link>
            <Link to={content.accounting_button2_link} className="service-hero__btn service-hero__btn--secondary">
              {content.accounting_button2_text} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── CENTRE DIVIDER ── */}
      <div className="service-hero__divider">
        <div className="service-hero__divider-line" />
        <div className="service-hero__divider-icon">
          <Zap size={20} />
        </div>
      </div>

      {/* ── IT & DIGITAL PANEL ── */}
      <div className="service-hero__panel service-hero__panel--it">
        <ParticleCanvas colorScheme="cyan" />
        <div className="service-hero__overlay" />

        <div className="service-hero__content">
          <div className="service-hero__tag">
            <Monitor size={16} />
            {content.it_tag}
          </div>

          <h2 className="service-hero__title">
            {content.it_title}
          </h2>

          <p className="service-hero__desc">
            {content.it_description}
          </p>

          <div className="service-hero__features">
            {content.it_features?.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Code
              return (
                <span key={index} className="service-hero__feature">
                  <Icon size={14} /> {feature.text}
                </span>
              )
            })}
          </div>

          <div className="service-hero__buttons">
            <Link to={content.it_button1_link} className="service-hero__btn service-hero__btn--primary">
              {content.it_button1_text} <ArrowRight size={16} />
            </Link>
            <Link to={content.it_button2_link} className="service-hero__btn service-hero__btn--secondary">
              {content.it_button2_text} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
