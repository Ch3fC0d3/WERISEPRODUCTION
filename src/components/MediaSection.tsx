import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface ArtSubmission {
  id: string;
  title: string;
  creator_name: string;
  artwork_url: string;
  description: string;
}

const MediaSection: React.FC = () => {
  const [submissions, setSubmissions] = useState<ArtSubmission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('art_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="media" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Art & Media</h2>
          <div className="mt-2 h-1 w-20 bg-red-600 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
            Creative resistance through art and media. Share your voice in the movement.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-gray-400">Loading submissions...</div>
        ) : submissions.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-400 mb-4">No artwork submissions yet.</p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors duration-200"
            >
              Submit Your Art
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {submissions.map((submission) => (
              <div 
                key={submission.id} 
                className="bg-gray-800 rounded-sm overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={submission.artwork_url}
                    alt={submission.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{submission.title}</h3>
                  <p className="text-gray-400 mb-2">By {submission.creator_name}</p>
                  {submission.description && (
                    <p className="text-gray-300 text-sm">{submission.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-red-600 text-white font-bold rounded-sm hover:bg-red-700 transform hover:-translate-y-1 transition-all duration-300"
          >
            Share Your Art
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;