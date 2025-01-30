import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">Get in Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="card-3d p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              <a 
                href="mailto:pankajgusain990@gmail.com"
                className="block w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg text-gray-300 hover:text-cyan-400">pankajgusain990@gmail.com</span>
                </div>
              </a>
              
              <a 
                href="tel:+919911996627"
                className="block w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg text-gray-300 hover:text-cyan-400">+91 9911996627</span>
                </div>
              </a>
              
              <a 
                href="https://in.linkedin.com/in/pankaj-gusain-916879262"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg text-gray-300 hover:text-cyan-400">LinkedIn Profile</span>
                </div>
              </a>
              
              <a 
                href="https://github.com/pankajgusainn"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg text-gray-300 hover:text-cyan-400">GitHub Profile</span>
                </div>
              </a>
              
              <div className="w-full p-4 rounded-lg bg-white/5">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <span className="text-lg text-gray-300">Delhi, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}