import React from 'react';
import { Outlet as BackendOutlet } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from '../../components/backend/Header';
import { Sidebar } from '../../components/backend/Sidebar';
import { Footer } from '../../components/backend/Footer';

const Layout = () => {
	return (
		<>
    	<Header />
   		<Sidebar />
   		<main className="main">
				<BackendOutlet />
			</main>
    	<Footer />
		</>
	);
}

export { Layout };
