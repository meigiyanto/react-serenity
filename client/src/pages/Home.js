import React from 'react';
import { Link } from 'react-router-dom';
import { SubAbout } from './../pages/About';
import { SubService } from './../pages/Services';

function Hero() {
	return (
		<section id="hero" style={{
			background: "url('../assets/frontend/img/hero-bg.jpg') top center",
			backgroundSize: "cover",
			width: "100%",
			height: "75vh",
			position: "relative",
			zIndex: 1,
			marginBottom: "-140px"}}
		>
		  <div className="hero-container" data-aos="fade-up">
		    <h1>Welcome to Serenity</h1>
		    <h2>We are team of talented designers making websites with Bootstrap</h2>
		    <a href="#about" className="btn-get-started scrollto">Get Started</a>
		  </div>
		</section>
	)
}

function CTA() {
	return (
		  <section id="cta" className="cta">
		    <div className="container" data-aos="fade-in">

		      <div className="text-center">
		        <h3>Call To Action</h3>
		        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		        <Link to="#" className="cta-btn">Call To Action</Link>
		      </div>

		    </div>
		  </section>
	)
}

function Home() {
	return (
		<>
			<Hero />
			<main id="main">
				<SubAbout />
				<CTA />
				<SubService />
			</main>
		</>
	)
}

export default Home;
