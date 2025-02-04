import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./layout/LandingPage";
import Contact from "./pages/Contact";
import Events from "./pages/Events";

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
        element: <div>About Page</div>,
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
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
