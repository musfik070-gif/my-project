export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm md:text-base text-purple-100 mb-8">
          Join thousands of professionals using DigiTools to work smarter. Start
          your free trial today.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-6">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium">
            Explore Products
          </button>

          <button className="border border-white px-6 py-3 rounded-full">
            View Pricing
          </button>
        </div>

        <p className="text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
