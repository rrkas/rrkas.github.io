import { Link } from "react-router-dom";
import { urls } from "../../utils/urls.js";
import { fullName, logo } from "../../utils/data";

const MainNavigation = ({ location }) => {
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
          <Link to={urls.root}>
            <img src={logo} height="36" alt="" className="mb-1 mr-1" />
            <span className="ms-2">{fullName}</span>
          </Link>
        </h1>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="d-flex flex-column flex-md-row flex-fill align-items-stretch align-items-md-center">
            <ul className="navbar-nav">
              <li
                className={
                  "nav-item " + (location === urls.root ? "active" : "")
                }
              >
                <Link className="nav-link" to={urls.root}>
                  <span className="nav-link-title">Home</span>
                </Link>
              </li>
              <li
                className={
                  "nav-item " +
                  (location === urls.technical.index ? "active" : "")
                }
              >
                <Link className="nav-link" to={urls.technical.index}>
                  <span className="nav-link-title">Technical</span>
                </Link>
              </li>
              <li
                className={
                  "nav-item " + (location === urls.poems.index ? "active" : "")
                }
              >
                <Link className="nav-link" to={urls.poems.index}>
                  <span className="nav-link-title">Poems</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
