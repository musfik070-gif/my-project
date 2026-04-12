function Stats() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        {/* Item 1 */}
        <div>
          <h2 className="text-3xl font-bold">50K+</h2>
          <p className="text-sm mt-2 text-purple-100">Active Users</p>
        </div>

        {/* Item 2 */}
        <div className="md:border-l md:border-r border-purple-400">
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="text-sm mt-2 text-purple-100">Premium Tools</p>
        </div>

        {/* Item 3 */}
        <div>
          <h2 className="text-3xl font-bold">4.9</h2>
          <p className="text-sm mt-2 text-purple-100">Rating</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
