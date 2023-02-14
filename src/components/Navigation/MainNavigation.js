import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import { urls } from "../../utils/urls.js";
import { myName } from "../../utils/constants";

const MainNavigation = (props) => {
  const { combined } = props;

  return (
    <header
      className={`navbar navbar-expand-md navbar-light d-print-none ${
        combined ? "d-none d-lg-flex" : ""
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {!combined && (
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <Link to={urls.root}>
              <img src={logo} height="36" alt="" className="mb-1 mr-1" />
              <span className="ms-2">{myName}</span>
            </Link>
          </h1>
        )}
        <div className="navbar-nav flex-row order-md-last">
          {/* <NavigationProfile /> */}
        </div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div>
            {combined && (
              <div
                className="d-none d-lg-block"
                style={{ marginLeft: "270px" }}
              >
                <Link to={urls.root}>
                  <h3>{myName}</h3>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
