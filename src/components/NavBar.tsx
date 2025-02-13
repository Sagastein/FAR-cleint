import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo_white from "../assets/far-logo.png";
import Logo_black from "../assets/far-logo-back.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import Lucide icons

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
  const color = isScrolled ? "black" : "white";
  return (
    <motion.nav
      className={`w-screen fixed py-4  z-50 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } transition-colors duration-300`}
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: isScrolled ? "#ffffff" : "transparent" }}
      transition={{ duration: 0.3 }}
    >
      <section className="flex justify-between  items-center w-11/12 mx-auto">
        <aside>
          <motion.img
            src={isScrolled ? Logo_black : Logo_white}
            alt="FAR Logo"
            className="h-14 w-56 object-fill"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </aside>

        {/* Desktop Menu */}
        <aside className="hidden md:flex items-center gap-x-10 justify-between flex-nowrap">
          <ul className="flex space-x-4 justify-between items-center text-sm">
            {links.map((link) => (
              <li className="group" key={link.name}>
                <NavLink
                  className={`hover:text-secondary ease-in transition-colors ${
                    isScrolled ? "text-black" : "text-grey"
                  }`}
                  to={link.url}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to={"/signin"}
            className="text-primary text-sm bg-secondary py-3 px-6 rounded-3xl hover:bg-primary hover:text-secondary transition-colors duration-300 ease-in"
          >
            Join Us
          </Link>
        </aside>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-black focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X size={24} color={color} />
          ) : (
            <Menu size={24} color={color} />
          )}
        </button>
      </section>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white w-full fixed top-20 left-0 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
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
                <Link
                  to="/signin"
                  className="w-full text-primary text-sm bg-secondary py-3 px-6 rounded-3xl hover:bg-primary hover:text-secondary transition-colors duration-300 ease-in"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;
