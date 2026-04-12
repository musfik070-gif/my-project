import React from "react";
import writingIcon from "../../assetsmain/products/writing_2327400 1.png";
import designIcon from "../../assetsmain/products/design-tool.png";
import cameraIcon from "../../assetsmain/products/camera.png";
import operationIcon from "../../assetsmain/products/operation.png";
import portfolioIcon from "../../assetsmain/products/portfolio.png";
import socialIcon from "../../assetsmain/products/social-media.png";

const productData = [
  {
    title: "AI Writing Pro",
    desc: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: "$29",
    billing: "/Mo",
    badge: "Best Seller",
    badgeColor: "bg-orange-50 text-orange-600",
    icon: writingIcon,
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
  },
  {
    title: "Design Templates Pack",
    desc: "2000+ premium templates for social media, presentations, and marketing materials.",
    price: "$49",
    billing: "/One-Time",
    badge: "Popular",
    badgeColor: "bg-purple-50 text-purple-600",
    icon: designIcon,
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
  },
  {
    title: "Premium Stock Assets",
    desc: "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: "$19",
    billing: "/Mo",
    badge: "New",
    badgeColor: "bg-green-50 text-green-600",
    icon: cameraIcon,
    features: ["10M+ assets", "Commercial use", "No attribution"],
  },
  {
    title: "Automation Toolkit",
    desc: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: "$79",
    billing: "/Mo",
    badge: "Popular",
    badgeColor: "bg-purple-50 text-purple-600",
    icon: operationIcon,
    features: ["50+ automations", "API access", "Custom workflows"],
  },
  {
    title: "Resume Builder Pro",
    desc: "Create professional resumes and cover letters that land interviews.",
    price: "$15",
    billing: "/One-Time",
    badge: "New",
    badgeColor: "bg-green-50 text-green-600",
    icon: portfolioIcon,
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
  },
  {
    title: "Social Media Content Kit",
    desc: "Complete toolkit for creating engaging social media content across all platforms.",
    price: "$39",
    billing: "/Mo",
    badge: "Best Seller",
    badgeColor: "bg-orange-50 text-orange-600",
    icon: socialIcon,
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
  },
];

function Products() {
  // আপনার Cart এর লজিক (useState, function ইত্যাদি) এখানেই থাকবে আগের মতো

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      {/* Title & Tabs */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* 1st picture exact tab design */}
        <div className="inline-flex items-center bg-white border border-gray-100 p-1.5 rounded-full shadow-sm mt-8">
          <button className="bg-purple-600 text-white px-8 py-2 rounded-full font-medium text-sm">
            Products
          </button>
          <button className="text-gray-600 px-8 py-2 rounded-full font-medium text-sm hover:bg-gray-50 transition">
            Cart (2)
          </button>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {productData.map((product, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition bg-white flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full p-2.5">
                <img
                  src={product.icon}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`text-xs px-3 py-1.5 rounded-full font-medium ${product.badgeColor}`}
              >
                {product.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {product.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed min-h-[60px]">
              {product.desc}
            </p>

            <div className="mt-6 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                {product.price}
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

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-medium transition mt-auto">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
