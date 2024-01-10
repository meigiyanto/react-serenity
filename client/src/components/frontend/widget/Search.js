// import { useSearchParams } from 'react-router-dom';

export default function Search() {
	// let [searchParams, setSearchParams] = useSearchParams();
	const handleSubmit = (e) => {
		// e.preventDefault();
		// let params = serializeFormQuery(event.target);
    // setSearchParams(params);
	}

	return (
		<>
	    <h3 className="sidebar-title">Search</h3>
	    <div className="sidebar-item search-form">
	      <form onSubmit={handleSubmit}>
	        <input type="text" name="q"/>
	        <button type="submit"><i className="bi bi-search"></i></button>
	      </form>
	    </div>
		</>
	)
}
