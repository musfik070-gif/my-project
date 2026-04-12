export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">DigiTools</h2>
          <p className="text-gray-400 text-sm">
            Premium digital tools for creators and professionals.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Docs</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
}
