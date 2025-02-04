import ProgramListings from "../components/programs/ProgramList";

export default function Programs() {
  return (
    <main>
      <header
        id="program-banner"
        className="flex flex-col justify-end items-center h-[50vh] bg-primary"
      >
        <p className="text-white w-7/12 mx-auto my-6 text-3xl font-bold text-center">
          Driving Innovation, Collaboration & Growth in FinTech
        </p>
      </header>
      <h2 className="text-3xl my-6 font-bold mb-12 text-primary text-center">
        Our Key Initiatives
      </h2>

      <ProgramListings />
    </main>
  );
}
