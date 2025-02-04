const programs = [
  {
    title: "Capacity Building & Training",
    description:
      "Workshops, certifications, and professional training designed to equip FinTech entrepreneurs and professionals with cutting-edge skills.",
    buttonText: "Explore Training Programs",
    image: "/event2.jpg",
  },
  {
    title: "FinTech Startup Incubation",
    description:
      "A startup support program that provides mentorship, funding access, and business development guidance to early-stage FinTechs.",
    buttonText: "Apply for Incubation",
    image: "/event1.jpg",
  },
  {
    title: "Policy & Regulatory Advocacy",
    description:
      "We work closely with regulators and policymakers to create an enabling environment for FinTech innovation.",
    buttonText: "See Our Policy Initiatives",
    image: "/event3.jpg",
  },
];

const ProgramListings = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <div className="space-y-16">
        {programs.map((program, index) => (
          <div
            key={program.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={program.image}
                alt={program.title}
                className="w-full rounded-lg object-cover aspect-video"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">{program.title}</h3>
              <p className="text-primary">{program.description}</p>
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                {program.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramListings;
