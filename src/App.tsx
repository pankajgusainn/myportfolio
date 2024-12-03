import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import TechVisuals from './components/TechVisuals';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
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
    </div>
  );
}

export default App;