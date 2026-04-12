import React, { useState } from "react";
import writingIcon from "../../assetsmain/products/writing_2327400 1.png";
import designIcon from "../../assetsmain/products/design-tool.png";
import cameraIcon from "../../assetsmain/products/camera.png";
import operationIcon from "../../assetsmain/products/operation.png";
import portfolioIcon from "../../assetsmain/products/portfolio.png";
import socialIcon from "../../assetsmain/products/social-media.png";

import { toast } from "react-toastify";

function Products() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("products");

  const products = [
    {
      id: 1,
      name: "AI Writing Pro",
      desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
      price: 29,
      billing: "/Mo",
      tag: "Best Seller",
      tagColor: "bg-orange-50 text-orange-600",
      icon: writingIcon,
      features: [
        "Unlimited AI generations",
        "50+ writing templates",
        "Grammar checker",
      ],
    },
    {
      id: 2,
      name: "Design Templates Pack",
      desc: "2000+ premium templates for social media, presentations, and marketing materials.",
      price: 49,
      billing: "/One-Time",
      tag: "Popular",
      tagColor: "bg-purple-50 text-purple-600",
      icon: designIcon,
      features: ["2000+ templates", "Monthly updates", "Commercial license"],
    },
    {
      id: 3,
      name: "Premium Stock Assets",
      desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
      price: 19,
      billing: "/Mo",
      tag: "New",
      tagColor: "bg-green-50 text-green-600",
      icon: cameraIcon,
      features: ["10M+ assets", "Commercial use", "No attribution"],
    },
    {
      id: 4,
      name: "Automation Toolkit",
      desc: "Automate repetitive tasks and streamline your workflow with powerful tools.",
      price: 79,
      billing: "/Mo",
      tag: "Popular",
      tagColor: "bg-purple-50 text-purple-600",
      icon: operationIcon,
      features: ["50+ automations", "API access", "Custom workflows"],
    },
    {
      id: 5,
      name: "Resume Builder Pro",
      desc: "Create professional resumes and cover letters that land interviews.",
      price: 15,
      billing: "/One-Time",
      tag: "New",
      tagColor: "bg-green-50 text-green-600",
      icon: portfolioIcon,
      features: ["100+ templates", "ATS optimization", "Export to PDF"],
    },
    {
      id: 6,
      name: "Social Media Content Kit",
      desc: "Complete toolkit for creating engaging social media content across all platforms.",
      price: 39,
      billing: "/Mo",
      tag: "Best Seller",
      tagColor: "bg-orange-50 text-orange-600",
      icon: socialIcon,
      features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeItem = (id) => {
    setCart(cart.filter((item, index) => index !== id));
    toast.error(`Item removed from cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div className="inline-flex items-center bg-white border border-gray-100 p-1.5 rounded-full shadow-sm mt-8">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-8 py-2 rounded-full font-medium text-sm transition ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-8 py-2 rounded-full font-medium text-sm transition ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>
      </div>

      {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition bg-white flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full p-2.5">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span
                  className={`text-xs px-3 py-1.5 rounded-full font-medium ${product.tagColor}`}
                >
                  {product.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed min-h-[60px]">
                {product.desc}
              </p>

              <div className="mt-6 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {product.billing}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
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

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-medium transition mt-auto"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "cart" && (
        <div className="max-w-2xl mx-auto mt-8">
          {cart.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-gray-500 text-lg">No items in your cart</p>
              <button
                onClick={() => setActiveTab("products")}
                className="mt-4 text-purple-600 font-medium hover:underline"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-100 py-4 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-full p-2 flex-shrink-0">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 text-sm font-medium">
                        ${item.price}
                        {item.billing}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-500 hover:text-red-600 text-sm font-medium px-3 py-1 hover:bg-red-50 rounded-full transition"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg text-gray-600 font-medium">
                    Total Amount:
                  </span>
                  <span className="text-3xl font-bold text-gray-900">
                    ${total}
                  </span>
                </div>

                <button
                  onClick={() => {
                    alert("Proceeding to checkout...");
                    setCart([]);
                  }}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-full font-medium transition text-lg"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
