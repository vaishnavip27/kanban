import React from "react";

interface ComparisonFeature {
  text: string;
  available: boolean;
}

interface BenefitCard {
  title: string;
  titlePrefix: string;
  description: string;
  backgroundClass: string;
  colSpan?: string;
  gradientEffect: string;
}

const FeatureComparison: React.FC = () => {
  const taskflowFeatures: ComparisonFeature[] = [
    { text: "Real-time global collaboration", available: true },
    { text: "Fully customizable & scalable", available: true },
    { text: "Advanced sprint management", available: true },
    { text: "Built-in advanced analytics", available: true },
    { text: "User-friendly interface", available: true },
  ];

  const otherToolsFeatures: ComparisonFeature[] = [
    { text: "Delayed syncing or integrations", available: false },
    { text: "Limited customization", available: false },
    { text: "Lacks dedicated sprint tools", available: false },
    { text: "Requires external add-ons", available: false },
    { text: "Complicated onboarding", available: false },
  ];

  const benefitCards: BenefitCard[] = [
    {
      titlePrefix: "Effortless",
      title: "Task Management",
      description:
        "Keep all your tasks organized and visible in one place. Taskflow helps you assign, track, and prioritize tasks easily, ensuring nothing falls through the cracks.",
      backgroundClass: "bg-purple-900/70",
      gradientEffect:
        "bg-[conic-gradient(from_45deg_at_top_left,rgba(168,85,247,0.3)_0deg,rgba(168,85,247,0.1)_90deg,transparent_180deg)]",
    },
    {
      titlePrefix: "Seamless",
      title: "Team Collaboration",
      description:
        "Work together with your team in real time, no matter where they are. Taskflow's collaborative tools make it easy to communicate, share files, and keep everyone in sync.",
      backgroundClass: "bg-purple-800/70",
      gradientEffect:
        "bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.4)_0%,rgba(139,92,246,0.1)_60%,transparent_100%)]",
    },
    {
      titlePrefix: "Comprehensive",
      title: "Project Insights",
      description:
        "Stay on top of your projects with advanced analytics and reporting. Taskflow gives you the insights you need to make data-driven decisions and improve overall efficiency.",
      backgroundClass: "bg-purple-900/90",
      colSpan: "md:col-span-2",
      gradientEffect:
        "bg-[linear-gradient(135deg,rgba(126,34,206,0.4)_0%,rgba(126,34,206,0.2)_50%,transparent_100%)]",
    },
  ];

  return (
    <div className="text-white py-36 px-4 bg-[#060B1F]">
      <div className="max-w-4xl mx-auto">
        {/* Why Choose Taskflow Section */}
        <h2 className="text-center text-4xl font-bold mb-2">
          Why Choose <span className="italic font-normal">Taskflow</span>?
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          An immediate contrast of Taskflow's functionalities against other
          project coordination utilities. Discover why we excel.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-36">
          {/* Taskflow Column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-5 w-5 rounded flex items-center justify-center mr-3">
                <div className="h-3 w-3 bg-purple-500 rounded-sm"></div>
              </div>
              <h3 className="text-xl text-purple-500">Taskflow</h3>
            </div>

            <div className="relative bg-gray-900/70 backdrop-blur-md border border-white/10 rounded-lg p-6 
                          hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-purple-900/10 to-transparent pointer-events-none opacity-60"></div>

              {taskflowFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center mb-4 last:mb-0 relative z-10"
                >
                  <div className="mr-3 text-green-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Tools Column */}
          <div>
            <div className="flex items-center mb-6">
              <h3 className="text-xl">Other tools</h3>
            </div>

            <div className="relative bg-gray-900/70 backdrop-blur-md border border-white/10 rounded-lg p-6 
                          hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-purple-900/10 to-transparent pointer-events-none"></div>

              {otherToolsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center mb-4 last:mb-0 relative z-10"
                >
                  <div className="mr-3 text-red-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How Taskflow Helps You Section */}
        <div className="mb-12">
          <h2 className="text-center text-4xl font-bold mb-2">
            How <span className="italic font-normal">Taskflow</span> helps you
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
            Taskflow offers ready-made solutions to get you going fast. Easily
            customize as your team's needs expand.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {benefitCards.map((card, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg p-8 ${card.colSpan || ""} 
                          bg-gray-900/70 backdrop-blur-md border border-white/10 
                          hover:border-white/20 transition-all duration-300`}
              >
                <div className={`absolute inset-0 ${card.gradientEffect} pointer-events-none`}></div>
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl mb-4">
                    <span className="italic font-light">
                      {card.titlePrefix}
                    </span>{" "}
                    <span className="font-semibold">{card.title}</span>
                  </h3>
                  <p className="text-gray-300">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;
