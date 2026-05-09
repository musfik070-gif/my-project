import React from "react";
import userImg from "../../assetsmain/user.png";
import packageImg from "../../assetsmain/package.png";
import rocketImg from "../../assetsmain/rocket.png";

export default function Steps() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-10 sm:mb-12 text-sm sm:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm relative flex flex-col items-center">
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              01
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center p-3">
                <img
                  src={userImg}
                  alt="user"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Create Account</h3>
            <p className="text-sm text-gray-500">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm relative flex flex-col items-center">
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              02
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center p-3">
                <img
                  src={packageImg}
                  alt="package"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Choose Products</h3>
            <p className="text-sm text-gray-500">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm relative flex flex-col items-center sm:col-span-2 lg:col-span-1">
            <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              03
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center p-3">
                <img
                  src={rocketImg}
                  alt="rocket"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Start Creating</h3>
            <p className="text-sm text-gray-500">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
