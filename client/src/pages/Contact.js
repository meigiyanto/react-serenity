import Breadcrumb from './../components/layouts/frontend/widget/Breadcrumb';

function Contact() {
	return (
		<main id="main">
			<Breadcrumb page="Contact" description="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium." />

	    <section id="contact" className="contact">
	      <div className="container">

	        <div>
	          <iframe
							style={{
								border:0,
								width: '100%',
								height: '270px'
							}}
 							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
							title="Location"
							frameBorder="0"
							allowFullScreen></iframe>
	        </div>

	        <div className="row mt-5">

	          <div className="col-lg-4" data-aos="fade-right">
	            <div className="info">
	              <div className="address">
	                <i className="bi bi-geo-alt"></i>
	                <h4>Location:</h4>
	                <p>A108 Adam Street, New York, NY 535022</p>
	              </div>

	              <div className="email">
	                <i className="bi bi-envelope"></i>
	                <h4>Email:</h4>
	                <p>info@example.com</p>
	              </div>

	              <div className="phone">
	                <i className="bi bi-phone"></i>
	                <h4>Call:</h4>
	                <p>+1 5589 55488 55s</p>
	              </div>

	            </div>

	          </div>

	          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

	            <form method="post" className="php-email-form">
	              <div className="row">
	                <div className="col-md-6 form-group">
	                  <input
											type="text"
											name="name"
											className="form-control"
											id="name"
											placeholder="Your Name"
											required
										/>
	                </div>
	                <div className="col-md-6 form-group mt-3 mt-md-0">
   									<input
											type="email"
											name="email"
											className="form-control"
											id="email"
											placeholder="Your Email"
											required
										/>
	                </div>
	              </div>
	              <div className="form-group mt-3">
	                <input
										type="text"
   									className="form-control"
						   			name="subject"
	 									id="subject"
 										placeholder="Subject"
										required
								 />
	              </div>
	              <div className="form-group mt-3">
	                <textarea
										className="form-control"
										name="message"
										rows="5"
										placeholder="Message"
										required
			       	 		/>
	              </div>
 	              <div className="text-center">
	              	<button type="submit">Send Message</button>
	              </div>
	            </form>

	          </div>

	        </div>

	      </div>
	    </section>

	  </main>
	)
}

export default Contact;
