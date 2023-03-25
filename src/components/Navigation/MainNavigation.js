import logo from "../../logo.png";
import { myName } from "../../utils/constants";
import { urls } from "../../utils/urls.js";

const MainNavigation = (props) => {
  return (
    <header className={`navbar navbar-expand-md navbar-light d-print-none`}>
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
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href={urls.root}>
            <img src={logo} height="36" alt="" className="mb-1 mr-1" />
            <span className="ms-2">{myName}</span>
          </a>
        </h1>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul className="navbar-nav">
              <li
                className={
                  "nav-item " +
                  (window.location.pathname === urls.root ? "active" : "")
                }
              >
                <a className="nav-link" href={urls.root}>
                  <span className="nav-link-title">Home</span>
                </a>
              </li>
              <li
                className={
                  "nav-item " +
                  (window.location.pathname === urls.poems.index
                    ? "active"
                    : "")
                }
              >
                <a className="nav-link" href={urls.poems}>
                  <span className="nav-link-title">Poems</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
