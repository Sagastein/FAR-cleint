import chairman from "../../assets/chairman.png";
function TeamSection() {
  const teamMembers = [
    {
      title: "Chairman",
      role: "Chairman",
      image: chairman,
    },
    {
      title: "FinTech Coordinator",
      role: "FinTech Coordinator",
      image: chairman,
    },
    {
      title: "Chairman",
      role: "Chairman",
      image: chairman,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="text-secondary-dark font-medium mb-2">Our Team</h3>
          <h2 className="text-3xl font-bold mb-4">
            A Framework for Accountability
          </h2>
          <p className="text-gray-600">
            Guided by the ICT Chamber, we ensure strategic alignment and strong
            leadership.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute w-11/12 mx-auto bottom-2 left-0 right-0 bg-primary rounded-xl shadow-md p-4">
                  <h3 className="text-white text-center font-semibold mb-1">
                    {member.title}
                  </h3>
                  <p className="text-secondary text-center">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
