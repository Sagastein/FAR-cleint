import { Building2, Rocket, LineChart, Users, Globe2 } from "lucide-react";

function ServicesGrid() {
  const services = [
    {
      title: "Capacity Building & Training",
      description:
        "Workshops, certifications, and professional training designed to equip FinTech entrepreneurs and professionals with cutting-edge skills.",
      icon: Building2,
    },
    {
      title: "FinTech Startup Incubation    ",
      description:
        "A startup support program that provides mentorship, funding access, and business development guidance to early stage FinTechs.",
      icon: Rocket,
    },
    {
      title: "Policy & Regulatory Advocacy",
      description:
        "We work closely with regulators and policymakers to create an enabling environment for FinTech innovation.",
      icon: LineChart,
    },
    {
      title: "FinTech Fridays & Industry Networking",
      description:
        "Monthly networking events bringing together industry experts, startups, and investors to discuss trends and collaboration opportunities.",
      icon: Users,
    },
    {
      title: "Market Expansion & Investment Matching",
      description:
        "Helping FinTechs access funding, scale internationally, and build investor-ready business models.",
      icon: Globe2,
    },
  ];

  return (
    <div className="w-11/12 mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-gray-100 relative h-[200px] rounded-lg p-6 flex flex-col gap-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-start w-10/12 text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-5 absolute bottom-2 py-4 text-sm">
                    {service.description}
                  </p>
                </div>
                <div className="bg-white absolute right-0 top-0 p-4 rounded-lg">
                  <div className="bg-gray-900 p-2 rounded-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesGrid;
