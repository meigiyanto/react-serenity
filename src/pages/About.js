import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from './../components/widget/Breadcrumb';
import clients from './../data/clients';
import testimonials from './../data/testimonials';
import workprocess from './../data/workprocess';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

export function SubAbout() {
	return (
    <section id="about" className="about">
      <div className="container">

        <div className="row justify-content-end">
          <div className="col-lg-11">
            <div className="row justify-content-end">

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                  <i className="bi bi-emoji-smile"></i>
                  <span data-purecounter-start="0" data-purecounter-end="65" className="purecounter">0</span>
                  <p>Happy Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="85" className="purecounter">0</span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                  <i className="bi bi-clock"></i>
                  <span data-purecounter-start="0" data-purecounter-end="27" className="purecounter">0</span>
                  <p>Years of experience</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                  <i className="bi bi-award"></i>
                  <span data-purecounter-start="0" data-purecounter-end="22" className="purecounter">0</span>
                  <p>Awards</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6 video-box align-self-baseline position-relative">
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></Link>
          </div>

          <div className="col-lg-6 pt-3 pt-lg-0 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bx bx-check-double"></i> Voluptate repellendus pariatur reprehenderit corporis sint.</li>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

        </div>

      </div>
    </section>
	)
}

function WorkProcess() {
	return (
    <section id="work-process" className="work-process">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Work Process</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

				{workprocess.map(wp => (
        <div key={wp.id} className="row content">
          <div className={`col-md-5 ${wp.id % 2 === 0 ? 'order-1 order-md-2' : null }`}>
            <img src={wp.image} className="img-fluid" alt="" />
          </div>
          <div className={`col-md-7 pt-3 ${wp.id % 2 === 0 ? 'order-2 order-md-1' : null}`} data-aos="fade-left">
            <h3>{wp.name}</h3>
            <p className="fst-italic">{wp.description}</p>
            {wp.lists && (<ul>
              {wp.lists.map((list, idx)  => (<li key={idx}><i className="bi bi-check"></i> {list}</li>))}
            </ul>)}
          </div>
        </div>))}

      </div>
    </section>
	)
}

function Skills() {
	return (
		<section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Our Skills</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src="assets/img/skills-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>

            <div className="skills-content">

              <div className="progress">
                <span className="skill">HTML <i className="val">100%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">CSS <i className="val">90%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">JavaScript <i className="val">75%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">Photoshop <i className="val">55%</i></span>
                <div className="progress-bar-wrap">
                  <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
	)
}

function Testimonials() {
	return (
    <section id="testimonials" className="testimonials">
      <div className="container">

        <div className="section-title">
          <h2>Testimonialss</h2>
          <p>What are they saying about us?</p>
        </div>

        <div className="slides-1 swiper" data-aos="fade-up">
          <div className="swiper-wrapper">
						<Slider {...settings}>
							{testimonials.map(testimonial => (
	            <div key={testimonial.id} className="swiper-slide">
	              <div className="testimonial-item">
	                <img src={testimonial.image} className="testimonial-img" alt="" />
	                <h3>{testimonial.name}</h3>
	                <h4>{testimonial.occupation}</h4>
	                <div className="stars">
	                  <i className="bi bi-star-fill"></i>
										<i className="bi bi-star-fill"></i>
										<i className="bi bi-star-fill"></i>
										<i className="bi bi-star-fill"></i>
										<i className="bi bi-star-fill"></i>
	                </div>
	                <p>
	                  <i className="bi bi-quote quote-icon-left"></i>
										{testimonial.quote}
	                  <i className="bi bi-quote quote-icon-right"></i>
	                </p>
	              </div>
	            </div>
							))}
						</Slider>
          </div>
        </div>

      </div>
    </section>
	)
}

function Clients() {
	return (
	    <section id="clients" className="clients">
	      <div className="container" data-aos="fade-up">

	        <div className="section-title">
	          <h2>Our Clients</h2>
	          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
	        </div>

	        <div className="clients-slider swiper">
	          <div className="swiper-wrapper align-items-center">
	            <div className="swiper-slide">
								<Slider {...settings}>
									{clients.map(client => <img key={client.id} src={client.image} className="img-fluid px-2" alt="" />)}
								</Slider>
							</div>
	          </div>
	        </div>

	      </div>
		</section>
	)
}

function About() {
	return (
		<main id="main">
			<Breadcrumb page="About" description="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium."/>
			<SubAbout />
		  <WorkProcess />
  		<Skills />
  		<Testimonials />
			<Clients />
		</main>
	)
}


export default About;
