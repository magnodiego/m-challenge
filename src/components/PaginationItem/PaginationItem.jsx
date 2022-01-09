import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import { selectPage } from '../../store/pagination/selector';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../store/pagination/actions';

const PaginationItem = ({page, index, totalPages, lastPage, siblings}) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);

  const handleNextThree = () => {
    dispatch(setPage(currentPage + siblings));
  };

  const handlePrevThree = () => {
    dispatch(setPage(currentPage - siblings));
  };

  const handleNextPage = () => {
    dispatch(setPage(currentPage + 1));
  };

  const handlePreviousPage = () => {
    dispatch(setPage(currentPage - 1));
  };

  const handlePage = () => {
    dispatch(setPage(page));
  };

  return(
    <React.Fragment>
      {currentPage!== 1 && index === 0 &&
        <React.Fragment>
          <Pagination.Prev onClick={handlePreviousPage}/> 
        </React.Fragment>
      }

      {index === 1 && currentPage - siblings > 1 &&
        <Pagination.Ellipsis onClick={handlePrevThree}/>
      }

      {index === totalPages.length - 1 && currentPage + siblings < lastPage &&
        <Pagination.Ellipsis onClick={handleNextThree}/>
      }

      <Pagination.Item onClick={handlePage} active={currentPage === page} >{page}</Pagination.Item>

      {currentPage !== lastPage && index === totalPages.length - 1 &&
        <Pagination.Next onClick={handleNextPage}/> 
      }
    </React.Fragment>
  );
};

PaginationItem.propTypes = {
  page: PropTypes.number,
  index: PropTypes.number,
  totalPages: PropTypes.array,
  lastPage: PropTypes.number,
  siblings: PropTypes.number,
};

export default PaginationItem;
