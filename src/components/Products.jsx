// ✅ FIX: Import products from the new JSON data file (no longer hardcoded here)
// ✅ FIX: Accept cart and setCart as PROPS from App.jsx (state was lifted up)
// ✅ FIX: Checkout now uses toast.success() instead of alert()
// ✅ FIX: Product field names updated to match JSON spec (description, period, tagType)
// ✅ OPTIONAL: "Added to cart" text feedback on the Buy Now button
// ✅ OPTIONAL: Cart count in Navbar updates on every add/remove/checkout (via lifted state)

import React, { useState } from "react";
import { toast } from "react-toastify";

// ✅ FIX: Load product data from the JSON file
import productsData from "../data/products.json";

// ✅ Map icon string names from JSON to actual imported images
import writingIcon   from "../../assetsmain/products/writing_2327400 1.png";
import designIcon    from "../../assetsmain/products/design-tool.png";
import cameraIcon    from "../../assetsmain/products/camera.png";
import operationIcon from "../../assetsmain/products/operation.png";
import portfolioIcon from "../../assetsmain/products/portfolio.png";
import socialIcon    from "../../assetsmain/products/social-media.png";
import shoppingIcon  from "../../assetsmain/products/shopping-cart.png";

const iconMap = {
  writing:   writingIcon,
  design:    designIcon,
  camera:    cameraIcon,
  operation: operationIcon,
  portfolio: portfolioIcon,
  social:    socialIcon,
  shopping:  shoppingIcon,
};

// ✅ FIX: tagType string → Tailwind color classes
const tagColorMap = {
  "best seller": "bg-orange-50 text-orange-600",
  "popular":     "bg-purple-50 text-purple-600",
  "new":         "bg-green-50 text-green-600",
};

// ✅ Billing label based on period field from JSON
const periodLabel = {
  "monthly":  "/Mo",
  "yearly":   "/Yr",
  "one-time": "/One-Time",
};

function Products({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("products");
  const [addedIds, setAddedIds]   = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);

    // ✅ OPTIONAL: Flash "Added to cart" on the button for 1.5 seconds
    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 1500);

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const removeItem = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
    toast.error("Item removed from cart", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // ✅ FIX: Checkout now uses toast instead of alert()
  const handleCheckout = () => {
    setCart([]);
    toast.success("Order placed! Your cart has been cleared.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">

      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>

        {/* Toggle Buttons */}
        <div className="inline-flex w-full max-w-xs sm:w-auto items-center bg-white border border-gray-100 p-1.5 rounded-full shadow-sm mt-8">
          <button
            onClick={() => setActiveTab("products")}
            className={`flex-1 sm:flex-none px-5 sm:px-8 py-2 rounded-full font-medium text-sm transition ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`flex-1 sm:flex-none px-5 sm:px-8 py-2 rounded-full font-medium text-sm transition ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {/* ==================== PRODUCTS TAB ==================== */}
      {activeTab === "products" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="border border-gray-100 rounded-2xl p-5 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition bg-white flex flex-col h-full"
            >
              <div className="flex justify-between items-start gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full p-2.5">
                  <img
                    src={iconMap[product.icon]}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* ✅ FIX: uses tagType for color lookup */}
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-medium text-center ${
                    tagColorMap[product.tagType] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {product.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>

              {/* ✅ FIX: product.description (was product.desc) */}
              <p className="text-gray-500 text-sm leading-relaxed sm:min-h-[60px]">
                {product.description}
              </p>

              <div className="mt-5 sm:mt-6 mb-5 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">${product.price}</span>
                {/* ✅ FIX: product.period (was product.billing) */}
                <span className="text-sm text-gray-500 font-medium">
                  {periodLabel[product.period] || `/${product.period}`}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* ✅ OPTIONAL: Button text changes to "Added to Cart ✓" briefly */}
              <button
                onClick={() => addToCart(product)}
                className={`w-full py-3 rounded-full font-medium transition mt-auto ${
                  addedIds.includes(product.id)
                    ? "bg-green-500 text-white"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {addedIds.includes(product.id) ? "Added to Cart ✓" : "Buy Now"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ==================== CART TAB ==================== */}
      {activeTab === "cart" && (
        <div className="max-w-2xl mx-auto mt-8">
          {cart.length === 0 ? (
            <div className="text-center py-12 sm:py-16 px-4 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-gray-500 text-base sm:text-lg">No items in your cart</p>
              <button
                onClick={() => setActiveTab("products")}
                className="mt-4 text-purple-600 font-medium hover:underline"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
              {/* "Your Cart" heading — matches screenshot */}
              <h3 className="text-lg font-bold text-gray-800 mb-4">Your Cart</h3>

              <div className="space-y-3">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-gray-50 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 bg-white rounded-full p-2 flex-shrink-0 shadow-sm">
                        <img
                          src={iconMap[item.icon]}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm truncate">{item.name}</h4>
                        <p className="text-gray-500 text-sm">
                          ${item.price}{periodLabel[item.period] || `/${item.period}`}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(index)}
                      className="self-start sm:self-center text-red-500 hover:text-red-600 text-sm font-medium transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-5">
                  <span className="text-base text-gray-500 font-medium">Total:</span>
                  <span className="text-2xl font-bold text-gray-900">${total}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition text-base"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default Products;
