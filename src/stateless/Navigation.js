import React from 'react';
import { Link } from 'react-router-dom';


//using 2 style function, with arrow function, or not
function Navigation(props) {
  return (
    <nav>
      <ul>
        <li className="left_float">
          <Link to="/create_player">Create Your Todo</Link>
        </li>
        <li className="right_float">logout</li>
      </ul>
      <div className="clear_left"></div>
    </nav>
  );
}

export default Navigation;