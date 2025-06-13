import React from 'react';
import { ChevronDown } from 'lucide-react';

const ProfileSection = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="relative">
              <img 
                src="/images/profile.jpg"  
                alt="Pabba Mani guptha" 
                className="profile-image w-64 h-64 md:w-80 md:h-80 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg">
                Engineering Student<br></br>
                CGPA:-8.97(3-1)
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Pabba Mani Guptha
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              Computer Science and Engineering | Anurag University 
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            I am MANI GUPTHA from Hanamkonda, Warangal, and currently a third-year B.Tech student at Anurag University. Alongside, I am pursuing a dual degree in B.Sc. Mathematics
due to my passion for the subject. From a young age, I have been captivated by mathematics, leading me to explore related subjects deeply. My enthusiasm for math extends
beyond the classroom, and I genuinely enjoy solving complex problems in my free time.At Anurag University, I am known for my analytical skills and dedication. My peers and
professors often seek my insight on challenging concepts.My journey highlights my passion and perseverance. With a strong foundation in both engineering and mathematics,
I am poised to make significant contributions in my field and continue inspiring those around me    </p>
            <div className="flex space-x-4">
            <button
              onClick={() => window.open('/images/resume.pdf', '_blank')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              View Resume
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;