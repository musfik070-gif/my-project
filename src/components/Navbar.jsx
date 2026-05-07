import { useState } from "react";

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 sm:py-4 flex items-center justify-between gap-3">
          <h1 className="text-xl sm:text-2xl font-bold text-purple-600 shrink-0">
            DigiTools
          </h1>

          <ul className="hidden lg:flex items-center gap-7 xl:gap-8 text-gray-600 font-medium">
            {navItems.map((item) => (
              <li key={item} className="hover:text-purple-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:inline-flex text-gray-600 hover:text-purple-600 font-medium">
              Login
            </button>

            <div className="relative cursor-pointer p-2 -mr-1 sm:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 hover:text-purple-600 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13M10 21a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] sm:text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center leading-none">
                  {cartCount}
                </span>
              )}
            </div>

            <button className="hidden sm:inline-flex bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 lg:px-5 py-2 rounded-full font-medium whitespace-nowrap">
              Get Started
            </button>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-700 hover:text-purple-600 hover:border-purple-200 transition"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} lg:hidden border-t border-gray-100 py-4`}>
          <ul className="flex flex-col gap-1 text-gray-600 font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                className="px-2 py-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-3 pt-4 sm:hidden">
            <button className="border border-gray-200 text-gray-700 px-4 py-2.5 rounded-full font-medium">
              Login
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2.5 rounded-full font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
