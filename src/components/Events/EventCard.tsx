import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";

interface Event {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  time: string;
  location: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Shaping the Future of FinTech:",
    subtitle: "Rwanda's National FinTech Strategy Launch",
    image: "/event2.jpg",
    time: "9:00 AM - 10:00 AM",
    location: "SRB, Kigali, Norrsken",
  },
  {
    id: 2,
    title: "FinTech Leaders Forum 2025:",
    subtitle: "Shaping the Future of Finance in Rwanda",
    image: "/event2.jpg",
    time: "9:00 AM - 10:00 AM",
    location: "SRB, Kigali, Norrsken",
  },
  {
    id: 3,
    title: "FinTech Leaders Forum 2025:",
    subtitle: "Shaping the Future of Finance in Rwanda",
    image: "/event1.jpg",
    time: "9:00 AM - 12:00 AM",
    location: "SRB, Kigali, Norrsken",
  },
  {
    id: 4,
    title: "FinTech Leaders Forum 2025:",
    subtitle: "Shaping the Future of Finance in Rwanda",
    image: "/eventog.jpg",
    time: "9:00 AM - 12:00 AM",
    location: "SRB, Kigali, Norrsken",
  },
  {
    id: 5,
    title: "FinTech Leaders Forum 2025:",
    subtitle: "Shaping the Future of Finance in Rwanda",

    image: "/event3.jpg",
    time: "9:00 AM - 12:00 AM",
    location: "SRB, Kigali, Norrsken",
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="relative group">
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/0" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
        <p className="text-gray-200 mb-2">{event.subtitle}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 p-0.5 border border-secondary rounded-full text-secondary" />
            <span className="text-xs text-secondary">{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 p-0.5 border border-secondary rounded-full text-secondary" />
            <span className="text-xs text-secondary">{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const UpcomingEvents: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const getCurrentEvents = () => {
    const startIdx = currentPage * itemsPerPage;
    return events.slice(startIdx, startIdx + itemsPerPage);
  };

  const goToPage = (page: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(page);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextPage = () => {
    goToPage((currentPage + 1) % totalPages);
  };

  const prevPage = () => {
    goToPage((currentPage - 1 + totalPages) % totalPages);
  };

  return (
    <div className="w-11/12 mx-auto  my-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-primary">
          Upcoming Events You Can't Miss
        </h2>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getCurrentEvents().map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentPage
                  ? "bg-yellow-400"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={isAnimating}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-yellow-400 text-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextPage}
            disabled={isAnimating}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-yellow-400 text-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
