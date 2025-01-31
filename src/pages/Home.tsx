import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";
import Community from "../components/Home/Community";
import NewsAndEvents from "../components/Home/NewAndEvent";
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
      <NewsAndEvents />
      <Footer />
    </main>
  );
}

export default Home;
