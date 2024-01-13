import React, { useState /*, useContext*/ } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../../context/authContext';
import menu from './../../data/menu';

function ListMenu({ path= null, name, children= null, onClick= null }) {
	const [isClose, setIsClose] = useState(false);

	return (
		<>
			{
				!children ?
				(<Link to={path}>{name}</Link>)
				:
				(<>
					<Link to={path} onClick={onClick}>
						<span>{name}</span>
						<i className="bi bi-chevron-down"></i>
					</Link>{children}
				</>)
			}
		</>
	)
}

function Navbar() {
	const [isShow, setIsShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
	// const {currentUser, logout} = useContext(AuthContext);
	// let isLoggedIn = false;

	return (
		<nav id="navbar" className={!isShow ? "navbar" : "navbar navbar-mobile"}>
		{
			isShow ? (<ul>
				{
					menu.map(m => (
						<li key={m.id} className={m.children ? "dropdown" : null}>
							<ListMenu
								name={m.name}
								path={m.path}
								onClick={() => setDropdown(!dropdown)}
							>
							{
							 m.children && (<ul className={isShow ? "dropdown-active" : null}>
							  {
							   m.children.map(mc => (
							   	<li key={mc.id} className={mc.children ? "dropdown" : null}>
							   		<ListMenu
							   			name={mc.name}
							   			path={mc.path}
							   			onClick={() => setDropdown(!dropdown)}
							   		>
							   		{
							   			mc.children && (<ul className={!isShow ? "dropdown-active" : null}>
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


		{	!isShow ?
			(<i onClick={() => setIsShow(!isShow)} className="bi bi-list mobile-nav-toggle"></i>)
			:
			(<i onClick={() => setIsShow(!isShow)} className="bi mobile-nav-toggle bi-x"></i>)
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

/*
								m.children && (<ul
									m.children.map(mc => (
							 			<li key={mc.id} className={mc.children ? 'dropdown' : null}>
							 				<ListMenu
							 					name={mc.name}
							 					path={mc.path}
							 					onClick={(e) => { e.stopPropagation(); setDropdown(!dropdown) }}
							 				>
							 				{
							 					isShow ? (<ul className={!dropdown ? null : "dropdown-active"}>
							 					{
							 						mc.children(mcc => (
														<li key={mcc.id}>
															<ListMenu name={mcc.name} path={mcc.path} />
														</li>
							 						))
							 					}
							 					</ul>) : (<></>)
							 				}
							 				</ListMenu>
							 			</li>
									))
								</ul>)
								

			{
				isShow ? (<ul>
				{
					menu.map(m => (

								{
									m.children && (<ul className={!dropdown ? null : "dropdown-active"}>
									 	{
									 		m.children.map(mc => (

									 				{
									 					mc.children && (<ul className={!dropdown ? null : "dropdown-active"}>
									 					{
									 						mc.children.map(mcc => (
																
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
				</ul>)
				:
				(<></>)
			}
*/


/*
							{

							}
*/
