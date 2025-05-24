import React, { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  category: 'Actions' | 'Opinion' | 'Reports';
  excerpt: string;
  image: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Nationwide Protests Planned for Next Month',
      category: 'Actions',
      excerpt: 'Join thousands across the country as we stand together against corporate influence in politics.',
      image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      title: 'The Hidden Costs of Privatized Democracy',
      category: 'Opinion',
      excerpt: 'An in-depth analysis of how corporate interests are undermining our democratic institutions.',
      image: 'https://images.pexels.com/photos/6964350/pexels-photo-6964350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      title: 'Community Organizing Workshop Recap',
      category: 'Reports',
      excerpt: 'Over 200 attendees learned essential organizing skills at our recent workshop series.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      title: 'City Council Accountability Project Launched',
      category: 'Actions',
      excerpt: 'New initiative tracks voting records and corporate ties of local representatives.',
      image: 'https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const [filter, setFilter] = useState<string | null>(null);

  const filteredNews = filter 
    ? newsItems.filter(item => item.category === filter) 
    : newsItems;

  return (
    <section id="actions" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">News & Dispatches</h2>
          <div className="mt-2 h-1 w-20 bg-red-600 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-sm shadow-sm">
            <button
              type="button"
              onClick={() => setFilter(null)}
              className={`px-4 py-2 text-sm font-medium ${!filter ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border border-gray-300 rounded-l-sm focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-white transition-colors duration-200`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter('Actions')}
              className={`px-4 py-2 text-sm font-medium ${filter === 'Actions' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border-t border-b border-r border-gray-300 focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-white transition-colors duration-200`}
            >
              Actions
            </button>
            <button
              type="button"
              onClick={() => setFilter('Opinion')}
              className={`px-4 py-2 text-sm font-medium ${filter === 'Opinion' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border-t border-b border-r border-gray-300 focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-white transition-colors duration-200`}
            >
              Opinion
            </button>
            <button
              type="button"
              onClick={() => setFilter('Reports')}
              className={`px-4 py-2 text-sm font-medium ${filter === 'Reports' ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'} border-t border-b border-r border-gray-300 rounded-r-sm focus:z-10 focus:ring-2 focus:ring-red-500 focus:text-white transition-colors duration-200`}
            >
              Reports
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredNews.map((item) => (
            <div key={item.id} className="bg-gray-900 rounded-sm overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="inline-block bg-red-600 px-3 py-1 text-xs font-semibold text-white rounded-sm">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <a href="#" className="inline-block text-red-500 hover:text-red-400 font-semibold transition-colors duration-200">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200">
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;