import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPaperPlane, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import moment from 'moment';

const Write = () => {
	const state = useLocation().state;
	const [categories, setCategories] = useState([]);
    const [file, setFile] = useState(null);
	const [value, setValue] = useState('');
	const [category_id, setCategory_id]= useState(state?.categpry_id || 1);
	const [title, setTitle]= useState(state?.title || "");
	const [seotitle, setSeotitle]= useState(state?.seotitle || "");
	const [content, setContent]= useState(state?.content || "");
	const [meta_description, setMeta_description]= useState(state?.meta_description || "");
	const [picture, setPicture]= useState(state?.picture || "");
	const [picture_description, setPicture_description]= useState(state?.meta_description || "");
	const [tag, setTag]= useState(state?.tag || "");
	const [type, setType]= useState(state?.type || "general");
	const [active, setActive]= useState(state?.active || "Y");
	const [headline, setHeadline]= useState(state?.headline || "Y");
	const [comment, setComment]= useState(state?.comment || "Y");
	const [hits, setHits]= useState(state?.hits || 1);
	const [created_by, setCreated_by]= useState(state?.created_by || 1);
	const [updated_by, setUpdated_by]= useState(state?.updated_by || 1);
	const [created_at, setCreated_at]= useState(state?.created_at || null);
	const [updated_at, setUpdated_at]= useState(state?.updated_at || null);

    const navigate = useNavigate();
	console.log(state)
	const upload = async () => {
		try {
		  const formData = new FormData();
		  formData.append("file", file);
		  const response = await axios.post("/upload", formData);
		  return response.data;
		} catch (err) {
		  console.log(err);
		}
	};

	const getCategories = async () => {
		const res = await axios.get('/categories');
		const data = await res.data;
		console.log(data);
		setCategories(data);
	}

	const handleClick = async (e) => {
		e.preventDefault();
		const imgUrl = await upload();

		try {
		  state
		    ? await axios.put(`/posts/${state.id}`, {
		        title,
		        content: value,
		        category_id,
		        picture: file ? imgUrl : "",
		      })
		    : await axios.post(`/posts/`, {
		        title,
		        content: value,
		        category_id,
		        picture: file ? imgUrl : "",
		        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
		      });
		    navigate("/")
		} catch (err) {
		  console.log(err);
		}
	};

	useEffect(() => {
		getCategories();
	},[])

	return (
		<>
			<div className="container-fluid py-3 px-2">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/admin"><Icon.Home height={16}/> Home</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="/admin/posts"><Icon.BookOpen height={16}/> Posts</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">Write Post</li>
					</ol>
				</nav>

				<div className="d-sm-flex">
					<div className="p-2">
						<h3>Write Post</h3>
					</div>
					<div className="ms-auto p-2">
						<Link className="btn btn-sm btn-outline-primary" to="/admin/posts">
							<FontAwesomeIcon icon={faArrowLeft} /> Go Back
						</Link>
					</div>
				</div>
			</div>

			<div className="container-fluid px-2 mb-3">
				<div className="card">
					<div className="card-body">

						<form>
							<div className="row">
								<div className="col-lg-8">
									<div className="mb-3">
										<label htmlFor="title" className="form-label">Title</label>
										<input
											type="text"
											id="title"
											className="form-control"
											name="title"
											defaultValue={''|| state?.title}
											onChange={(e) => setTitle(e.target.value)}
										/>
									</div>
									<div className="mb-3">
										<label htmlFor="seotitle" className="form-label">Seotitle</label>
										<input
											type="text"
											id="seotitle"
											className="form-control"
											name="seotitle"
											defaultValue={''|| state?.seotitle}
											onChange={(e) => setSeotitle(e.target.value)}
										/>
									</div>

									<div className="my-3">
										<label htmlFor="content" className="form-label">Content</label>
										<ReactQuill
											theme="snow"
											value={value}
											onChange={(e) => setContent(e.target.value)}
										/>
									</div>

									<div className="my-3">
										<label htmlFor="meta_descriprion" className="form-label">Meta Description</label>
										<textarea
											id="meta_description"
											className="form-control"
											name="meta_description"
											defaultValue={''|| state?.meta_description}
											onChange={(e) => setMeta_description(e.target.value)}
											rows={5}
										/>
									</div>

									<div className="mt-3">
										<label htmlFor="picture" className="form-label">Picture</label>
										<div className="input-group mb-3">
											<button
												className="btn btn-outline-secondary"
												type="button"
												id="input-file"
											>Upload</button>
											<input
												type="text"
												className="form-control"
												id="input-file"
												aria-describedby="input-file"
												aria-label="Upload"
												defaultValue={''|| state?.picture}
												onChange={(e) => setFile(e.target.value)}
											/>
										</div>
									</div>
								</div>

								<div className="col-lg-4">
									<div className="mb-3">
									<label htmlFor="category_id" className="form-label">Category</label>
										<select
											className="form-select"
											name="category_id"
											aria-label="Select active"
										>
											<option	defaultValue={'-- Category Opion --'|| state?.category_id}>{'' || state?.ctitle}</option>
											{categories && (<>{
											 categories.map(category => (<option key={category.id} defaultValue={category.id}>{category.title}</option>))
											}</>)}
										</select>
									</div>

									<div className="mb-3">
										<label htmlFor="tag" className="form-label">Tag</label>
										<input
											type="text"
											id="tag"
											className="form-control"
											name="tag"
											defaultValue={''|| state?.tag}
											onChange={(e) => setTag(e.target.value)}
										/>
									</div>

									<div className="row mb-3">
										<div className="col-md-6 mt-3">
											<img
												className="img-fluid"
												src={`${window.location.origin}/assets/frontend/img/upload/${ '' || state?.picture || 'placehold.jpg' }`}
												alt="Preview"
											/>
										</div>
										<div className="col-md-6">
											<label htmlFor="picture_descriprion" className="form-label">Picture Description</label>
											<textarea
												id="picture_description"
												className="form-control"
												name="picture_description"
												rows={6}
												defaultValue={''|| state?.picture_description}
												onChange={(e) => setPicture_description(e.target.value)}
											/>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<div className="mb-3">
												<label htmlFor="active" className="form-label">Active</label>
												<select
													className="form-select"
													name="active"
													aria-label="Select active"
													onSelect={(e) => setActive(e.target.value)}
												>
													<option	defaultValue={''|| state?.active}>{'' || state?.active === 'Y' ? "Active" : "Inactive"}</option>
													<option value="Y">Active</option>
													<option value="N">Inacvtive</option>
												</select>
											</div>
										</div>

										<div className="col-md-6">
											<div className="mb-3">
												<label htmlFor="headline" className="form-label">Headline</label>
												<select
													className="form-select"
													name="headline"
													aria-label="Select headline"
													onSelect={(e) => setHeadline(e.target.value)}
												>
													<option defaultValue={''|| state?.headline}>{'' || state?.headline === 'Y' ? "Yes" : "No"}</option>
													<option value="Y">Yes</option>
													<option value="N">No</option>
												</select>
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6">
											<div className="mb-3">
												<label htmlFor="comment" className="form-label">Comment</label>
												<select
													className="form-select"
													name="comment"
													aria-label="Select comment"
													onSelect={(e) => setComment(e.target.value)}
												>
													<option defaultValue={''|| state?.comment}>{'' || state?.comment === 'Y' ? "Allow" : "Deny"}</option>
													<option value="Y">Allow</option>
													<option value="N">Deny</option>
												</select>
											</div>
										</div>

										<div className="col-md-6">
											<div className="mb-3">
												<label htmlFor="type" className="form-label">Type</label>
												<select
													className="form-select"
													name="type"
													aria-label="Select type"
													onSelect={(e) => setType(e.target.value)}
												>
													<option defaultValue={'general'|| state?.type}>{ 'General' || (`${state?.type[0].toUpperCase()+state?.type.slice(1)}`)}</option>
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
									<button
										type="button"
										className="btn btn-outline-secondary mx-md-3 mx-sm-3 my-md-3 my-sm-3"
									>
										<FontAwesomeIcon icon={faSave} />
										Save as draft
									</button>
									<button
										onClick={handleClick}
										type="submit"
										className="btn btn-success"
									>
										<FontAwesomeIcon icon={faPaperPlane} />
										Publish
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


export { Write };
