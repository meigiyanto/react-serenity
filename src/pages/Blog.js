import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/widget/Breadcrumb';
import Pagination from '../components/widget/Pagination';

import posts from './../data/posts.js';

let pageSize = 4;

function Blog() {
	const [currentPage, setCurrentPage] = useState(1);

  const currentPostsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
						          <article className="entry">

						            <div className="entry-img">
						              <img src={`assets/img/blog/${post.picture}`} alt={post.picture_description} className="img-fluid" />
						            </div>

						            <h2 className="entry-title">
						              <Link to={`/blog/${post.id}`}>{post.title}</Link>
						            </h2>

						            <div className="entry-meta">
						              <ul>
						                <li className="d-flex align-items-center">
															<i className="bi bi-person"></i> <Link to="#">{post.created_by.name}</Link>
														</li>
						                <li className="d-flex align-items-center">
															<i className="bi bi-clock"></i> <Link to="#"><time dateTime={format(new Date(post.created_at), 'dd-mm-yyyy')}>{format(new Date(post.created_at), 'dd MMMM yyyy')}</time></Link>
														</li>
						                <li className="d-flex align-items-center">
		 													<i className="bi bi-chat-dots"></i>	<Link to="#">{post.comments_count} Comments</Link>
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
						   	<Pagination
									currentPage={currentPage}
					        totalCount={posts.length}
					        pageSize={pageSize}
					        onPageChange={page => setCurrentPage(page)}
					      />
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
