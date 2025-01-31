
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
  // Add more news and events as needed
];

const News = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">News</h2>
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
      {/* pagination */}
      <div>
        <div className="flex justify-center items-center mt-4">
          <button className="p-2 h-8 w-8 text-center rounded-full transition-colors duration-300 ">
            &lt;
          </button>
          <button className="p-2 h-8 w-8 text-center rounded-full transition-colors duration-300 bg-yellow-400">
            01
          </button>
          <button className="p-2 h-8 w-8 text-center  rounded-full transition-colors duration-300  hover:bg-gray-500">
            02
          </button>
          <button className="p-2 h-8 w-8 text-center rounded-full transition-colors duration-300  hover:bg-gray-500">
            03
          </button>
          <button className="p-2 h-8 w-8 text-center rounded-full transition-colors duration-300  hover:bg-gray-500">
            04
          </button>
          <button className="p-2 h-8 w-8 text-center rounded-full transition-colors duration-300  hover:bg-gray-500">
            05
          </button>
          <button className="p-2 h-8 w-8 text-center rounded-full transition-colors duration-300 ">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
