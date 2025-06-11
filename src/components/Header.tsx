import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isWaitlistPage = location.pathname === '/join-waitlist';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" onClick={scrollToTop} className={`text-2xl md:text-3xl font-extrabold transition-all duration-300 transform hover:scale-105 ${isScrolled ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text' : 'text-white'}`}>
            Personabl
          </Link>
          {!isWaitlistPage && <Link to="/join-waitlist" className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 ${isScrolled ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25' : 'bg-white/20 text-white hover:bg-white/30 hover:shadow-lg hover:shadow-white/20'}`}>
              Join Waitlist
            </Link>}
        </div>
      </div>
    </header>;
}