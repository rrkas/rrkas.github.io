import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";

function RootLayout(props) {
  return (
    <>
      <MainNavigation />
      <div className="container-fluid">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
