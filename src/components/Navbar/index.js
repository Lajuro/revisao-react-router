import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  let { path } = props;
  return (
    <nav className="nav">
      <ul>
        <li><Link className={path === "/" ? "active" : ""} to="/">Home</Link></li>
        <li><Link className={path === "/sobre" ? "active" : ""} to="/sobre">Sobre</Link></li>
        <li><Link className={path === "/contato" ? "active" : ""} to="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
