import React from 'react';
import './Header.css';

function Header() {
  return (
    <span onClick={() => window.scroll(0,0)}
    className='header'>Binge Watching</span>
  )
}

export default Header