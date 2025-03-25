import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Ensure we have refs and GSAP is available
    if (!sectionRef.current || cardRefs.current.length === 0) return;

    // Create scroll-triggered animations for each card
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          x: index === 0 ? '-100%' : '100%', // Slide from opposite sides
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%', // Start when section enters viewport
            end: 'top 25%', // End when section is fully in view
            scrub: true, // Smooth scrubbing effect
            markers: false, // Set to true for debugging
          }
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

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
    <div 
      ref={sectionRef} 
      id="pricing-section" 
      className="text-white px-4"
    >
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
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="bg-gray-900/70 rounded-lg p-6 relative overflow-hidden"
            >
              {/* Existing card content remains the same */}
              <div className={`absolute inset-0 ${
                index === 0
                  ? "bg-[radial-gradient(circle_at_left,rgba(128,0,128,0.3)_0%,rgba(128,0,128,0.1)_40%,transparent_70%)]"
                  : "bg-[radial-gradient(circle_at_right,rgba(128,0,128,0.3)_0%,rgba(128,0,128,0.1)_40%,transparent_70%)]"
              } pointer-events-none`}></div>
              
              {plan.name === "Pro Plan" && (
                <div className="absolute top-6 right-6 flex items-center">
                  <span className="text-xs mr-2">Bill yearly</span>
                  <div className="w-10 h-5 bg-gray-700 rounded-full flex items-center p-1">
                    <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                  </div>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-xl mb-4">{plan.name}</h3>

                <div className="mb-4">
                  <span className="text-purple-500 text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-purple-500">{plan.period}</span>
                </div>

                <p className="text-gray-400 mb-6">{plan.description}</p>

                <button
                  className={`w-full py-3 px-6 rounded-full mb-2 flex justify-center ${
                    plan.isPrimary
                      ? "bg-gradient-to-r from-purple-500 to-purple-400 text-black"
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
                      <div className="mr-3 mt-1 text-purple-500 flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the existing content */}
      <div className="w-full h-screen flex flex-col items-center justify-center text-center text-white relative">
        <p className="text-gray-300 text-sm max-w-lg mx-auto mb-8">
          Taskflow provides pre-configured options for quick start-ups. As your
          team grows, adaptation becomes effortless.
        </p>

        <div className="bg-white/5 backdrop-blur-md py-16 rounded-lg shadow-lg border border-white/10 px-56 flex flex-col items-center">
          <h1 className="text-4xl font-light mb-2">Ready to manage your</h1>
          <h1 className="text-4xl font-light">
            team like a <span className="italic font-normal">pro</span>?
          </h1>

          <p className="text-gray-300 text-md max-w-md mx-auto mt-4">
            Taskflow offers ready-made solutions to get you going fast. Easily
            customize as your team's needs expand.
          </p>

          <button className="custom-get-started-button mt-6 bg-transparent w-44 rounded-full hover:bg-gray-700 text-white font-normal py-2 border border-gray-500  transition-colors duration-300 relative">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;