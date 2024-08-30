import React from 'react';
import './Header.css';
import logo from '../image/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Bank Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>Home Loan Products</li>
            <li>Checklist & Calculators</li>
            <li>Banking Products</li>
            <li>Deposits</li>
          </ul>
        </nav>
        <div className="apply-online">
          <button>Apply Online</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
