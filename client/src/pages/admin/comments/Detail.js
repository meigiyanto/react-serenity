import { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-feather';

const Detail = () => {
	const [ item, setItem ] = useState([]);
	const { id }  = useParams();

  const fetchItem = async () => {
  	const resp = await axios.get(`/comments/${id}`);
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
			<div className="container-fluid py-5 px-4">
				<nav aria-label="breadcrumb">
				  <ol className="breadcrumb">
				    <li className="breadcrumb-item"><Link to="/admin"><Icon.Home height={16}/> Home</Link></li>
 				    <li className="breadcrumb-item"><Link to="/admin/comments"><Icon.MessageSquare height={16}/> Comments</Link></li>
				    <li className="breadcrumb-item active" aria-current="page">Detail Post</li>
				  </ol>
				</nav>
			</div>

			<div className="container-fluid px-4 mb-3">
			  <div className="card">


			  </div>
			</div>

		</>
	)
}


export { Detail }	;
