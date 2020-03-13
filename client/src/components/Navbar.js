import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log('new value',darkMode)
  };
  return (
    <nav className="navbar">
      {/* <label>Toggle Dark Mode</label> */}
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className= 'toggle btn'
          placeholder={darkMode ? 'on' : 'off'}
        >Dark Mode</button>
        <h2>Devloped by <a href='https://github.com/landoDev'>Landon Turner</a></h2>
       
      </div>
    </nav>
  );
};

export default Navbar;