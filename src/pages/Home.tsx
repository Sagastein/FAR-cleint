import Banner from "../components/Home/Banner";
import Community from "../components/Home/Community";
import NewsAndEvents from "../components/Home/NewAndEvent";
import OurPartners from "../components/Home/OurPartners";
import WhoWeAre from "../components/Home/WhoWeAre";
function Home() {
  return (
    <main>
      <Banner />
      <WhoWeAre />
      <Community />
      <OurPartners />
      <NewsAndEvents />
    </main>
  );
}

export default Home;
