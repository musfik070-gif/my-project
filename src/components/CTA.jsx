export default function CTA() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-sm md:text-base text-purple-100 mb-8">
          Join thousands of professionals using DigiTools to work smarter. Start
          your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium">
            Explore Products
          </button>

          <button className="border border-white px-6 py-3 rounded-full font-medium">
            View Pricing
          </button>
        </div>

        <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}
