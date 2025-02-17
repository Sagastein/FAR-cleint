import React, { useState } from "react";

interface PastEvent {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const pastEvents: PastEvent[] = [
  {
    id: 1,
    title: "Shaping the Future of FinTech:",
    subtitle: "Rwanda's National FinTech Strategy Launch",
    image: "event1.jpg",
  },
  {
    id: 2,
    title: "FinTech Leaders Forum 2025:",
    subtitle: "Shaping the Future of Finance in Rwanda",
    image: "event1.jpg",
  },
  {
    id: 3,
    title: "FinTech Leaders Forum 2025:",
    subtitle: "Shaping the Future of Finance in Rwanda",
    image: "event1.jpg",
  },
  {
    id: 4,
    title: "Shaping the Future of FinTech:",
    subtitle: "Rwanda's National FinTech Strategy Launch",
    image: "event1.jpg",
  },
  {
    id: 5,
    title: "FinTech Leaders Forum 2025:",
    subtitle: "Shaping the Future of Finance in Rwanda",
    image: "event1.jpg",
  },
  {
    id: 6,
    title: "FinTech Leaders Forum 2025:",
    subtitle: "Shaping the Future of Finance in Rwanda",
    image: "event1.jpg",
  },
  {
    id: 7,
    title: "Shaping the Future of FinTech:",
    subtitle: "Rwanda's National FinTech Strategy Launch",
    image: "event1.jpg",
  },
];

const PastEventCard: React.FC<{ event: PastEvent }> = ({ event }) => (
  <div className="relative group cursor-pointer">
    <div className="relative h-[250px] rounded-lg overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black/10" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-200 text-sm">{event.subtitle}</p>
      </div>
    </div>
  </div>
);

const PastEvents: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  const totalPages = Math.ceil(pastEvents.length / eventsPerPage);

  const getCurrentEvents = () => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;
    return pastEvents.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-11/12 mx-auto py-12 bg-gray-50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore Past Events & Key Takeaways
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getCurrentEvents().map((event) => (
          <PastEventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
            currentPage === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
          aria-label="Previous page"
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`p-2 h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 
              ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-primary/90 hover:text-white"
              }`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 h-8 w-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
            currentPage === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
          aria-label="Next page"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PastEvents;
