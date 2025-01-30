import { Terminal, Server, Cloud, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ParticleBackground from './ParticleBackground';

const projects = [
  {
    id: 1,
    title: "AI Integrated Chatbot",
    titleJp: "AI搭載チャットボット",
    demo: "https://braineryy.netlify.app/"
  },
  {
    id: 2,
    title: "Attendance Management System",
    titleJp: "出席管理システム",
    demo: "https://attendancee.netlify.app/"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    titleJp: "個人ポートフォリオ",
    demo: "https://pankajgusain.com"
  },
  {
    id: 4,
    title: "Bus Ticketing & Payment System",
    titleJp: "バス予約・決済システム",
    demo: "https://main.d3fmgktlr6m799.amplifyapp.com/"
  }
];

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 z-0 opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/328029837/matrix-23532.mp4?width=1280&hash=4e8b6cd06d69ba9c88d174c6c337e8472bed6982"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 z-10 opacity-40 hidden lg:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-l-3xl"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/414788567/code-35493.mp4?width=1280&hash=4220c92ea3f781bb4b785b8c883401dc11ecf06c"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            {[Terminal, Server, Cloud].map((Icon, index) => (
              <div 
                key={index} 
                className="card-3d p-4 bg-white/5 animate-float backdrop-blur-lg"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: '3s'
                }}
              >
                <Icon className="w-12 h-12 icon-gradient" style={{ animationDelay: `${index * 0.5}s` }} />
              </div>
            ))}
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 relative">
            <span className="gradient-text animate-gradient">
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl backdrop-blur-sm">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a href="#contact" className="btn-3d">
              {t('hero.cta.contact')}
            </a>
            <div className="relative group">
              <Link to="/projects" className="neo-brutalism bg-white/10 px-8 py-3 rounded-lg backdrop-blur-lg inline-block">
                {t('hero.cta.projects')}
              </Link>
              <div className="absolute left-0 top-full mt-2 w-72 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-white/10">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-white/10 last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-mono">#{project.id}</span>
                      <span className="text-gray-200">
                        {language === 'jp' ? project.titleJp : project.title}
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}