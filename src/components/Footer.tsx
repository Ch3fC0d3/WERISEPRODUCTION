import React from 'react';
import { Instagram, Github, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center">
              <Logo showText={true} />
            </div>
            <p className="mt-4 text-gray-400">
              Dismantling oligarchic power and returning control of government to the people.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Navigation</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#actions" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Actions
                  </a>
                </li>
                <li>
                  <a href="#media" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Media
                  </a>
                </li>
                <li>
                  <a href="mailto:admin@werise.live" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/ZkAZQFBj" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Join Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Organizing Toolkit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Action Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Legal Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Security Guides
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            All communications are encrypted and protected. We do not store unnecessary user data.
          </p>
          <p className="mt-4 text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} We Rise Movement. All rights reserved. In solidarity with all who fight for justice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;