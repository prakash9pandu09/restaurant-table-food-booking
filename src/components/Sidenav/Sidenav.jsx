import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faLessThan,
  faGreaterThan,
  faSignOutAlt,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import './sidenav.css';

const ListItem = ({ menuNameAndIcon, sideNavToggleClick }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <Link to={`/${menuNameAndIcon.menuName}`}>
      <div
        className={
          splitLocation[1] === menuNameAndIcon.menuName
            ? 'active sidenavListItem'
            : 'sidenavListItem'
        }
      >
        <FontAwesomeIcon icon={menuNameAndIcon.menuIcon} />
        <span className={sideNavToggleClick ? '' : 'sideNavMenuItemName'}>
          {menuNameAndIcon.menuName.charAt(0).toUpperCase() +
            menuNameAndIcon.menuName.slice(1)}
        </span>
      </div>
    </Link>
  );
};

const Sidenav = () => {
  const menuItems = [
    { menuName: 'reservations', menuIcon: faUtensils },
    { menuName: 'orders', menuIcon: faBookOpen },
    { menuName: 'logout', menuIcon: faSignOutAlt },
  ];
  const [isSideNavToggleClicked, setIsSideNavToggleClicked] = useState(false);
  const sideNavClicked = () => {
    setIsSideNavToggleClicked(!isSideNavToggleClicked);
  };
  return (
    <div
      className={
        isSideNavToggleClicked ? 'sidenavContainer' : 'sidenavContainerOnClick'
      }
    >
      <div className="sidenavList">
        {menuItems.map((m) => (
          <ListItem
            key={m.menuName}
            menuNameAndIcon={m}
            sideNavToggleClick={isSideNavToggleClicked}
          />
        ))}
      </div>
      <div className="sideNavToggleIcon">
        <FontAwesomeIcon
          icon={isSideNavToggleClicked ? faLessThan : faGreaterThan}
          onClick={() => sideNavClicked()}
        />
      </div>
    </div>
  );
};

export default Sidenav;
