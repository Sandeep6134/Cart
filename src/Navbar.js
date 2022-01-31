import * as React from 'react';
import "./App.css";
import image from "./image.jpeg";
import CardComponent from "./Cart.js";
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import React, {useState, useEffect} from 'react';
// import Cart1 from "./Cart.js";
// import {link} from "react-router-dom";

class Navbar extends React.Component {

  state = { a: 0, cart: [],toggleCard:true ,
    
    cartitem:[]
    


};

  

  
 
  
  

  render() {

    // const [toggleCounterComponent, setToggleCounterComponent] = useState(true);
    // const [toggleCard, setToggleCard] = useState(true);
    // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

    const toggleFunctionality = () => {
      this.setState({toggleCard:!this.state.toggleCard});
   
  }
    

  //Incrementing and pushing the values into array of objects
    const increment1 = (item,price,name) => {
     
      // let temp = this.state.cart;

      this.state.cartitem.push({id:item,name:name,price:price})
      this.state.cart.push(item);
      this.setState({ a: this.state.a + 1});
      
    };

    //Decrementing the cart value and removing the particular item from array of object
    const decrement1 = (item1,price,name) => {
      // a++;
      let temp = this.state.cart;
      
      let temp1=this.state.cartitem
      temp.splice(temp.indexOf(item1),1);
      temp1.splice(temp1.indexOf(item1),1);

      this.setState({ a: this.state.a - 1, cart: temp,cartitem: temp1});
      
    };

    

    const toggleComponent = (valueFromChild) => {
      this.setState({toggleCard:!this.state.toggleCard})
    }

    console.log(this.state.cartitem)

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
                <div class="dropdown">

                {/* <Button className="button1"
        id="basic-button"
        aria-controls={this.state.toggleCard ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={this.state.toggleCard ? 'true' : undefined}
        onClick={() => toggleFunctionality()}
      >
       <i class="bi bi-cart-fill"></i> Cart
                    <span class="zero">{this.state.a}</span>
      </Button> */}
      
                  <button className="button1" onClick={() => toggleFunctionality()}>
                    
                    <i class="bi bi-cart-fill"></i> Cart
                    <span class="zero">{this.state.a}</span>
                  </button>
                  {!this.state.toggleCard ? 
                    
                   < CardComponent heading="NAME" subheading="PRICE" 
                     description="Total Price of this product is more than expected" CartDisplay={this.state.cartitem} 
                   toggleFunctionality={(t)=> toggleComponent(t)}/> : <></>}
                 </div>
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

            <div className="col mb-5 ">
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
                    <button class="btn button1" onClick={() => decrement1(1,18,"specialitem")}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment1(1,18,"specialitem")}>
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
                    <button class="btn button1" onClick={() => decrement1(2,25,"Sale Item1")}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment1(2,25,"Sale Item1")}>
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
                    <button class="btn button1" onClick={() => decrement1(3,40,"Popular item")}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment1(3,40,"poppular item")}>
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
                    <button class="btn button1" onClick={() => decrement1(4,25,"sale item")}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment1(4,25,"sale item")}>
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
                    <button class="btn button1" onClick={() => decrement1(6,18,"Special Item")}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment1(6,18,"Special Item")}>
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
                    <button class="btn button1" onClick={() => decrement1(7,40,"popular item")}>
                      Remove from cart
                    </button>
                  ) : (
                    <button class="btn button1" onClick={() => increment1(7,40,"popular item")}>
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
