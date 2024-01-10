import { Link } from 'react-router-dom';
import Breadcrumb from '../components/frontend/widget/Breadcrumb';
import prices from './../data/prices';
import faqs from './../data/faqs';

function SubPricing() {
	return (
	  <section id="pricing" className="pricing">
	    <div className="container">

	      <div className="row">

					{prices.map(price => (
	        <div key={price.id} className="col-lg-3 col-md-6">
	          <div className={`box mb-3 ${price.featured ? 'featured' : null}`} data-aos="fade-up">
							{price.advanced && (<span className="advanced">Advanced</span>)}
	            <h3>{price.name}</h3>
	            <h4><sup>$</sup>{price.rate}<span> / month</span></h4>
	            <ul>
	              {price.feature.map((pricef,idx) => (<li key={idx}>{pricef}</li>))}
	            </ul>
	            <div className="btn-wrap">
	              <Link to="#" className="btn-buy">Buy Now</Link>
	            </div>
	          </div>
	        </div>
					))}

	      </div>

	    </div>
	  </section>
	)
}

function Pricing() {
	return (
		<main id="main">
			<Breadcrumb page="Pricing" description="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium." />

		 <SubPricing />

		  <section id="faq" className="faq section-bg">
		    <div className="container">

		      <div className="section-title" data-aos="fade-up">
		        <h2>Frequently Asked Questions</h2>
		        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
		      </div>

					{faqs.map(faq => (
		      <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up">
		        <div className="col-lg-5">
		          <i className="bx bx-help-circle"></i>
		          <h4>{faq.question}</h4>
		        </div>
		        <div className="col-lg-7">
		          <p>{faq.answer}</p>
		        </div>
		      </div>))}

		    </div>
		  </section>

		</main>
	)
}

export default Pricing;
