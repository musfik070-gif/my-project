function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full">
            Products
          </button>

          <button className="border px-6 py-2 rounded-full text-gray-600">
            Cart (2)
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CARD 1 */}
        <div className="border rounded-xl p-6 shadow-sm">
          <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
            Best Seller
          </span>

          <h3 className="text-lg font-semibold mt-4">AI Writing Pro</h3>

          <p className="text-gray-500 text-sm mt-2">
            Generate high-quality content and marketing copy using AI.
          </p>

          <p className="text-xl font-bold mt-4">$29/mo</p>

          <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-full">
            Buy Now
          </button>
        </div>

        {/* CARD 2 */}
        <div className="border rounded-xl p-6 shadow-sm">
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Popular
          </span>

          <h3 className="text-lg font-semibold mt-4">Design Templates Pack</h3>

          <p className="text-gray-500 text-sm mt-2">
            2000+ premium templates for social media and marketing.
          </p>

          <p className="text-xl font-bold mt-4">$49</p>

          <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-full">
            Buy Now
          </button>
        </div>

        {/* CARD 3 */}
        <div className="border rounded-xl p-6 shadow-sm">
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            New
          </span>

          <h3 className="text-lg font-semibold mt-4">Premium Stock Assets</h3>

          <p className="text-gray-500 text-sm mt-2">
            Access millions of photos, videos, and graphics.
          </p>

          <p className="text-xl font-bold mt-4">$19/mo</p>

          <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
