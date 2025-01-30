import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import TechVisuals from './components/TechVisuals';
import Contact from './components/Contact';
import Projects from './pages/Projects';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Skills />
        <TechVisuals />
        <Contact />
      </main>
      <footer className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Pankaj Gusain. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-slate-900 text-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;