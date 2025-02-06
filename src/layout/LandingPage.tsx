import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingPage;
