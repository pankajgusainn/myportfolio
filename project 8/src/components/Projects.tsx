import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Cloud-Native Microservices Platform",
    description: "Designed and implemented a scalable microservices architecture using Kubernetes, Istio, and AWS EKS",
    tags: ["Kubernetes", "AWS", "Istio", "Terraform", "ArgoCD"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/pankajgusainn",
    demo: "https://attendancee.netlify.app/"
  },
  {
    title: "Monitoring & Observability Stack",
    description: "Implemented a full observability solution using Prometheus, Grafana, and ELK stack with custom dashboards",
    tags: ["Prometheus", "Grafana", "ELK", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/pankajgusainn",
    demo: "https://attendancee.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">
            Featured Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card-3d overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-cyan-300 px-3 py-1 rounded-full text-sm shadow-inner-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d !px-4 !py-2 text-sm"
                  >
                    <Github className="w-4 h-4 inline-block mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-brutalism bg-white/10 px-4 py-2 rounded-lg text-sm flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}