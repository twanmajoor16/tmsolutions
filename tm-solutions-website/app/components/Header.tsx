'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Over ons', href: '#about' },
    { name: 'Diensten', href: '#services' },
    { name: 'Proces', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt="TM Solutions Logo" 
            width={150} 
            height={40} 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><Link href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#about" className="text-gray-600 hover:text-primary transition-colors">Over ons</Link></li>
            <li><Link href="#services" className="text-gray-600 hover:text-primary transition-colors">Diensten</Link></li>
            <li><Link href="#process" className="text-gray-600 hover:text-primary transition-colors">Werkwijze</Link></li>
            <li><Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
          <Link 
            href="#contact" 
            className="btn btn-primary"
          >
            Neem contact op
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <ul className="flex space-x-8">
              <li><Link href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-600 hover:text-primary transition-colors">Over ons</Link></li>
              <li><Link href="#services" className="text-gray-600 hover:text-primary transition-colors">Diensten</Link></li>
              <li><Link href="#process" className="text-gray-600 hover:text-primary transition-colors">Werkwijze</Link></li>
              <li><Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
            <Link 
              href="#contact" 
              className="btn btn-primary inline-block text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Neem contact op
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 