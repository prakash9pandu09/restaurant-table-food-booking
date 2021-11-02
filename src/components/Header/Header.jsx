import React from 'react';
import './header.css';
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerProductLogo">Logo</div>
      <div className="headerProductName">JJ Foods</div>
      <div className="headerUserInfo">
        <div className="headerUserInfoName">User Name</div>
        <div className="headerUserInfoRole">User Role</div>
      </div>
    </div>
  );
};

export default Header;
