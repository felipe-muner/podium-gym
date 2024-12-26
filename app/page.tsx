import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="">main page</h1>
        <Hero />
        <WhyChooseUs />
        <OurClasses />
        <Registration />
        <OurPlan />
        <Gallery />
        <OurTeam />
      </main>
  );
}
