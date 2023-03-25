import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import IntroPage from "./pages/IntroPage";
import PoemDetailPage from "./pages/PoemDetailPage";
import PoemsPage from "./pages/PoemsPage";
import { urls } from "./utils/urls";

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
        {
          path: urls.poems.index,
          element: <PoemsPage />,
        },
        {
          path: urls.poems.poemDetail(":id"),
          element: <PoemDetailPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={<RootLayout />} />;
}

export default App;
