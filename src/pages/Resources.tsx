import resource1 from "../assets/resource1.svg";
import card from "../assets/card.svg";
import resource2 from "../assets/resource2.svg";
import resource3 from "../assets/resource3.svg";
import resource4 from "../assets/resource4.svg";
import resource5 from "../assets/resource5.svg";
import News from "../components/Events/News";

function Resources() {
  return (
    <main className="bg-white flex flex-col justify-center py-12 pt-20">
      <article className="w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* <!-- Main Featured Card --> */}
          <div className="relative rounded-lg overflow-hidden shadow-lg md:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <img
              src="./event2.jpg"
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

          {/* <!-- Right Column Cards --> */}
          <div className="grid grid-cols-1 gap-4 md:col-span-2">
            {/* <!-- First Card --> */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <img
                src="./fintech1.jpg"
                alt="Startups funding"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h2 className="text-lg font-bold py-2 text-white">
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

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <img
                src="./event3.jpg"
                alt="Startup ABC"
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <h2 className="text-lg font-bold py-2 text-white">
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
        <div className="grid w-11/12 mx-auto grid-cols-1 sm:grid-cols-2 gap-y-12 md:grid-cols-3 gap-4">
          <div className="space-y-4 p-4 flex flex-col">
            <img src={resource1} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Ecosystem Map</h4>
            <p className="text-sm text-white">
              An interactive directory detailing Rwanda’s fintech landscape,
              showcasing startups, established companies, financial
              institutions, and support organizations. This map serves as a
              comprehensive guide to the players driving innovation in Rwanda’s
              financial sector.
            </p>
          </div>
          <div className="space-y-4 p-4 flex flex-col">
            <img src={card} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Regulatory Framework</h4>
            <p className="text-sm text-white">
              A section dedicated to outlining the regulatory environment for
              fintech in Rwanda, including licensing requirements, compliance
              guidelines, and links to pertinent regulatory bodies. This
              resource assists fintech companies in understanding and navigating
              the legal landscape effectively.
            </p>
          </div>
          <div className="space-y-4 p-4 flex flex-col">
            <img src={resource2} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">
              Investment Opportunities
            </h4>
            <p className="text-sm text-white">
              A curated list of venture capital firms, angel investors, and
              funding programs interested in supporting Rwandan fintech
              ventures. This directory connects startups with potential
              investors to foster growth and innovation.
            </p>
          </div>
          <div className="space-y-4 p-4 flex flex-col">
            <img src={resource3} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">
              Capacity Building and Training
            </h4>
            <p className="text-sm text-white">
              Information on available courses, workshops, and certification
              programs focused on fintech and digital finance. This section
              promotes skill development and talent cultivation within the
              industry.
            </p>
          </div>
          <div className="space-y-4 p-4 flex flex-col">
            <img src={resource4} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Career Opportunities</h4>
            <p className="text-sm text-white">
              A job board featuring current openings in the fintech sector,
              enabling professionals to find roles that match their expertise
              and interests, and helping companies attract qualified talent.
            </p>
          </div>
          <div className="space-y-4 p-4 flex flex-col">
            <img src={resource5} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">
              Service Providers Directory
            </h4>
            <p className="text-sm text-white">
              A listing of businesses offering essential services to fintech
              companies, such as legal counsel, marketing, technology solutions,
              and consulting. This directory supports fintechs in finding
              reliable partners and service providers.
            </p>
          </div>
          {/* <div className="space-y-4 p-4 flex flex-col">
            <img src={resource6} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">News and Events</h4>
            <p className="text-sm text-white">
              Regular updates on industry news, upcoming events, webinars, and
              conferences relevant to the fintech community in Rwanda. This
              section keeps members informed and engaged with the latest
              developments and opportunities.
            </p>
          </div>
          <div className="space-y-4 p-4 flex flex-col">
            <img src={resource7} className="h-16 w-16" />
            <h4 className="text-secondary font-medium">Innovation Sandbox</h4>
            <p className="text-sm text-white">
              Details about the FinTech Heritage Sandbox initiative by the
              National Bank of Rwanda, providing a controlled environment for
              fintech companies to test and refine their innovations before
              scaling them to the broader market.
            </p>
          </div> */}
        </div>
      </article>
      <News />
    </main>
  );
}

export default Resources;
