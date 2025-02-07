import communit from "../../assets/community.jpg";
import { CircleCheck } from "lucide-react";
import VerticalSlider from "./VerticalSlider";
function Community() {
  return (
    <>
      <main className="w-11/12 py-12 grid grid-cols-2 mx-auto">
        <img
          src={communit}
          className="h-[500px] rounded-3xl object-cover  w-full"
          loading="lazy"
        />
        <div className="flex-1 space-y-6 p-10">
          <h2 className="text-secondary-dark text-sm font-medium">
            Be Part of the Change
          </h2>
          <h1 className="text-4xl text-primary font-bold">
            Join a Thriving FinTech Community
          </h1>
          <p className="text-gray-800 text-sm mt-5 leading-6">
            Whether you’re a student, startup, or established professional, our
            membership tiers are designed to support your growth and success
            within the FinTech ecosystem.
          </p>
          <ul className="text-sm text-gray-800 mt-5 space-y-3">
            <li className="flex gap-2 items-center">
              <CircleCheck size={24} className="text-secondary-dark" />
              <span>
                Networking opportunities with global and local stakeholders.
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CircleCheck size={24} className="text-secondary-dark" />
              <span>
                Access to training, mentorship, and capacity-building programs.
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CircleCheck size={24} className="text-secondary-dark" />
              <span>
                Access to training, mentorship, and capacity-building programs.
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <CircleCheck size={24} className="text-secondary-dark" />
              <span>Advocacy for policy and regulatory support.</span>
            </li>
          </ul>
        </div>
      </main>
      <div className="relative">
        <VerticalSlider />
      </div>
    </>
  );
}

export default Community;
