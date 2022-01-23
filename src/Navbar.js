import React from "react";
import "./App.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        {/* class="navbar navbar-expand-lg navbar-light bg-light" */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
          <div class=" navbar-collapse">
            <div class="nav-link fw-bold" href="#">
              Start Bootstrap
              <button class="navbar-toggler"
                style={{ float: "right" }}
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-pressed="true"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>


            <div className="navbar-collapse collapse show">
              <ul class="navbar-nav" id="navbarToggleExternalContent">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                  >
                    Shop
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      All Product
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Popular-item
                    </a>

                    <a class="dropdown-item" href="#">
                      New-arrival
                    </a>
                  </div>
                </li>
              </ul>


              <ul class="navbar-nav ml-auto" id="navbarToggleExternalContent">
                <li class="nav-item active ">
                  <button className="button1">
                    {" "}
                    <i class="bi bi-cart-fill"></i> Cart{" "}
                    <span class="zero">0</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <section class="padd text-center text-light">
          <div class="section-font">Shop in Style</div>
          <div class="h5 text-secondary">With this shop homepage template</div>
        </section>
      </div>
    );
  }
}

export default Navbar;
