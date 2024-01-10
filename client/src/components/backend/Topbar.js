const Topbar = () => {
	return (
    <div className="topbar">
        <nav className="navbar-custom">
            <ul className="list-unstyled topbar-nav float-end mb-0">
                <li className="dropdown hide-phone">
                    <a
                    	className="nav-link dropdown-toggle arrow-none waves-light waves-effect"
                    	data-bs-toggle="dropdown"
                    	href="#"
                    	role="button"
                    	aria-haspopup="false"
                    	aria-expanded="false"
                    >
                        <i data-feather="search" className="topbar-icon"></i>
                    </a>

                    <div className="dropdown-menu dropdown-menu-end dropdown-lg p-0">
                        {/*<!-- Top Search Bar -->*/}
                        <div className="app-search-topbar">
                            <form action="#" method="get">
                                <input type="search" name="search" className="from-control top-search mb-0" placeholder="Type text..." />
                                <button type="submit">
                                	<i className="ti-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </li>

                <li className="dropdown notification-list">
                    <a
                    	className="nav-link dropdown-toggle arrow-none waves-light waves-effect"
                    	data-bs-toggle="dropdown"
                    	href="#"
                    	role="button"
                    	aria-haspopup="false"
                    	aria-expanded="false"
                    >
                        <i data-feather="bell" className="align-self-center topbar-icon"></i>
                        <span className="badge bg-danger rounded-pill noti-icon-badge">2</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-lg pt-0">
                        <h6 className="dropdown-item-text font-15 m-0 py-3 border-bottom d-flex justify-content-between align-items-center">
                            Notifications <span className="badge bg-primary rounded-pill">2</span>
                        </h6>

                        <div className="notification-menu" data-simplebar>
                            <a href="#" className="dropdown-item py-3">
                                <small className="float-end text-muted ps-2">2 min ago</small>
                                <div className="media">
                                    <div className="avatar-md bg-soft-primary">
                                        <i data-feather="shopping-cart" className="align-self-center icon-xs"></i>
                                    </div>
                                    <div className="media-body align-self-center ms-2 text-truncate">
                                        <h6 className="my-0 fw-normal text-dark">Your order is placed</h6>
                                        <small className="text-muted mb-0">Dummy text of the printing and industry.</small>
                                    </div>{/*<!--end media-body-->*/}
                                </div>{/*<!--end media-->*/}
                            </a>

                            <a href="#" className="dropdown-item py-3">
                                <small className="float-end text-muted ps-2">10 min ago</small>
                                <div className="media">
                                    <div className="avatar-md bg-soft-primary">
                                        <img src="./assets/images/users/user-4.jpg" alt="" className="thumb-sm rounded-circle" />
                                    </div>
                                    <div className="media-body align-self-center ms-2 text-truncate">
                                        <h6 className="my-0 fw-normal text-dark">Meeting with designers</h6>
                                        <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                                    </div>{/*<!--end media-body-->*/}
                                </div>{/*<!--end media-->*/}
                            </a>

                            <a href="#" className="dropdown-item py-3">
                                <small className="float-end text-muted ps-2">40 min ago</small>
                                <div className="media">
                                    <div className="avatar-md bg-soft-primary">
                                        <i data-feather="users" className="align-self-center icon-xs"></i>
                                    </div>
                                    <div className="media-body align-self-center ms-2 text-truncate">
                                        <h6 className="my-0 fw-normal text-dark">UX 3 Task complete.</h6>
                                        <small className="text-muted mb-0">Dummy text of the printing.</small>
                                    </div>
                                </div>
                            </a>

                            <a href="#" className="dropdown-item py-3">
                                <small className="float-end text-muted ps-2">1 hr ago</small>
                                <div className="media">
                                    <div className="avatar-md bg-soft-primary">
                                        <img src="assets/images/users/user-5.jpg" alt="" className="thumb-sm rounded-circle" />
                                    </div>
                                    <div className="media-body align-self-center ms-2 text-truncate">
                                        <h6 className="my-0 fw-normal text-dark">Your order is placed</h6>
                                        <small className="text-muted mb-0">It is a long established fact that a reader.</small>
                                    </div>{/*<!--end media-body-->*/}
                                </div>{/*<!--end media-->*/}
                            </a>{/*<!--end-item-->*/}
                            {/*<!-- item-->*/}

                            <a href="#" className="dropdown-item py-3">
                                <small className="float-end text-muted ps-2">2 hrs ago</small>
                                <div className="media">
                                    <div className="avatar-md bg-soft-primary">
                                        <i data-feather="check-circle" className="align-self-center icon-xs"></i>
                                    </div>
                                    <div className="media-body align-self-center ms-2 text-truncate">
                                        <h6 className="my-0 fw-normal text-dark">Payment Successfull</h6>
                                        <small className="text-muted mb-0">Dummy text of the printing.</small>
                                    </div>{/*<!--end media-body-->*/}
                                </div>{/*<!--end media-->*/}
                            </a>{/*<!--end-item-->*/}
                        </div>

                        {/*<!-- All-->*/}
                        <a
                        	href="javascript:void(0);"
                        	className="dropdown-item text-center text-primary"
                        >
                            View all <i className="fi-arrow-right"></i>
                        </a>
                    </div>
                </li>

                <li className="dropdown">
                    <a
                    	className="nav-link dropdown-toggle waves-effect waves-light nav-user"
                    	data-bs-toggle="dropdown"
                    	href="#"
                    	role="button"
                    	aria-haspopup="false"
                    	aria-expanded="false"
                    >
                        <span className="ms-1 nav-user-name hidden-sm">Nick</span>
                        <img
                        	src="./assets/backend/images/users/user-5.jpg"
                        	alt="profile-user"
                        	className="rounded-circle thumb-xs"
                        />
                    </a>

                    <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="pages-profile"><i data-feather="user" className="align-self-center icon-xs icon-dual me-1"></i> Profile</a>
                        <a className="dropdown-item" href="apps-contact-list"><i data-feather="users" className="align-self-center icon-xs icon-dual me-1"></i> Contacts</a>
                        <div className="dropdown-divider mb-0"></div>
                        <a className="dropdown-item" href="auth-login"><i data-feather="power" className="align-self-center icon-xs icon-dual me-1"></i> Logout</a>
                    </div>
                </li>
            </ul>

        </nav>
  	</div>
	)
}

export default Topbar;
