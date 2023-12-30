import { Link } from 'react-router-dom';

export default function Category() {
	return (
		<>
	    <h3 className="sidebar-title">Categories</h3>
	    <div className="sidebar-item categories">
	      <ul>
	        <li><Link to="#">General <span>(25)</span></Link></li>
	        <li><Link to="#">Lifestyle <span>(12)</span></Link></li>
	        <li><Link to="#">Travel <span>(5)</span></Link></li>
	        <li><Link to="#">Design <span>(22)</span></Link></li>
	        <li><Link to="#">Creative <span>(8)</span></Link></li>
	        <li><Link to="#">Educaion <span>(14)</span></Link></li>
	      </ul>
	    </div>
		</>
 )
}
