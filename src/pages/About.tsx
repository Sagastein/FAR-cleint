import { useState } from "react";
import Collabtoration_image from "../assets/team-goal.png";
import success from "../assets/success.png";
import players from "../assets/players.svg";
import { Check, CircleCheck } from "lucide-react";
import Stats from "../components/About/Stats";
import OurPartnersAbout from "../components/About/OurPartners";
import TeamSection from "../components/About/TeamSlection";

function About() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const tabContent: { [key in "mission" | "vision"]: string } = {
    mission:
      "To position Rwanda as a leading center for financial technology in Africa by fostering innovation, security, and responsible growth.",
    vision:
      "To drive financial inclusion, innovation, and growth in Rwanda through collaboration, advocacy, and thought leadership.",
  };

  return (
    <main className="overflow-x-hidden">
      <header
        id="about-banner"
        className="flex flex-col py-2 justify-end items-center h-[50vh] bg-primary px-4"
      >
        <p className="text-white w-full md:w-6/12 mx-auto text-2xl md:text-3xl font-bold text-center">
          Transforming Rwanda's FinTech Landscape
        </p>
        <button className="p-2 px-4 my-4 rounded-xl bg-secondary text-primary hover:bg-opacity-90 transition-all">
          Join Us Today
        </button>
      </header>

      <section className="max-w-6xl grid md:grid-cols-2 mx-auto p-4 md:p-6 gap-8">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-yellow-600 font-bold">Who We Are</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Empowering Rwanda's Financial Future
          </h1>
          <p className="leading-6 text-gray-700">
            Since 2018, the Rwanda FinTech Association has been the driving
            force behind Rwanda's emerging FinTech ecosystem. By fostering
            collaboration, promoting financial inclusion, and enabling
            innovation, we're shaping the future of finance in Africa.
          </p>

          {/* Tabs */}
          <div className="flex space-x-4 w-full">
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex-1 py-4 px-4 md:px-12 font-semibold rounded-md transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-black text-white border-b-2 border-secondary"
                  : "border-b-2 border-black text-black hover:bg-gray-100"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`flex-1 py-4 px-4 md:px-12 font-semibold rounded-md transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-black text-white border-b-2 border-secondary"
                  : "border-b-2 border-black text-black hover:bg-gray-100"
              }`}
            >
              Our Vision
            </button>
          </div>

          <p className="text-gray-600 min-h-[80px] transition-all duration-300">
            {tabContent[activeTab]}
          </p>
        </div>

        {/* Stats & Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Stats Card */}
          <div className="bg-black flex flex-col space-y-2 items-center text-white p-6 rounded-md text-center">
            <img
              src={players}
              alt="players"
              loading="lazy"
              className="w-16 h-16"
            />
            <div className="text-3xl text-secondary font-bold">300+</div>
            <p className="text-lg">FinTech Players Engaged</p>
          </div>

          {/* Image Placeholder */}
          <div className="w-full h-full">
            <img
              src={Collabtoration_image}
              alt="Collaboration"
              className="rounded-md w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative rounded-md w-full h-48 sm:h-full">
            <img
              src="/about1.jpg"
              className="rounded-md w-full h-full object-cover"
              alt="About"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-2">
              <h2 className="text-white text-center font-bold">
                Innovating, Collaborating, and Scaling Together.
              </h2>
            </div>
          </div>

          {/* Values List */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold text-lg mb-4">OUR VALUES</h3>
            <ul className="space-y-3">
              {[
                "Innovation",
                "Collaboration",
                "Integrity",
                "Inclusivity",
                "Excellence",
              ].map((value, index) => (
                <li key={index} className="flex items-center group">
                  <Check className="text-secondary-dark group-hover:scale-110 transition-transform" />
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <article className="w-11/12  p-4 md:p-12 grid md:flex gap-4 md:gap-x-12 m-12 mx-auto bg-slate-200">
          <aside>
            <h1 className="text-4xl w-8/12 text-primary">
              Our Roadmap to Success
            </h1>
            <ul className="flex flex-col justify-center space-y-5 mt-8">
              {[
                "Position Rwanda as a FinTech hub in Africa.",
                "Drive financial inclusion to reach underserved communities.",
                "Foster technological adoption of AI, blockchain, and open banking.",
                "Advocate for policy reforms to promote growth.",
                "Strengthen skills and capacity in the ecosystem.",
              ].map((value, index) => (
                <li key={index} className="flex gap-x-2  group">
                  <CircleCheck
                    size={24}
                    className="text-secondary-dark border"
                  />
                  <span className=" transition-transform text-sm md:text-nowrap">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
          <aside>
            <img
              src={success}
              loading="lazy"
              className="h-[55vh] w-full object-fill"
            />
          </aside>
        </article>
      </section>
      <Stats />
      <TeamSection />
      <OurPartnersAbout />
    </main>
  );
}

export default About;
