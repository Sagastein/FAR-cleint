import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chamber_logo from "../../assets/ict-chamber-logo.svg";
import bnr_logo from "../../assets/bnr-logo.png";
import rra_logo from "../../assets/rwanda-logo.png";

const logos = [
  rra_logo,
  chamber_logo,
  bnr_logo,

  // Add more logos if needed
];

const OurPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 10000); // Change logo every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Remove unnecessary dependency

  // Calculate the visible logos in the queue
  const visibleLogos = Array.from(
    { length: 3 },
    (_, i) => logos[(currentIndex + i) % logos.length]
  );

  // Calculate the previous, current, and next indices for dots
  const prevIndex = (currentIndex - 1 + logos.length) % logos.length;
  const nextIndex = (currentIndex + 1) % logos.length;

  return (
    <main>
      <h1 className="text-center text-primary font-bold text-4xl">
        Our Partners
      </h1>
      <div className="relative h-48 flex items-center justify-center overflow-hidden">
        <div className="flex space-x-12">
          <AnimatePresence initial={false}>
            {visibleLogos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                initial={{ x: "100%" }} // Logo enters from the right
                animate={{ x: "0%" }} // Logo moves to its position
                exit={{ x: "-100%" }} // Logo exits to the left
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-20 h-20 object-contain"
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="absolute bottom-4 flex space-x-2">
          {/* Previous Dot */}
          <button
            onClick={() => setCurrentIndex(prevIndex)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === prevIndex ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
          {/* Current Dot (Always Active) */}
          <button
            onClick={() => setCurrentIndex(currentIndex)}
            className="w-2 h-2 rounded-full bg-primary"
          ></button>
          {/* Next Dot */}
          <button
            onClick={() => setCurrentIndex(nextIndex)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === nextIndex ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
        </div>
      </div>
      <div className=" bg-primary">
        <section
          id="join"
          className="w-11/12 md:w-10/12 mx-auto py-12 space-y-4 flex flex-col justify-center items-center"
        >
          <h1 className="text-white text-2xl w-11/12 md:w-8/12 font-bold text-center">
            Join a thriving community of innovators driving Rwanda’s financial
            future.
          </h1>
          <button className="text-primary text-sm bg-secondary py-3 px-6 rounded-3xl hover:bg-primary hover:text-secondary transition-colors duration-300  ease-in">
            Join the Association
          </button>
        </section>
      </div>
    </main>
  );
};

export default OurPartners;
