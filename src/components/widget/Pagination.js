import { Link } from 'react-router-dom';
import { usePagination, DOTS } from '../hooks/usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="justify-content-center">
      <li onClick={onPrevious}>
				<Link aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </Link>
      </li>

      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li key={pageNumber} className={currentPage === pageNumber ? 'active' : 'dots'}>&#8230;</li>;
        }

        return (
          <li className={currentPage === pageNumber ? 'active' : '' } key={pageNumber} onClick={() => onPageChange(pageNumber)}>
            <Link>{pageNumber}</Link>
          </li>
        );
      })}

      <li onClick={onNext}>
				<Link aria-label="Previous">
	        <span aria-hidden="true">&raquo;</span>
	      </Link>
      </li>
    </ul>
  );
};

export default Pagination;
