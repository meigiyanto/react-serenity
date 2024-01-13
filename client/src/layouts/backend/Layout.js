import { useEffect } from 'react';
// import './styles.css';
import { Outlet as BackendOutlet } from 'react-router-dom';

import Navbar from '../../components/backend/Navbar';
import { Sidenav } from '../../components/backend/Sidenav';
import { Footer } from '../../components/backend/Footer';

const Layout = () => {
	useEffect(() => {
	 if(!document.body.classList.contains('nav-fixed')) {
	 	  document.body.classList.add('nav-fixed');
	 }
	}, []);

	return (
		<>
    	<Navbar />
	    <div id="layoutSidenav">
      	<Sidenav />
	      <div id="layoutSidenav_content">
	      	<main>
						<BackendOutlet />
	      	</main>
	      	<Footer />
	    	</div>
	  	</div>
		</>
	);
}

export {Layout};
