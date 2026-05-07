// ✅ FIX: Accept cartCount prop from App.jsx
// ✅ FIX: Added cart icon with a count badge in the navbar
// ✅ FIX: Removed invalid "padding 200" class from Get Started button

function Navbar({ cartCount }) {
  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-purple-600">Login</button>

          {/* ✅ FIX: Cart icon with live count badge */}
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-gray-600 hover:text-purple-600 transition"
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
            {/* Badge — only visible when cart has items */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* ✅ FIX: Removed invalid "padding 200" class */}
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full font-medium">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
