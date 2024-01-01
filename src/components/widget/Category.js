import { Link } from 'react-router-dom';
import posts from './../../data/posts';

export default function Category() {
  const categories = [...new Set(posts.map(post => post.category.title))];
	return (
		<>
	    <h3 className="sidebar-title">Categories</h3>
	    <div className="sidebar-item categories">
	      <ul>
	      {
	      	categories.map((category, idx) => <li key={idx}><Link to={`${category[0].toLowerCase()+category.slice(1)}`}>{category}<span></span></Link></li>)
	      }
	      </ul>
	    </div>
		</>
 )
}
