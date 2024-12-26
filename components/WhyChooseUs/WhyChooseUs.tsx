import React from "react";

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
          {/* Feature 1 */}
          <div className="text-center mb-[30px]">
            <div className="inline-block h-[90px] w-[90px] bg-white/10 rounded-full text-brand-orange leading-[90px] text-6xl transition-all duration-300 hover:bg-brand-orange hover:text-white">
              <span className="flaticon-034-stationary-bike"></span>
            </div>
            <h4 className="text-xl font-semibold text-white mt-6 mb-4">Modern equipment</h4>
            <p className="text-brand-gray-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center mb-[30px]">
            <div className="inline-block h-[90px] w-[90px] bg-white/10 rounded-full text-brand-orange leading-[90px] text-6xl transition-all duration-300 hover:bg-brand-orange hover:text-white">
              <span className="flaticon-033-juice"></span>
            </div>
            <h4 className="text-xl font-semibold text-white mt-6 mb-4">Healthy nutrition plan</h4>
            <p className="text-brand-gray-medium">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center mb-[30px]">
            <div className="inline-block h-[90px] w-[90px] bg-white/10 rounded-full text-brand-orange leading-[90px] text-6xl transition-all duration-300 hover:bg-brand-orange hover:text-white">
              <span className="flaticon-002-dumbell"></span>
            </div>
            <h4 className="text-xl font-semibold text-white mt-6 mb-4">Professional training plan</h4>
            <p className="text-brand-gray-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="text-center mb-[30px]">
            <div className="inline-block h-[90px] w-[90px] bg-white/10 rounded-full text-brand-orange leading-[90px] text-6xl transition-all duration-300 hover:bg-brand-orange hover:text-white">
              <span className="flaticon-014-heart-beat"></span>
            </div>
            <h4 className="text-xl font-semibold text-white mt-6 mb-4">Unique to your needs</h4>
            <p className="text-brand-gray-medium">
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
