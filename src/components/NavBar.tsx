import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo_black from "../assets/far-logo-back.png";
import { Menu, X } from "lucide-react"; // Import Lucide icons

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Memberships",
      url: "/memberships",
    },
    {
      name: "Programs",
      url: "/programs",
    },
    {
      name: "Events",
      url: "/events",
    },
    {
      name: "Resources",
      url: "/resources",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="max-w-screen-2xl sticky top-0 py-4 z-50 bg-white shadow-md">
      <section className="flex justify-between items-center w-11/12 mx-auto">
        <aside>
          <img
            src={Logo_black}
            alt="FAR Logo"
            className="h-14 w-56 object-fill"
          />
        </aside>

        {/* Desktop Menu */}
        <aside className="hidden md:flex items-center gap-x-10 justify-between flex-nowrap">
          <ul className="flex space-x-4 justify-between items-center text-sm">
            {links.map((link) => (
              <li className="group" key={link.name}>
                <NavLink
                  className="hover:text-secondary ease-in transition-colors text-black"
                  to={link.url}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="https://docs.google.com/forms/d/1F8tAhQRZrywmaIZ7pssARFIZen3TEYofvf0CunoBX68/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm bg-primary py-3 px-6 rounded-3xl hover:bg-primary hover:text-secondary transition-colors duration-300 ease-in"
          >
            Join Us
          </a>
        </aside>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-black focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X size={24} color="black" />
          ) : (
            <Menu size={24} color="black" />
          )}
        </button>
      </section>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full fixed top-20 left-0 shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  className="block text-black hover:text-secondary transition-colors duration-300"
                  to={link.url}
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="https://docs.google.com/forms/d/1F8tAhQRZrywmaIZ7pssARFIZen3TEYofvf0CunoBX68/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm bg-primary py-3 px-6 rounded-3xl hover:bg-primary hover:text-secondary transition-colors duration-300 ease-in"
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
