import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

export const Header = () => {
	return (
		<div className="content-header">
			<div className="content-search">
				<Icon.Search />
				<input type="search" className="form-control data-search" placeholder="Search..." />
			</div>

			<div className="d-flex justify-content-between align-items-center">
				<nav className="nav mt-2 mr-4 d-none d-sm-block">
					<Link href="/admin" className="nav-link" target="_blank" title="view front page"><Icon.Home /></Link>
				</nav>

				{/* Navbar Right */}
				<div className="navbar-right pr-3">
					<div className="dropdown dropdown-profile">
						<Link className="dropdown-link" data-bs-toggle="dropdown" data-bs-target="#dropdown-menu">
							<div className="avatar avatar-sm">
								<img src={`${window.location.origin}/assets/backend/img/avatar.jpg`} className="rounded-circle" alt="" />
							</div>
						</Link>

						{/* Start Dropdown */}
						<div className="dropdown-menu dropdown-menu-right tx-13">
							<h6 className="tx-semibold mg-b-5">Name</h6>
							<p className="mg-b-25 tx-12 tx-color-03">Email</p>
							<Link href="admin/users/edit/:id" className="dropdown-item">
								<Icon.Edit3 /> Edit Profile
							</Link>
							<Link href="/admin/settings" className="dropdown-item">
								<Icon.Settings /> Settings
							</Link>

							<div className="dropdown-divider"></div>

							<Link href="http://www.popojicms.org/contact" className="dropdown-item" target="_blank">
								<Icon.HelpCircle /> help
							</Link>
							<Link href="https://www.facebook.com/popojicms/?ref=bookmarks" className="dropdown-item" target="_blank">
								<Icon.LifeBuoy /> Forum
							</Link>
							<Link href="/logout" className="dropdown-item">
								<Icon.LogOut /> Sign out
							</Link>
							{/* <form id="logout-form" action="logout" method="POST" style={{display: "none"}}>
							</form> */}
						</div>
						{/* End Dropdown */}

					</div>

				</div>

			</div>

		</div>
	)
}
