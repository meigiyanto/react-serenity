import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-feather';

const Single = () => {
	const { article, setArticle } = useState({});
	const { id }  = useParams();

  const fetchArticle = async () => {
  	const resp = await axios.get(`/posts/${id}`);
  	setArticle(resp.data);
  }
	useEffect(() => {
	  fetchArticle();
	})

	function createMarkup(val) {
	  return {__html: val};
	}

	return (
		<>
			<div className="container-fluid py-5 px-4">
				<nav aria-label="breadcrumb">
				  <ol className="breadcrumb">
				    <li className="breadcrumb-item"><Link to="/admin"><Icon.Home height={16}/> Home</Link></li>
 				    <li className="breadcrumb-item"><Link to="/admin/posts"><Icon.BookOpen height={16}/> Posts</Link></li>
				    <li className="breadcrumb-item active" aria-current="page">Library</li>
				  </ol>
				</nav>
			</div>

			<div className="container-fluid px-4 mb-3">
			  <div className="card">
			   <img src={`${window.location.origin}/assets/img/blog/${article.picture}`} alt={article.picture_description} />
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


export { Single }	;
