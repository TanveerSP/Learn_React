import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Param from "./components/Param";
import Dashbord from "./components/Dashbord";
import Coursese from "./components/Coursese";
import MockTest from "./components/MockTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashbord />
      </div>
    ),

    children: [
      {
        path: "courses",
        element: <Coursese />,
      },
      {
        path: "mock-test",
        element: <MockTest />,
      },
      // {
      //   path: "/reports",
      //   element,
      // },
    ],
  },
  {
    path: "/student/:id",
    element: (
      <div>
        <Navbar />
        <Param />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
