import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./layout/LandingPage";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Verification from "./pages/Verification";
import Programs from "./pages/Programs";
import AboutPage from "./pages/About";
import Membership from "./pages/Membership";
import Resources from "./pages/Resources";
import MembersDirectory from "./pages/Members";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "memberships",
        element: <Membership />,
      },
      {
        path: "members",
        element: <MembersDirectory />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "verification",
    element: <Verification />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
