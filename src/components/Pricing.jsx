import React from "react";
import { Check, Globe } from "lucide-react";

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      popular: false,
      features: [
        "5 images per day",
        "Basic resolution",
        "Standard processing",
        "Web download",
      ],
    },
    {
      name: "Pro",
      price: "399",
      popular: true,
      features: [
        "100 images per day",
        "HD resolution",
        "Priority processing",
        "Bulk processing",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      price: "1299",
      popular: false,
      features: [
        "Unlimited images",
        "4K resolution",
        "Instant processing",
        "Bulk processing",
        "API access",
        "Custom integration",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your needs with flexible pricing options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 border-2 relative ${
                plan.popular
                  ? "border-blue-500 transform md:-translate-y-4"
                  : "border-transparent"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>

              <div className="border-t border-b border-gray-100 py-6 mb-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition flex items-center justify-center ${
                  plan.name === "Free"
                    ? "bg-gray-600 hover:bg-gray-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {plan.name === "Free" ? "Start Free" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-gray-500 flex items-center justify-center">
          <Globe className="w-4 h-4 mr-2" />
          <span>All prices include applicable taxes</span>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
