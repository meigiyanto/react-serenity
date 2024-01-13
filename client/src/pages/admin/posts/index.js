import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as Icon from 'react-feather';

const Posts = () => {
	const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
  	const resp = await axios.get('/posts');
  	setArticles(resp.data);
  }
	useEffect(() => {
	  fetchArticles();
	},[])

	return (
		<>
			<div className="container-fluid py-5 px-4">
				<nav aria-label="breadcrumb">
				  <ol className="breadcrumb">
				    <li className="breadcrumb-item"><Link to="admin"><Icon.Home height={16} /> Dashboard</Link></li>
				    <li className="breadcrumb-item active" aria-current="page"><Icon.BookOpen height={16} /> Posts</li>
				  </ol>
				</nav>
			</div>

			<div className="container-fluid px-4 mb-3">
	    	<div className="table table-responsive">
	    		<table id="table-posts" className="table table-bordered table-striped">
		    	 	<thead>
		    	 		<tr>
		    	 			<th width="15">
		    	 				<input type="checkbox" />
		    	 			</th>
		    	 			<th width="25">#</th>
		    	 			<th>Category</th>
		    	 			<th>Title</th>
		    	 			<th>Type</th>
		    	 			<th>Headline</th>
		    	 			<th>Action</th>
		    	 		</tr>
		    	 	</thead>
		    	 	<tbody>
		    	 		{
		    	 		 articles.map((article, idx) => (
				    	 		<tr key={article.id}>
				    	 			<td></td>
				    	 			<td>{idx+1}</td>
				    	 			<td>{article.category_id}</td>
				    	 			<td>{article.title}</td>
				    	 			<td>{`${article.type[0].toUpperCase() + article.type.slice(1)}`}</td>
				    	 			<td>{article.headline === 'Y' ? 'Yes' : 'No'}</td>
				    	 			<td>
				    	 		 		<div className="btn-group">
				    	 		 			<Link
				    	 		 				to={`edit/${article.id}`}
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
		    	 		 ))
		    	 	  }
		    	 	</tbody>
	    	  </table>
			  </div>
			</div>
		</>
	)
}

export default Posts;
