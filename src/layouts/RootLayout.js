import { Outlet, useNavigation } from "react-router-dom";
import LoadingProgressBar from "../components/LoadingProgressBar";
import MainNavigation from "../components/Navigation/MainNavigation";

function RootLayout(props) {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <div className="container-fluid">
        {navigation.state === "idle" ? <Outlet /> : <LoadingProgressBar />}
      </div>
    </>
  );
}

export default RootLayout;
