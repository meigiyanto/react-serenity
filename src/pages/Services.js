import Breadcrumb from './../components/widget/Breadcrumb';
import { Link } from 'react-router-dom';
import listsservice from './../data/listsservice';
import listsfeature from './../data/listsfeature';

export function SubService() {
	return (
	  <section id="services" className="services ">
	    <div className="container">
	      <div className="section-title" data-aos="fade-up">
	        <h2>Our Services</h2>
	      </div>
	      <div className="row">
				{
					listsservice.map(ls => (
				    <div key={ls.id} className="col-md-6">
				      <div className="icon-box" data-aos="fade-up">
				        <div className="icon"><i className={ls.icon} style={{ color: `${ls.color}` }}></i></div>
				        <h4 className="title"><Link to="">{ls.title}</Link></h4>
				        <p className="description">{ls.description}</p>
				      </div>
				    </div>
					))
				}
	      </div>

	    </div>
	  </section>
 )
}

function Features() {
	return (
	  <section id="features" className="features">
	    <div className="container">

	      <div className="section-title" data-aos="fade-up">
	        <h2>Features</h2>
	        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
	      </div>

	      <div className="row">
					{
						listsfeature.map(lf => (
					    <div key={lf.id} className="mb-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
					      <div className="card" style={{backgroundImage: `url(${lf.image})` }}>
					        <div className="card-body">
					          <h5 className="card-title"><Link to="">{lf.title}</Link></h5>
					          <p className="card-text">{lf.description}</p>
					          <div className="read-more"><Link to="#"><i className="bi bi-arrow-right"></i> Read More</Link></div>
					        </div>
					      </div>
					    </div>
						))
}
	      </div>

	    </div>
	  </section>
	)
}

function Services() {
	return (
		<main id="main">
			<Breadcrumb page="Services" description="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium." />

		 <SubService />
		 <Features />

		</main>
	)
}

export default Services;
