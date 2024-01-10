import { Link } from 'react-router-dom';
import posts from '../../../data/posts';

export default function Tag() {
	let newArr;
	let arr = [...new Set(posts.map(post => post.tag))];

	arr.map(val => newArr = val.split(','))

	let removeDuplicate = (data) => {
		let duplicates = data.reduce((acc, el, i, arr) => {
			if(arr.indexOf(el) !== i && acc.indexOf(el) < 0) {
				acc.push(el);
			}
			return acc;
		},[]);
		return duplicates;
	}

	removeDuplicate(newArr);
	let tags = newArr;

	return (
		<>
	    <h3 className="sidebar-title">Tags</h3>
	    <div className="sidebar-item tags">
	      <ul>
	      {
	      	tags.map((tag, idx) => (<li key={idx}><Link>{tag}</Link></li>))
	      }
	      </ul>
	    </div>
		</>
	)
}
