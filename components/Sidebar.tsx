import { useEffect } from "react";

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        className={`fixed top-4 right-4 z-50 w-60 transform rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black text-white shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col p-5">
          <div className="mb-6 flex items-center justify-between">
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
                    className="flex items-center text-gray-300 capitalize transition-colors duration-200 hover:text-purple-300"
                    onClick={toggleSidebar}
                  >
                    <span className="mr-2 text-purple-400">•</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 border-t border-gray-700 pt-4">
            <button className="w-full rounded-lg bg-purple-600 py-2 text-white transition-colors duration-200 hover:bg-purple-700">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
