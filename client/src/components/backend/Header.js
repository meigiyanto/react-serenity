import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className="navbar navbar-expand-lg bd-navbar sticky-top">
		  <nav
		  	className="container-xxl bd-gutter flex-wrap flex-lg-nowrap"
		  	aria-label="Main navigation"
		  >
		    <div className="d-flex">
			    <div className="bd-navbar-toggle">
			      <button
			      	className="btn btn-white"
			      	type="button"
			      	data-bs-toggle="offcanvas"
			      	data-bs-target="#bdSidebar"
			      	aria-controls="bdSidebar"
			      	aria-label="Toggle memu navigation"
			      >
			      <i className="bi bi-list" style={{fontSize: '1.5rem'}}></i>
					  </button>
			    </div>
			    <div>
						<Link to="/home"><i className="bi bi-house-fill" style={{fontSize: '1.5rem'}}></i>
						</Link>
					</div>
				</div>

		    <div className="d-flex">
				  <div className="bd-search" id="docsearch">
						<button
							type="button"
							className="btn btn-white"
						>
							<i className="bi bi-search" style={{fontSize: '1.5rem'}}></i>
						</button>
				  </div>

				  <button
					  className="btn btn-white d-flex d-lg-none order-3 p-2"
					  type="button"
					  data-bs-toggle="offcanvas"
					  data-bs-target="#bdNavbar"
					  aria-controls="bdNavbar"
					  aria-label="Toggle account navigation"
				  >
				  <i className="bi bi-three-dots-vertical" style={{fontSize: '1.5rem'}}></i>
				  </button>
				</div>

				<div
					className="offcanvas-lg offcanvas-end flex-grow-1"
					tabIndex="-1"
					id="bdNavbar"
					aria-labelledby="bdNavbarOffcanvasLabel"
					data-bs-scroll="true"
				>
				  <div className="offcanvas-header px-4 pb-0">
				    <h5 className="offcanvas-title text-black" id="bdNavbarOffcanvasLabel">My Account</h5>
				    <button
				    	type="button"
				    	className="btn-close btn-close-dark"
				    	data-bs-dismiss="offcanvas"
				    	aria-label="Close"
				    	data-bs-target="#bdNavbar"
				    ></button>
				  </div>

				  <div className="p-4 pt-0 p-lg-0">

				    <hr className="d-lg-none text-black-50" />

				    <ul className="navbar flex-row flex-wrap bd-navbar-nav">
				      <li className="nav-item col-6 col-lg-auto">
				        <Link
				        	className="nav-link py-2 px-0 px-lg-2"
				        	aria-current="true"
				        	href="#"
				        >Docs</Link>
				      </li>
				    </ul>

				    <hr className="d-lg-none text-black-50" />

				    <ul className="navbar flex-row flex-wrap ms-md-auto">

				      <li className="nav-item col-6 col-lg-auto">
				        <Link
				        	className="nav-link py-2 px-0 px-lg-2"
				        	href="https://github.com/twbs"
				        	target="_blank"
				        	rel="noopener"
				        >
				          <small className="d-lg-none ms-2">GitHub</small>
				        </Link>
				      </li>

				    </ul>

				  </div>
				</div>
		  </nav>
	  </header>
	)
}
