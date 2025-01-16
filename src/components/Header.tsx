import { Github, Linkedin, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    window.open('https://brainery.s3.us-west-2.amazonaws.com/pankaj%27s%20cv.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5FTZFCDXQ2DF6EZK%2F20250116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250116T054509Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCHSYehN9vgqCfMBdOe8cW98RWn7Fj7Rkyaf3e0QQZTWwIhAI7B0xHDziNca9HszTfcFQVPIjQij%2FHJnXR7fif41xT4Kv8CCD8QABoMOTA1NDE4NDQ1MDM5IgwPchRDL8kU%2BRYMSqkq3AIuvUjo%2BUcE%2F63ymieO2LUScHyIVhKe35WcHup52jeq70%2BccMYLuUUPiERE0XpQMWZyujLJYnuzGj0NN4DWNVyyAaUpxBC2lpKFpMnAZNj1FqmuBhr1%2BqEHlcxM4iJjoZB7JMyDVpO7YdjvOnrKez1v0eMp6uv3c0AIOY%2BZDZo1cgS9XO9MlIIQqTsh2Kmd6qYbNCG3J%2BZHhzSQEqBNQVNeHSiVCNkc2QYTSReDvIxxgGd3ZlKjvEqGesF%2BU5fFi1k5XyxVJWl5ZPXenrZ4foPfnajRdw12IosO1wgoe54FmERWF%2FAB0PJGiFTX%2FZ%2B5D5FMa1IZ4wIKDyy23F5rI76%2FKsGZPnxK0rm%2BfNC8ESyzgTHG7j%2Bab6LAUdnrX5UBe9zWvYJpg48V8um0MOnfFGQUazljpS5ii5j6%2BBFbOJlXH3X%2F4D5%2BiMFZYbpsvas0L9XqDDFvYsHBMn41qtwwkZaivAY6sgJqdez1yzYv7liJWOciN0dyHeXcL4LZ3KuN1Xl4OYHiiEX%2BbD0y9qxdt6ht6kx1IRtkXMeKHQTXOjpvpN7m6fYqC5LH0JyzMq1bRyO5NHm4QxrzR8ytWfy3weibQ9X3XpKwbf8GF1Ms9zgv0FrZ3XUuQXToD947w%2BDUgTZJBbI4IXta4cAMpu4PMP1pYhFzhXmTc0RWIFF%2FsIMqmDy77KIDcG0QvktOoq9swqNycH%2FJ8rdwIjXbzrAxNB6Kxb9lkailVRCsZZiCCdLNUFR9HZmIg26ew5IOUSU5p0gHDaqy8L1n8nAVC%2B2WEMY%2FKQUAD2oFdR00Owy0BFIAoFACH16TFLyBn4UYMQHKjH%2FtvBBL%2Fi1wSFabuSnVCGh2W4ZPl7jF%2FK%2BUFE7qd2y6ukg54tIqR6o%3D&X-Amz-Signature=303ae34c522498249fdfa25eb12433037f81aa54cb0bde892106ea40212953af&X-Amz-SignedHeaders=host&response-content-disposition=inline', '_blank');
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