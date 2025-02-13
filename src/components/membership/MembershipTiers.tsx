export const MembershipTiers = () => {
  const tiers = [
    {
      name: "Student",
      fee: "50,000",
      benefits: "Access to training, mentorship, and select events.",
    },
    {
      name: "Professional",
      fee: "100,000",
      benefits: "Industry insights, networking, and regulatory updates.",
    },
    {
      name: "Startup",
      fee: "250,000",
      benefits: "Visibility, business growth, and incubation opportunities.",
    },
    {
      name: "Silver",
      fee: "500,000",
      benefits: "Priority access to funding, events, and investor networks.",
    },
    {
      name: "Gold",
      fee: "1,000,000",
      benefits: "Thought leadership, premium access to policy discussions.",
    },
    {
      name: "Platinum",
      fee: "3,000,000",
      benefits:
        "All benefits, top-tier recognition, and direct industry influence",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl text-center font-bold mb-8">
        Choose a Membership That Fits Your Needs
      </h2>
      <div className="overflow-x-auto w-11/12 mx-auto">
        <table className="w-full border bg-primary border-collapse  rounded-lg overflow-x-auto">
          <thead className="bg-primary text-secondary">
            <tr>
              <th className="p-4 border text-left">Tier</th>
              <th className="p-4 border text-left">Annual Fee (RWF)</th>
              <th className="p-4 min-w-40 border text-left">Key Benefits</th>
            </tr>
          </thead>
          <tbody className="bg-primary text-white">
            {tiers.map((tier) => (
              <tr key={tier.name} className={"bg-primary border"}>
                <td className="p-4 border font-medium">{tier.name}</td>
                <td className="p-4 border">{tier.fee}</td>
                <td className="p-4 border">
                  {tier.benefits}{" "}
                  <a href="#" className="text-secondary-dark ">
                    Read More
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface MembershipCardProps {
  tier: string;
  price: string;
  description: string;
}

export const MembershipCard = ({
  tier,
  price,
  description,
}: MembershipCardProps) => (
  <div className="bg-primary p-6 rounded-lg flex flex-col h-full">
    <h3 className="text-secondary text-xl font-bold mb-4">{tier}</h3>
    <p className="text-white mb-4">{description}</p>
    <div className="mt-auto">
      <div className="text-white mb-4">
        <span className="text-2xl font-bold">{price}</span>
        <span className="text-gray-400">/year</span>
      </div>
      <button className="w-full border border-secondary text-secondary py-2 px-4 rounded-xl hover:bg-secondary hover:text-primary transition-colors">
        Start Your Membership
      </button>
    </div>
  </div>
);

export const MembershipOptions = () => {
  const tiers = [
    {
      tier: "Student",
      price: "50,000 RWF",
      description: "Access to training, mentorship, and select events.",
    },
    {
      tier: "Professional",
      price: "100,000 RWF",
      description: "Industry insights, networking, and regulatory updates.",
    },
    {
      tier: "Startup",
      price: "200,000 RWF",
      description: "Visibility, business growth, and incubation opportunities.",
    },
    {
      tier: "Silver",
      price: "500,000 RWF",
      description: "Priority access to funding, events, and investor networks.",
    },
    {
      tier: "Gold",
      price: "1,000,000 RWF",
      description: "Thought leadership, premium access to policy discussions.",
    },
    {
      tier: "Platinum",
      price: "2,000,000 RWF",
      description: "All benefits, recognition, and direct industry influence.",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Explore Our Membership Option
      </h2>
      <div className="grid container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <MembershipCard key={tier.tier} {...tier} />
        ))}
      </div>
    </div>
  );
};
