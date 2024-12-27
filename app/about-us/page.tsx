import { Breadcrumb } from "@/components/Breadcrumb";
import { OurTeam } from "@/components/OurTeam";
import { Registration } from "@/components/Registration";
import { Testimonial } from "@/components/Testimonial";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function AboutUs() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <Breadcrumb route={'About Us'} />
      <WhyChooseUs />
      <OurTeam />
      <Registration />
      <Testimonial />
    </main>
  );
}
