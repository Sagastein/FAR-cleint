import OurPartnersMembership from "../components/membership/OurPartners";
import FaqAccordion from "../components/membership/FaqAccordion";
import {
  MembershipOptions,
  MembershipTiers,
} from "../components/membership/MembershipTiers";
import { Testimonials } from "../components/membership/Testimonials";
const Hero = () => (
  <div className="bg-primary text-white py-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold">
          Be Part of Rwanda's FinTech Revolution
        </h1>
        <p className="text-gray-300">
          Join a thriving network of innovators, regulators, and investors
          shaping the future of financial technology in Rwanda.
        </p>
        <button className="bg-secondary text-primary px-6 py-3 rounded-md font-semibold">
          Become a Member Today
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img src="/fintech1.jpg" alt="FinTech" className="rounded-lg w-full" />
      </div>
    </div>
  </div>
);

const JourneySteps = () => {
  const steps = [
    { number: "01", text: "Choose your membership tier" },
    { number: "02", text: "Fill out the online application form" },
    { number: "03", text: "Submit payment securely" },
    { number: "04", text: "Receive confirmation and enjoy your benefits!" },
  ];

  return (
    <div className="py-16 w-11/12 grid md:grid-cols-2 gap-x-6 px-4 max-w-7xl mx-auto">
      <div className="max-w-2xl py-12">
        <h2 className="text-3xl font-bold mb-4">
          Your Journey to FinTech Success Starts Here
        </h2>
        <p className="text-gray-600 mb-8">
          Joining the Rwanda FinTech Association is more than just a
          membership—it's your gateway to unparalleled opportunities, industry
          insights, and strategic collaborations that will shape the future of
          finance.
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded-xl">
          Apply for Membership
        </button>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`bg-primary h-[20vh] text-white p-6 rounded-lg ${
              parseInt(step.number) % 2 === 0 ? "-mt-4" : ""
            }`}
          >
            <div className="text-xl text-secondary font-bold mb-2">
              {step.number}
            </div>
            <div>{step.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Membership = () => (
  <div>
    <Hero />
    <JourneySteps />
    <MembershipTiers />
    <MembershipOptions />
    <Testimonials />
    <OurPartnersMembership />
    <FaqAccordion />
  </div>
);

export default Membership;
