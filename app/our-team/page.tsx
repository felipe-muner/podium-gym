import { Breadcrumb } from "@/components/Breadcrumb";
import { getMetadata } from "@/lib/utils";
import Image from "next/image";

export const metadata = getMetadata({ routeName: "Our Team" });

export default function OurTeam() {
  const team = [
    {
      name: "Vanessa",
      role: "Pilates Mobility Instructor",
      image: "/img/team/team-1.jpg",
    },
    {
      name: "Steve",
      role: "HIIT & Tabata Instructor",
      image: "/img/team/team-2.jpg",
    },
    {
      name: "Carlene",
      role: "Max Power Mobility Instructor",
      image: "/img/team/team-3.jpg",
    },
    {
      name: "Jace",
      role: "Primal Power Yoga Instructor",
      image: "/img/team/team-5.jpg",
    },
    {
      name: "Namwan",
      role: "Personal Trainer",
      image: "/img/team/team-4.jpg",
    },
  ];

  return (
    <>
      <Breadcrumb route={'Our Team'} />
      <div className="flex flex-col gap-8 items-start justify-center p-4 my-20 text-brand-gray-medium container mx-auto max-w-[1200px] font-mulish">
        <h1 className="text-4xl font-semibold text-white text-center w-full">Our Team</h1>
        <p className="text-center w-full">Meet the amazing team of coaches and trainers who are here to help you achieve your fitness goals.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-4 p-6 bg-brand-gray-dark rounded-lg">
              <div className="w-48 h-48 relative rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white">{member.name}</h2>
              <p className="text-brand-orange text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
