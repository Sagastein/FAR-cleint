import { Link } from "react-router-dom";
import Logo_black from "../../assets/far-logo.png";
import { membersprofile } from "../../constants/members";
import Tooltip from "../Tooltip";
import { motion } from "motion/react";

function MembersSection() {
  const members = membersprofile.slice(0, 4); // Get the first 4 members
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto border border-secondary rounded-3xl p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Members
            </h2>
            <p className="text-gray-600">
              Discover the innovators and businesses shaping the future of
              FinTech in Rwanda.
            </p>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start group hover:shadow-lg rounded-xl transition-shadow duration-300"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
              >
                {/* Card with logo */}
                <div className="relative w-full bg-primary  rounded-t-xl p-4">
                  <div className="absolute -bottom-6 left-4 w-16 h-16 rounded-full bg-secondary p-0.5 shadow-md transition-transform group-hover:scale-110">
                    <img
                      src={
                        member.logo ||
                        `https://ui-avatars.com/api/?background=dcfce7&name=${member.company_name}`
                      }
                      alt={`${member.company_name} logo`}
                      className="w-full h-full object-fill bg-center rounded-full"
                    />
                  </div>
                  <img
                    src={Logo_black}
                    alt="FinTech Association Rwanda"
                    className="h-8"
                  />
                </div>

                {/* Member Info */}
                <div className="pt-8 px-4 pb-4 w-full">
                  <h3 className="font-semibold text-lg mb-2">
                    {member.company_name}
                  </h3>
                  <div className="relative">
                    <p className="text-gray-600 text-sm line-clamp-5 mb-2">
                      {member.company_profile}
                    </p>
                    {member.company_profile.length > 250 && (
                      <div className="relative">
                        <Tooltip content={member.company_profile}>
                          <button
                            className="text-sm font-medium text-primary-600 hover:text-primary-700 
                                       focus:outline-none flex items-center gap-1"
                          >
                            Read more
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 5L16 12L9 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to={"/members"}
              className="px-8 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
            >
              View All Members
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembersSection;
