import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./src/utils/UserContext";

const Grocery = lazy(() => import("./src/components/Grocery"));
const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const data = {
      userName: "DSPMSD",
    };
    setUserName(data.userName);
  }, []);
  return (
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....!!!</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....!!!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
