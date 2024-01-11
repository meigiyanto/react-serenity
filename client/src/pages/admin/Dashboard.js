import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const Dashboard = () => {
	const {currentUser} = useContext(AuthContext);
  return (
    <div className="container-xl px-4 mt-n10">

			<div className="card card-waves mb-4 mt-5">
	    	<div className="card-body p-5">
	        <div className="row align-items-center justify-content-between">
            <div className="col">
                <h2 className="text-primary">Hello . Welcome back, your dashboard is ready!</h2>
            </div>
            <div className="col d-none d-lg-block mt-xxl-n4">
            	<img className="img-fluid px-xl-4 mt-xxl-n5" src="http://localhost:3000/assets/img/illustrations/statistics.svg" />
            </div>
	        </div>
			  </div>
			</div>

			<div className="row">

		    <div className="col-xl-3 col-md-3 mb-4">
	        <div className="card border-start-lg border-start-primary h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                    <div className="small fw-bold text-primary mb-1">Earnings (monthly)</div>
                    <div className="h5">$4,390</div>
                    <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                        <i className="me-1" data-feather="trending-up"></i>
                        12%
                    </div>
                </div>
                <div className="ms-2"><i className="fas fa-dollar-sign fa-2x text-gray-200"></i></div>
              </div>
            </div>
	        </div>
		    </div>

		    <div className="col-xl-3 col-md-3 mb-4">
		        <div className="card border-start-lg border-start-secondary h-100">
		            <div className="card-body">
		                <div className="d-flex align-items-center">
		                    <div className="flex-grow-1">
		                        <div className="small fw-bold text-secondary mb-1">Average sale price</div>
		                        <div className="h5">$27.00</div>
		                        <div className="text-xs fw-bold text-danger d-inline-flex align-items-center">
		                            <i className="me-1" data-feather="trending-down"></i>
		                            3%
		                        </div>
		                    </div>
		                    <div className="ms-2"><i className="fas fa-tag fa-2x text-gray-200"></i></div>
		                </div>
		            </div>
		        </div>
		    </div>

		     <div className="col-xl-3 col-md-3 mb-4">
		        <div className="card border-start-lg border-start-secondary h-100">
		            <div className="card-body">
		                <div className="d-flex align-items-center">
		                    <div className="flex-grow-1">
		                        <div className="small fw-bold text-secondary mb-1">Average sale price</div>
		                        <div className="h5">$27.00</div>
		                        <div className="text-xs fw-bold text-danger d-inline-flex align-items-center">
		                            <i className="me-1" data-feather="trending-down"></i>
		                            3%
		                        </div>
		                    </div>
		                    <div className="ms-2"><i className="fas fa-tag fa-2x text-gray-200"></i></div>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div className="col-xl-3 col-md-3 mb-4">
		        <div className="card border-start-lg border-start-secondary h-100">
		            <div className="card-body">
		                <div className="d-flex align-items-center">
		                    <div className="flex-grow-1">
		                        <div className="small fw-bold text-secondary mb-1">Average sale price</div>
		                        <div className="h5">$27.00</div>
		                        <div className="text-xs fw-bold text-danger d-inline-flex align-items-center">
		                            <i className="me-1" data-feather="trending-down"></i>
		                            3%
		                        </div>
		                    </div>
		                    <div className="ms-2"><i className="fas fa-tag fa-2x text-gray-200"></i></div>
		                </div>
		            </div>
		        </div>
		    </div>

			</div>

			<div className="row">

		    <div className="col-xl-3 col-md-3 mb-4">
	        <div className="card border-start-lg border-start-primary h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                    <div className="small fw-bold text-primary mb-1">Earnings (monthly)</div>
                    <div className="h5">$4,390</div>
                    <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                        <i className="me-1" data-feather="trending-up"></i>
                        12%
                    </div>
                </div>
                <div className="ms-2"><i className="fas fa-dollar-sign fa-2x text-gray-200"></i></div>
              </div>
            </div>
	        </div>
		    </div>

		    <div className="col-xl-3 col-md-3 mb-4">
	        <div className="card border-start-lg border-start-primary h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                    <div className="small fw-bold text-primary mb-1">Earnings (monthly)</div>
                    <div className="h5">$4,390</div>
                    <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                        <i className="me-1" data-feather="trending-up"></i>
                        12%
                    </div>
                </div>
                <div className="ms-2"><i className="fas fa-dollar-sign fa-2x text-gray-200"></i></div>
              </div>
            </div>
	        </div>
		    </div>

		    <div className="col-xl-3 col-md-3 mb-4">
	        <div className="card border-start-lg border-start-primary h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                    <div className="small fw-bold text-primary mb-1">Earnings (monthly)</div>
                    <div className="h5">$4,390</div>
                    <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                        <i className="me-1" data-feather="trending-up"></i>
                        12%
                    </div>
                </div>
                <div className="ms-2"><i className="fas fa-dollar-sign fa-2x text-gray-200"></i></div>
              </div>
            </div>
	        </div>
		    </div>

		    <div className="col-xl-3 col-md-3 mb-4">
	        <div className="card border-start-lg border-start-primary h-100">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <div className="small fw-bold text-primary mb-1">Earnings (monthly)</div>
                  <div className="h5">$4,390</div>
                  <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                    <i className="me-1" data-feather="trending-up"></i>
                      12%
                  </div>
                </div>
                <div className="ms-2"><i className="fas fa-dollar-sign fa-2x text-gray-200"></i></div>
              </div>
            </div>
	        </div>
		    </div>

			</div>

			<div className="card">
		    <div className="card-header">Basic Card Example</div>
		    <div className="card-body">This is an example of a basic card.</div>
			</div>

    </div>
  );
};

export default Dashboard;
