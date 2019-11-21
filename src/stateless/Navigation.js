import React from 'react';
import { Link } from 'react-router-dom';


//using 2 style function, with arrow function, or not
function Navigation(props) {
  return (
    <nav>
      <ul>
        <li className="left_float">
          <Link to="/Home">Home</Link>
        </li>
        <li className="right_float">Logout</li>
      </ul>
      <div className="clear_left"></div>
    </nav>
  );
}

export default Navigation;