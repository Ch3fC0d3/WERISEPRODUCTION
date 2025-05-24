import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JoinSection from './components/JoinSection';
import NewsSection from './components/NewsSection';
import MediaSection from './components/MediaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "We Rise | Collective Action for Democracy";
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <JoinSection />
      <MediaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;