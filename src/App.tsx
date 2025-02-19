import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import "./App.css";

const LandingPage = lazy(() => import("./layout/LandingPage"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Membership = lazy(() => import("./pages/Membership"));
const MembersDirectory = lazy(() => import("./pages/Members"));
const Resources = lazy(() => import("./pages/Resources"));
const Events = lazy(() => import("./pages/Events"));
const Contact = lazy(() => import("./pages/Contact"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Verification = lazy(() => import("./pages/Verification"));

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
        element: <About />,
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
  return (
    <Suspense
      fallback={
        <div className="flex h-screen overflow-hidden justify-center items-center">
          <ScaleLoader color="#ffd400" height={35} radius={3} />
        </div>
      }
    >
      <RouterProvider router={routers} />
    </Suspense>
  );
}

export default App;
