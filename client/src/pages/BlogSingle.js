import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Sidebar from '../components/frontend/Sidebar';
import Breadcrumb from '../components/frontend/widget/Breadcrumb';

function BlogSingle() {
	const [post, setPost] = useState({});
	const location = useLocation();
	const postId = location.pathname.split('/')[2];
	const getPost = async () => {
		try {
			const result = await fetch(`/posts/${postId}`);
			const data = await result.json();
			setPost(data);
		} catch(err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getPost();
	});

	function createMarkup(val) {
	  return {__html: val};
	}

	return (
		<main id="main">
			<Breadcrumb page="Blog" description="" subPage={post.title} />

			<section id="blog" className="blog">
				<div className="container" data-aos="fade-up">

					<div className="row">
 			 			<div className="col-lg-8 entries">
							<article className="entry entry-single">
							  <div className="entry-img">
							    <img
							    	src={`${window.location.origin}/assets/img/blog/${post.picture}`}
							    	alt={post.picture_description}
							    	className="img-fluid"
							    />
							  </div>

		  					<h2 className="entry-title">{post.title}</h2>

							  <div className="entry-meta">
							    <ul>
							      <li className="d-flex align-items-center">
							      	<i className="bi bi-person"></i>
							      	<Link to="#">{post.created_by}</Link>
							      </li>
							      <li className="d-flex align-items-center">
							      	<i className="bi bi-clock"></i>
							      	<Link to="blog-single">
							      		<time
							      			dateTime={new Date(post.created_at).toDateString()}
							      		>
							      			{new Date(post.created_at).toDateString()}
							      		</time>
							      	</Link>
							      </li>
							      <li className="d-flex align-items-center">
							      	<i className="bi bi-chat-dots"></i>
							      	<Link to="blog-single">{post.comments_count} Comments</Link>
							      </li>
							    </ul>
							  </div>

							  <div className="entry-content">
									<div dangerouslySetInnerHTML={createMarkup(post.content)} />
								</div>

							  <div className="entry-footer">
							    <i className="bi bi-folder"></i>
							    <ul className="cats">
							      <li><Link to="#"> {post.category_id}</Link></li>
							    </ul>

							    <i className="bi bi-tags"></i>
							    <ul className="tags">
							      <li><Link to="#"> {post.tag}</Link></li>
							    </ul>
							  </div>

							</article>

							<div className="blog-author d-flex align-items-center">
					      <img
					      	src={`${window.location.origin}/assets/img/blog/blog-author.jpg`}
					      	className="rounded-circle float-left"
					      	alt=""
					      />
					      <div>
					        <h4>{post.created_by}</h4>
					        <div className="social-links">
					          <Link to="https://twitters.com/#">
					          	<i className="bi bi-twitter"></i>
					          </Link>
					          <Link to="https://facebook.com/#">
					          	<i className="bi bi-facebook"></i>
					          </Link>
					          <Link to="https://instagram.com/#">
					          	<i className="bi bi-instagram"></i>
					          </Link>
					        </div>
					        <p></p>
					      </div>
					    </div>

							<div className="blog-comments">

								{post.comments_count >= 1 ? (
							 		<>
										<h4 className="comments-count">{post.comments_count} Comments</h4>
										<div id="comment-1" className="comment">
											<div className="d-flex">
												<div className="comment-img">
								  				<img src={`${window.location.origin}/assets/img/blog/comments-1.jpg`} alt="" />
								  	 		</div>
												<h5>Commentator</h5>
												<time dateTime="2020-01-01"></time>
												<p></p>
											</div>
										</div>
									</>
								) : <></>}

								<div className="reply-form">
						      <h4>Leave a Reply</h4>
						      <p>Your email address will not be published. Required fields are marked * </p>
						      <form action="">
						        <div className="row">
						          <div className="col-md-6 form-group">
						            <input
						            	name="name"
						            	type="text"
						            	className="form-control"
						            	placeholder="Your Name*"
						            />
						          </div>
						          <div className="col-md-6 form-group">
						            <input
						            	name="email"
						            	type="text"
						            	className="form-control"
						            	placeholder="Your Email*"
						            />
						          </div>
						        </div>
						        <div className="row">
						          <div className="col form-group">
						            <input
						            	name="website"
						            	type="text"
						            	className="form-control"
						            	placeholder="Your Website"
						            />
						          </div>
						        </div>
						        <div className="row">
						          <div className="col form-group">
						            <textarea
						            	name="comment"
						            	className="form-control"
						            	placeholder="Your Comment*"
						            />
						          </div>
						        </div>
						        <button
						        	type="submit"
						        	className="btn btn-primary"
						        >
						        	Post Comment
						        </button>
						      </form>
						    </div>

							</div>
						</div>

						<div className="col-lg-4">
							<div className="sidebar">
								<Sidebar />
						 	</div>
					 	</div>

					</div>
				</div>
			</section>
		</main>
	)
}

export default BlogSingle;
