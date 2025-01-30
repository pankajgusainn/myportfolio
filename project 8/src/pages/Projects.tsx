import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "Modern portfolio website built with React and hosted on AWS",
    github: "https://github.com/pankajgusainn",
    demo: "https://pankajgusain.com"
  },
  {
    id: 2,
    title: "AI Integrated Chatbot",
    description: "Intelligent chatbot powered by Gemini AI for natural conversations and advanced query handling",
    github: "https://github.com/pankajgusainn",
    demo: "https://braineryy.netlify.app/"
  },
  {
    id: 3,
    title: "Attendance Management System",
    description: "Real-time attendance tracking and management system",
    github: "https://github.com/pankajgusainn",
    demo: "https://attendancee.netlify.app/"
  },
  {
    id: 4,
    title: "Bus Ticketing & Payment System",
    description: "Comprehensive bus ticketing platform with secure payment integration and real-time seat availability",
    github: "https://github.com/pankajgusainn",
    demo: "https://main.d3fmgktlr6m799.amplifyapp.com/"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">My Projects</span>
        </h1>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="card-3d p-6">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold text-white flex-grow">{project.title}</h2>
                <span className="text-3xl font-bold gradient-text bg-white/5 px-4 py-2 rounded-lg">
                  #{project.id}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d !px-4 !py-2 text-sm"
                >
                  <Github className="w-4 h-4 inline-block mr-2" />
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-brutalism bg-white/10 px-4 py-2 rounded-lg text-sm flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}