import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';

import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';

import Contact from './pages/Contact';
import Food from './pages/Food';
import Services from './pages/Services';

import Portfolio from './pages/Portfolio';
import PortfolioSingle from './pages/PortfolioSingle';

import Pricing from './pages/Pricing';
import NoMatch from './pages/NoMatch';

function App() {
	return (
		<>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="about">
		         <Route index element={<About />} />
             <Route path="team" element={<Team />} />
 					</Route>

          <Route path="blog">
						<Route index element={<Blog />} />
						<Route path=":id" element={<BlogSingle />} />
					</Route>

					<Route path="contact" element={<Contact />} />
					<Route path="foods" element={<Food />} />
					<Route path="services" element={<Services />} />

					<Route path="portfolio">
						<Route index element={<Portfolio />} />
						<Route path=":type" element={<PortfolioSingle />} />
					</Route>

					<Route path="pricing" element={<Pricing />} />
     			<Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
		</>
	);
}

export default App;
