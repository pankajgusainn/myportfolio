import { Github, Linkedin, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    window.open('https://brainery.s3.us-west-2.amazonaws.com/pankaj%27s%20cv.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5FTZFCDXZ5SNDRLW%2F20250116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250116T052237Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCICDfx0Ky39fMpkCAN%2FZNAx6kSLhme%2BvADWXuevMrkaP%2BAiEA3TPHxapGHVjBhB0TyRw2rLwfKKl%2FU8BnQO31NgqHyiwq%2FwIIPhAAGgw5MDU0MTg0NDUwMzkiDIiq1NnkY8gzKdzJrircAs21%2BpGUJlPeVjvrv9Y9ZiTaTO1yWP7hqekPCCbl5MRk1ZUJ8z%2BlEnh7y%2Bi0fUdXyTxa8UyEF3mtt2EeyBoX%2BL5mVJjHh3dkH1o32rSrbKNRrxi7iabHIjomI3m3lZLdTjX0qRzRlMSZHL%2F2SuO2pNGxlm6q51PhjCx%2B9x%2Bv%2BxZA2i7ybJt9Pawjg0dG6cMR%2Fg5H3QZ4zucN4HWbqaoEb9gi7CfykOHISLdQPervySLc6IGAf6l394FBaFb16boTI3h6KqvO4Dg2Fmsuyz2NnKxHNoL3Q5G7d%2BHAgm7Qjs04z42Byv9O9Oe4PSt2vnAuKe3jUJn6y6c4L%2Bts2XB9elgqM8xkLLsJiUZtddGbZWnZEgYBop9mAkU07WK74465lgMN5N%2F28%2BwK0ezjJmlIMG5Yv%2FltskQaVWn9R%2BTNVPMemVrblFsXZF9tmCaHnhG3LvsWiD5u6rNmMe9SujCRlqK8BjqzAiwzQHlfHDB6dOfU5n6MxcCtF4i%2BYF6jVJY2TBgL5M%2F2WdpV%2B%2FYwhPjUi6MtG4XakjBEoYlzQGrCgWCi8fP9uu9Hhgl6Jjg6Ti4xo2V%2F9mnzenDWEoiN4nnGvG5hmeW%2BsT9L%2BdhjkeCD1ff2eluG9zgz7UhZN6IF9flcryyA6TbV7G2rRV7qzwbbTRFsVpQGyzSkgTWlKR4WKjfw1lWEzzH%2BpDJigiZkdRmYwYhbVQGdoFp3pINUF9y4%2BP%2FHyPZplcXQRHrmNaeEgkkl1u%2FlLreDIQvD3F0%2Fg7MJrCG%2B59Azn0ZFTSOUrh7aQaFmM4Ykd8DgOZdpBiFJFCJi4c%2F4jBGQMzSV%2FMJWXfbTBdre925UEeW8jmo42%2Bq%2BinqqDbbgKpdmcDycoZA2LJcdsw3ObTF9m%2Fg%3D&X-Amz-Signature=26463801268d0635bf75d156f0a950c826087c6516c5ca3437c870d53c5e7cad&X-Amz-SignedHeaders=host&response-content-disposition=inline', '_blank');
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