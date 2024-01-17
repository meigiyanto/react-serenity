import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
import * as Icon from 'react-feather';

const Posts = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const resp = await axios.get('/posts');
				const data = await resp.data;
				setItems(data);
				setLoading(!loading);
			} catch(err) {
				setError(err);
			}
		}

		fetchPosts();
	},[])

	if(error) {
		return (<h3>Oops... {error.message}</h3>)
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
					    <li className="breadcrumb-item active" aria-current="page"><Icon.BookOpen height={16} /> Posts</li>
					</ol>
				</nav>

				<div className="d-sm-flex">
					<div className="p-2">
						<h3>Lists of Posts</h3>
					  </div>
					  <div className="ms-auto p-2">
					  	  <Link className="btn btn-sm btn-outline-primary" to="write">
						      <FontAwesomeIcon icon={faAdd} /> Create New Post
						  </Link>
					  </div>
				</div>
 			</div>

			<div className="container-fluid px-2 mb-3">
				<div className="card">
					<div className="card-body">
						<div className="table table-responsive">
							<table className="table table-bordered table-striped text-nowrap">
							{
								items.map(article => (
									<>
										<tr key={article.id}>
											<th><input type="checkbox"/></th>
											<th
												style={{width: "5%"}}
												data-bs-toggle="collapse"
												data-bs-target={`#post${article.id}`}
											>
												<i className="bi-plus"></i>
											</th>
											<th style={{width: "34%"}}>Title</th>
											<td style={{width: "66%"}}>{article.title}</td>
										</tr>
										<tr>
											<th style={{margin: "0", padding: "0"}}></th>
											<th style={{margin: "0", padding: "0"}}></th>
											<td style={{margin: "0", padding: "0"}} colSpan="2">
												<div
													style={{margin: "0", padding: "0"}}
													id={`post${article.id}`}
													className="collapse"
												>
													<table
														className="table table-striped table-bordered"
														style={{marginBottom: "0"}}
													>
														<tr>
															<th width="35%">Category</th>
															<td width="65%">{article.ctitle}</td>
														</tr>
														<tr>
															<th>Type</th>
															<td>{`${article.type[0].toUpperCase()+article.type.slice(1)}`}</td>
														</tr>
														<tr>
															<th>Headline</th>
															<td>{article.headline === 'Y' ? 'Yes' : 'No'}</td>
														</tr>
														<tr>
															<th>Active</th>
															<td>{article.active === 'Y' ? 'Yes' : 'No'}</td>
														</tr>
														<tr>
															<th>Action</th>
															<td>
										    	 		 		<div className="btn-group">
										    	 		 			<Link
										    	 		 				to={`write?id=2`}
										    	 		 				state={article}
										    	 		 				className="btn btn-sm btn-warning"
										    	 		 			>
										    	 		 				<FontAwesomeIcon icon={faEdit} />
										    	 		 			</Link>
										    	 		 			<Link
											    	 		 			to={`detail/${article.id}`}
											    	 		 			className="btn btn-sm btn-info"
										    	 		 			>
										    	 		 				<FontAwesomeIcon icon={faEye} />
										    	 		 			</Link>
										    	 		 			<Link
										    	 		 				to={`delete/${article.id}`}
										    	 		 				className="btn btn-sm btn-danger"
										    	 		 			>
										    	 		 				<FontAwesomeIcon icon={faTrash} />
										    	 		 			</Link>
										    	 		 		</div>
										    	 		 	</td>
														</tr>
													</table>
												</div>
											</td>
										</tr>
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

export default Posts;
