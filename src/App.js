import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <RootLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
