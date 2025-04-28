import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">DocBook</h3>
            <p className="text-gray-300 mb-4">
              Making healthcare accessible to everyone with our easy-to-use appointment booking platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-teal-400 transition">Find Doctors</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-teal-400 transition">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-teal-400 transition">Sign Up</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Online Booking</li>
              <li className="text-gray-300">Doctor Consultation</li>
              <li className="text-gray-300">Health Check-ups</li>
              <li className="text-gray-300">Emergency Services</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-teal-400" />
                <span className="text-gray-300">123 Medical Center Dr, Health City, HC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-teal-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-teal-400" />
                <span className="text-gray-300">info@docbook.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DocBook. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;