import React from "react";
import patterts from "../../assets/Parterns.svg";
import { Users } from "lucide-react";

interface FinTechEventsProps {
  title?: string;
  description?: string;
  engagedPlayers?: number;
}

const FinTechEvents: React.FC<FinTechEventsProps> = ({
  title = "Engage, Learn & Network at Rwanda's Leading FinTech Events",
  description = "From conferences and workshops to networking meetups, stay updated with the latest events shaping the future of financial technology in Rwanda.",
  engagedPlayers = 300,
}) => {
  return (
    <div className="w-full bg-primary p-8 relative">
      <div className="w-11/12 grid grid-cols-2 mx-auto">
        <aside className="grid relative grid-cols-2 gap-x-4">
          <div className="">
            <img
              src="./eventog.jpg"
              className="h-[400px] w-full rounded-lg object-cover"
              alt="Event"
            />
          </div>
          <div className="flex flex-col items-end">
            <img src={patterts} alt="partners" className="object-cover" />
            <img
              src="./event3.jpg"
              className="flex-1 w-full rounded-lg object-cover"
              alt="Event"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-lg py-3 px-2 flex flex-col items-center">
            <div className="text-sm flex gap-x-4">
              <Users className="text-2xl inline" />
              <span className="font-bold text-2xl">{engagedPlayers}+</span>
            </div>
            <div className="text-sm">FinTech Players Engaged</div>
          </div>
        </aside>
        <aside className="flex w-11/12 mx-auto space-y-4 flex-col items-start justify-center text-start text-white">
          <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white">{description}</p>

          <button className="bg-secondary text-sm text-primary py-2 px-4 rounded-3xl mt-4">
            View Upcoming Events
          </button>
        </aside>
      </div>
    </div>
  );
};

export { FinTechEvents };
