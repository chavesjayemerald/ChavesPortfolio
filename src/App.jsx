import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Career from './components/Career'
import Projects from './components/Projects'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}
