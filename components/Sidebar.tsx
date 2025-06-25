import { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  links: Array<{
    id: number;
    href: string;
    label: string;
  }>;
}

const Sidebar = ({ isOpen, toggleSidebar, links }: SidebarProps) => {
  // Close sidebar when clicking outside or when route changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        toggleSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, toggleSidebar]);

  return (
    <>
      {/* Overlay - with reduced opacity to keep content visible */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-ssm"
          onClick={toggleSidebar}
        />
      )}

      {/* Modern Sidebar */}
      <div
        className={`fixed top-4 right-4 rounded-2xl w-60 bg-gradient-to-b from-gray-900 to-black border border-gray-800 shadow-xl text-white z-50 transform transition-all duration-300 ease-in-out ${
          isOpen
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col p-5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-purple-300">Menu</h3>
            <button
              className="text-gray-400 hover:text-white"
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav>
            <ul className="flex flex-col">
              {links.map(({ id, href, label }) => (
                <li key={id} className="py-3">
                  <a
                    href={href}
                    className="flex items-center text-gray-300 hover:text-purple-300 transition-colors duration-200 capitalize"
                    onClick={toggleSidebar}
                  >
                    <span className="text-purple-400 mr-2">•</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors duration-200">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;