import resource1 from "../assets/resource1.svg";
import card from "../assets/card.svg";
import resource2 from "../assets/resource2.svg";
import resource3 from "../assets/resource3.svg";
import resource4 from "../assets/resource4.svg";
import resource5 from "../assets/resource5.svg";

function Resources() {
  return (
    <main className="bg-white flex flex-col justify-center py-12 pt-20">
      <article className="w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main Featured Card */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <img
              src="./event1.jpg"
              alt="Rwanda FinTech"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">
                A comprehensive report on Rwanda's FinTech landscape, emerging
                trends, and growth opportunities.
              </h2>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">19 hours ago</span>
                <button className="px-4 py-1 hover:bg-yellow-500 rounded-full text-sm font-medium border border-secondary text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="grid grid-cols-1 gap-4">
            {/* First Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <img
                src="./fintech1.jpg"
                alt="Startups funding"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h2 className="text-lg font-bold py-2  text-white">
                  Startup ABC Secures $1M Seed Funding via Hanga Central
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">19 hours ago</span>
                  <button className="px-2 py-1 hover:bg-yellow-500 rounded-full text-xs font-medium border border-secondary text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <img
                src="./fintech1.jpg"
                alt="Startup ABC"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h2 className="text-lg font-bold py-2  text-white">
                  Startup ABC Secures $1M Seed Funding via Hanga Central
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">19 hours ago</span>
                  <button className="px-2 py-1 hover:bg-yellow-500 rounded-full text-xs font-medium border border-secondary text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="w-full p-2 bg-primary my-6">
        <h1 className="my-4 text-white text-center text-2xl font-bold">
          Explore Our Latest Resources
        </h1>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 gap-4">
          <div className=" space-y-4 p-4 flex flex-col">
            <img src={resource1} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Ecosystem Map</h4>
            <p className="text-sm text-white">
              Australia’s most comprehensive and interactive fintech ecosystem
              map to help better understand the gamechangers in the country.
            </p>
          </div>
          <div className=" space-y-4 p-4 flex flex-col ">
            <img src={card} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Regulatory Map</h4>
            <p className="text-sm text-white">
              Australia’s most comprehensive and interactive fintech ecosystem
              map to help better understand the gamechangers in the country.
            </p>
          </div>
          <div className=" space-y-4 p-4 flex flex-col ">
            <img src={resource2} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Ecosystem Map</h4>
            <p className="text-sm text-white">
              Australia’s most comprehensive and interactive fintech ecosystem
              map to help better understand the gamechangers in the country.
            </p>
          </div>{" "}
          <div className=" space-y-4 p-4 flex flex-col ">
            <img src={resource3} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Ecosystem Map</h4>
            <p className="text-sm text-white">
              Australia’s most comprehensive and interactive fintech ecosystem
              map to help better understand the gamechangers in the country.
            </p>
          </div>{" "}
          <div className=" space-y-4 p-4 flex flex-col ">
            <img src={resource4} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Ecosystem Map</h4>
            <p className="text-sm text-white">
              Australia’s most comprehensive and interactive fintech ecosystem
              map to help better understand the gamechangers in the country.
            </p>
          </div>{" "}
          <div className=" space-y-4 p-4 flex flex-col ">
            <img src={resource5} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Ecosystem Map</h4>
            <p className="text-sm text-white">
              Australia’s most comprehensive and interactive fintech ecosystem
              map to help better understand the gamechangers in the country.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Resources;
