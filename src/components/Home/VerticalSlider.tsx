import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "./event1.jpg",
  "./fintech1.jpg",
  "./fintech2.jpg",
  // Add more image URLs as needed
];

const VerticalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative  mb-12 flex items-center justify-center">
      <div className="relative w-full h-[500px] overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute w-full h-full"
          />
        </AnimatePresence>
      </div>
      <div className="absolute right-4 flex flex-col space-y-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
      <div className=" bg-primary text-white absolute bottom-0 w-full justify-between p-6">
        <section className="grid grid-cols-4 justify-between items-center w-11/12 mx-auto">
          <aside className="flex border-r flex-col space-y-2 items-center">
            <h1 className="text-3xl text-secondary font-bold">300 +</h1>
            <p className="text-white text-xs">FinTech Players Engaged</p>
          </aside>
          <aside className="flex border-r flex-col space-y-2 items-center">
            <h1 className="text-3xl text-secondary font-bold">7,500</h1>
            <p className="text-white text-xs">Jobs Created by 2029.</p>
          </aside>
          <aside className="flex border-r flex-col space-y-2 items-center">
            <h1 className="text-3xl text-secondary font-bold">80%</h1>
            <p className="text-white text-xs">
              FinTech Adoption across Rwanda.
            </p>
          </aside>
          <aside className="flex  flex-col space-y-2 items-center">
            <h1 className="text-3xl text-secondary font-bold">$200</h1>
            <p className="text-white text-xs"> in Investments projected.</p>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default VerticalSlider;
