import Breadcrumb from './../components/widget/Breadcrumb';

const listsprice = [
	{
		id: 1,
		name: 'Free',
		rate: 0,
		feature: ['Aida dere', 'Nec feugiat nisl', 'Pharetra massa', 'Massa ultricies mi'],
		featured: false,
		advanced: false
	},
	{
		id: 2,
		name: 'Business',
		rate: 19,
		feature: ['Aida dere', 'Nec feugiat nisl', 'Pharetra massa', 'Massa ultricies mi'],
		featured: true,
		advanced: false
	},
	{
		id: 3,
		name: 'Developer',
		rate: 29,
		feature: ['Aida dere', 'Nec feugiat nisl', 'Pharetra massa', 'Massa ultricies mi'],
		featured: false,
		advanced: false
	},
	{
		id: 4,
		name: 'Ultimate',
		rate: 49,
		feature: ['Aida dere', 'Nec feugiat nisl', 'Pharetra massa', 'Massa ultricies mi'],
		featured: false,
		advanced: true
	}
]

const faqs = [
	{
		id: 1,
		question: 'Non consectetur a erat nam at lectus urna duis?',
		answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
	},
	{
		id: 2,
		question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
		answer: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissi',
	},
	{
		id: 3,
		question: 'Non consectetur a erat nam at lectus urna duis?',
		answer: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
	},
	{
		id: 4,
		question: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?',
		answer: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus.'
	},
	{
		id: 5,
		question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
		answer: 'Aperiam itaque sit optio et deleniti eos nihil quidem cumque. Voluptas dolorum accusantium sunt sit enim. Provident consequuntur quam aut reiciendis qui rerum dolorem sit odio. Repellat assumenda soluta sunt pariatur error doloribus fuga.',
	}
]

function SubPricing() {
	return (
	  <section id="pricing" className="pricing">
	    <div className="container">

	      <div className="row">

					{listsprice.map(lp => (
	        <div key={lp.id} className="col-lg-3 col-md-6">
	          <div className={`box mb-3 ${lp.featured ? 'featured' : null}`} data-aos="fade-up">
							{lp.advanced && (<span className="advanced">Advanced</span>)}
	            <h3>{lp.name}</h3>
	            <h4><sup>$</sup>{lp.rate}<span> / month</span></h4>
	            <ul>
	              {lp.feature.map((lpf,idx) => (<li key={idx}>{lpf}</li>))}
	            </ul>
	            <div className="btn-wrap">
	              <a href="#" className="btn-buy">Buy Now</a>
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
