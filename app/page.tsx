import { ContactData } from "@/components/ContactData";
import { Gallery } from "@/components/Gallery";
import Hero from "@/components/Hero/Hero";
import { OurClasses } from "@/components/OurClasses";
import { OurPlan } from "@/components/OurPlan";
import { OurTeam } from "@/components/OurTeam";
import { Registration } from "@/components/Registration";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <WhyChooseUs />
        <OurClasses />
        <Registration />
        <OurPlan />
        <Gallery />
        <OurTeam />
        <ContactData />
      </main>
  );
}
