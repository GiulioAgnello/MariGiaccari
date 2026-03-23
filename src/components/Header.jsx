export default function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Esperienza
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Wedding Stories
                </a>
              </li>

              <li>
                <a className="nav-link" href="#">
                  Video
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Album
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li>
                <a className="nav-link" href="#">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
