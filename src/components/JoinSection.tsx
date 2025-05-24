import React, { useState } from 'react';

const JoinSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Email submitted:', email);
    console.log('Solidarity checked:', checked);
    setSubmitted(true);
    setEmail('');
    setChecked(false);
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="join" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Ready to Rise?</h2>
          <div className="mt-2 h-1 w-20 bg-red-600 mx-auto"></div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-sm shadow-lg overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
          <div className="bg-red-600 p-6">
            <h3 className="text-2xl font-bold text-white text-center">Join the We Rise Mailing List</h3>
          </div>
          
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-xl font-semibold text-gray-800">Thank you for joining!</p>
                <p className="mt-2 text-gray-600">We'll keep you updated on actions and news.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-red-500 focus:border-red-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="solidarity"
                      name="solidarity"
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="solidarity" className="font-medium text-gray-700">
                      I stand in solidarity with the values and mission of We Rise
                    </label>
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 py-3 px-4 border border-transparent rounded-sm shadow-sm text-white font-bold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Join</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-200"
            >
              Download Toolkit
            </a>
            <a 
              href="https://discord.gg/ZkAZQFBj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-gray-800 hover:bg-gray-900 transition-colors duration-200"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;