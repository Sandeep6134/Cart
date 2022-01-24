import React from "react";
import "./App.css";
import image from "./image.jpeg";

class Navbar extends React.Component {
  state = { a: 0, cart: [] };
  
  

  render() {
    const increment = (item) => {
     
      // let temp = this.state.cart;
      this.state.cart.push(item);

      this.setState({ a: this.state.a + 1});
      
    };
    const decrement = (item1) => {
      // a++;
      let temp = this.state.cart;
      // console.log(temp)
      temp.splice(temp.indexOf(item1),1);

      this.setState({ a: this.state.a - 1, cart: temp });
      //  var k=this.state
      // console.log("enters",k)
    };

    console.log(this.state.cart)

    return (
      <div>
        {/* {this.state.a} */}
        {/* class="navbar navbar-expand-lg navbar-light bg-light" */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
          <div class=" navbar-collapse">
            <div class="nav-link fw-bold" href="#">
              Start Bootstrap
              <button
                class="navbar-toggler"
                style={{ float: "right" }}
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-pressed="true"
                aria-label="Toggle navigation"
              >
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
                    <span class="zero">{this.state.a}</span>
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

        <div className="container mt-5 mb-5">
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div class="card h-100">
                {/* <div class="badge bg-dark text-white position-absolute pos" >Sale</div> */}
                <img src={image} alt="..." className="img-thumbnail" />
                <div class="card-body text-center">
                  <h5 class="card-title">Fancy Product</h5>
                  <p>$40.00 - $80.00</p>

                  <a href="#" class="btn button1">
                    View Options
                  </a>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div class="card">
                <div class="badge bg-dark text-white position-absolute pos">
                  Sale
                </div>
                <img src={image} alt="..." className="img-thumbnail" />
                <div class="card-body text-center">
                  <h5 class="card-title">Special Item</h5>
                  <div className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p>
                    <strike>$20.00</strike> $18.00
                  </p>

                  {this.state.cart.includes(1) ? (
                    <button class="btn button1" onClick={() => decrement(1)}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment(1)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div class="card">
                <div class="badge bg-dark text-white position-absolute pos">
                  Sale
                </div>
                <img src={image} alt="..." className="img-thumbnail" />
                <div class="card-body text-center">
                  <h5 class="card-title">Sale Item1</h5>
                  <p>
                    <strike>$50.00</strike> $25.00
                  </p>

                  {this.state.cart.includes(2) ? (
                    <button class="btn button1" onClick={() => decrement(2)}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment(2)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div class="card">
                {/* <div class="badge bg-dark text-white position-absolute pos" >Sale</div> */}
                <img src={image} alt="..." className="img-thumbnail" />
                <div class="card-body text-center">
                  <h5 class="card-title">Popular item</h5>
                  <div className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p>$40.00</p>

                  {this.state.cart.includes(3) ? (
                    <button class="btn button1" onClick={() => decrement(3)}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment(3)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div class="card">
                <div class="badge bg-dark text-white position-absolute pos">
                  Sale
                </div>
                <img src={image} alt="..." className="img-thumbnail" />
                <div class="card-body text-center">
                  <h5 class="card-title">Sale Item</h5>
                  <p>
                    <strike>$50.00</strike> $25.00
                  </p>
                  {this.state.cart.includes(4) ? (
                    <button class="btn button1" onClick={() => decrement(4)}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment(4)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div class="card h-100">
                {/* <div class="badge bg-dark text-white position-absolute pos" >Sale</div> */}
                <img src={image} alt="..." className="img-thumbnail" />
                <div class="card-body text-center">
                  <h5 class="card-title">Fancy Product</h5>
                  <p>$40.00 - $80.00</p>

                  <a href="#" class="btn button1">
                    View Options
                  </a>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div class="card">
                <div class="badge bg-dark text-white position-absolute pos">
                  Sale
                </div>
                <img src={image} alt="..." className="img-thumbnail" />
                <div class="card-body text-center">
                  <h5 class="card-title">Special Item</h5>
                  <div className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p>
                    <strike>$20.00</strike> $18.00
                  </p>

                  {this.state.cart.includes(6) ? (
                    <button class="btn button1" onClick={() => decrement(6)}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment(6)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div class="card">
                {/* <div class="badge bg-dark text-white position-absolute pos" >Sale</div> */}
                <img src={image} alt="..." className="img-thumbnail" />
                <div class="card-body text-center">
                  <h5 class="card-title">Popular item</h5>
                  <div className="star">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p>$40.00</p>

                  {this.state.cart.includes(7) ? (
                    <button class="btn button1" onClick={() => decrement(7)}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment(7)}>
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center foot">
          Copyrights <i class="fa fa-copyright" aria-hidden="true"></i> Your
          Website 2021
        </p>
      </div>
    );
  }
}

export default Navbar;
