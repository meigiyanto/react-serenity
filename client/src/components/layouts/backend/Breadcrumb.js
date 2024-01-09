import React from 'react';

const Breadcrumb = () => {
	return (
    <div className="row">
      <div className="col-sm-12">
        <div className="page-title-box">
          <div className="row">
            <div className="col">
                <h4 className="page-title">Starer</h4>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                    	<a href="javascript:void(0);">Dastone</a>
                    </li>
                    <li className="breadcrumb-item">
                    	<a href="javascript:void(0);">Pages</a>
                    </li>
                    <li className="breadcrumb-item active">Starer</li>
                </ol>
            </div>

            <div className="col-auto align-self-center">
                <a href="#" className="btn btn-sm btn-outline-primary" id="Dash_Date">
                    <span className="day-name" id="Day_Name">Today:</span>&nbsp;
                    <span className="" id="Select_date">Jan 11</span>
                    <i data-feather="calendar" className="align-self-center icon-xs ms-1"></i>
                </a>
                <a href="#" className="btn btn-sm btn-outline-primary">
                    <i data-feather="download" className="align-self-center icon-xs"></i>
                </a>
            </div>

          </div>
      	</div>
    	</div>
    </div>
	)
}

export default Breadcrumb;
