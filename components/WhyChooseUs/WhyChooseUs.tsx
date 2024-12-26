import React from "react";
import { Bike, Salad, Dumbbell, Heart } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Bike size={40} />,
    title: "Modern equipment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
  },
  {
    icon: <Salad size={40} />,
    title: "Healthy nutrition plan",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    icon: <Dumbbell size={40} />,
    title: "Professional training plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
  },
  {
    icon: <Heart size={40} />,
    title: "Unique to your needs",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="flex items-center justify-center h-[90px] w-[90px] bg-white/10 rounded-full text-brand-orange transition-all duration-300 hover:bg-brand-orange hover:text-white">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-white mt-6 mb-4">{title}</h4>
    <p className="text-brand-gray-medium">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-brand-background-1 pb-[70px] pt-[100px] w-full">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-[35px]">
          <span className="text-brand-orange text-lg uppercase tracking-wider">Why choose us?</span>
          <h2 className="text-4xl font-bold text-white mt-2">PUSH YOUR LIMITS FORWARD</h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
