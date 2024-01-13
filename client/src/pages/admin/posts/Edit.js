import { useState, useEffect, useLocation } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

const EditPost = () => {
	/*
	const [article, setArticle] = useState([]);
	const { id } = useLocation().pathname.slice('/')[2];
	console.log(id);
  const fetchArticle = async () => {
  	const resp = await axios.get(`/posts/${id}`);
  	setArticle(resp.data);
  }
	useEffect(() => {
	  fetchArticle();
	},[])
  */
	return (
		<>
			<header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
		    <div className="container-fluid px-4">
	        <div className="page-header-className">
	          <div className="row align-items-center justify-classNameName-between pt-3">
	            <div className="col-auto mb-3">
	              <h3 className="page-header-title">
                  <div className="page-header-icon">
                  <Icon.List /> Edit Post</div>
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
			    <div className="card-body">

			    </div>
			  </div>
			</div>
		</>
	)
}


export default EditPost;
