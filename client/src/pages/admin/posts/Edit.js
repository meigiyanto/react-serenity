import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPaperPlane, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import * as Icon from 'react-feather';

const Edit = () => {
	const [article, setArticle] = useState([]);
	const { id }  = useParams();
 	const [file, setFile] = useState([]);
    const fileRef = useRef(null);
	const typePostRef = useRef(null);

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

	const fetchArticle = async () => {
		const resp = await axios.get(`/posts/${id}`);
		setArticle(resp.data);
	}

	useEffect(() => {
	  fetchArticle();
	}, [id])

	function createMarkup(value) {
	  return {__html: value};
	}

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
					    <li className="breadcrumb-item active" aria-current="page">Edit Post</li>
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
										<input type="text" id="title" className="form-control" name="title" defaultValue={article.title} />
									</div>

									<div className="mb-3">
										<label htmlFor="seotitle" className="form-label">Seotitle</label>
										<input type="text" id="seotitle" className="form-control" name="seotitle"  defaultValue={article.seotitle} />
									</div>

									<div className="my-3">
										<label htmlFor="content" className="form-label">Content</label>
										<textarea id="content" className="form-control" name="content" cols={10} rows={50}></textarea>
										<div dangerouslySetInnerHtml={createMarkup(article.content)} />
									</div>

									<div className="my-3">
										<label htmlFor="meta_descriprion" className="form-label">Meta Description</label>
										<textarea id="meta_description" className="form-control" name="meta_description" rows={5} defaultValue={article.meta_description} />
									</div>

									<div className="mt-3">
										<label htmlFor="picture" className="form-label">Picture</label>
										<div className="my-3">{file && (file === undefined ? `${file?.name} - ${file?.type}` : null)}
										</div>
										<div className="input-group mb-3">
											<button className="btn btn-outline-secondary" type="button" id="input-file" onClick={handleUploadClick}>Upload</button>
										    <input type="file" ref={fileRef} className="form-control" id="input-file" aria-describedby="input-file" aria-label="Upload" defaultValue={article.picture} onChange={handleFileChange} />
									</div>
								</div>
					  		</div>

					  		<div className="col-lg-4">
								<div className="mb-3">
									<label htmlFor="category_id" className="form-label">Category</label>
									<select className="form-select" name="" aria-label="Select active">
										<option defaultValue={article.category_id}>{article.category_id}</option>
									</select>
								</div>

								<div className="mb-3">
									<label htmlFor="tag" className="form-label">Tag</label>
									<input type="text" id="tag" className="form-control" name="tag"  defaultValue={article.tag} />
								</div>

								<div className="mb-3">
									<label htmlFor="tag" className="form-label">Preview</label>
									<img className="img-fluid" src={`${window.location.origin}/assets/img/blog/${article.picture}`} alt={article.picture_description} />
								</div>

								<div className="mb-3">
									<label htmlFor="picture_descriprion" className="form-label">Picture Description</label>
									<textarea id="picture_description" className="form-control" name="picture_description" rows={5} defaultValue={article.picture_description} />
								</div>

								  <div className="row">
								  	  <div className="col-6">
									  		<div className="mb-3">
												<label htmlFor="active" className="form-label">Active</label>
												<select className="form-select" name="" aria-label="Select active">
													<option defaultValue={article.headline === 'Y' ? 'Yes' : 'No'}>{article.active === 'Y' ? 'Active' : 'Inactive'}</option>
												  	<option value="Y">Yes</option>
												  	<option value="N">No</option>
												</select>
											</div>
										</div>

										<div className="col-6">
											<div className="mb-3">
												<label htmlFor="headline" className="form-label">Headline</label>
												<select className="form-select" name="" aria-label="Select headline">
													<option defaultValue={article.headline === 'Y' ? 'Yes' : 'No'}>{article.headline === 'Y' ? 'Yes' : 'No'}</option>
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
													<option defaultValue={article.comment === 'Y' ? 'Allow' : 'Disallow'}>{article.comment === 'Y' ? 'Allow' : 'Disallow'}</option>
													<option value="Y">Yes</option>
												    <option value="N">No</option>
												</select>
											</div>
										</div>
										<div className="col-6">
											<div className="mb-3">
												<label htmlFor="type" className="form-label">Type</label>
												<select className="form-select" name="" aria-label="Select type">
												  <option defaultValue={article.type} ref={typePostRef}>{`${article.type[0]?.toUpperCase()+article.type?.slice(1) ?? ""}`}</option>
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
							      	<button type="button" className="mx-3 btn btn-outline-secondary"><FontAwesomeIcon icon={faSave} /> Save as draft</button>
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


export { Edit }	;

/*
  <button className="btn btn-outline-secondary" type="button" id="input-file" onClick={handleUploadClick}>Upload</button>
  <input type="file" className="form-control" id="input-file" aria-describedby="input-file" aria-label="Upload" onChange={handleFileChange} />
*/
