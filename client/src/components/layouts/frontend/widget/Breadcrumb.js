import { Link } from 'react-router-dom';

function Breadcrumb(props) {
	const { page, description, subPage= null } = props

	return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="breadcrumb-hero">
        <div className="container">
          <div className="breadcrumb-hero">
            <h2>{page}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <ol>
          <li><Link to="/home">Home</Link></li>
          {subPage !== null ? (<li><Link to={`/${page[0].toLowerCase()+page.slice(1)}`}>{page}</Link></li>) : (<li>{page}</li>)}
          {subPage !== null ? (<li>{subPage}</li>) : null}
        </ol>
      </div>
    </section>
	)
}

export default Breadcrumb;
