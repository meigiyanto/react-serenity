import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Breadcrumb from './Breadcrumb';

const Layout = () => {
	return (
		<>
			<Sidebar />
      <div className="page-wrapper">
				<Topbar />
        <div className="page-content">
        	<div className="container-fluid">
        		<Breadcrumb />
        		<Outlet />
          </div>

          <footer className="footer text-center text-sm-start">
           <p>&copy; { new Date().getFullYear() }</p>
          </footer>
        </div>
      </div>
		</>
	)
}

export {Layout};
