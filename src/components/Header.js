import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import menu from './../data/menu';

function Navbar() {
	const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [dropdown, setDropdown] = useState(false);
	const handleDropdown = () => setDropdown(!dropdown);

	return (
		<nav id="navbar" className={!toggle ? "navbar" : "navbar navbar-mobile"}>
			<ul>
				<li><Link className="active" to="/">Home</Link></li>
					<li className="dropdown">
						<Link to="#" onClick={handleDropdown}>
				        <span>About</span>
								{!dropdown ? <i className="bi bi-chevron-right"></i> : <i className="bi bi-chevron-down"></i>}
				      </Link>
					  {dropdown ? (<ul className={dropdown ? 'dropdown-active' : ''}>
					    <li><Link to="about">About</Link></li>
					    <li><Link to="team">Team</Link></li>
					    <li className="dropdown">
					      <Link to="#" onClick={handleDropdown}>
					        <span>Deep Drop Down</span>
									{!dropdown ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-right"></i>}
					      </Link>

					      {dropdown ? (<></>) : (<ul className={dropdown ? '' : 'dropdown-active'}>
					        <li><Link to="#">Deep Drop Down 1</Link></li>
					        <li><Link to="#">Deep Drop Down 2</Link></li>
					        <li><Link to="#">Deep Drop Down 3</Link></li>
					        <li><Link to="#">Deep Drop Down 4</Link></li>
					        <li><Link to="#">Deep Drop Down 5</Link></li>
					      </ul>)}

					    </li>
					  </ul>) : <></>}

					</li>

					<li><Link to="services">Services</Link></li>
					<li><Link to="pricing">Pricing</Link></li>
					<li><Link to="portfolio">Portfolio</Link></li>
					<li><Link to="blog">Blog</Link></li>
					<li><Link to="contact">Contact</Link></li>

					<li><Link className="getstarted" to="about">Get Started</Link></li>
			</ul>

			{ !toggle ?
 				(<i onClick={handleToggle} className="bi mobile-nav-toggle bi-list"></i>)
				:
				(<i onClick={handleToggle} className="bi mobile-nav-toggle bi-x"></i>)
			}
		</nav>
	)
}

function Header() {
	return (
  	<header id="header" className="fixed-top d-flex align-items-center">
			<div className="container d-flex align-items-center justify-content-between">
				<div className="logo">
					<h1 className="text-light">
						<NavLink
							to="/"
							className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
						>Serenity</NavLink>
					</h1>
					{/*<Link to="/">
						<img src="../assets/img/logo.png" alt="" className="img-fluid" />
					</Link>*/}
				</div>
				<Navbar />
			</div>
		</header>
	)
}

export default Header;
