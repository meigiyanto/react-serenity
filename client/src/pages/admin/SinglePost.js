import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-feather';

const SinglePost = () => {
	const [article, setArticle] = useState([]);
	const { id }  = useParams();

  const fetchArticle = async () => {
  	const resp = await axios.get(`/posts/${id}`);
  	setArticle(resp.data);
  }
	useEffect(() => {
	  fetchArticle();
	},[])

	function createMarkup(val) {
	  return {__html: val};
	}

	return (
		<>
			<header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
		    <div className="container-fluid px-4">
	        <div className="page-header-className">
	          <div className="row align-items-center justify-classNameName-between pt-3">
	            <div className="col-auto mb-3">
	              <h3 className="page-header-title">
                  <div className="page-header-icon">
                  <Icon.List /> Detail Post</div>
	              </h3>
	            </div>

							<div className="col-12 col-xl-auto mb-3">
							  <Link className="btn btn-sm btn-light text-primary" to="/dashboard/posts">
							    <Icon.ArrowLeft />
							    Go Back
							  </Link>
							</div>

 	          </div>
	        </div>
		    </div>
			</header>

			<div className="container-fluid px-4">
			  <div className="card">
			   <img src={`http://localhost:3000/assets/frontend/img/blog/${article.picture}`} alt={article.picture_description} />
			    <div className="card-body">
			    	<h3>{article.title}</h3>
			    	<ul className="list-inline">
			    		<li className="list-item">{article.created_by}</li>
			    		<li className="list-item">{new Date(article.created_at).toDateString()}</li>
			    		<li className="list-item">{article.tag}</li>
			    		<li className="list-item">{article.category_id}</li>
			      </ul>
			    	<div dangerouslySetInnerHTML={createMarkup(article.content)} />
			    </div>
			  </div>
			</div>
		</>
	)
}


export default SinglePost;
