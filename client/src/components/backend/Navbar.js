import React from 'react';
import { LogOut, Menu, Search, Settings } from 'react-feather';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
		    <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle">
		    	<Menu />
		    </button>

		    <Link
		    	className="navbar-brand pe-3 ps-4 ps-lg-2"
		    	to="index-2"
		    >SB Admin Pro</Link>

		    <form className="form-inline me-auto d-none d-lg-block d-sm-block me-3">
		        <div className="input-group input-group-joined input-group-solid">
		            <input
		            	className="form-control pe-0"
		            	type="search"
		            	placeholder="Search"
		            	aria-label="Search"
		            />
		            <div className="input-group-text">
		            	<Search />
		            </div>
		        </div>
		    </form>

		    <ul className="navbar-nav align-items-center ms-auto">
		        <li className="nav-item dropdown no-caret me-3">
		            <Link
		            	className="btn btn-icon btn-transparent-dark dropdown-toggle"
		            	id="searchDropdown"
		            	to="#"
		            	role="button"
		            	data-bs-toggle="dropdown"
		            	aria-haspopup="true"
		            	aria-expanded="false"
		            >
		            	<Search />
		            </Link>

		            <div className="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
		                <form className="form-inline me-auto w-100">
		                    <div className="input-group input-group-joined input-group-solid">
		                        <input
		                        	className="form-control pe-0"
		                        	type="text"
		                        	placeholder="Search for..."
		                        	aria-label="Search"
		                        	aria-describedby="basic-addon2"
		                        />
		                        <div className="input-group-text">
		                        	<Search />
		                        </div>
		                    </div>
		                </form>
		            </div>
		        </li>

		        <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
		            <Link
		            	className="btn btn-icon btn-transparent-dark dropdown-toggle"
		            	id="navbarDropdownUserImage"
		            	to="#navbaeDropdownUserImage"
		            	role="button"
		            	data-bs-toggle="dropdown"
		            	aria-haspopup="true"
		            	aria-expanded="false"
		            >
		            	<img
		            		className="img-fluid"
		            		src="../assets/backend/img/illustrations/profiles/profile-1.png"
		            		alt=""
		            		/>
		            	</Link>
		            <div
		            	className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up"
		            	aria-labelledby="navbarDropdownUserImage"
		            >
		                <h6 className="dropdown-header d-flex align-items-center">
		                    <img
		                    	className="dropdown-user-img"
		                    	src="../assets/backend/img/illustrations/profiles/profile-1.png"
		                    	alt=""
		                    />
		                    <div className="dropdown-user-details">
		                        <div className="dropdown-user-details-name">Valerie Luna</div>
		                        <div
		                        	className="dropdown-user-details-email"
		                        >
		                        	{/*
		                        	<Link
		                        		to="cdn-cgi/l/email-protection"
		                        		className="__cf_email__"
		                        		data-cfemail="8ff9e3fae1eecfeee0e3a1ece0e2"
		                        		>[email&#160;protected]
		                        	</Link> */}
		                        </div>
		                    </div>
		                </h6>
		                <div className="dropdown-divider"></div>
		                <Link className="dropdown-item" to="">
		                    <div className="dropdown-item-icon">
		                    	<Settings />
		                    </div>
		                    Account
		                </Link>
		                <Link className="dropdown-item" to="">
		                    <div className="dropdown-item-icon">
		                    	<LogOut />
		                    </div>
		                    Logout
		                </Link>
		            </div>
		        </li>
		    </ul>
		</nav>
	)
}

export default Navbar;
