import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">CHAVES PORTFOLIO</h1>
      <nav className="nav-links">
        <Link to="home" smooth duration={500} className="nav-link">HOME</Link>
        <Link to="about" smooth duration={500} className="nav-link">ABOUT ME</Link>
        <Link to="projects" smooth duration={500} className="nav-link">PROJECTS</Link>
      </nav>
    </header>
  );
}
