import React from "react";
import {Navbar, NavItem} from 'react-materialize'
import "./GameHeader.css";

// const GameHeader = props => <h1 className="nav-wrapper">{props.children}</h1>;

// export default GameHeader;

export default () => (

<Navbar className="gameHeader" brand='Clicky Click' right>
  <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
  <NavItem href='components.html'>Components</NavItem>
</Navbar>
)