import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/frontend/Header';
import { Footer } from '../../components/frontend/Footer';

const Layout = () => {
	useEffect(() => {
		const handleAOS = () => {
			AOS.init({
	      duration: 1000,
	      easing: 'ease-in-out',
	      once: true,
	      mirror: false
	    })
		};
		window.addEventListener('scroll', () => handleAOS());
		return () => {
			window.removeEventListener('scroll', () => handleAOS());
		};
	}, []);

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
 );
}

export {Layout};
