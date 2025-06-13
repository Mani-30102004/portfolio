import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: "Python Essentials 1",
    organization: "Cisco Networking Academy",
    date: "May 2025",
    description: "Professional certification covering fundamental programming concepts using Python.",
    badge: "/images/cisconetworkingacademy.png",
    certificateLink: "/certificates/pythonessentials1.pdf"
  },
  {
    id: 2,
    name: "Introduction to MongoDB",
    organization: "MongoDb",
    date: "MARCH 2024",
    description: "Professional certification introducing core MongoDB concepts, including data modeling, CRUD operations, and aggregation.",
    badge: "/images/mongodb.avif",
    certificateLink: "/certificates/mongdb.pdf"
  },
  {
    id: 3,
    name: "Java Programming",
    organization: "Infosys SpringBoard",
    date: "April 2024",
    description: "Comprehensive Course Covering Java Programming, Object-Oriented Concepts, and Application Development",
    badge: "/images/infosysisspringboard.png",
    certificateLink: "/certificates/javainfo.pdf"
  },
  {
    id: 4,
    name: "Java Programming",
    organization: "Great Learning",
    date: "April 2024",
    description: "Course Covering Java Programming, Object-Oriented Concepts, and Application Development",
    badge: "/images/greatlearning.jpg",
    certificateLink: "/certificates/javagreat.pdf"
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold section-title inline-block">
            Certifications & Achievements
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my skills and knowledge in various engineering domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card bg-white p-6 rounded-lg shadow-md flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-300">
                  <img 
                    src={cert.badge} 
                    alt={cert.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{cert.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Award size={16} className="mr-1 text-indigo-600" />
                  <span>{cert.organization}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <Calendar size={16} className="mr-1 text-indigo-600" />
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                <a 
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <ExternalLink size={14} className="mr-1" />
                  <span>View Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Additional Skills & Competencies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-indigo-100 rounded-lg bg-indigo-50">
              <h4 className="font-semibold text-indigo-800 mb-2">Technical Skills</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Operating Systems</li>
                <li>• Computer Networking</li>
                <li>• Linux</li>
                <li>• AutoCAD</li>
                <li>• Database</li>                
              </ul>
            </div>
            
            <div className="p-4 border border-purple-100 rounded-lg bg-purple-50">
              <h4 className="font-semibold text-purple-800 mb-2">Programming</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• C Language</li>
                <li>• Java Programming</li>
                <li>• Python Programming</li>
                <li>• Data Structures and Algorithms</li>
                <li>• HTML, CSS, JavaScript</li>
                <li>• React</li>
                <li>• SQL</li> 
                <li><b>• 250+ Problems in Leetcode</b></li> 
                <li><b>• 5star in Hackerrank in python,C and Sql</b></li> 
              </ul>
            </div>
            
            <div className="p-4 border border-indigo-100 rounded-lg bg-indigo-50">
              <h4 className="font-semibold text-indigo-800 mb-2">Soft Skills</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Quantitative Aptitude</li>
                <li>• Mathematical Reasoning</li>
                <li>• Technical Documentation</li>
                <li>• Team Leadership</li>
                <li>• Public Speaking & Presentations</li>
                <li>• Adaptability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CertificationsSection;
