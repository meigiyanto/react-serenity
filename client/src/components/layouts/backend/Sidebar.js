import React from 'react';

const Sidebar = () => {
	return (
		<div className="left-sidenav">
	    <div className="brand">
        <a href="index-2" className="logo">
          <span>
            <img src="./assets/backend/images/logo-sm.png" alt="logo-small" className="logo-sm" />
          </span>
          <span>
            <img src="../assets/backend/images/logo.png" alt="logo-large" className="logo-lg logo-light" />
            <img src="../assets/backend/images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark" />
          </span>
        </a>
	    </div>

	    <div className="menu-content h-100" data-simplebar>
	        <ul className="metismenu left-sidenav-menu">

	        </ul>
	    </div>

		</div>
	)
}

export default Sidebar;
