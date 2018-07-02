import React from "react";
import {Navbar, NavItem} from 'react-materialize'
import "./GameHeader.css";

// const GameHeader = props => <h1 className="nav-wrapper">{props.children}</h1>;

// export default GameHeader;

export default (props) => (

<Navbar className="gameHeader" brand='Clicky Click' right>
  <NavItem onClick={() => console.log('test click')}>Instructions</NavItem>
</Navbar>
)