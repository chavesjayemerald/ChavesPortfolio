import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
