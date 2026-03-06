import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/awsi2it_logo (1).jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-panel sticky top-0 z-50 border-b-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Left: Logo */}
          <div className="flex items-center w-1/4">
            <NavLink to="/" className="flex-shrink-0 flex items-center group gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#FF9900]/30 shadow-[0_0_10px_rgba(255,153,0,0.3)] transition-transform duration-300 group-hover:scale-110">
                <img src={logo} alt="AWS I2IT Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-white tracking-wider flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
                <span className="text-[#FF9900] drop-shadow-[0_0_8px_rgba(255,153,0,0.5)]">AWS</span> Cloud Club I2IT
              </span>
            </NavLink>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden md:flex justify-center w-2/4">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-1 py-2 text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? 'text-[#FF9900] drop-shadow-[0_0_8px_rgba(255,153,0,0.6)]'
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {/* Animated Underline */}
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#FF9900] rounded-full transition-all duration-300 ${
                          isActive ? 'scale-x-100 opacity-100 shadow-[0_0_8px_rgba(255,153,0,0.8)]' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50'
                        } origin-left`}
                      ></span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right: Empty space for balance or future CTA */}
          <div className="hidden md:flex justify-end w-1/4">
             {/* E.g., a "Join Us" button could go here later */}
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown with glassmorphism */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
        <div className="px-4 pt-2 pb-4 space-y-2 bg-[#0f1b29]/95 backdrop-blur-xl border-b border-gray-800 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#FF9900] bg-white/5 shadow-[inset_0_0_10px_rgba(255,153,0,0.1)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
