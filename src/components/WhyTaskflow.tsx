import React from 'react';

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
      description: "Keep all your tasks organized and visible in one place. Taskflow helps you assign, track, and prioritize tasks easily, ensuring nothing falls through the cracks.",
      backgroundClass: "bg-amber-900/70",
    },
    {
      titlePrefix: "Seamless",
      title: "Team Collaboration",
      description: "Work together with your team in real time, no matter where they are. Taskflow's collaborative tools make it easy to communicate, share files, and keep everyone in sync.",
      backgroundClass: "bg-gray-800/70",
    },
    {
      titlePrefix: "Comprehensive",
      title: "Project Insights",
      description: "Stay on top of your projects with advanced analytics and reporting. Taskflow gives you the insights you need to make data-driven decisions and improve overall efficiency.",
      backgroundClass: "bg-gray-900/90",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <div className=" text-white py-16 px-4 bg-[#060B1F]">
      <div className="max-w-4xl mx-auto">
        {/* Why Choose Taskflow Section */}
        <h2 className="text-center text-4xl font-bold mb-2">
          Why Choose <span className="italic font-normal">Taskflow</span>?
        </h2>
        
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          An immediate contrast of Taskflow's functionalities against other 
          project coordination utilities. Discover why we excel.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Taskflow Column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-5 w-5 bg-white rounded flex items-center justify-center mr-3">
                <div className="h-3 w-3 bg-amber-500 rounded-sm"></div>
              </div>
              <h3 className="text-xl text-amber-500">Taskflow</h3>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              {taskflowFeatures.map((feature, index) => (
                <div key={index} className="flex items-center mb-4 last:mb-0">
                  <div className="mr-3 text-green-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
            
            <div className="bg-gray-800/50 rounded-lg p-6">
              {otherToolsFeatures.map((feature, index) => (
                <div key={index} className="flex items-center mb-4 last:mb-0">
                  <div className="mr-3 text-red-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                className={`${card.backgroundClass} rounded-lg p-8 ${card.colSpan || ""}`}
              >
                <h3 className="text-2xl mb-4">
                  <span className="italic font-light">{card.titlePrefix}</span>{" "}
                  <span className="font-semibold">{card.title}</span>
                </h3>
                <p className="text-gray-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;