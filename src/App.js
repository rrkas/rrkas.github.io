import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { fullName } from "./utils/data";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <RootLayout />,
    },
  ]);

  document.getElementById("description").innerHTML = fullName;

  return <RouterProvider router={router} />;
}

export default App;
