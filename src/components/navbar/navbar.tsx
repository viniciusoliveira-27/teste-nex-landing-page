// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '#' },
  { label: 'ABOUT US', href: '#' },
  { label: 'PORTFOLIO', href: '#' },
  { label: 'PAGES', href: '#' },
  { label: 'BLOG', href: '#' },
  { label: 'CONTACT', href: '#' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className={`flex items-center `}>
            <img
              src="/images/logo.svg"
              alt="NEX Digital Solutions"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-lime-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-medium hover:bg-lime-500 transition-colors duration-200">
              Get A Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-700 hover:text-lime-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-medium w-fit">
                Get A Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;