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
    </main>
  );
};

export default Events;
