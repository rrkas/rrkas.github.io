import { useSearchParams } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";
import IntroPage from "../pages/IntroPage";
import PoemsPage from "../pages/PoemsPage";
import PoemDetailPage from "../pages/PoemDetailPage";
import { urls } from "../utils/urls";

function RootLayout(props) {
  const [searchParams] = useSearchParams();

  //   console.log(searchParams);

  var content = <IntroPage />;
  var location = urls.root;

  if (searchParams.has("poems")) {
    content = <PoemsPage />;
    location = urls.poems.index;
  }

  if (searchParams.has("poem")) {
    content = <PoemDetailPage id={searchParams.get("poem")} />;
    location = urls.poems.index;
  }

  return (
    <>
      <MainNavigation location={location} />
      <div className="container-fluid">{content}</div>
    </>
  );
}

export default RootLayout;
