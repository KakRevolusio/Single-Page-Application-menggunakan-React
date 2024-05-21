import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <h1>
      <Link to='/'>Aplikasi Catatan</Link>
    </h1>
    <nav className='navigation'>
      <ul>
        <li>
          <Link to='/archives'>Arsip</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navigation;
