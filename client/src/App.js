import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout as FrontendLayout } from './components/layouts/frontend/Layout';
import { Layout as BackendLayout } from './components/layouts/backend/Layout';

import Home from './pages/Home';
import Dashboard from './pages/admin/Dashboard';

const App = () => {
	return (
		<>
			<BrowserRouter>
	      <Routes>
	        <Route path="/" element={<FrontendLayout />}>
	          <Route index element={<Home />} />
	        </Route>
	        <Route path="/dashboard" element={<BackendLayout />}>
	           <Route index element={<Dashboard />} />
	        </Route>
	      </Routes>
	    </BrowserRouter>
		</>
	);
}

export default App;
