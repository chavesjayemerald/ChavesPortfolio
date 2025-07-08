import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="home" smooth duration={500} className="nav-link">Home</Link>
        <Link to="about" smooth duration={500} className="nav-link">About Me</Link>
        <Link to="projects" smooth duration={500} className="nav-link">Projects</Link>
      </nav>
    </header>
  );
}
