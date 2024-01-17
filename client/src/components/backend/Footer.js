import React from 'react';

export const Footer = () => {
	return (
		<footer className="pt-2 my-5 text-body-secondary border-top">
		    <div className="container-xl px-4">
		        <div className="row">
		            <div className="col-md-6 small">Copyright © React Serenity {new Date().getFullYear()}</div>
		            <div className="col-md-6 text-md-end small">
		                <a href="#!">Privacy Policy</a>
		                {/* */}
		                <a href="#!">Terms &amp; Conditions</a>
		            </div>
		        </div>
		    </div>
		</footer>
	)
}
