import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';
import Cart from './Cart.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {
  let [신발, 신발변경] = useState(Data);
  const linkStyle = { textDecoration: 'none', link: 'black', vlink: 'black' };

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeMarket</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" style={linkStyle}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail" style={linkStyle}>
                  Detail
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="jumbotron">
              <h1>20% Season off</h1>
              <Button variant="primary">Go Shopping</Button>{' '}
            </div>

            <div className="container">
              <div className="row">
                {신발.map((data, i) => {
                  return <Card 신발={data} i={i} key={i} />;
                })}
              </div>
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail 신발={신발} />
        </Route>

        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>

      {/* <Route paht="어쩌구" component={컴포넌트 이름}></Route> */}
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'}
        alt="shoes1"
        width="100%"
      />
      <h4>{props.신발.title}</h4>
      <p> {props.신발.content} </p>
      <p> {props.신발.price} </p>
    </div>
  );
}

export default App;
