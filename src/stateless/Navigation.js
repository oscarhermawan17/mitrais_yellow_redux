import React from 'react';
import { Link } from 'react-router-dom';


//using 2 style function, with arrow function, or not
const Navigation = () =>
  <nav>
    <ul>
      <li className="left_float">
        <Link to="/">Home</Link>
      </li>
      <li className="left_float">
        <Link to="/todos">Todos</Link>
      </li>
      <li className="left_float">
        <Link to="/testing">Are you Lost?</Link>
      </li>
    </ul>
    <div className="clear_left"></div>
  </nav>

export default Navigation;