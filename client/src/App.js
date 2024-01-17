import {
	RouterProvider,
	createBrowserRouter
} from 'react-router-dom';

import { Layout as FrontendLayout } from './layouts/frontend/Layout';
import { Layout as BackendLayout } from './layouts/backend/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Team from './pages/Team';

import NoMatch from './pages/NoMatch';

import Dashboard from './pages/admin/Dashboard';
import Posts from './pages/admin/posts/index';
import { Detail as DetailPost } from './pages/admin/posts/Detail';
import { Write as WritePost } from './pages/admin/posts/Write';

import Categories from './pages/admin/categories/index';
import { Write as WriteCategory } from './pages/admin/categories/Write';

import Comments from './pages/admin/comments/index';
import { Detail as DetailComment } from './pages/admin/comments/Detail';
import { Edit as EditComment } from './pages/admin/comments/Edit';
import { Create as CreateComment } from './pages/admin/comments/Create';


import Tags from './pages/admin/tags/index';
import { Edit as EditTag } from './pages/admin/tags/Edit';
import { Create as CreateTag } from './pages/admin/tags/Create';

import Pages from './pages/admin/pages/index';
import { Edit as EditPage } from './pages/admin/pages/Edit';
import { Create as CreatePage } from './pages/admin/pages/Create';

import Themes from './pages/admin/themes/index';
import Galleries from './pages/admin/galleries/index';
import Menu from './pages/admin/menu/index';
import Settings from './pages/admin/settings/index';
import Components from './pages/admin/components/index';
import Contacts from './pages/admin/contacts/index';

import Users from './pages/admin/users/index';
import Roles from './pages/admin/roles/index';
import Permissions from './pages/admin/permissions/index';

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
			  element: <BlogDetail />
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
				element: <PortfolioDetail />
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
				path: 'posts/write',
				element: <WritePost />
			},
			{
				path: 'posts/detail/:id',
				element: <DetailPost />
			},
			{
				path: 'comments',
				element: <Comments />
			},
			{
				path: 'comments/create',
				element: <CreateComment />
			},
			{
				path: 'comments/detail/:id',
				element: <DetailComment />
			},
			{
				path: 'comments/edit/:id',
				element: <EditComment />
			},
			{
				path: 'categories',
				element: <Categories />
			},
			{
				path: 'categories/write',
				element: <WriteCategory />
			},
			{
				path: 'tags',
				element: <Tags />
			},
			{
				path: 'tags/create',
				element: <CreateTag />
			},
			{
				path: 'tags/edit/:id',
				element: <EditTag />
			},
			{
				path: 'pages',
				element: <Pages />
			},
			{
				path: 'pages/create',
				element: <CreatePage />
			},
			{
				path: 'pages/edit/:id',
				element: <EditPage />
			},
			{
				path: 'themes',
				element: <Themes />
			},
			{
				path: 'menu',
				element: <Menu />
			},
			{
				path: 'settinga',
				element: <Settings />
			},
			{
				path: 'components',
				element: <Components />
			},
			{
				path: 'galleries',
				element: <Galleries />
			},
			{
				path: 'contacts',
				element: <Contacts />
			},
			{
				path: 'users',
				element: <Users />
			},
			{
				path: 'roles',
				element: <Roles />
			},
			{
				path: 'permissions',
				element: <Permissions />
			},
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
