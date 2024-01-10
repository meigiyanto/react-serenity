import React, { useState/*, useContext*/ } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../../context/authContext';
// import menu from './../data/menu';

function ListMenu({ path= null, name, children= null, onClick= null }) {
	return (
		<>
			{
				!children ?
				(<Link to={path}>{name}</Link>)
				:
				(<><Link
					to={path}
					onClick={onClick}
				>
					<span>{name}</span>
					<i className="bi bi-chevron-right"></i>
				</Link>{children}</>)
			}
		</>
	)
}

function Navbar() {
	const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [dropdown, setDropdown] = useState(false);
	const handleDropdown = () => setDropdown(!dropdown);
	// const {currentUser, logout} = useContext(AuthContext);
	let isLoggedIn = false;

	return (
		<nav id="navbar" className={!toggle ? "navbar" : "navbar navbar-mobile"}>
			<ul>
				<li><ListMenu name="Home" path="/home" /></li>
				<li className="dropdown">
					<ListMenu name="About" onClick={handleDropdown}>
						<ul className={dropdown ? 'dropdown-active' : ''}>
							<li><ListMenu name="About Us" path="/about" /></li>
							<li><ListMenu name="Our Team" path="/team" /></li>
							<li className="dropdown">
								<ListMenu name="Other" onClick={handleDropdown}>
									<ul className={dropdown ? 'dropdown-active' : ''}>
										<li><ListMenu name="Link 1" path="/link-1" /></li>
										<li><ListMenu name="Link 2" path="/link-2" /></li>
										<li><ListMenu name="Link 3" path="/link-3" /></li>
									</ul>
								</ListMenu>
							</li>
						</ul>
					</ListMenu>
				</li>
				<li><ListMenu name="Blog" path="/blog" /></li>
				<li><ListMenu name="Contact" path="/contact" /></li>
				<li><ListMenu name="Pricing" path="/pricing" /></li>
				<li><ListMenu name="Portfolio" path="/portfolio" /></li>
				<li><ListMenu name="Services" path="/services" /></li>
				{ isLoggedIn ? (
				<><li><Link className="getstarted" to="login">Login</Link></li>
				<li><Link className="getstarted" to="register">Register</Link></li></>) : (
				<><li><Link className="getstarted" to="dashboard">Dashboard</Link></li>
				<li><Link className="getstarted">Logout</Link></li></>) }
			</ul>

			{ !toggle ?
 				(<i onClick={handleToggle} className="bi mobile-nav-toggle bi-list"></i>)
				:
				(<i onClick={handleToggle} className="bi mobile-nav-toggle bi-x"></i>)
			}
		</nav>
	)
}

const Header = () => {
	return (
  	<header id="header" className="fixed-top d-flex align-items-center">
			<div className="container d-flex align-items-center justify-content-between">
				<div className="logo">
					<h1 className="text-light">
						<NavLink to="/home">Serenity</NavLink>
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

export { Header };
