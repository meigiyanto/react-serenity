import {
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom';
import { Layout as FrontendLayout } from './layouts/frontend/Layout';
import { Layout as BackendLayout } from './layouts/backend/Layout';

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

import Dashboard from './pages/admin/Dashboard';
import Posts from './pages/admin/posts/index';
import { Single as SinglePost } from './pages/admin/posts/Single';
// import Edit from './pages/admin/Posts/Edit';

// import Categories from './pages/admin/Categories';
// import Tags from './pages/admin/Tags';
// import Pages from './pages/admin/Pages';

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
		path: '/admin',
		element: <BackendLayout />,
		children: [
			{
				path: 'admin',
				element: <Dashboard />
			},
			{
				path: 'posts',
				element: <Posts />
			},
			{
				path: 'posts/detail/:id',
				element: <SinglePost />
			}
 		]
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
