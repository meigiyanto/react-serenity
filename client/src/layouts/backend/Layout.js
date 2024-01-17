import React from 'react';
import { Outlet as BackendOutlet } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Header } from '../../components/backend/Header';
import { Sidebar } from '../../components/backend/Sidebar';
import { Footer } from '../../components/backend/Footer';

const Layout = () => {
	return (
		<>
   		<Sidebar />
			<div className="content ht-100v pd-0">
				<Header />
	   		<main className="content-body">
	   		  <div className="container">
						<BackendOutlet />
					</div>
				</main>
			</div>
    	<Footer />
		</>
	);
}

export { Layout };
