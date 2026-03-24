import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav align-items-center">
              <li>
                <img
                  className="logo navbar-brand"
                  src="public\Logo-G-nero-e1544602148255.png"
                  alt="Logo"
                />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/esperienza">
                  Esperienza
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/weddingstories">
                  Wedding Stories
                </NavLink>
              </li>

              <li>
                <NavLink className="nav-link" to="/video">
                  Video
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/album       ">
                  Album
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li>
                <NavLink className="nav-link" to="/contatti">
                  Contatti
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
