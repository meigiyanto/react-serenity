import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPaperPlane, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';


const Create = () => {
	// const [ item, setItem ] = useState({});

	return (
		<>
			<div className="container-fluid py-5 px-4">

				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
					    <li className="breadcrumb-item">
					    	<Link to="/admin"><Icon.Home height={16}/> Home</Link>
					    </li>
	 				    <li className="breadcrumb-item">
	 				    	<Link to="/admin/components"><Icon.Package height={16}/> Components</Link>
	 				    </li>
					    <li className="breadcrumb-item active" aria-current="component">Create Component</li>
					</ol>
				</nav>

				<div className="position-relative">
					<div className="position-absolute bottom-0 end-0 top-50">
						<Link className="btn btn-sm btn-outline-primary" to="/admin/components">
							<FontAwesomeIcon icon={faArrowLeft} /> Go Back
						</Link>
					</div>
				</div>

			</div>

			<div className="container-fluid px-4 mb-3">
				<div className="card">
					<div className="card-body">

				  		<form>
						  	<div className="row">
						  		<div className="col-lg-8">
									<div className="mb-3">
										<label htmlFor="title" className="form-label">Title</label>
										<input type="text" id="title" className="form-control" name="title" />
									</div>
									<div className="mb-3">
										<label htmlFor="seotitle" className="form-label">Seotitle</label>
										<input type="text" id="seotitle" className="form-control" name="seotitle" />
									</div>
						  		</div>
						  	</div>

							<div className="position-lg-relative">
			  					<div className="position-lg-absolute bottom-0 end-0 top-50">
							      	<button
							      		type="button"
							      		className="btn btn-outline-secondary mx-3"
							      	>
							      		<FontAwesomeIcon icon={faSave} /> Save as draft
							      	</button>
							      	<button
							      		type="submit"
							      		className="btn btn-success"
							      	>
							      		<FontAwesomeIcon icon={faPaperPlane} /> Publish
							    	</button>
							 	</div>
							 </div>

				  		</form>
					</div>
		 		</div>
			</div>
		</>
	)
}


export { Create };