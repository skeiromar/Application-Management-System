import React, {useEffect} from 'react';
import {logout} from '../utils/otherUtil';
import { Link } from 'react-router-dom';

import "../styles/nav.css"

function Navbar(props) {

  useEffect(() => {
    console.log(props);


  }, []);
  function handleLogout() {
    logout();
  }

  return props.location.pathname.length > 1 ? (<ul id="nav-bar">
    <Link to="/" onClick={handleLogout}>Logout</Link>
    <Link to="/formCreate">Create</Link>
    <Link to="/campaigns">Campaigns</Link>
  </ul>) : (<div></div>);
}

export default Navbar;
