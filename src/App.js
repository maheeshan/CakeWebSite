import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Switch, Route } from 'react-router-dom';

import CakeList from './components/cake-list.component';

import cakeImg1 from './assets/images/cake_img_1.jpg';

import { Navbar, Nav, } from 'react-bootstrap'


class App extends Component {

  render() {

    return (
      <div style={{ backgroundImage: cakeImg1 }}>

        <Navbar variant="dark" className="px-2">
          <Navbar.Brand href="/">Cake More</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-0">
              <Nav.Link href="/list">Gallery</Nav.Link>
              <Nav.Link href="#features">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <div className="px-4">
          <h1 className="pt-5">Cake More Cake Design by </h1>
        </div>

        <Switch>
          <Route exact path="/list" component={CakeList} />
          
        </Switch>

      </div>

    );
  }


}

export default App;