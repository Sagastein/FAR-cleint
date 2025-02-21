import Team_goal from "../../assets/team-goal.png";
import Capacity from "../../assets/capacity.svg";
import Advocacy from "../../assets/Advocacy.svg";
import Hubs from "../../assets/Hubs.svg";
import Resouces from "../../assets/Resources.svg";

function WhoWeAre() {
  return (
    <main className="py-2">
      <section className="md:flex h-[50%] justify-between items-center w-11/12 mx-auto">
        <div>
          <h2 className="text-sm text-secondary-dark font-medium">
            Who We Are
          </h2>
          <h1 className=" text-2xl sm:text-4xl text-primary font-bold">
            Empowering Rwanda’s FinTech Ecosystem
          </h1>
        </div>
        <div className="">
          <img
            src={Team_goal}
            loading="lazy"
            className="h-[300px] object-contain w-full"
          />
        </div>
      </section>
      <hr />
      <section className="bg-gray-200 py-10 flex flex-col items-center">
        <h2 className="text-sm text-secondary-dark text-center font-medium">
          What We Do
        </h2>
        <h1 className="text-2xl sm:text-4xl text-primary text-center font-bold">
          Driving Innovation and Impact
        </h1>

        <main className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 w-11/12 mx-auto mt-10">
          <div className="bg-white p-4 space-y-3 rounded-lg shadow-lg text-start">
            <img src={Capacity} loading="lazy" />
            <h3 className="text-lg text-primary font-bold">
              Capacity Building
            </h3>
            <p className="text-xs text-gray-800">
              Workshops and certifications to empower FinTech professionals.
            </p>
          </div>
          <div className="bg-white p-4 space-y-3 rounded-lg shadow-lg text-start">
            <img src={Advocacy} loading="eager" />
            <h3 className="text-lg text-primary font-bold">Policy Advocacy</h3>
            <p className="text-xs text-gray-800">
              Shaping regulatory frameworks for a thriving ecosystem.
            </p>
          </div>
          <div className="bg-white p-4 space-y-3 rounded-lg shadow-lg text-start">
            <img src={Hubs} />
            <h3 className="text-lg text-primary font-bold">Innovation Hub</h3>
            <p className="text-xs text-gray-800">
              Accelerating startups and fostering partnerships.
            </p>
          </div>
          <div className="bg-white p-4 space-y-3 rounded-lg shadow-lg text-start">
            <img src={Resouces} loading="lazy" />
            <h3 className="text-lg text-primary font-bold">
              Financial Inclusion
            </h3>
            <p className="text-xs text-gray-800">
              Promoting solutions that reach underserved communities.
            </p>
          </div>
        </main>
      </section>
    </main>
  );
}

export default WhoWeAre;
