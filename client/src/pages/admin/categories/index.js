import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
import * as Icon from 'react-feather';

const Categories = () => {
	const [items, setItems] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);
	const fetchItems = async () => {
		try {
		  	const resp = await axios.get('/categories');
		  	setItems(resp.data);
		  	setLoading(false);
		} catch(err) {
			setError(err);
			setLoading(true);
		}
	}

	useEffect(() => {
	  const timer = setTimeout(() => {
	  	fetchItems();
	  },2000);

	  return () => {
	  	clearTimeout(timer);
	  }
	},[items])

	if(error) {
		return (<h3>Oops... somthing went wrong</h3>)
	} else if(loading) {
		return (
			<>
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading. Please wait...</span>
				</div>
				<h3>Loading...</h3>
			</>
		)
	}

	return (
		<>
			<div className="container-fluid py-3 px-2">
				<nav aria-label="breadcrumb">
				    <ol className="breadcrumb">
					    <li className="breadcrumb-item">
							<Link to="admin"><Icon.Home height={16} /> Dashboard</Link>
					    </li>
					     <li className="breadcrumb-item active" aria-current="page"><Icon.FolderPlus height={16} /> Categories</li>
					</ol>
				</nav>

				<div className="d-sm-flex">
					<div className="p-2">
						<h3>Lists of Categoeies</h3>
					  </div>
					  <div className="ms-auto p-2">
					  	  <Link className="btn btn-sm btn-outline-primary" to="write">
							  <FontAwesomeIcon icon={faAdd} /> Create New Category
						  </Link>
					  </div>
				</div>
 			</div>


			<div className="container-fluid px-4 mb-3">
				<div className="card">
					<div className="card-body">
				    	<div className="table table-responsive">
							<table className="table table-bordered table-striped text-nowrap">
							{
								items.map(category => (
				   					<>
										<thead key={category.id}>
											<tr>
												<th width="10">
													<input type="checkbox" name="" />
												</th>
												<th
													width="30"
													data-bs-toggle="collapse"
													data-bs-target={`#category${category.id}`}
												>
													<i className="bi bi-plus"></i>
												</th>
												<th>{category.title}</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td
													colSpan="2"
													style={{margin: "0", padding: "0"}}
												></td>
												<td
													colSpan="3"
													style={{margin: "0", padding: "0"}}
												>
													<div
														id={`category${category.id}`}
														className="collapse"
														style={{margin: "0", padding: "0"}}
													>
														<table
															style={{marginBottom: "0"}}
															className="table table-striped table-bordered"
														>
															<thead>
																<tr>
																	<th>Parent</th>
																	<th>Active</th>
																	<th>Created By</th>
																	<th>Created At</th>
																	<th>Action</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>{category.parent === 0 ? "No Parent" : category.parent }</td>
																	<td>{category.active === 'Y' ? "Yes" : "No"}</td>
																	<td>{category.created_by}</td>
																	<td>{new Date(category.created_at).toDateString()}</td>
																	<td>
																		<div className="btn-group">
																			<Link
																				to={`write?id=${category.id}`}
																				state={category}
																				className="btn btn-sm btn-warning"
																				><FontAwesomeIcon icon={faEdit} />{" "}Edit</Link>
																			<Link
																				to={`delete/${category.id}`}
																				className="btn btn-sm btn-danger"
																				><FontAwesomeIcon icon={faTrash} />{" "}Delete</Link>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</td>
											</tr>
										</tbody>
									</>
								))
						 	}
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Categories;
