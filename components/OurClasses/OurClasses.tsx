import React from "react";

const classes = [
  {
    img: "img/classes/class-1.jpg",
    category: "STRENGTH",
    title: "Weightlifting",
  },
  {
    img: "img/classes/class-2.jpg",
    category: "Cardio",
    title: "Indoor cycling",
  },
  {
    img: "img/classes/class-3.jpg",
    category: "STRENGTH",
    title: "Kettlebell power",
  },
  {
    img: "img/classes/class-4.jpg",
    category: "Cardio",
    title: "Indoor cycling",
  },
  {
    img: "img/classes/class-5.jpg",
    category: "Training",
    title: "Boxing",
  },
];

const OurClasses: React.FC = () => {
  return (
    <section className="bg-brand-background-1 py-20 w-full">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-brand-orange text-lg uppercase tracking-wide">Our Classes</span>
          <h2 className="text-4xl font-bold text-white mt-2">WHAT WE CAN OFFER</h2>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div key={index} className="bg-white/10 rounded-lg overflow-hidden shadow-md">
              {/* Image */}
              <div className="ci-pic">
                <img
                  src={classItem.img}
                  alt={classItem.title}
                  className="w-full h-56 object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="ci-text p-4 text-center">
                <span className="text-brand-orange text-sm font-semibold uppercase">
                  {classItem.category}
                </span>
                <h5 className="text-lg font-bold text-white mt-2">{classItem.title}</h5>
                <a
                  href="#"
                  className="inline-block mt-4 text-brand-orange text-lg hover:scale-110 transition transform duration-200"
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClasses;
