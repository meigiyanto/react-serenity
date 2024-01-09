import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

import Layout from './components/layouts/backend/Layout';
import Dashboard from './pages/admin/Dashboard';

const Backend = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Backend;
