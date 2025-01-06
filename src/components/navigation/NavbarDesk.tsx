import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DeskNavBarLinks: React.FC = () => {
  return (
    <div className="flex gap-10">
      <Link to="/home" className="text-zinc-700 hover:text-zinc-900 transition">
        Home
      </Link>
      <Link to="/about" className="text-zinc-700 hover:text-zinc-900 transition">
        About
      </Link>
      <Link to="/services" className="text-zinc-700 hover:text-zinc-900 transition">
        Services
      </Link>
      <Link to="/works" className="text-zinc-700 hover:text-zinc-900 transition">
        Works
      </Link>
      <Link to="/pricing" className="text-zinc-700 hover:text-zinc-900 transition">
        Pricing
      </Link>
      <Link to="/faq" className="text-zinc-700 hover:text-zinc-900 transition">
        FAQ
      </Link>
      <Link to="/blog" className="text-zinc-700 hover:text-zinc-900 transition">
        Blog
      </Link>
      <Link to="/contact" className="text-zinc-700 hover:text-zinc-900 transition">
        Contact
      </Link>
    </div>
  );
};

const NavBarDesk: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 rounded-full h-18 max-w-screen-xl w-full p-4 flex items-center z-50 bg-zinc-200 bg-opacity-80 shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Navbar content container */}
      <div className="flex w-full justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="">
            <img src="" alt="logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Centered Links */}
        <div className="flex font-semibold">
          <DeskNavBarLinks />
        </div>
      </div>
    </section> 
  );
};

export default NavBarDesk;