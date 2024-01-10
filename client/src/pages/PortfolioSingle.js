import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import Breadcrumb from '../components/frontend/widget/Breadcrumb'
import portfolios from './../data/portfolios';

function PortfolioSingle() {
	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
	};

	const { type } = useParams();

	const portfolio = portfolios.filter(item => `${item.type[0].toLowerCase() + item.type.slice(1)}`  === type);

	return (
		<main id="main">
			<Breadcrumb page="Portfolio" description="Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium." subPage={type[0].toUpperCase()+type.slice(1)} />

		  <section id="portfolio-details" className="portfolio-details">
		    <div className="container">

		      <div className="row gy-4">

		        <div className="col-lg-8">
		          <div className="portfolio-details-slider swiper">
		            <div className="swiper-wrapper align-items-center">
									<Slider {...settings}>
										{
											portfolio.map(item => (
												<div key={item.id} className="swiper-slide">
										      <img src={item.image} alt="" />
										    </div>
											))
										}
									</Slider>
		            </div>

		          </div>
		        </div>

		        <div className="col-lg-4 mt-5">
		          <div className="portfolio-info">
		            <h3>Project information</h3>
		            <ul>
		              <li><strong>Category</strong>: {`${type[0].toUpperCase() + type.slice(1)}`} design</li>
		              <li><strong>Client</strong>: ASU Company</li>
		              <li><strong>Project date</strong>: 01 March, 2020</li>
		              <li><strong>Project URL</strong>: <Link to="#">www.example.com</Link></li>
		            </ul>
		          </div>
		          <div className="portfolio-description">
		            <h2>This is an example of portfolio detail</h2>
		            <p>
		              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
		            </p>
		          </div>
		        </div>

		      </div>

		    </div>
		  </section>

		</main>
	)
}

export default PortfolioSingle;
