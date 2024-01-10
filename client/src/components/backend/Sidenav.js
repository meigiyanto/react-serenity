import React from 'react';
import { Bell, Mail, Activity } from 'react-feather';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Sidenav = () => {
	return (
		<div id="layoutSidenav_nav">
			<nav className="sidenav shadow-right sidenav-light">
		  	<div className="sidenav-menu">
        	<div className="nav accordion" id="accordionSidenav">
        		<div className="sidenav-menu-heading d-sm-none">Account</div>
	        	<Link className="nav-link d-sm-none" to="">
	          	<div className="nav-link-icon"><Bell /></div>
	          	Alerts
	          </Link>

            <Link className="nav-link d-sm-none" to="">
            	<div className="nav-link-icon"><Mail /></div>
                Messages
            </Link>

            <div className="sidenav-menu-heading">Core</div>

            <Link
            	className="nav-link collapsed"
            	to=""
            	data-bs-toggle="collapse"
            	data-bs-target="#collapseDashboards"
            	aria-expanded="false"
            	aria-controls="collapseDashboards"
            >
            	<div className="nav-link-icon"><Activity /></div>
                Dashboards

               <div className="sidenav-collapse-arrow">
               	<FontAwesomeIcon icon={faAngleDown} />
               </div>
            </Link>

            <div
            	className="collapse"
            	id="collapseDashboards"
            	data-bs-parent="#accordionSidenav"
            >
            	<nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
              	<Link className="nav-link" to="dashboard-1">Default</Link>
                <Link className="nav-link" to="dashboard-2">Multipurpose</Link>
                <Link className="nav-link" to="dashboard-3">Affiliate</Link>
              </nav>
            </div>
			  	</div>
				</div>
			</nav>
		</div>
	)
}
