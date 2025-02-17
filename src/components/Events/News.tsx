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

import { useState } from "react";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page

  // Calculate total pages
  const totalPages = Math.ceil(newsAndEvents.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsAndEvents.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-12">
      <div className="w-11/12 mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">News</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentItems.map((event, index) => (
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
                className="w-full h-52 rounded-lg object-cover"
              />

              <div className="py-4">
                <a
                  href={event.link}
                  className="inline-block text-primary hover:text-secondary font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "hover:bg-primary-light"
            }`}
            aria-label="Previous page"
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`p-2 h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "hover:bg-primary-light"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed"
                : "hover:bg-primary-light"
            }`}
            aria-label="Next page"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
