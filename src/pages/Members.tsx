import { useState } from "react";
import { Search, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Logo_black from "../assets/far-logo.png";
import { membersprofile } from "../constants/members";
import MemberModal from "../components/Modal/MemberModal";

function MembersDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // Number of items to display per page
  const [selectedMember, setSelectedMember] = useState<
    null | (typeof membersprofile)[0]
  >(null);

  // Sample member data
  // const members = Array(50).fill({
  //   name: "Kohl's",
  //   description:
  //     "Kohl's is a leading omnichannel retailer with more than 1,100 stores in 49 states.",
  //   logo: "/api/placeholder/100/100",
  // });

  // Filter members based on search query
  const filteredMembers = membersprofile.filter((membersprofile) =>
    membersprofile.company_name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

  // Get the members for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = filteredMembers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleReadMoreClick = (
    e: React.MouseEvent,
    member: (typeof membersprofile)[0]
  ) => {
    e.stopPropagation();
    setSelectedMember(member);
  };

  // Animation variants for the members grid
  const memberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for the search bar
  const searchVariants = {
    initial: { scale: 1 },
    focus: { scale: 1.02 },
  };

  // Animation variants for pagination buttons
  const paginationVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Members - The Future of FinTech in Rwanda
        </h1>
        <p className="text-gray-600">
          Meet the innovators, businesses, and professionals driving FinTech
          transformation.
        </p>
      </div>

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Search Bar */}
        <motion.div
          className="flex-1 relative"
          variants={searchVariants}
          initial="initial"
          whileFocus="focus"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Type a name, company, or keyword"
            className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>

        {/* Sort Dropdown */}
        <div className="w-40">
          <button className="w-full px-4 py-3 border rounded-lg bg-white flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4" />
              <span>Sort By</span>
            </div>
          </button>
        </div>
      </div>

      {/* Members Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {currentMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-start group hover:shadow-lg rounded-xl transition-shadow duration-300"
            variants={memberVariants}
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
                  className="w-full h-full bg-center rounded-full"
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
              <span className=" text-secondary-dark text-xs">
                {member.segment}
              </span>
              <div className="relative">
                <p className="text-gray-600 text-sm line-clamp-3 mb-2">
                  {member.company_profile}
                </p>
                {member.company_profile && (
                  <button
                    onClick={(e) => handleReadMoreClick(e, member)}
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
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedMember && (
        <MemberModal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          member={selectedMember}
        />
      )}

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <motion.button
          className="px-4 py-2 border rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variants={paginationVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronLeft />
        </motion.button>
        {Array.from({ length: totalPages }, (_, i) => (
          <motion.button
            key={i + 1}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === i + 1
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-50"
            }`}
            onClick={() => handlePageChange(i + 1)}
            variants={paginationVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {i + 1}
          </motion.button>
        ))}
        <motion.button
          className="px-4 py-2 border rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variants={paginationVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronRight />
        </motion.button>
      </div>
    </div>
  );
}

export default MembersDirectory;
