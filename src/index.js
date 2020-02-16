//import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
//import { Nav, Container, Row, Col, Card } from "react-bootstrap";

import Login from "./component/Login/Login";
import Registration from "./component/Registration/Registration";
import About from './component/About/about'
import Category from './component/Category/category';
import Product from './component/Product/product';
import Contact from './component/Contact/contaact';
import Home from './component/Home/home';
import Buy from './component/Buy/Buy';
import AddProduct from './component/Product/addproduct';


import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
//import { BrowserRouter as Router} from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
  <container>
    <Router>
      <MDBNavbar color="tempting-azure-gradient 
"  fixed='top' dark expand={"xl"}>
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink as={Link} to ="/home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/register">Registration</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/contact">Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/product">Product</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/category">Category</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink as={Link} to="/addproduct">AddProduct</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/addproduct">AddProduct</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      
      <Switch>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route path="/contact" component={Contact} />
                <Route path="/home" component={Home} />
                <Route path="/addproduct" component={AddProduct} />
             
             

             
                <Route exact path="/register">
                  <Registration />
                </Route>
                <Route exact path="/product">
                <Product/>
                </Route>
              
                <Route exact path="/about">
                  <About/>
                </Route>
                <Route path="/category" component={Category} />

                <Route exact path="/buy/my/:id" component={Buy}/>


            
              </Switch>
    </Router>
    </container>
    );

  }
  
}

export default Navbar;

ReactDOM.render(<Navbar/>, document.getElementById("root"));
