import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const menu = [
	{
		id: 1,
		name: 'Home',
		path: '/',
	},
	{
		id: 2,
		name: 'About',
		path: '',
		children: [
			{
		 		id: 8,
				name: 'About Us',
				path: '/about',
			},
			{
		 		id: 9,
				name: 'Our Team',
		 	 	path: '/team',
			},
			{
		 		id: 10,
				name: 'Other',
				path: '',
				children: [
					{
						id: 11,
 						name: 'link 1',
						path: '/link-1',
					},
					{
						id: 12,
 						name: 'link 2',
						path: '/link-2',
					},
					{
						id: 13,
 						name: 'link 3',
						path: '/link-3',
					}
				]
			}
		]
	},
	{
		id: 3,
		name: 'Blog',
		path: '/blog',
	},
	{
		id: 4,
		name: 'Contact',
		path: '/contact',
	},
	{
		id: 5,
		name: 'Services',
		path: '/services',
	},
	{
		id: 6,
		name: 'Pricing',
		path: '/pricing',
	},
	{
		id: 7,
		name: 'Portfolio',
		path: '/portfolio',
	}
];

function Dropdown() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
		<>
				{
					menu.map(m => (
						<li key={m.id} className={m.children ? 'dropdown' : ''}>
							{ !m.children ? (
								<Link to={m.path}>
									{m.name}
								</Link> ) : (
								<>
									<Link to={m.path} onClick={handleOpen}>
										<span>{m.name}</span>
										{ !open ?
											(<i className="bi bi-chevron-down"></i>)
											:
											(<i className="bi bi-chevron-right"></i>)
										}
									</Link>

									{open ? (<ul className={open ? "dropdown-active" : null}>
										{
											m.children.map(mc => { return !mc.children ? (
													<li key={mc.id}>
														<Link to={mc.path}>{mc.name}</Link>
													</li>
											) : (
														<li key={mc.id}>
															<Link to={mc.path} onClick={handleOpen}>
																<span>{mc.name}</span>
																{ open ?
																	(<i className="bi bi-chevron-down"></i>)
																	:
																	(<i className="bi bi-chevron-right"></i>)
																}
															</Link>
														</li>
													)
											}
										)
									}

									</ul>) : <></>}
								</>
								)}
						</li>
	 	 		  ))
				}
		</>
	)
}

function Navbar() {
	const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

	return (
		<nav id="navbar" className={!toggle ? "navbar" : "navbar navbar-mobile"}>
			<ul>
				<Dropdown />
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
