import { Cloud, Server, Database, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const techImages = [
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    title: "tech.cloud.title",
    description: "tech.cloud.description",
    icon: Cloud
  },
  {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
    title: "tech.devops.title",
    description: "tech.devops.description",
    icon: Server
  },
  {
    url: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1200",
    title: "tech.monitoring.title",
    description: "tech.monitoring.description",
    icon: Database
  },
  {
    url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1200",
    title: "tech.security.title",
    description: "tech.security.description",
    icon: Shield
  }
];

export default function TechVisuals() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">{t('tech.section.title')}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techImages.map((tech, index) => (
            <div 
              key={tech.title}
              className="group relative overflow-hidden rounded-xl card-3d"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={tech.url}
                  alt={t(tech.title)}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <tech.icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white">{t(tech.title)}</h3>
                  </div>
                  <p className="text-gray-300">{t(tech.description)}</p>
                  
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50" />
    </section>
  );
}