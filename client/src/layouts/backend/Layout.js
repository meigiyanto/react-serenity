import { Outlet } from 'react-router-dom';
import {Header} from '../../components/frontend/Header';
import {Footer} from '../../components/frontend/Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
 );
}

export {Layout};
