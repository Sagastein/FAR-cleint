function Banner() {
  return (
    <div
      id="home-banner"
      className="flex-col items-center justify-center  flex"
    >
      <h1 className="font-bold text-3xl sm:text-5xl text-start w-11/12 mx-auto md:leading-[70px] text-grey">
        Fostering Innovation and Growth in Rwanda’s FinTech
      </h1>
      <div className="flex space-x-4 mt-8 w-11/12">
        <button className="text-primary text-sm bg-secondary sm:py-3 sm:px-6  p-2 rounded-3xl hover:bg-primary hover:text-secondary transition-colors duration-300  ease-in">
          Join the Association
        </button>
        <button className="text-secondary text-sm bg-transparent border font-medium border-secondary sm:py-3 sm:px-6 p-2 rounded-3xl hover:bg-secondary hover:text-primary transition-colors duration-300 ease-in">
          Explore Our Programs
        </button>
      </div>
    </div>
  );
}

export default Banner;
