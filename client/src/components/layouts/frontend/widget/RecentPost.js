import { Link } from 'react-router-dom';

export default function RecentPost() {
	return (
	<>
	    <h3 className="sidebar-title">Recent Posts</h3>
	    <div className="sidebar-item recent-posts">
	      <div className="post-item clearfix">
	        <img src="../assets/img/blog/blog-recent-1.jpg" alt="" />
	        <h4><Link to="blog-single">Nihil blanditiis at in nihil autem</Link></h4>
	        <time dateTime="2020-01-01">Jan 1, 2020</time>
	      </div>

	      <div className="post-item clearfix">
	        <img src="../assets/img/blog/blog-recent-2.jpg" alt="" />
	        <h4><Link to="blog-single">Quidem autem et impedit</Link></h4>
	        <time dateTime="2020-01-01">Jan 1, 2020</time>
	      </div>

	      <div className="post-item clearfix">
	        <img src="../assets/img/blog/blog-recent-3.jpg" alt="" />
	        <h4><Link to="blog-single">Id quia et et ut maxime similique occaecati ut</Link></h4>
	        <time dateTime="2020-01-01">Jan 1, 2020</time>
	      </div>

	      <div className="post-item clearfix">
	        <img src="../assets/img/blog/blog-recent-4.jpg" alt="" />
	        <h4><Link to="blog-single">Laborum corporis quo dara net para</Link></h4>
	        <time dateTime="2020-01-01">Jan 1, 2020</time>
	      </div>

	      <div className="post-item clearfix">
	        <img src="../assets/img/blog/blog-recent-5.jpg" alt="" />
	        <h4><Link to="blog-single">Et dolores corrupti quae illo quod dolor</Link></h4>
	        <time dateTime="2020-01-01">Jan 1, 2020</time>
	      </div>

	    </div>
	</>
	)
}
