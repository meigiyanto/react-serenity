import { useEffect, useRef } from 'react';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';

export const Sidebar = () => {
	const asideRef = useRef(null);
    const handleToggleMenu = (event) => {
        event.preventDefault();
    	let asideEl  = document.createElement('div');
   		if([...document.querySelectorAll('.aside-backdrop')].length === 0) {
	   		asideEl.setAttribute('class', 'aside-backdrop');
	    	document.body.append(asideEl);
	    	document.body.classList.toggle('show-aside');
	   	} else {
	    	document.body.classList.toggle('show-aside');
	   		asideEl.removeAttribute('class', 'aside-backdrop');
	   	}
    }

	useEffect(() => {
		const scrollElement = document.querySelectorAll('#aside-scroll')[0] || asideRef.current;
		console.log(scrollElement ? 'initialize scroll bar success' : 'failed to initialize scroll bar');
	 	const asideBody = new PerfectScrollbar(scrollElement);
		console.log(scrollElement ? 'initialize scroll bar success' : 'failed to initialize scroll bar');

		window.addEventListener('load', () => {
			asideBody.update()
			console.log('updated');
		});
		return () => {
			window.removeEventListener('load', () => {
				asideBody.destroy();
				console.log('destroy');
			});
		}
	},[])

	return (
		<aside className="aside aside-fixed">
	        <div className="aside-header">
	            <Link to="/admin/dashboard" className="aside-logo pt-2">RS</Link>
	            <Link to="" className="aside-menu-link pt-1" onClick={handleToggleMenu}>
	                <Icon.Menu />
	                <Icon.X />
	            </Link>
	        </div>

	        <div className="aside-body" id="aside-scroll" ref={asideRef}>
				<ul className="nav nav-aside">
					<li className="nav-label">Dashboard</li>
					<li className="nav-item">
						<Link to="/admin" className="nav-link"><Icon.Tv /> <span>Dashboard</span></Link>
					</li>

					<li className="nav-label mg-t-25">Content</li>
					<li className="nav-item">
						<Link to="/admin/posts" className="nav-link"><Icon.BookOpen /> <span>Posts</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/comments" className="nav-link"><Icon.MessageSquare /> <span>Comments</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/categories" className="nav-link"><Icon.FolderPlus /> <span>Categories</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/tags" className="nav-link"><Icon.Bookmark /> <span>Tags</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/pages" className="nav-link"><Icon.FolderPlus /> <span>Pages</span></Link>
					</li>

					<li className="nav-label mg-t-25">Appearance</li>
					<li className="nav-item">
						<Link to="/admin/themes" className="nav-link"><Icon.Aperture /> <span>Themes</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/menu" className="nav-link"><Icon.List /> <span>Menu</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/settings" className="nav-link"><Icon.Settings /> <span>Settings</span></Link>
					</li>

					<li className="nav-label mg-t-25">Component</li>
					<li className="nav-item">
						<Link to="/admin/components" className="nav-link"><Icon.Package /> <span>Components</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/galleries" className="nav-link"><Icon.Image /> <span>Galleries</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/contacts" className="nav-link"><Icon.Mail /> <span>Contacts</span></Link>
					</li>

					<li className="nav-label mg-t-25">User</li>
					<li className="nav-item">
						<Link to="/admin/users" className="nav-link"><Icon.Users /> <span>Users</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/roles" className="nav-link"><Icon.LifeBuoy /> <span>Roles</span></Link>
					</li>
					<li className="nav-item">
						<Link to="/admin/permissions" className="nav-link"><Icon.Shield /> <span>Permissions</span></Link>
					</li>


				</ul>
			</div>
		</aside>
	)
}
