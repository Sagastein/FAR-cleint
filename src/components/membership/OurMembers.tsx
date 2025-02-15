import { Link } from "react-router-dom";
import Logo_black from "../../assets/far-logo.png";
function MembersSection() {
  const members = [
    {
      name: "Kohl's",
      description:
        "Kohl's is a leading omnichannel retailer with more than 1,100 stores in 49 states.",
      logo: "/api/placeholder/100/100",
    },
    {
      name: "Kohl's",
      description:
        "Kohl's is a leading omnichannel retailer with more than 1,100 stores in 49 states.",
      logo: "/api/placeholder/100/100",
    },
    {
      name: "Kohl's",
      description:
        "Kohl's is a leading omnichannel retailer with more than 1,100 stores in 49 states.",
      logo: "/api/placeholder/100/100",
    },
    {
      name: "Kohl's",
      description:
        "Kohl's is a leading omnichannel retailer with more than 1,100 stores in 49 states.",
      logo: "/api/placeholder/100/100",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto border border-secondary rounded-3xl p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Members
            </h2>
            <p className="text-gray-600">
              Discover the innovators and businesses shaping the future of
              FinTech in Rwanda.
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {members.map((member, index) => (
              <div key={index} className="flex flex-col items-start">
                {/* Card with logo */}
                <div className="relative w-full bg-primary rounded-xl p-4 mb-4">
                  <img
                    src={`https://ui-avatars.com/api/?background=dcfce7&name=${member.name}`}
                    alt={`${member.name} logo`}
                    className="absolute -bottom-6 left-4 w-16 h-16 rounded-full bg-green-100"
                  />
                  <img src={Logo_black} alt="FinTech Association Rwanda" />
                </div>

                {/* Member Info */}
                <div className="pt-8 px-4">
                  <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to={"/members"}
              className="px-8 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              View All Members
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembersSection;
