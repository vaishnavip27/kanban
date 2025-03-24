import React from "react";

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  buttonText: string;
  subtext: string;
  features: PlanFeature[];
  isPrimary?: boolean;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/month",
      description: "Perfect for individuals just starting out.",
      buttonText: "Get Started",
      subtext: "Free Forever",
      features: [
        { text: "Access to essential project management tools" },
        { text: "Up to 5 active projects" },
        { text: "Basic task tracking features" },
        { text: "Real-time collaboration" },
        { text: "Community support" },
      ],
    },
    {
      name: "Pro Plan",
      price: "$12",
      period: "/month",
      description: "Perfect for individuals and small teams.",
      buttonText: "Get Started",
      subtext: "Free Forever",
      features: [
        { text: "Everything in the Free Plan, plus:" },
        { text: "Unlimited projects and tasks" },
        { text: "Advanced analytics and reporting" },
        { text: "Sprint management tools" },
        { text: "Priority customer support" },
        { text: "Customizable workflows and templates" },
      ],
      isPrimary: true,
    },
  ];

  return (
    <div className=" text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-2">
          Choose the <span className="italic font-normal">Right Plan</span> for
          <br />
          Your Team
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Expand your schema as per your requirements
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-900/70 rounded-lg p-6 relative">
              {plan.name === "Pro Plan" && (
                <div className="absolute top-6 right-6 flex items-center">
                  <span className="text-xs mr-2">Bill yearly</span>
                  <div className="w-10 h-5 bg-gray-700 rounded-full flex items-center p-1">
                    <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                  </div>
                </div>
              )}

              <h3 className="text-xl mb-4">{plan.name}</h3>

              <div className="mb-4">
                <span className="text-amber-500 text-4xl font-bold">
                  {plan.price}
                </span>
                <span className="text-amber-500">{plan.period}</span>
              </div>

              <p className="text-gray-400 mb-6">{plan.description}</p>

              <button
                className={`w-full py-3 px-6 rounded-full mb-2 flex justify-center ${
                  plan.isPrimary
                    ? "bg-gradient-to-r from-amber-500 to-amber-400 text-black"
                    : "bg-gray-700/70 text-white"
                }`}
              >
                {plan.buttonText}
              </button>

              <p className="text-center text-sm text-gray-500 mb-8">
                {plan.subtext}
              </p>

              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 mt-1 text-amber-500 flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                    </div>
                    <span className="text-gray-300">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center text-center text-white relative">
        {/* Top Text */}
        <p className="text-gray-300 text-sm max-w-lg mx-auto mb-4">
          Taskflow provides pre-configured options for quick start-ups. As your
          team grows, adaptation becomes effortless.
        </p>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-md px-8 py-10 rounded-lg shadow-lg max-w-xl">
          <h1 className="text-4xl font-light mb-2">Ready to manage your</h1>
          <h1 className="text-4xl font-light">
            team like a <span className="italic font-normal">pro</span>?
          </h1>

          <p className="text-gray-300 text-sm max-w-md mx-auto mt-4">
            Taskflow offers ready-made solutions to get you going fast. Easily
            customize as your team's needs expand.
          </p>

          {/* Button */}
          <button className="mt-6 bg-transparent hover:bg-gray-700 text-white font-normal py-2 px-6 border border-gray-500 rounded-full transition-colors duration-300 relative">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
