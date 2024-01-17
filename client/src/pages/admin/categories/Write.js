import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPaperPlane, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import 'react-quill/dist/quill.snow.css';
import { format } from 'date-fns';

const Write = () => {
	const state = useLocation().state;
	const uploadRef = useRef(null);
    const [categories,setCategories] = useState([]);
	const [parent, setParent] = useState(state?.parent || 0);
	const [title, setTitle] = useState(state?.title || "");
	const [active, setActive] = useState(state?.active || "Y");
	const [seotitle, setSeotitle] = useState(state?.seotitle || "");
	const [picture, setPicture] = useState(state?.picture || null);
	const [picture_description, setPicture_description] = useState(state?.picture_description || "");
	const [created_by, setCreated_by] = useState(state?.created_by || 1);
	const [updated_by, setUpdated_by] = useState(state?.updated_by || 1);
	const [created_at, setCreated_at] = useState(state?.created_at || null);
	const [updated_at, setUpdated_at] = useState(state?.updated_at || null);
    const navigate = useNavigate();

	const previewFile = () => {
		const preview = document.querySelectorAll('#preview')[0];
		const imgFile = document.querySelector('input[type=file]').files[0];
	    const fileReader = new FileReader();

	    fileReader.addEventListener('load', () => {
	    	preview.src = fileReader.result;
	    },false, );

	    if(imgFile) {
	    	fileReader.readAsDataURL(imgFile);
	    }
	}

	const handleOpen = () => {
		const event = document.createEvent("Event");
		event.initEvent("trigger", true, true);
		uploadRef.current.addEventListener(
		  "trigger",
		  (e) => {
		    e.target.click();
		  },
		  false,
		);
		uploadRef.current.dispatchEvent(event);
	}

	const handleUpload = async () => {
		try {
			const formData = new FormData();
		    formData.append("file", picture);
		    const response = await axios.post("/upload", formData);
		    return response.data;
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();
		const imgUrl = await handleUpload();

		try {
		  state
		    ? await axios.put(`/categories/${state.id}`, {
				parent,
		        title,
		        seotitle,
		        active,
		        picture: picture ? imgUrl : "",
		        picture_description,
		        created_by:1,
		        updated_by:1,
		        created_at,
		        updated_at: format(new Date(), "yyyy-LL-dd HH:mm:ss")
		      })
		    : await axios.post(`/categories/`, {
				parent,
				title,
				seotitle,
				picture: picture ? imgUrl : "",
				picture_description,
				created_by:1,
				updtated_by:1,
				created_at: format(new Date(), "yyyy-LL-dd HH:mm:ss"),
				updated_at: format(new Date(), "yyyy-LL-dd HH:mm:ss"),
		      });
		    navigate("/")
		} catch (err) {
		  console.log(err);
		}
	};

	const fetchCategories = async () => {
		const res = await axios.get('/categories');
		const data = await res.data;
		setCategories(data);
	}

	useEffect(() => {
		fetchCategories();
	},[])

	return (
		<>
			<div className="contaner-fluid py-3 px-2">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/admin"><Icon.Home height={16}/> Home</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="/admin/categories">
								<Icon.FolderPlus height={16}/>
								Categories</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">Write Category</li>
					</ol>
				</nav>

				<div className="d-sm-flex">
					<div className="p-2">
						<h3>Write Category</h3>
					</div>
					<div className="ms-auto p-2">
						<Link className="btn btn-sm btn-outline-primary" to="/admin/categories">
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

								<div className="col-lg-6 col-md-6">

									<div className="mb-3">
										<label
											htmlFor="parent"
											className="form-label"
										>Parent</label>
										<select
											className="form-select"
											name="parent"
											id="parent"
											aria-label="Select active"
											onChange={(e) => setParent(e.target.value) }
										>
											<option
												defaultValue={0 || state?.parent === 0 ? 0 : state?.parent}
												>
												{ 0 || state?.parent === 0 ? "No Parent" : state?.parent }
											</option>
											{
												categories.map(category => (
													<option key={category.id} value={category.id}>
														{category.title}
													</option>
												))
											}
										</select>
									</div>

						 			<div className="mb-3">
										<label htmlFor="title" className="form-label">Title</label>
										<input
											type="text"
											id="title"
											className="form-control"
											name="title"
											defaultValue={'' || state?.title}
											onChange={(e) => setTitle(e.target.value)}
										/>
									</div>


									<div className="mt-3">
										<div className="d-none">
											<input
												type="file"
												defaultValue={''}
												ref={uploadRef}
												id="picture"
												name="picture"
												className="form-control"
												aria-describedby="input-file"
												onChange={(e) => { previewFile(); setPicture(e.target.files[0])}}
											/>
										</div>

									</div>
									<div className="mt-3">
										<label
											htmlFor="preview"
											className="form-label"
										>Preview</label>
									</div>
									<img
										className="img-fluid"
										src={`${window.location.origin}/assets/frontend/img/upload/${ '' || state?.picture || 'placehold.jpg' }`}
										id="preview"
										alt="Preview"
										onClick={(e) => handleOpen()}
									/>

									<p className="pt-2">{state?.picture}</p>
								</div>


								<div className="col-lg-6 col-md-6">
									<div className="mb-3">
										<label htmlFor="active" className="form-label">Active</label>
										<select
											className="form-select"
											name="active"
											aria-label="Select active"
											defaultValue={'Y' || state?.active}
											onChange={(e) => setActive(e.target.value)}
										>
											<option	defaultValue={'Y' || state?.active}></option>
											<option value="Y">Active</option>
											<option value="N">Inactive</option>
										</select>
									</div>

									<div className="my-3">
										<label
											htmlFor="seotitle"
											className="form-label"
										>Seotitle</label>
										<input
											type="text"
											id="seotitle"
											className="form-control"
											name="seotitle"
											defaultValue={''|| state?.seotitle}
											onChange={(e) => setSeotitle(e.target.value)}
										/>
									</div>


									<div className="mb-3">
										<label
											htmlFor="picture_descriprion"
											className="form-label"
										>Picture Description</label>
										<textarea
											id="picture_description"
											className="form-control"
											name="picture_description"
											rows={11}
											defaultValue={'' || state?.picture_description}
											onChange={(e) => setPicture_description(e.target.value)}
										/>
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
										{"  "}Save as draft
									</button>
									<button
										onClick={handleClick}
										type="submit"
										className="btn btn-success"
									>
										<FontAwesomeIcon icon={faPaperPlane} />
										{"  "}Publish
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
