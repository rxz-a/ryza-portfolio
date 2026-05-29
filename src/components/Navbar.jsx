import React from 'react';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';

export default function Navbar({ activeSection, scrollToSection, darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Works' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'glass-navbar text-light-text' : 'glass-navbar-light text-dark-rich shadow-md'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Portfolio Name */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-2xl tracking-tight leading-none">
                RYZA
              </span>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative pb-1 text-sm font-semibold tracking-wide transition-all duration-300
          after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
          after:transition-transform after:duration-300 after:origin-left
          ${isActive
                      ? 'text-[#C8A94D] after:bg-[#C8A94D] after:scale-x-100'
                      : darkMode
                        ? 'text-light-muted hover:text-light-text after:bg-[#C8A94D] after:scale-x-0 hover:after:scale-x-100'
                        : 'text-gray-600 hover:text-dark-rich after:bg-[#C8A94D] after:scale-x-0 hover:after:scale-x-100'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="h-6 w-[1px] bg-gold/20 mx-2"></div>

            {/* Dark Mode / Light Mode */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-full border transition-all duration-300 ${darkMode
                ? 'bg-dark-card border-dark-border text-gold hover:text-white hover:border-gold/50'
                : 'bg-white border-gray-200 text-gray-700 hover:text-gold hover:border-gold/50 shadow-sm'
                }`}
              aria-label="Toggle theme mode"
            >
              {darkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme toggle for mobile */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full border transition-colors ${darkMode
                ? 'bg-dark-card border-dark-border text-gold'
                : 'bg-white border-gray-200 text-gray-700 shadow-sm'
                }`}
              aria-label="Toggle theme mode"
            >
              {darkMode ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border transition-colors ${darkMode
                ? 'bg-dark-card border-dark-border text-light-text'
                : 'bg-white border-gray-200 text-dark-rich shadow-sm'
                }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden w-full ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'
          }`}>
          <div className="flex flex-col px-6 py-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left text-base font-semibold py-4 border-b transition-all duration-300 ${isActive
                      ? 'text-gold border-gold'
                      : darkMode
                        ? 'text-light-muted border-white/10 hover:text-white'
                        : 'text-gray-500 border-gray-100 hover:text-dark-rich'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}