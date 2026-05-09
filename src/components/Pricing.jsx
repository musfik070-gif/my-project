import React from "react";

export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-500 mb-10 sm:mb-14 lg:mb-16 text-sm sm:text-lg max-w-2xl mx-auto">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 text-left bg-gray-50/50 flex flex-col min-h-[420px] lg:min-h-[448px]">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Starter</h3>
            <p className="text-gray-500 text-sm mb-6">
              Perfect for getting started
            </p>

            <div className="flex items-end gap-1 mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">$0</h2>
              <span className="text-gray-500 font-medium pb-1">/Month</span>
            </div>

            <ul className="text-sm text-gray-600 space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Access to 10
                free tools
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Basic
                templates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Community
                support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> 1 project
                per month
              </li>
            </ul>

            <button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white py-3.5 rounded-xl font-medium transition-colors mt-auto">
              Get Started Free
            </button>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 text-left bg-[#8B5CF6] text-white flex flex-col min-h-[420px] lg:min-h-[448px] relative lg:-translate-y-4 shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-1 rounded-full border border-yellow-200">
              Most Popular
            </div>

            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-purple-200 text-sm mb-6">
              Best for professionals
            </p>

            <div className="flex items-end gap-1 mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold">$29</h2>
              <span className="text-purple-200 font-medium pb-1">/Month</span>
            </div>

            <ul className="text-sm space-y-3 mb-8 flex-grow text-purple-50">
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span> Access to all
                premium tools
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span> Unlimited
                templates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span> Priority support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span> Unlimited
                projects
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span> Cloud sync
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white font-bold">✓</span> Advanced
                analytics
              </li>
            </ul>

            <button className="w-full bg-white hover:bg-gray-50 text-[#8B5CF6] py-3.5 rounded-xl font-bold transition-colors mt-auto">
              Start Pro Trial
            </button>
          </div>

          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 text-left bg-gray-50/50 flex flex-col min-h-[420px] lg:min-h-[448px] sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-6">
              For teams and businesses
            </p>

            <div className="flex items-end gap-1 mb-8">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">$99</h2>
              <span className="text-gray-500 font-medium pb-1">/Month</span>
            </div>

            <ul className="text-sm text-gray-600 space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Everything
                in Pro
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Team
                collaboration
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Custom
                integrations
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Dedicated
                support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> SLA
                guarantee
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span> Custom
                branding
              </li>
            </ul>

            <button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white py-3.5 rounded-xl font-medium transition-colors mt-auto">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
