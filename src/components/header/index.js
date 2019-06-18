import React from 'react';
import './styles.scss';
import ReactLogo from '../../assets/graphics/react.png';
import JestLogo from '../../assets/graphics/jest-logo.png';
import EnzymeLogo from '../../assets/graphics/enzyme.png';

const Header = props => {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <div className="logos">
            <img src={ReactLogo} alt="React Logo" />
            <img src={JestLogo} alt="Jest Logo" />
            <img src={EnzymeLogo} alt="Enzyme Logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
