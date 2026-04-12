export default function Steps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Get Started In 3 Steps</h2>

        <p className="text-gray-500 mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm relative">
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              01
            </div>
            <div className="text-4xl mb-4">👤</div>
            <h3 className="font-semibold mb-2">Create Account</h3>
            <p className="text-sm text-gray-500">
              Sign up for free in seconds. No credit card required.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm relative">
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              02
            </div>
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-semibold mb-2">Choose Products</h3>
            <p className="text-sm text-gray-500">
              Browse and select tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 shadow-sm relative">
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              03
            </div>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-semibold mb-2">Start Creating</h3>
            <p className="text-sm text-gray-500">
              Download and start using instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
