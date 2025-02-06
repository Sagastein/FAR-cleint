function Stats() {
  const stats = [
    {
      value: "300 +",
      label: "FinTech Players Engaged",
    },
    {
      value: "7,500",
      label: "Jobs Created by 2029",
    },
    {
      value: "80%",
      label: "FinTech Adoption across Rwanda",
    },
    {
      value: "$200",
      label: "in Investments projected",
    },
  ];

  return (
    <div className="bg-primary text-white w-full p-4 md:p-6">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 w-11/12 mx-auto">
        {stats.map((stat, index) => (
          <aside
            key={index}
            className={`flex flex-col items-center space-y-2 relative
              ${index < stats.length - 1 ? "md:border-r border-white" : ""}
              ${index % 2 === 0 ? "border-r border-white" : ""}
              ${index < stats.length - 2 ? " pb-6 md:pb-0 border-white" : ""}
              ${index === 1 ? "md:border-b-0" : ""}
              md:py-4
            `}
          >
            <h1 className="text-2xl md:text-3xl text-secondary font-bold">
              {stat.value}
            </h1>
            <p className="text-white text-xs text-center px-2">{stat.label}</p>
          </aside>
        ))}
      </section>
    </div>
  );
}

export default Stats;
