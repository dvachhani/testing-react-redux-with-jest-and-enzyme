import React from 'react';
import './styles.scss';
import ReactLogo from '../../assets/graphics/react.png';
import JestLogo from '../../assets/graphics/jest-logo.png';
import EnzymeLogo from '../../assets/graphics/enzyme.png';

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <div className="logos">
            <img data-test="logoImg" src={ReactLogo} alt="React Logo" />
            <img data-test="logoImg" src={JestLogo} alt="Jest Logo" />
            <img data-test="logoImg" src={EnzymeLogo} alt="Enzyme Logo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
