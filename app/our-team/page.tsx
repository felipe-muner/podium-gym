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
      bio: "With a vast background in holistic bodywork, therapeutic massage, yoga, pilates and conscious living, Vanessa offers an in-depth understanding and intuitive sensitivity to the interconnected mechanisms of body and mind. With a great emphasis on alignment and functional movement, she guides to overall improved wellbeing and lifestyle awareness, specific to the needs of her clients. Her passion for movement and care for detail is a strong element of her classes, providing a sense of fulfilment on all levels.",
      certifications: [
        "Foundation & Basic Mat Pilates by Conscious Movement Education - The Source Cape Town",
        "Pilates Equipment / Reformer by Conscious Movement Education - The Source Cape Town"
      ]
    },
    {
      name: "Steve",
      role: "HIIT & Tabata Instructor",
      image: "/img/team/team-2.jpg",
      bio: "Steve Carr, a British Citizen Award recipient and international mental health and wellbeing trainer, now based in Ko Phangan. Fitness has been a cornerstone of my recovery journey, from overcoming burnout and addiction to building resilience and strength. Movement isn&apos;t just exercise for me—it&apos;s medicine for the body and mind. That&apos;s what I bring into every class I lead. Steve delivers high-energy HIIT and Tabata sessions that are designed to push limits, build endurance, and leave people feeling stronger, fitter, and more alive. His classes blend discipline with encouragement, ensuring everyone—whether a beginner or experienced athlete—finds their edge while training safely.",
      certifications: []
    },
    {
      name: "Diana",
      role: "CrossFit Coach",
      image: "/img/team/team-3.jpg",
      bio: "Since Diana needs to move to be happy, she started with athletics in a very young age. Her strength was the short track running (60m/100m). That lead to her first contacts with a barbell and heavier weights already with 14 years as accessories to become stronger and more resilient in her fast sprints. With the time the athletic competitions became less, but the love for the barbell and heavy weights remained. Over the years Diana focused on PowerLifting, Kettlebell Skills and Judo. Until Crossfit entered the stage. From day one she felt in love with the world of Functional Training. During a 2.5y battle against an aggressive cancer in 2012 – she used the sport and the community as medicine and to survive. Especially the mental part helped her so much that she decided to take the chance of a second life to change everything and become a coach. To help others to stay healthy and strong or regain mental and physical power during/after any personal situation. In 2017 she fulfilled her dream of her own Functional Training Gym in Switzerland which unfortunately she had to give up during Covid. That&apos;s, when she made it to Koh Phangan to relax and make a plan whats next. She got the offer to coach Crossfit on the island – and she still does. And much more.",
      certifications: [
        "Diploma of Sports Science",
        "Crossfit Trainer Certificate Level 1 and Level 2",
        "Crossfit Trainer Certificate Weightlifting",
        "Crossfit Trainer Certificate Gymnastics"
      ]
    },
    {
      name: "Daniel",
      role: "CrossFit Coach",
      image: "/img/team/team-5.jpg",
      bio: "Management, is a graduate of Wingate Institute of Sport, and is a certified Level 2 CrossFit Trainer. With over 8 years of hands-on coaching experience, Daniel has dedicated his career to guiding athletes of all levels, from complete beginners to seasoned competitors. His passion lies in creating a positive training environment where people feel challenged, supported, and motivated to push past their limits. &quot;Teaching CrossFit is my favorite thing to do. Every day I have the opportunity to introduce this sport to new people, helping them build healthy habits, stay consistent, and hopefully carry that strength with them for life.&quot; Daniel believes CrossFit is more than just fitness, it&apos;s a lifestyle that builds resilience, community, and long-lasting well-being.",
      certifications: [
        "Graduate of Wingate Institute of Sport",
        "Crossfit Trainer Certificate Level 2"
      ]
    },
    {
      name: "Carlene",
      role: "Max Power Mobility Instructor",
      image: "/img/team/team-6.jpg",
      bio: "",
      certifications: []
    },
    {
      name: "Jace",
      role: "Primal Power Yoga Instructor",
      image: "/img/team/team-4.jpg",
      bio: "",
      certifications: []
    },
  ];

  return (
    <>
      <Breadcrumb route={'Our Team'} />
      <div className="flex flex-col gap-8 items-start justify-center p-4 my-20 text-brand-gray-medium container mx-auto max-w-[1200px] font-mulish">
        <h1 className="text-4xl font-semibold text-white text-center w-full">Our Team</h1>
        <p className="text-center w-full">Meet the amazing team of coaches and trainers who are here to help you achieve your fitness goals.</p>

        <div className="grid grid-cols-1 gap-12 w-full mt-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col md:flex-row gap-6 p-8 bg-brand-gray-dark rounded-lg">
              <div className="w-48 h-48 relative rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 flex-1">
                <div>
                  <h2 className="text-3xl font-semibold text-white">{member.name}</h2>
                  <p className="text-brand-orange text-lg">{member.role}</p>
                </div>
                {member.bio && (
                  <p className="text-brand-gray-medium leading-relaxed">{member.bio}</p>
                )}
                {member.certifications && member.certifications.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Certifications</h3>
                    <ul className="list-disc list-inside space-y-1 text-brand-gray-medium">
                      {member.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
