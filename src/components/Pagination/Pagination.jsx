import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItemsPerPage, selectPage } from '../../store/pagination/selector';
import { selectProducts } from '../../store/products/selector';
import { Pagination } from 'react-bootstrap';
import './Pagination.scss';
import { setPage, nextPage, previousPage } from '../../store/pagination/actions';
import PaginationItem from '../PaginationItem/PaginationItem';

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




  return (
    <div className='pagination-container'>
      <Pagination>
        {totalPages && totalPages.map((page, i) =>
          <PaginationItem key={i} page={page} index={i} totalPages={totalPages} lastPage={lastPage} />
        )}
      </Pagination>
    </div>
  );
};

export default PaginationHandler;
