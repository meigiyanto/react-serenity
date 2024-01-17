import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as Icon from 'react-feather';

const Detail = () => {
	const [ item, setItem ] = useState([]);
	const { id }  = useParams();

	const fetchItem = async () => {
		const resp = await axios.get(`/posts/${id}`);
		setItem(resp.data);
	}

	useEffect(() => {
	  fetchItem();
	}, [id])

	function createMarkup(val) {
	  return {__html: val};
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
						<h3>Detail Post</h3>
					  </div>
					  <div className="ms-auto p-2">
					  	  <Link className="btn btn-sm btn-outline-primary" to="/admin/posts">
						      <FontAwesomeIcon icon={faArrowLeft} /> Go Back
						  </Link>
					  </div>
				</div>
 			</div>


			<div className="container-fluid px-4 mb-3">
				<div className="card">

			    	<img src={`${window.location.origin}/assets/backend/img/blog/${item.picture}`} alt={item.picture_description} />
			    	<div className="card-body">
					    <h3>{item.title}</h3>
					    <ul className="list-inline">
				    		<li className="list-item">{item.created_by}</li>
				    		<li className="list-item">{new Date(item.created_at).toDateString()}</li>
				    		<li className="list-item">{item.tag}</li>
				    		<li className="list-item">{item.category_id}</li>
					    </ul>
			    		<div dangerouslySetInnerHTML={createMarkup(item.content)} />
			    	</div>
				</div>

			</div>
		</>
	)
}


export { Detail }	;
