import { Link } from 'react-router-dom';

function Footer() {
	return (
		  <footer id="footer">
		    <div className="footer-top">
		      <div className="container">
		        <div className="row">

		          <div className="col-lg-3 col-md-6 footer-info">
		            <h3>Serenity</h3>
		            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
		          </div>

		          <div className="col-lg-3 col-md-6 footer-links">
		            <h4>Useful Links</h4>
		            <ul>
		              <li><Link to="/">Home</Link></li>
		              <li><Link to="/about">About us</Link></li>
		              <li><Link to="/services">Services</Link></li>
		              <li><Link to="/term-of-service">Terms of service</Link></li>
		              <li><Link to="/privacy-policy">Privacy policy</Link></li>
		            </ul>
		          </div>

		          <div className="col-lg-3 col-md-6 footer-contact">
		            <h4>Contact Us</h4>
		            <p>
		              A108 Adam Street <br/>
		              New York, NY 535022<br/>
		              United States <br/>
		              <strong>Phone:</strong> +1 5589 55488 55<br/>
		              <strong>Email:</strong> info@example.com<br/>
		            </p>

		            <div className="social-links">
		              <Link to="#" className="twitter"><i className="bi bi-twitter"></i></Link>
		              <Link to="#" className="facebook"><i className="bi bi-facebook"></i></Link>
		              <Link to="#" className="instagram"><i className="bi bi-instagram"></i></Link>
		              <Link to="#" className="linkedin"><i className="bi bi-linkedin"></i></Link>
		            </div>

		          </div>

		          <div className="col-lg-3 col-md-6 footer-newsletter">
		            <h4>Our Newsletter</h4>
		            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
		            <form action="" method="post">
		              <input type="email" name="email" /><input type="submit" value="Subscribe" />
		            </form>
		          </div>

		        </div>
		      </div>
		    </div>

		    <div className="container">
		      <div className="copyright">
		        &copy; Copyright <strong><span>Serenity</span></strong>. All Rights Reserved
		      </div>
		      <div className="credits">
		        Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
		      </div>
		    </div>
		  </footer>
	)
}

export default Footer;
