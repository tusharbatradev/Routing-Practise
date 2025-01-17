import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import List from "./List";
import UserDetail from "./UserDetail";

function App() {
  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/browseList",
      element: <List />,
    },
    {
      path: "userdetail/:userId",
      element: <UserDetail />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
