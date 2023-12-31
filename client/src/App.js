import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout as FrontendLayout } from './components/layouts/frontend/Layout';
import { Layout as BackendLayout } from './components/layouts/backend/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import PortfolioSingle from './pages/PortfolioSingle';
import Team from './pages/Team';

import NoMatch from './pages/NoMatch';

const router = createBrowserRouter([
	{
		path: '/',
		element: <FrontendLayout />,
		children: [
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'about',
				element: <About />
			},
			{
				path: 'team',
				element: <Team />
			},
			{
				path: 'blog',
				element: <Blog />,
			},
			{
			  path: 'blog/:id',
			  element: <BlogSingle />
			},
			{
				path: 'contact',
				element: <Contact />
			},
			{
				path: 'services',
				element: <Services />
			},
			{
				path: 'pricing',
				element: <Pricing />
			},
			{
				path: 'portfolio',
				element: <Portfolio />
			},
			{
				path: 'portfolio/:type',
				element: <PortfolioSingle />
			}
		],
	},
	{
		path: '/dashboard',
		element: <BackendLayout />
	},
	{
		path: '*',
		element: <NoMatch />
	}
]);

const App = () => {
	return (<RouterProvider router={router} />);
}

export default App;
