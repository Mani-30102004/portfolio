import React, { useRef } from 'react';
import { Mail, Linkedin, Github, Phone, Award, Briefcase, User, ChevronDown, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  // Refs for scrolling
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Navbar 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToCertifications={() => scrollToSection(certificationsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      
      <div ref={homeRef}>
        <ProfileSection />
      </div>
      
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      
      <div ref={certificationsRef}>
        <CertificationsSection />
      </div>
      
      <div ref={contactRef}>
        <ContactSection />
      </div>
      
      <footer className="bg-indigo-900 text-white text-center py-6">
        <p>© PABBA MANI GUPTHA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;