import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/backend/Navbar';
import { Sidenav } from '../../components/backend/Sidenav';
import { Header } from '../../components/backend/Header';
import { Footer } from '../../components/backend/Footer';

const Layout = () => {
	return (
		<>
    	<Navbar />
	    <div id="layoutSidenav">
      	<Sidenav />
	      <div id="layoutSidenav_content">
	      	<main>
	       		<Header />
	       		<div className="container-xl px-4 mt-n10">
							<Outlet />
							<h3>Dashboard</h3>
	       		</div>
	      	</main>
	      	<Footer />
	    	</div>
	  	</div>
		</>
	);
}

export {Layout};
