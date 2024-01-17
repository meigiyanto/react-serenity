import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
import * as Icon from 'react-feather';

const Permissions = () => {
	const [items, setItems] = useState([]);
	const fetchItems = async () => {
	  	const resp = await axios.get('/permissions');
	  	setItems(resp.data);
	}

	useEffect(() => {
	  fetchItems();
	},[items])

	return (
		<>
			<div className="container-fluid py-5 px-4">
				<nav aria-label="breadcrumb">
				    <ol className="breadcrumb">
					    <li className="breadcrumb-item">
					    	<Link to="admin"><Icon.Home height={16} /> Dashboard</Link>
					    </li>
					    <li className="breadcrumb-item active" aria-current="page"><Icon.Shield height={16} /> Permissions</li>
					</ol>
				</nav>
				<div className="position-relative">
				    <div className="position-absolute bottom-0 end-0 top-50">
						<Link className="btn btn-sm btn-outline-primary" to="/admin/permissions/create">
							<FontAwesomeIcon icon={faAdd} /> Create New Comment
						</Link>
					</div>
				</div>
			</div>

			<div className="container-fluid px-4 mb-3">
				<div className="card">
					<div className="card-body">
				    	<div className="table table-responsive">
				    		<table id="table-permissions" className="table table-bordered table-striped">
					    	 	<thead>
					    	 		<tr>
					    	 			<th width="15">
					    	 				<input type="checkbox" />
					    	 			</th>
					    	 			<th width="25">#</th>
					    	 			<th>Title</th>
					    	 			<th>Type</th>
					    	 			<th>Action</th>
					    	 		</tr>
					    	 	</thead>
					    	 	<tbody>

				    	 		</tbody>
			    	  		</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Permissions;