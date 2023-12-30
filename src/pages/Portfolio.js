import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './../components/widget/Breadcrumb';
import portfolios from './../data/portfolios';

function ListFilter({ filterItem, setItem, portfolioItems }) {
	return (
		<>
			<li
				onClick={() => setItem(portfolios)}
			>All</li>
			{
				portfolioItems.map((val, id) => (
					<li
						key={id}
						onClick={() => filterItem(val)}
						className={val === id ? 'filter-active' : ''}
					>{val}</li>
				))
			}
		</>
	)
}

function ChildPortfolio({items}) {
	return (
		<>
			{items.map((item) => (
			  <div key={item.id} className={`col-lg-4 col-md-4 portfolio-item filter-${item.type.toLowerCase()}`}>
			    <div className="portfolio-wrap">
			      <img src={item.image} className="img-fluid" alt="" />
			      <div className="portfolio-info">
			        <h4>{item.type} {item.id}</h4>
			        <p>{item.type}</p>
			        <div className="portfolio-links">
			          <Link to={item.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={`${item.type}`}><i className="bx bx-plus"></i></Link>
			          <Link to={`${item.type.toLowerCase()}`} title="More Details"><i className="bx bx-link"></i></Link>
			        </div>
			      </div>
			    </div>
			  </div>
			))}
		</>
	)
}

function Portfolio() {
	const [item, setItem] = useState(portfolios);
	const portfolioItems = [...new Set(portfolios.map(val => val.type))];

	const filterItem = (currPort) => {
		const newItem = portfolios.filter(newVal => newVal.type === currPort);
		setItem(newItem);
	}

	return (
		<main id="main">
			<Breadcrumb page="Portfolio" description="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium." />

		  <section id="portfolio" className="portfolio">
		    <div className="container">

		      <div className="row">
		        <div className="col-lg-12 d-flex justify-content-center">
		          <ul id="portfolio-flters">
								<ListFilter
									portfolioItems={portfolioItems}
									setItem={setItem}
									filterItem={filterItem}
								/>
		          </ul>
		        </div>
		      </div>

		      <div className="row portfolio-container">
						<ChildPortfolio items={item} />
		      </div>
		    </div>
		  </section>

		</main>
	)
}

export default Portfolio;
