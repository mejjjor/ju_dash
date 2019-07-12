import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/communication'>Communication</Link></li>
        <li><Link to='/statistique'>Statistique</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
