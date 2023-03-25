import { useSearchParams } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";
import IntroPage from "../pages/IntroPage";
import PoemsPage from "../pages/PoemsPage";
import PoemDetailPage from "../pages/PoemDetailPage";
import { urls } from "../utils/urls";
import TechnicalPage from "../pages/TechnicalPage";
import CertificateDetailPage from "../pages/CertificateDetailPage";

function RootLayout(props) {
  const [searchParams] = useSearchParams();

  //   console.log(searchParams);

  var content = <IntroPage />;
  var location = urls.root;

  if (searchParams.has("technical")) {
    content = <TechnicalPage />;
    location = urls.technical.index;
  }

  if (searchParams.has("certificate")) {
    content = <CertificateDetailPage id={searchParams.get("certificate")} />;
    location = urls.technical.index;
  }

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
      <div className="container-fluid">
        <div className="p-2 p-lg-3">{content}</div>
      </div>
    </>
  );
}

export default RootLayout;
