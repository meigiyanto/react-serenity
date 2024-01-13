import React from 'react';
import * as Icon from 'react-feather';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
	return (
		<>
		  <div className="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
		    <aside className="bd-sidebar">
		      <div
		      	className="offcanvas-lg offcanvas-start"
		      	tabIndex="-1"
		      	id="bdSidebar"
		      	aria-labelledby="bdSidebarOffcanvasLabel"
		      >
		        <div className="offcanvas-header border-bottom">
		          <button
		          	type="button"
		          	className="btn-close"
		          	data-bs-dismiss="offcanvas"
		          	aria-label="Close"
		          	data-bs-target="#bdSidebar"
		          ></button>
		        </div>

		        <div className="offcanvas-body">
			          <nav id="bd-docs-nav" aria-label="Docs navigation">
					    		<ul className="list-unstyled">
			              <li className="nav-item pt-2 text-muted">General</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/admin"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Tv /> Dashboard</Link>
		              	</li>

		              	<li className="nav-item pt-2 text-muted">Content</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/posts"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.BookOpen /> Posts</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/comments"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.MessageSquare /> Comments</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/categories"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.FolderPlus /> Categoeries</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/tags"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Bookmark /> Tags</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/pages"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.FileText /> Pages</Link>
		              	</li>

		              	<li className="nav-item pt-2 text-muted">Appearance</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/themes"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Aperture /> Themes</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/menu-manager"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.List /> Menu Manager</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/settings"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Settings /> Settings</Link>
		              	</li>

		              	<li className="nav-item pt-2 text-muted">Component</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/components"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Package /> Components</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/galleries"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Image /> Galleries</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/contact"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Phone /> Contact</Link>
		              	</li>

		              	<li className="nav-item pt-2 text-muted">User</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/users"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Users /> Users</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/roles"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.LifeBuoy /> Roles</Link>
		              	</li>
			              <li className="nav-item py-2">
			              	<Link
			              		to="/admin/permissions"
			              		className="nav-link"
			              		aria-current="page"
			              	>
			              	<Icon.Shield /> Permissions</Link>
		              	</li>
					      	</ul>
				  			</nav>
					  	</div>

		    	</div>
		  	</aside>
		  </div>
		</>
	)
}
