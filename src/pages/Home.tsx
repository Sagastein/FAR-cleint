import Banner from "../components/Home/Banner";
import Community from "../components/Home/Community";
import OurPartners from "../components/Home/OurPartners";
import WhoWeAre from "../components/Home/WhoWeAre";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <main>
      <NavBar />
      <Banner />
      <WhoWeAre />
      <Community />
      <OurPartners />
    </main>
  );
}

export default Home;
