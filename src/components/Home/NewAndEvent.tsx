const newsAndEvents = [
  {
    date: "May 2025",
    headline:
      "Shaping the Future of FinTech: Rwanda's National FinTech Strategy",
    image: "/event1.jpg",
    link: "#",
  },
  {
    date: "May 2025",
    headline:
      "Shaping the Future of FinTech: Rwanda's National FinTech Strategy",
    image: "/event2.jpg",
    link: "#",
  },
  {
    date: "May 2025",
    headline:
      "Shaping the Future of FinTech: Rwanda's National FinTech Strategy",
    image: "/event3.jpg",
    link: "#",
  },
];

const NewsAndEvents = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-secondary-dark">News and Events</h2>
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Latest Updates and Events
          </h2>
          <a
            href="#"
            className="text-secondary-dark underline hover:text-secondary text-sm font-semibold"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsAndEvents.map((event, index) => (
            <div key={index} className="border-l pl-4 overflow-hidden">
              <p className="text-sm text-secondary-dark font-semibold mb-2">
                {event.date}
              </p>

              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {event.headline}
              </h3>

              <img
                src={event.image}
                alt={event.headline}
                className="w-full h-48 rounded-lg object-cover"
              />

              <div className=" py-4">
                <a
                  href={event.link}
                  className="inline-block text-primary hover:text-secondary"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
