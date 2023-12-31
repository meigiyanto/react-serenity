import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import Sidebar from '../components/Sidebar';
import Breadcrumb from '../components/widget/Breadcrumb';
import Pagination from '../components/widget/Pagination';

import posts from './../data/posts.js';

let pageSize = 4;

function BlogArticle({
	id,
	picture,
	picture_description,
	title,
	created_by= 'Administrator',
	created_at,
	comments_count
}) {
	return (
     <article className="entry">
        <div className="entry-img">
          <img
						src={`assets/img/blog/${picture}`}
						alt={picture_description}
						className="img-fluid"
					/>
        </div>

        <h2 className="entry-title">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h2>

        <div className="entry-meta">
        	<ul>
            <li className="d-flex align-items-center">
							<i className="bi bi-person"></i>
							<Link to="#">{created_by}</Link>
						</li>
            <li className="d-flex align-items-center">
							<i className="bi bi-clock"></i>
							<Link to="#">
								<time
									dateTime={format(new Date(created_at), 'dd-mm-yyyy')}
								>
									{format(new Date(created_at), 'dd MMMM yyyy')}
								</time>
							</Link>
						</li>
            <li className="d-flex align-items-center">
							<i className="bi bi-chat-dots"></i>
							<Link to="#">{comments_count} Comments</Link>
						</li>
          </ul>
        </div>

        <div className="entry-content">
          <div className="read-more">
            <Link to={`/blog/${id}`}>Read More</Link>
          </div>
        </div>

      </article>
	)
}

function Blog() {
	const [ currentPage, setCurrentPage ] = useState(1);

  const currentPostsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex  = firstPageIndex + pageSize;
    return posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
		<main id="main">
 	 		<Breadcrumb page="Blog" description="" />
		  <section id="blog" className="blog">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-8 entries">
   						<div className="row">
								{
							  	currentPostsData.map(post => (
						      	<div key={post.id} className="col-md-6">
						  				<BlogArticle
						  				  id={post.id}
						  				  title={post.title}
	  	    							picture={post.picture}
										 		picture_description={post.picture_description}
												created_by={post.created_by.name}
												created_at={post.created_at}
												comments_count={post.comments_count}
											/>
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
