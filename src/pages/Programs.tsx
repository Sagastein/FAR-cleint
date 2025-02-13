// import ProgramListings from "../components/programs/ProgramList";
import OurPartnersPrograms from "../components/programs/OurPartners";
import ServicesGrid from "../components/programs/ServicesGrid";

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
      <ServicesGrid />
      {/* <ProgramListings /> */}
      <OurPartnersPrograms />
    </main>
  );
}
