import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import './header.css';
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerProductLogo">
        <Link to="/reservations">
          <FontAwesomeIcon icon={faHotel} />
        </Link>
      </div>
      <div className="headerProductName">
        <Link to="/reservations">
          <span className="headerProductAppName">JJJ FOODS AND SERVICES</span>
        </Link>
      </div>
      <div className="productInfo">
        <Link to="/productInfo">
          <FontAwesomeIcon icon={faInfo} />
        </Link>
      </div>
      <div className="verticalDevider"></div>
      <div className="headerUserInfo">
        <div className="headerUserInfoName">User Name</div>
        <div className="headerUserInfoRole">User Role</div>
      </div>
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

export default Header;
