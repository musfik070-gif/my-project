import React from "react";
import bannerImg from "../../assetsmain/banner.png";
import playIcon from "../../assetsmain/Play.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full mb-4">
          <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-5 sm:mb-6">
          Supercharge Your <br className="hidden sm:block" />
          Digital Workflow
        </h1>

        <p className="text-gray-500 mb-8 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-full font-medium transition">
            Explore Products
          </button>
          <button className="flex items-center justify-center gap-2 border border-purple-500 text-purple-600 px-7 py-3 rounded-full hover:bg-purple-50 transition font-medium">
            <img src={playIcon} alt="" className="w-4 h-4" />
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src={bannerImg}
          alt="hero banner"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;
