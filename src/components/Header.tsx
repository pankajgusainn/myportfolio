import { Github, Linkedin, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    window.open('https://pankajgusain.tiiny.site', '_blank');
  };

  return (
    <header className="fixed w-full bg-slate-950/80 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold gradient-text animate-float">
            PANKAJ GUSAIN
          </Link>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <Link 
              to="/projects" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/pankajgusainn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://in.linkedin.com/in/pankaj-gusain-916879262" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button 
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                CV
              </button>
            </div>
          </nav>

          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">About</a>
            <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white">Skills</a>
            <Link 
              to="/projects"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">Contact</a>
            <div className="flex items-center space-x-4 px-3 py-2">
              <a 
                href="https://github.com/pankajgusainn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://in.linkedin.com/in/pankaj-gusain-916879262" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <button 
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90"
              >
                <Download className="w-4 h-4" />
                CV
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}