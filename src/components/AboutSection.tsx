import React from 'react';
import { Users, Heart, Eye, Zap, Shield, Flag } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: 'People Over Profit',
      description: 'We reject oligarchic control and demand a system that serves all.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Collective Power',
      description: 'We believe real change comes from community solidarity and shared action.'
    },
    {
      icon: <Eye className="h-8 w-8 text-red-600" />,
      title: 'Radical Transparency',
      description: 'Our decisions and processes are open to all. No secrets, no backroom deals.'
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: 'Creative Resistance',
      description: 'Art, protest, and disruption are tools for awakening and transformation.'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: 'Mutual Respect',
      description: 'We uplift each other with dignity, even in disagreement.'
    },
    {
      icon: <Flag className="h-8 w-8 text-red-600" />,
      title: 'Direct Action',
      description: 'We don\'t wait for permission—we organize, act, and rise.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Origin</h2>
          <div className="mt-2 h-1 w-20 bg-red-600 mx-auto"></div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Born from the frustration of broken promises and a rigged system, We Rise emerged as a collective voice 
            for those demanding real change. We are not just another organization—we are a movement of people 
            determined to reclaim our democracy from those who have corrupted it.
          </p>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-800 p-8 rounded-sm border-l-4 border-red-600 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="ml-3 text-xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 relative">
          <div className="w-full h-96 bg-cover bg-center rounded-sm overflow-hidden relative" 
               style={{ backgroundImage: `url('https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <blockquote className="max-w-3xl text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white italic mb-6 leading-relaxed">
                  "We are the many, not the few. We are not waiting—we are rising."
                </p>
                <div className="mt-8">
                  <p className="text-lg text-gray-200">
                    We Rise is not a brand or a single voice. We are a collective force—fluid, fierce, and fueled by those who refuse to be silent. 
                    Our strength is in our diversity, and our power lies in what we build together.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;