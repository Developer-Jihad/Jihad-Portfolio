import Link from "next/link";
import Image from "next/image";
import code from "@/public/icons/code.png";
import view from "@/public/icons/view.png";
import projects from "@/projects.json";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <div className="container mx-auto max-w-7xl px-3 py-12">
      
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-white/70 text-sm">Available for new opportunities</span>
          </div>
          <h1 className="text-gray-400 text-5xl md:text-7xl font-bold mb-6">
          My
            <span className="bg-gradient-to-r from-purple-500 via-red-400 to-pink-400 text-transparent bg-clip-text"> Projects</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
          A collection of projects that showcase my passion for creating beautiful and functional web experiences
          </p>
        </div>

      {/* Featured Project */}
      {featuredProject && (
        <div className="mb-12">
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-400 font-medium">Featured Project</span>
              </div>
              <hr className="flex-1 border-t border-white/30" />
            </div>
          </div>

          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-red-600/20 rounded-[20px] blur opacity-0 group-hover:opacity-100 transition duration-1000" />
            
            <div className="relative bg-[#0A0A0A] rounded-[20px] overflow-hidden border border-white/5">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={featuredProject.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-10">
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                  {featuredProject.name}
                </h3>
                
                <p className="text-gray-400 mb-5 leading-relaxed">
                  {featuredProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technology.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-1.5 text-sm font-medium text-white/80 bg-white/5 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-12 py-2.5 sm:px-8 sm:py-3.5 
                      bg-gradient-to-r from-violet-500 to-indigo-500
                      text-white rounded-full font-medium relative overflow-hidden
                      shadow-[0_2px_20px_-5px_rgba(99,102,241,0.3)]
                      hover:shadow-[0_5px_30px_-10px_rgba(99,102,241,0.4)]
                      hover:from-violet-600 hover:to-indigo-600
                      transition-all duration-300"
                  >
                    <div className="relative flex items-center gap-2">
                      <Image 
                        src={view} 
                        alt="View Live" 
                        width={20} 
                        height={20} 
                        className="brightness-0 invert" 
                      />
                      <span className="text-[15px] tracking-wide">View Project</span>
                      <svg 
                        className="w-5 h-5 ml-0.5 group-hover/btn:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6" 
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href={featuredProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-12 py-2.5 sm:px-8 sm:py-3.5
                      bg-[#111111] text-gray-300 rounded-full font-medium
                      relative overflow-hidden border border-gray-800
                      hover:text-white hover:border-indigo-500/30 hover:bg-[#161616]
                      transition-all duration-300"
                  >
                    <div className="relative flex items-center gap-2">
                      <Image 
                        src={code} 
                        alt="View Code" 
                        width={20} 
                        height={20} 
                        className="opacity-80" 
                      />
                      <span className="text-[15px] tracking-wide">Source Code</span>
                      <svg 
                        className="w-5 h-5 ml-0.5 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      <div>
      <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-purple-400 font-medium">All Projects</span>
              </div>
              <hr className="flex-1 border-t border-white/30" />
            </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {regularProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
