import React, { useState /*, useContext*/ } from 'react';
import { NavLink,Link } from 'react-router-dom';
// import { AuthContext } from '../../../context/authContext';
import menu from './../../data/menu';

function ListMenu({ path= null, name, children= null, onClick= null }) {
	return (
		<>
			{
				!children ?
				(<NavLink
					to={path}
					className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }
					>{name}</NavLink>)
				:
				(<><NavLink
					to={path}
					onClick={onClick}
					className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }
					>
						<span>{name}</span><i className="bi bi-chevron-down"></i>
					</NavLink>{children}</>
				)
			}
		</>
	)
}

function Navbar() {
	const isShow = false;
	const handleShow = (elm = null) => {
		elm?.target.parentElement.classList.toggle('navbar-mobile');
		elm?.target.classList.toggle('bi-x');
		elm?.target.classList.toggle('bi-list');
	}
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (elm = null) => {
	  elm.target.children[1].classList.toggle('bi-chevron-right');
    if(elm.target.parentElement) {
			elm.target.parentElement.classList.toggle('dropdown');
			elm.target.nextElementSibling.classList.toggle('dropdown-active');
  	}
  	setDropdown(!dropdown);
  }
	// const {currentUser, logout} = useContext(AuthContext);
	// let isLoggedIn = false;

	return (
		<nav id="navbar" className="navbar">
		{
			!isShow ? (<ul>
				{
					menu.map(m => (
						<li	key={m.id}>
							<ListMenu
								name={m.name}
								path={m.path}
								onClick={handleDropdown}
							>
							{
							 m.children && (<ul>
							   {
							  	 m.children.map(mc => (
							  		 <li key={mc.id}>
							  			 <ListMenu
							  			 	name={mc.name}
							  			 	path={mc.path}
							  			 	onClick={handleDropdown}
							  			 >
							  			 {
							  			  mc.children && (<ul>
							  			  	{
							  			  		mc.children.map(mcc => (
								  			  		<li key={mcc.id}>
									  			  		<ListMenu name={mcc.name} path={mcc.path} />
									  			  	</li>
							  			  		))
							  			  	}
							  			  </ul>)
							  			 }
							  			 </ListMenu>
							  		 </li>
							  	 ))
							   }
							  </ul>)
							}
							</ListMenu>
						</li>
					))
				}
			</ul>) : (<></>)
		}


		{	!isShow && (<i onClick={handleShow} className="bi bi-list mobile-nav-toggle"></i>) }
		</nav>
	)
}

const Header = () => {
	return (
  	<header id="header" className="fixed-top d-flex align-items-center">
			<div className="container d-flex align-items-center justify-content-between">
				<div className="logo">
					<h1 className="text-light">
						<Link to="/home">Serenity</Link>
					</h1>
					{/*<NavLink to="/">
						<img src="../assets/img/logo.png" alt="" className="img-fluid" />
					</NavLink>*/}
				</div>
				<Navbar />
			</div>
		</header>
	)
}

export { Header };
