import React, { Component } from 'react';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import HelloWorldPage from 'components/HelloWorldPage';

import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <span>Hello World</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
              <NavItem>Время</NavItem>
              <NavItem>Счетчики</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <HelloWorldPage />
        </Grid>
      </div>
    );
  }
}

export default App;
