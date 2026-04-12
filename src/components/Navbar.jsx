function Navbar() {
  return (
    <div className="w-full bg-white shadow-sm">
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

          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-full font-medium padding 200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
