import React from "react";
import DataTable from 'react-data-table-component';

import movies from '../../data/movies.js';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

// import axios from 'axios';
// import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];
  for (let i = 1; i < pages; i++) {
    results.push(i);
  }
  return results;
}

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true
  },
  {
    name: "Directior",
    selector: (row) => row.director,
    sortable: true
  },
  {
    name: "Runtime (m)",
    selector: (row) => row.runtime,
    sortable: true,
    right: true
  }
];

// RDT exposes the following internal pagination properties
const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, // available but not used here
  currentPage
}) => {
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? "page-item active" : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      htmlFor="booty-check"
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));

const Movies = () => {
	return (
		<>
			<header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
		    <div className="container-fluid px-4">
	        <div className="page-header-className">
	          <div className="row align-items-center justify-classNameName-between pt-3">
	            <div className="col-auto mb-3">
	              <h3 className="page-header-title">
                  <div className="page-header-icon">
                  <Icon.List /> Movies List</div>
	              </h3>
	            </div>

 	          </div>
	        </div>
		    </div>
			</header>

			<div className="container-fluid px-4">
			  <div className="card">
			    <div className="card-body">
			    	<div className="table table-responsive">
			        <DataTable
			          title="Movies"
			          columns={columns}
			          data={movies}
			          defaultSortFieldID={1}
			          pagination
			          paginationComponent={BootyPagination}
			          selectableRows
			          selectableRowsComponent={BootyCheckbox}
			        />
			    	</div>
			    </div>
			  </div>
			</div>
		</>
	)
}


export default Movies;
