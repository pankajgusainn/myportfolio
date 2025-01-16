import { Cloud, GitBranch, Database, Shield, Languages, FileDown, Download, ExternalLink } from 'lucide-react';

const technicalSkills = [
  {
    category: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "EC2", "S3", "ELB", "ASG", "Kubernetes", "Docker"]
  },
  {
    category: "CI/CD",
    icon: GitBranch,
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"]
  },
  {
    category: "Monitoring",
    icon: Database,
    items: ["Prometheus", "Grafana", "ELK Stack", "DataDog"]
  },
  {
    category: "Security",
    icon: Shield,
    items: ["AWS IAM"]
  }
];

const languageSkills = [
  {
    language: "Japanese (N3)",
    level: "Daily Conversation",
    proficiency: "60%"
  },
  {
    language: "English",
    level: "Business Level",
    proficiency: "70%"
  },
  {
    language: "Hindi",
    level: "Native",
    proficiency: "100%"
  }
];

export default function Skills() {
  const handleDownloadCV = () => {
    window.open('https://brainery.s3.us-west-2.amazonaws.com/pankaj%27s%20cv.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5FTZFCDXZ5SNDRLW%2F20250116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250116T052237Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCICDfx0Ky39fMpkCAN%2FZNAx6kSLhme%2BvADWXuevMrkaP%2BAiEA3TPHxapGHVjBhB0TyRw2rLwfKKl%2FU8BnQO31NgqHyiwq%2FwIIPhAAGgw5MDU0MTg0NDUwMzkiDIiq1NnkY8gzKdzJrircAs21%2BpGUJlPeVjvrv9Y9ZiTaTO1yWP7hqekPCCbl5MRk1ZUJ8z%2BlEnh7y%2Bi0fUdXyTxa8UyEF3mtt2EeyBoX%2BL5mVJjHh3dkH1o32rSrbKNRrxi7iabHIjomI3m3lZLdTjX0qRzRlMSZHL%2F2SuO2pNGxlm6q51PhjCx%2B9x%2Bv%2BxZA2i7ybJt9Pawjg0dG6cMR%2Fg5H3QZ4zucN4HWbqaoEb9gi7CfykOHISLdQPervySLc6IGAf6l394FBaFb16boTI3h6KqvO4Dg2Fmsuyz2NnKxHNoL3Q5G7d%2BHAgm7Qjs04z42Byv9O9Oe4PSt2vnAuKe3jUJn6y6c4L%2Bts2XB9elgqM8xkLLsJiUZtddGbZWnZEgYBop9mAkU07WK74465lgMN5N%2F28%2BwK0ezjJmlIMG5Yv%2FltskQaVWn9R%2BTNVPMemVrblFsXZF9tmCaHnhG3LvsWiD5u6rNmMe9SujCRlqK8BjqzAiwzQHlfHDB6dOfU5n6MxcCtF4i%2BYF6jVJY2TBgL5M%2F2WdpV%2B%2FYwhPjUi6MtG4XakjBEoYlzQGrCgWCi8fP9uu9Hhgl6Jjg6Ti4xo2V%2F9mnzenDWEoiN4nnGvG5hmeW%2BsT9L%2BdhjkeCD1ff2eluG9zgz7UhZN6IF9flcryyA6TbV7G2rRV7qzwbbTRFsVpQGyzSkgTWlKR4WKjfw1lWEzzH%2BpDJigiZkdRmYwYhbVQGdoFp3pINUF9y4%2BP%2FHyPZplcXQRHrmNaeEgkkl1u%2FlLreDIQvD3F0%2Fg7MJrCG%2B59Azn0ZFTSOUrh7aQaFmM4Ykd8DgOZdpBiFJFCJi4c%2F4jBGQMzSV%2FMJWXfbTBdre925UEeW8jmo42%2Bq%2BinqqDbbgKpdmcDycoZA2LJcdsw3ObTF9m%2Fg%3D&X-Amz-Signature=26463801268d0635bf75d156f0a950c826087c6516c5ca3437c870d53c5e7cad&X-Amz-SignedHeaders=host&response-content-disposition=inline', '_blank');
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical Skills */}
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {technicalSkills.map((skill) => (
            <div key={skill.category} className="card-3d p-6">
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="bg-white/10 text-cyan-300 px-3 py-1 rounded-full text-sm shadow-inner-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Language Skills */}
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="gradient-text">Language Skills</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="card-3d p-8">
            <div className="flex items-center gap-3 mb-6">
              <Languages className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Languages</h3>
            </div>
            <div className="space-y-6">
              {languageSkills.map((lang) => (
                <div key={lang.language} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white">{lang.language}</span>
                    <span className="text-sm text-cyan-400">{lang.level}</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                      style={{ width: lang.proficiency }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CV Download Section */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="card-3d p-8 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.04] to-transparent rounded-lg"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
                  <FileDown className="w-8 h-8 text-cyan-400 animate-bounce" />
                  <span className="gradient-text">Download My CV</span>
                </h3>
                <p className="text-gray-300 mb-8 text-center">Get a detailed overview of my experience and qualifications</p>
                
                <div className="flex justify-center">
                  <button
                    onClick={handleDownloadCV}
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg font-semibold py-4 px-8 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <Download className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
                    <span className="relative z-10">View Resume</span>
                    <ExternalLink className="w-5 h-5 relative z-10 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}