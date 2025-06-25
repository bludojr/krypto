'use client'

import { useState } from 'react';
import Sidebar from './Sidebar';

const links = [
  { id: 1, href: "#about", label: "about" },
  { id: 2, href: "#pricing", label: "pricing" },
  { id: 3, href: "#contact", label: "contact" },
  { id: 4, href: "#buy", label: "buy NFTs" },
]

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="backdrop-blur-ssm bg-primary   z-50 w-full pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">KRYPTO</h1>
          
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 lg:gap-20 font-outfit md:tracking-wide">
              {links.map(({ id, href, label }) => (
                <li key={id}>
                  <a className="hover:text-purple-300" href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            className="md:hidden flex flex-col justify-center items-center gap-1.5"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <span className=" block w-6 h-0.5 bg-white rounded-full"></span>
            <span className=" block w-6 h-0.5 bg-white rounded-full"></span>
            <span className=" block w-6 h-0.5 bg-white rounded-full"></span>
          </button>
        </div>
      </header>
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        links={links} 
      />
    </>
  );
};

export default Header;