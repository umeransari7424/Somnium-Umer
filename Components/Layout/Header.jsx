import {AiFillWindows} from "react-icons/ai";
import{FaFacebookF} from "react-icons/fa"
const Header = () => {
  return (
    <div className="d-flex main-header ">
      <div className="header d-flex">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid header ">
            <a className="navbar-brand" href="/">
              <img src="Assets/somnium.png" alt="somniumlogo" />
            </a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
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
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active blockchain"
                    aria-current="page"
                    href="/"
                  >
                    Blockchain
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Mechanics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Events
                  </a>
                </li>
                
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active blockchain"
                    aria-current="page"
                    href="/"
                  >
                    LogIn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    SignUp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <FaFacebookF />
                  </a>
                </li>
                
                
              </ul>
              </div>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; 
            <div>
              <div>
                <button type="button" className="btn btn-primary explore">
                  Explore Somnium App
                </button>

                <button type="button" className="btn btn-primary market">
                  MarketPlace
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="download ">
        <button type="button" className="btn btn-primary btn-client">
          Download VR Client <AiFillWindows size={"30px"}/>{" "}
        </button>

        <button type="button" className="btn btn-primary join">
          Join Somnium <span className="badge web">Web</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
