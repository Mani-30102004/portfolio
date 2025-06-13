import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Rural Healthcare",
    description: "Me and our Team,developed a project for rural healthcare where a user can easily log in and out, create their account, and communicate with an AI assistant about their problems. The AI assistant provides responses with remedies, prescribes tablets, and includes several other features such as stress detection, skin disease detection, diabetes management, and a BPM calculator .",
    image: "/images/Healthcare.png",
    technologies: ["ReactJs", "MY SQL", "Python 3 for bacckend"],
    contribution: "I assisted the team with database connectivity, contributed to various aspects of frontend development, and also supported some backend tasks"
  },
  {
    id: 2,
    title: "Crate Wickets",
    description: "Developed a web application where an user can book a slot for box cricket and He/She can play the cricket in the selected slot.",
    image: "/images/box cricket.webp",
    technologies: ["HTML", "CSS", "JAVA SCRIPT", "MY SQL","Python"],
    contribution: "I contributed to both the frontend and backend development, including slot booking functionality and database connectivity.."
  },
  {
    id: 3,
    title: "Calender Managment System",
    description: "Developed a C program “Uses to store and manage events,and reminder for specific dates.",
    image: "/images/calender managment.png",
    technologies: ["DataStructures in c"],
    contribution: "I played a key role in developing the entire codebase for the project"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold section-title inline-block">
            Featured Projects
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are some of my key engineering projects that showcase my skills and expertise in different areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="tech-tag text-xs text-white px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">My Contribution:</h4>
                  <p className="text-gray-600 text-sm">{project.contribution}</p>
                </div>
                
                <div className="flex justify-between mt-6">
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                    <ExternalLink size={16} className="mr-1" />
                    <span>View Project</span>
                  </a>
                  <a href="#" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                    <Github size={16} className="mr-1" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
