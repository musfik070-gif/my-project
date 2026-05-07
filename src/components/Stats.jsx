function Stats() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 text-center gap-6 sm:gap-0">
        <div className="py-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">50K+</h2>
          <p className="text-sm mt-2 text-purple-100">Active Users</p>
        </div>

        <div className="py-6 sm:py-2 sm:px-4 border-y sm:border-y-0 sm:border-l sm:border-r border-purple-400/70">
          <h2 className="text-3xl sm:text-4xl font-bold">200+</h2>
          <p className="text-sm mt-2 text-purple-100">Premium Tools</p>
        </div>

        <div className="py-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">4.9</h2>
          <p className="text-sm mt-2 text-purple-100">Rating</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
