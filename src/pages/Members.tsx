import { useState } from "react";
import { Search, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import Logo_black from "../assets/far-logo.png";

function MembersDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items to display per page

  // Sample member data
  const members = Array(25).fill({
    name: "Kohl's",
    description:
      "Kohl's is a leading omnichannel retailer with more than 1,100 stores in 49 states.",
    logo: "/api/placeholder/100/100",
  });

  // Filter members based on search query
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Type a name, company, or keyword"
            className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {currentMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-start">
            {/* Card with logo */}
            <div className="relative w-full bg-primary rounded-xl p-4 mb-4">
              <img
                src={`https://ui-avatars.com/api/?background=dcfce7&name=${member.name}`}
                alt={`${member.name} logo`}
                className="absolute -bottom-6 left-4 w-16 h-16 rounded-full bg-green-100"
              />
              <img src={Logo_black} alt="FinTech Association Rwanda" />
            </div>

            {/* Member Info */}
            <div className="pt-8 px-4">
              <h3 className="font-semibold text-lg mb-2">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <button
          className="px-4 py-2 border rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === i + 1
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-50"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-4 py-2 border rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default MembersDirectory;
