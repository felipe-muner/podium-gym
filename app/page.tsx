import Hero from "@/components/Hero/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <WhyChooseUs />
        {/* <OurClasses />
        <Registration />
        <OurPlan />
        <Gallery />
        <OurTeam /> */}
      </main>
  );
}
