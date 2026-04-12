export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>

        <p className="text-gray-500 mb-12">
          Choose the plan that fits your needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="border rounded-xl p-6 text-left">
            <h3 className="font-semibold mb-2">Starter</h3>
            <p className="text-gray-500 text-sm mb-4">Perfect for beginners</p>

            <h2 className="text-3xl font-bold mb-4">$0</h2>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>✔ Basic tools</li>
              <li>✔ Limited access</li>
            </ul>

            <button className="w-full bg-purple-600 text-white py-2 rounded-lg">
              Get Started
            </button>
          </div>

          {/* Pro */}
          <div className="rounded-xl p-6 text-left bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <h3 className="font-semibold mb-2">Pro</h3>
            <p className="text-sm mb-4">Best for professionals</p>

            <h2 className="text-3xl font-bold mb-4">$29</h2>

            <ul className="text-sm space-y-2 mb-6">
              <li>✔ All tools</li>
              <li>✔ Unlimited usage</li>
            </ul>

            <button className="w-full bg-white text-purple-600 py-2 rounded-lg">
              Start Trial
            </button>
          </div>

          {/* Enterprise */}
          <div className="border rounded-xl p-6 text-left">
            <h3 className="font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-4">For teams</p>

            <h2 className="text-3xl font-bold mb-4">$99</h2>

            <ul className="text-sm text-gray-600 space-y-2 mb-6">
              <li>✔ Team access</li>
              <li>✔ Priority support</li>
            </ul>

            <button className="w-full bg-purple-600 text-white py-2 rounded-lg">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
