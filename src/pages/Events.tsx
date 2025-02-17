import React from "react";
import { FinTechEvents } from "../components/Events/FinTechEvents";
import UpcomingEvents from "../components/Events/EventCard";
import PastEvents from "../components/Events/PastEvents";

const Events: React.FC = () => {
  return (
    <main>
      <FinTechEvents />
      <UpcomingEvents />
      <PastEvents />
      <footer
        id="footer-sub"
        className="flex gap-4 bg-[url('./community.jpg')] h-[300px]"
      >
        <aside className="flex flex-1 px-12 justify-center items-center">
          <h1 className="text-white font-bold text-4xl">
            Never Miss a FinTech Event Again!
          </h1>
        </aside>
        <aside className="flex flex-col flex-1 justify-center ">
          <h3 className="text-white text-2xl">News Letter</h3>
          <div className="border w-10/12 border-secondary rounded-lg flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full text-white focus:border-secondary bg-transparent border-none rounded-l-lg"
            />
            <button className="bg-secondary text-primary rounded-r-lg p-2 px-4 hover:bg-primary hover:text-secondary transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </aside>
      </footer>
    </main>
  );
};

export default Events;
