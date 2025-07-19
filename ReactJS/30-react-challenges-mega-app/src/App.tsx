import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./routes/Dashboard";
import NavigationBar from "./layouts/NavigationBar";
import Challenges from "./routes/Challenges";
import About from "./routes/About";
import Challenge from "./routes/Challenge";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Dashboard,
    },
    {
      path: "/challenges",
      Component: Challenges,
    },
    {
      path: "/challenges/:id",
      Component: Challenge,
    },
    {
      path: "/about",
      Component: About,
    },
  ]);

  return (
    <>
      <NavigationBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
