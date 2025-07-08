import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <header>
        <div className="navbar">
          <h1 className="navbar-title">Chaves Portfolio</h1>

          {/* Desktop Nav */}
          <nav className="navbar-links desktop-only">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/education" className="navbar-link">Education</Link>
            <Link to="/career" className="navbar-link">Career</Link>
            <Link to="/projects" className="navbar-link">Projects</Link>
          </nav>

          {/* Burger (inside header) */}
          <div className="burger-container mobile-only">
            <button
              className="menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Nav — outside the header so it doesn't overlap */}
      {isOpen && (
        <div className="navbar-links open mobile-only">
          <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/education" className="navbar-link" onClick={() => setIsOpen(false)}>Education</Link>
          <Link to="/career" className="navbar-link" onClick={() => setIsOpen(false)}>Career</Link>
          <Link to="/projects" className="navbar-link" onClick={() => setIsOpen(false)}>Projects</Link>
        </div>
      )}

    </>
  )
}
