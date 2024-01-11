import React from 'react';
import * as Icon from 'react-feather';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Sidenav = () => {
	return (
		<div id="layoutSidenav_nav">
			<nav className="sidenav shadow-right sidenav-light">
		  	<div className="sidenav-menu">
        	<div className="nav accordion" id="accordionSidenav">

            <div className="sidenav-menu-heading">Dashboard</div>
            <Link	className="nav-link" to="/dashboard">
            	<div className="nav-link-icon"><Icon.Activity /></div> Dashboards
            </Link>

        		<div className="sidenav-menu-heading">Content</div>
	        	<Link className="nav-link" to="/dashboard/posts">
	          	<div className="nav-link-icon"><Icon.BookOpen /></div> Posts
	          </Link>
	        	<Link className="nav-link" to="/dashboard/categories">
	          	<div className="nav-link-icon"><Icon.FolderPlus /></div> Categories
	          </Link>
	        	<Link className="nav-link" to="/dashboard/tags">
	          	<div className="nav-link-icon"><Icon.Bookmark /></div> Tags
	          </Link>
	          <Link className="nav-link" to="/dashboard/comments">
	          	<div className="nav-link-icon"><Icon.MessageSquare /></div> Comments
	          </Link>
      	    <Link className="nav-link" to="/dashboard/pages">
	          	<div className="nav-link-icon"><Icon.FileText /></div> Pages
	          </Link>

        		<div className="sidenav-menu-heading">Component</div>
	        	<Link className="nav-link" to="/dashboard/components">
	          	<div className="nav-link-icon"><Icon.Package /></div> Components
	          </Link>
	        	<Link className="nav-link" to="/dashboard/galleries">
	          	<div className="nav-link-icon"><Icon.Image /></div> Galleries
	          </Link>
	          <Link className="nav-link" to="/dashboard/categories">
	          	<div className="nav-link-icon"><Icon.Mail /></div> Contacts
	          </Link>

         		<div className="sidenav-menu-heading">Appearance</div>
	        	<Link className="nav-link" to="/dashboard/themes">
	          	<div className="nav-link-icon"><Icon.Aperture /></div> Themes
	          </Link>
	        	<Link className="nav-link" to="/dashboard/menu">
	          	<div className="nav-link-icon"><Icon.List /></div> Menu
	          </Link>
	        	<Link className="nav-link" to="/dashboard/settings">
	          	<div className="nav-link-icon"><Icon.Settings /></div> Settings
	          </Link>

        		<div className="sidenav-menu-heading">User</div>
	           <Link className="nav-link" to="/dashboard/users">
	          	<div className="nav-link-icon"><Icon.Users /></div> Users
	          </Link>
	          <Link className="nav-link" to="/dashboard/roles">
	          	<div className="nav-link-icon"><Icon.LifeBuoy /></div> Roles
	          </Link>
      	    <Link className="nav-link" to="/dashboard/permissions">
	          	<div className="nav-link-icon"><Icon.Shield /></div> Peemissions
	          </Link>

        		<div className="sidenav-menu-heading">Other</div>
	           <Link className="nav-link" to="/dashboard/Movies">
	          	<div className="nav-link-icon"><Icon.Table /></div> Movies
	          </Link>

			  	</div>
				</div>
			</nav>
		</div>
	)
}
