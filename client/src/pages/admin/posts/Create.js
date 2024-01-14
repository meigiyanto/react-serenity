import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPaperPlane, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';


const Create = () => {
	// const [ article, setArticle ] = useState({});
  const [file, setFile] = useState([]);
  const fileRef = useRef(null);

  const handleFileChange = (event) => {
	 console.log(event.target)
    if (event.target.files) {
      // setFile(event.target.files[0]);
      setFile(fileRef.current.files[0].name)
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }
  };

	return (
		<>
			<div className="container-fluid py-5 px-4">
				<nav aria-label="breadcrumb">
				  <ol className="breadcrumb">
				    <li className="breadcrumb-item">
				    	<Link to="/admin"><Icon.Home height={16}/> Home</Link>
				    </li>
 				    <li className="breadcrumb-item">
 				    	<Link to="/admin/posts"><Icon.BookOpen height={16}/> Posts</Link>
 				    </li>
				    <li className="breadcrumb-item active" aria-current="page">Create Post</li>
				  </ol>
				</nav>

				<div className="position-relative">
				  <div className="position-absolute bottom-0 end-0 top-50">
						<Link className="btn btn-sm btn-outline-primary" to="/admin/posts">
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
									<textarea name="content" type="text" placeholder="write your content here" rows="10" cols="150" />


									<div className="my-3">
										<label htmlFor="meta_descriprion" className="form-label">Meta Description</label>
										<textarea id="meta_description" className="form-control" name="meta_description" rows={5} />
									</div>

									<div className="mt-3">
										<label htmlFor="picture" className="form-label">Picture</label>
										<div className="my-3">{file && (file === undefined ? `${file?.name} - ${file?.type}` : null)}</div>
										<div className="input-group mb-3">
										  <button className="btn btn-outline-secondary" type="button" id="input-file" onClick={handleUploadClick}>Upload</button>
										  <input type="file" ref={fileRef} className="form-control" id="input-file" aria-describedby="input-file" aria-label="Upload" onChange={handleFileChange} />
									   </div>
									</div>
					  		</div>

					  		<div className="col-lg-4">
									<div className="mb-3">
										<label htmlFor="category_id" className="form-label">Category</label>
										<select className="form-select" name="" aria-label="Select active">
											<option defaultValue={0}>-- Choose Category --</option>
										</select>
									</div>
									<div className="mb-3">
										<label htmlFor="tag" className="form-label">Tag</label>
										<input type="text" id="tag" className="form-control" name="tag" />
									</div>
									<div className="mb-3">
										<label htmlFor="tag" className="form-label">Preview</label>
										<img className="img-fluid" src={`${window.location.origin}/assets/img/upload/placehold.jpg`} alt="" />
									</div>
									<div className="mb-3">
										<label htmlFor="picture_descriprion" className="form-label">Picture Description</label>
										<textarea id="picture_description" className="form-control" name="picture_description" rows={5} />
									</div>

								  <div className="row">
										<div className="col-6">
											<div className="mb-3">
												<label htmlFor="active" className="form-label">Active</label>
												<select className="form-select" name="" aria-label="Select active">
												<option defaultValue="Y">-- Status Option --</option>
												  <option value="Y">Yes</option>
												  <option value="N">No</option>
												</select>
											</div>
										</div>

										<div className="col-6">
											<div className="mb-3">
												<label htmlFor="headline" className="form-label">Headline</label>
												<select className="form-select" name="" aria-label="Select headline">
												  <option defaultValue="Y">-- Headline Option --</option>
												  <option value="Y">Yes</option>
												  <option value="N">No</option>
												</select>
											</div>
										</div>
									</div>

								  <div className="row">
										<div className="col-6">
											<div className="mb-3">
												<label htmlFor="comment" className="form-label">Comment</label>
													<select className="form-select" name="" aria-label="Select comment">

												  <option defaultValue='Y'>-- Allowance Comment Option --</option>
												  <option value="Y">Yes</option>
												  <option value="N">No</option>
												</select>
											</div>
										</div>
										<div className="col-6">
											<div className="mb-3">
												<label htmlFor="type" className="form-label">Type</label>
												<select className="form-select" name="" aria-label="Select type">
												  <option defaultValue="general">-- Post Type Option --</option>
												  <option value="general">General</option>
												  <option value="pagination">Pagination</option>
												  <option value="audio">Audio</option>
												  <option value="video">Video</option>
												</select>
											</div>
										</div>
									</div>

					  		</div>
					  	</div>

							<div className="position-lg-relative">
	  						<div className="position-lg-absolute bottom-0 end-0 top-50">
					      	<button type="button" className="btn btn-outline-secondary mx-3"><FontAwesomeIcon icon={faSave} /> Save as draft</button>
					      	<button type="submit" className="btn btn-success"><FontAwesomeIcon icon={faPaperPlane} /> Publish</button>
					      </div>
					    </div>

				  	</form>
				</div>
		 	 </div>
		 </div>
		</>
	)
}


export { Create }	;

/*
  <button className="btn btn-outline-secondary" type="button" id="input-file" onClick={handleUploadClick}>Upload</button>
  <input type="file" className="form-control" id="input-file" aria-describedby="input-file" aria-label="Upload" onChange={handleFileChange} />
*/
