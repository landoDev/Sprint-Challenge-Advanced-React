import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      {/* <label>Toggle Dark Mode</label> */}
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
        //   className={darkMode ? 'toggle toggled' : 'toggle'}
        >Dark Mode</button>
       
      </div>
    </nav>
  );
};

export default Navbar;