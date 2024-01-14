import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import Sidebar from '../components/frontend/Sidebar';
import Breadcrumb from '../components/frontend/widget/Breadcrumb';
import Pagination from '../components/frontend/widget/Pagination';

let pageSize = 4;

function Blog() {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
  const fetchPosts = async () => {
  	const result = await fetch('/posts');
  	const data = await result.json();
   	setPosts(data);
	}

	useEffect(() => {
	  fetchPosts();
	},[]);

  const currentPostsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex  = firstPageIndex + pageSize;
    return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, posts]);

  return (
		<main id="main">
 	 		<Breadcrumb page="Blog" description="" />
		  <section id="blog" className="blog">
		    <div className="container" data-aos="fade-up">
		      <div className="row">
		        <div className="col-lg-8 entries">
   						<div className="row">
								{
							  	currentPostsData.map(post => (
								  	<div key={post.id} className="col-md-6">
										  <article key={post.id} className="entry">
								        <div className="entry-img">
								          <img
														src={`${window.location.origin}/assets/img/blog/${post.picture}`}
														alt={post.picture_description}
														className="img-fluid"
													/>
								        </div>

								        <h2 className="entry-title">
								          <Link to={`/blog/${post.id}`}>{post.title}</Link>
								        </h2>

								        <div className="entry-meta">
								        	<ul>
								            <li className="d-flex align-items-center">
															<i className="bi bi-person"></i>
															<Link to="#">{post.created_by}</Link>
														</li>
								            <li className="d-flex align-items-center">
															<i className="bi bi-clock"></i>
															<Link to="#">
																<time
																	dateTime={format(new Date(post.created_at), 'dd-mm-yyyy')}
																>
																	{new Date(post.created_at).toDateString()}
																</time>
															</Link>
														</li>
								            <li className="d-flex align-items-center">
															<i className="bi bi-chat-dots"></i>
															<Link to="#">{post.comments_count} Comments</Link>
														</li>
								          </ul>
								        </div>

								        <div className="entry-content">
								          <div className="read-more">
								            <Link to={`/blog/${post.id}`}>Read More</Link>
								          </div>
								        </div>

								      </article>
							      </div>
 									))
  							}
							</div>

	  					<div className="mb-5 blog-pagination">
						   	{posts && (<Pagination
						   	  className="justify-content-center"
									currentPage={currentPage}
					        totalCount={posts.length}
					        pageSize={pageSize}
					        onPageChange={page => setCurrentPage(page)}
					      />)}
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

export default Blog;


/*

*/
