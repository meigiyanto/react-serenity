import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { usePagination, DOTS } from '../hooks/usePagination';

const Pagination = props => {
  const {
    onPageChange,
    className,
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
    <ul
      className={classnames('', { [className]: className })}
    >
      <li
        className={classnames('', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
	        <Link aria-label="Previous">&laquo;</Link>
      </li>

      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="dots">&#8230;</li>;
        }

        if (pageNumber === currentPage) {
          return (<li
         					  key={pageNumber}
          					className="active"
          					onClick={() => onPageChange(pageNumber)}
          				>
          					<Link>{pageNumber}</Link>
          				</li>
          );
        }

        return (
          <li
            key={pageNumber}
            className={classnames('', {
              active: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            <Link>{pageNumber}</Link>
          </li>
        );

      })}

      <li
        className={classnames('', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
	        <Link aria-label="Next">&raquo;</Link>
      </li>
    </ul>
  );
};

export default Pagination;
