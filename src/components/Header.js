import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
	const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const handleDropdown = (initVal) => setDropdown(!dropdown);

	return (
  		<header id="header" className="fixed-top d-flex align-items-center">
				<div className="container d-flex align-items-center justify-content-between">

			      <div className="logo">
			        <h1 className="text-light">
								<Link to="/">Serenity</Link>
							</h1>
							{/*
						  	<Link to="/">
									<img src="../assets/img/logo.png" alt="" className="img-fluid" />
								</Link>
 	  					*/}
			      </div>

			      <nav id="navbar" className={!toggle ? 'navbar' : 'navbar navbar-mobile'}>
 			 				{toggle ?
			        (<ul className={dropdown ? 'dropdown-active' : null }>
			         	<li><Link to="/">Home</Link></li>
							  <li><Link to="/blog">Blog</Link></li>

			          <li className="dropdown">
									<Link onClick={() => handleDropdown(1)}>
										<span>About</span>
										<i
											className={`bi ${!dropdown ? 'bi-chevron-right' : 'bi-chevron-down'}`}
										></i>
									</Link>

			            {dropdown ? (<ul className={dropdown ? 'dropdown-active' : null}>
			              <li><Link to="/about">About</Link></li>
			              <li><Link to="/about/team">Team</Link></li>
										<li className="dropdown">
											<Link onClick={() => handleDropdown(2)}>
												<span>Deep Drop Down</span>
												<i className={`bi ${dropdown ? 'bi-chevron-right' : 'bi-chevron-down'}`}></i>
											</Link>

											 {dropdown ? (<ul className={dropdown ? 'dropdown-active' : null}>
				                  <li><Link to="#">Deep Drop Down 1</Link></li>
				                  <li><Link to="#">Deep Drop Down 2</Link></li>
				                  <li><Link to="#">Deep Drop Down 3</Link></li>
				                  <li><Link to="#">Deep Drop Down 4</Link></li>
				                  <li><Link to="#">Deep Drop Down 5</Link></li>
				                </ul>) : (<></>)}

										</li>
			            </ul>
    						 ) : (<></>)
 	 							}
			          </li>

			          <li><Link to="/foods">Foods</Link></li>
			          <li><Link to="/services">Services</Link></li>
			          <li><Link to="/pricing">Pricing</Link></li>
			          <li><Link to="/portfolio">Portfolio</Link></li>
			          <li><Link to="/contact">Contact</Link></li>

			          <li><Link to="about" className="getstarted">Get Started</Link></li>
			        </ul>
							) : <></>}
 							<i onClick={handleToggle} className={`bi mobile-nav-toggle ${!toggle ? 'bi-list' : 'bi-x'}`}></i>
			      </nav>

				</div>
 			</header>
	)
}

export default Header;
