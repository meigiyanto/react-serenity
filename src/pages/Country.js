import { useState, useEffect } from 'react';
import Breadcrumb from './../components/widget/Breadcrumb';

function Country() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

	useEffect(() => {
    fetch("https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json")
    .then((res) => res.json())
    .then((result) => {
            setIsLoaded(true);
            setItems(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    );
  }, []);

  const data = Object.values(items);

	function search(items) {
  	return items.filter((item) => {
      if (item.region === filterParam) {
        return searchParam.some((newItem) => {
          return (item[newItem]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1);
        });
		  } else if (filterParam === "All") {
          return searchParam.some((newItem) => {
            return (item[newItem]
                    .toString()
                    .toLowerCase()
                    .indexOf(q.toLowerCase()) > -1);
          });
        }
    });
	}

  if (error) {
    return (
	    <main id="main">
		    <div className="container">
		    	<p>{error.message}, if you get this error, the free API I used might have stopped working, but I created a simple example that  demonstrate how this works, <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">check it out</a></p>
		    	</div>
		    </main>
		 );
  } else if (!isLoaded) {
		return (
			<main id="main">
				<div className="container">
					<h3>Loading...</h3>
				</div>
			</main>
		);
  } else {
    return (
			<main id="main">
				<Breadcrumb page="Country" />

	      <div className="container my-3">
	      	<div className="row">

	      		<div className="col">
		      		<div className="form-group">
								<label htmlFor="search-form">
	                <input
	                    type="search"
	                    name="search-form"
	                    id="search-form"
	                    className="form-control"
	                    placeholder="Search for..."
	                    value={q}
	                    onChange={(e) => setQ(e.target.value)}
	                />
	            </label>
		      	</div>
	      	</div>

      		<div className="col">
	      		<div className="form-group">
							<select
		              onChange={(e) => {
		                  setFilterParam(e.target.value);
		              }}
		              className="form-select"
		              aria-label="Filter Countries By Region"
		          >
		              <option value="All">Filter By Region</option>
		              <option value="Africa">Africa</option>
		              <option value="Americas">America</option>
		              <option value="Asia">Asia</option>
		              <option value="Europe">Europe</option>
		              <option value="Oceania">Oceania</option>
		          </select>
		      	</div>
	      	</div>

      	</div>

	      	<div className="row">
	      		{
	      			search(data).map((item) => (
	      				<div className="col-4" key={item.alpha3Code}>
		      				<div className="container p-2">
										<img
											className="img-fluid"
											src={item.flag.large}
											alt={item.name}
											style={{ width: '100%'}}
										/>
						        <h5>{item.name}</h5>
						        <p>Population: <strong>{item.population}</strong> Capital: {item.capital} Region: {item.region}</p>
		      				</div>
	      				</div>
	      			))
	      		}
	      	</div>
	      </div>
      </main>
    );
  }
}

export default Country;
