import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo_white from "../assets/far-logo.png";
import Logo_black from "../assets/far-logo-back.png";
import { motion } from "framer-motion";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <motion.nav
      className={`w-screen fixed py-4 border border-blue-400 ${
        isScrolled ? "bg-white" : "bg-transparent"
      } transition-colors duration-300`}
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: isScrolled ? "#ffffff" : "transparent" }}
      transition={{ duration: 0.3 }}
    >
      <section className="flex justify-between border border-red-600 items-center w-11/12 mx-auto">
        <aside>
          <motion.img
            src={isScrolled ? Logo_black : Logo_white}
            alt="FAR Logo"
            className="h-14 w-56 object-fill border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </aside>
        <aside className="flex items-center gap-x-10 justify-between flex-nowrap">
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
          <button
            type="button"
            className="text-primary text-sm bg-secondary py-3 px-6 rounded-3xl hover:bg-primary hover:text-secondary transition-colors duration-300 ease-in"
          >
            Join Us
          </button>
        </aside>
      </section>
    </motion.nav>
  );
}

export default NavBar;
