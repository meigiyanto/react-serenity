import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <main id="main">
			<div className="p-5 mb-4 bg-body-tertiary rounded-3">
			  <div className="container-fluid py-5">
			    <h1 className="display-5 fw-bold">Nothing to see here!</h1>
					<p>
		        <Link to="/">Go to the home page</Link>
		      </p>
			  </div>
			</div>

    </main>
  );
}

export default NoMatch;
