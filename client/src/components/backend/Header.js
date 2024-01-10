import React from 'react';
import { File } from 'react-feather';

export const Header = () => {
	return (
		<header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
	    <div className="container-xl px-4">
        <div className="page-header-content pt-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto mt-4">
              <h1 className="page-header-title">
              <div className="page-header-icon"><File /></div>
              Blank Starter
              </h1>
              <div className="page-header-subtitle">Use this blank page as a starting point for creating new pages inside your project!</div>
            </div>
            <div className="col-12 col-xl-auto mt-4">Optional page header content</div>
          </div>
        </div>
	    </div>
		</header>
	)
}
