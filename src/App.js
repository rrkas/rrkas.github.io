import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import IntroPage from "./pages/Intro";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <IntroPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<RootLayout />} />;
}

export default App;
