import React from "react";

import bannerImg from "../../assetsmain/banner.png";
import playIcon from "../../assetsmain/Play.png";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="inline-flex items-center gap-2 text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
          Supercharge Your <br />
          Digital Workflow
        </h1>

        <p className="text-gray-500 mb-6">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition">
            Explore Products
          </button>

          <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition">
            <img src={playIcon} alt="" className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={bannerImg} alt="hero banner" className="w-full max-w-md padding 200" />
      </div>
    </div>
  );
}
<div className="mb-10"></div>;

export default Hero;
