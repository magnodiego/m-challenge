import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItemsPerPage, selectPage } from '../../store/pagination/selector';
import { selectProducts } from '../../store/products/selector';
import { Pagination } from 'react-bootstrap';
import './Pagination.scss';
import { setPage } from '../../store/pagination/actions';

const PaginationHandler = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const products = useSelector(selectProducts);
  const itemsPerPage = useSelector(selectItemsPerPage);

  const lastPage = useMemo(() => {
    return Math.ceil(products.length/itemsPerPage);
  }, [products, itemsPerPage]);

  const totalPages = useMemo(() => {
    const pages = [];
    
    for (let i = 1; i <= lastPage; i++) {
      if((currentPage - i > -3 && currentPage - i <= 0) || (currentPage - i < 3 && currentPage - i >= 0)){
        pages.push(i);
      } else if (i === 1 || i === lastPage) {
        pages.push(i);
      }
    }

    return pages;
  }, [products, itemsPerPage, currentPage]);


  const handlePage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className='pagination-container'>
      <Pagination>
        {totalPages && totalPages.map((page, i) =>
          <React.Fragment key={i}>
            {currentPage!== 1 && i === 0 &&
              <React.Fragment>
                <Pagination.Prev onClick={() => handlePage(currentPage - 1)}/> 
              </React.Fragment>
            }

            {i === 1 && currentPage - 3 > 1 &&
              <Pagination.Ellipsis onClick={() => handlePage(currentPage - 3)}/>
            }

            {i === totalPages.length - 1 && currentPage + 3 < lastPage &&
              <Pagination.Ellipsis onClick={() => handlePage(currentPage + 3)}/>
            }

            <Pagination.Item onClick={() => handlePage(page)} active={currentPage === page} >{page}</Pagination.Item>

            {currentPage !== lastPage && i === totalPages.length - 1 &&
              <React.Fragment>
                <Pagination.Next onClick={() => handlePage(currentPage + 1)}/> 
              </React.Fragment>
            }
          </React.Fragment>
        )}
      </Pagination>
    </div>
  );
};

export default PaginationHandler;
