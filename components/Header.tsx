"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

const links:any[] = [
  { id: 1, href: "#about", label: "about" },
  { id: 2, href: "#pricing", label: "pricing" },
  { id: 3, href: "#contact", label: "contact" },
  { id: 4, href: "#buy", label: "buy NFTs" },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="z-50 w-full bg-primary pb-12 backdrop-blur-ssm sm:pb-16 md:pb-20 lg:pb-24">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">KRYPTO</h1>

          <nav className="hidden md:block">
            <ul className="font-outfit flex items-center gap-8 md:tracking-wide lg:gap-20">
              {links.map(({ id, href, label }) => (
                <li key={id}>
                  <a className="hover:text-purple-300" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="flex flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 rounded-full bg-white"></span>
            <span className="block h-0.5 w-6 rounded-full bg-white"></span>
            <span className="block h-0.5 w-6 rounded-full bg-white"></span>
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
