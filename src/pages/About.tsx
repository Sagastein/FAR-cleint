function About() {
  return (
    <main>
      <header
        id="about-banner"
        className="flex flex-col py-2 justify-end items-center h-[50vh] bg-primary"
      >
        <p className="text-white w-6/12 mx-auto  text-3xl font-bold text-center">
          Transforming Rwanda’s FinTech Landscape
        </p>
        <button className="p-2 px-4 my-4 rounded-xl bg-secondary text-primary">
          Join Us Today
        </button>
      </header>
      <h2 className="text-3xl my-6 font-bold mb-12 text-primary text-center">
        Our Key Initiatives
      </h2>
    </main>
  );
}

export default About;
