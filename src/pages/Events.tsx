import React, { useState, useCallback, useEffect } from "react";
import News from "../components/Events/News";

interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => (
  <article className="relative rounded-md overflow-hidden transition-opacity duration-500 h-64 md:h-72 lg:h-64">
    <img
      src={event.image}
      className="h-full w-full object-cover"
      alt={`Event ${event.id}`}
      loading="lazy"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 bg-gradient-to-b to-[#000000F5] from-[#0000000F] p-4">
      <h1 className="text-white text-sm sm:text-base lg:text-lg">
        {event.title}
      </h1>
      <p className="mt-1 mb-3 text-xs text-secondary">{event.date}</p>
    </div>
  </article>
);

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      image: "./event1.jpg",
      title:
        "Shaping the Future of FinTech: Rwanda's National FinTech Strategy Launch",
      date: "May 2021",
    },
    {
      id: 2,
      image: "./event1.jpg",
      title:
        "Shaping the Future of FinTech: Rwanda's National FinTech Strategy Launch",
      date: "May 2025",
    },
    {
      id: 3,
      image: "./event1.jpg",
      title:
        "Shaping the Future of FinTech: Rwanda's National FinTech Strategy Launch",
      date: "May 2021",
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // Dynamically set items per page based on screen width
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    window.innerWidth >= 640 ? 2 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 640 ? 2 : 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(events.length / itemsPerPage);

  const goToPage = useCallback(
    (page: number): void => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentPage(page);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const nextPage = useCallback((): void => {
    goToPage((currentPage + 1) % totalPages);
  }, [currentPage, totalPages, goToPage]);

  const prevPage = useCallback((): void => {
    goToPage((currentPage - 1 + totalPages) % totalPages);
  }, [currentPage, totalPages, goToPage]);

  const getCurrentEvents = (): Event[] => {
    const startIdx = currentPage * itemsPerPage;
    return events.slice(startIdx, startIdx + itemsPerPage);
  };

  return (
    <>
      <main className="relative min-h-screen">
        <div className="relative bg-[url('./assets/KCC.webp')] bg-center bg-cover bg-no-repeat bg-black/60 bg-blend-darken h-[70vh] md:h-[50vh]  lg:h-[70vh] font-[Poppins] px-5">
          <div
            className="absolute left-1/2 -translate-x-1/2 container mx-auto 
          -bottom-[25%] sm:-bottom-[30%] md:-bottom-[40%] lg:-bottom-[50%] xl:-bottom-[60%]
          w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-7xl
          bg-primary shadow-lg rounded-lg
          p-4 sm:p-6 md:p-8 lg:p-12"
          >
            <h1 className="text-secondary text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">
              Upcoming Events
            </h1>

            <main className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
              {getCurrentEvents().map((event) => (
                <EventCard event={event} key={event.id} />
              ))}
            </main>

            <footer>
              <div className="flex items-center justify-between mt-4 sm:mt-6 md:mt-8">
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToPage(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                        index === currentPage
                          ? "bg-yellow-400"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2 sm:gap-3 md:gap-4">
                  <button
                    onClick={prevPage}
                    disabled={isAnimating}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-yellow-400 text-yellow-400 
                  flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 
                  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous slide"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextPage}
                    disabled={isAnimating}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-yellow-400 text-yellow-400 
                  flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 
                  transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next slide"
                  >
                    →
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh]" />
      </main>
      <News />
    </>
  );
};

export default Events;
