import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectItemsPerPage, selectPage } from '../../store/pagination/selector';
import { selectProducts } from '../../store/products/selector';
import { Pagination } from 'react-bootstrap';
import './Pagination.scss';
import PaginationItem from '../PaginationItem/PaginationItem';

const PaginationHandler = () => {
  const currentPage = useSelector(selectPage);
  const products = useSelector(selectProducts);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const siblings = 3;

  const lastPage = useMemo(() => {
    return Math.ceil(products.length/itemsPerPage);
  }, [products, itemsPerPage]);

  const totalPages = useMemo(() => {
    const pages = [];
    
    for (let i = 1; i <= lastPage; i++) {
      if((currentPage - i > -siblings && currentPage - i <= 0) || (currentPage - i < siblings && currentPage - i >= 0)){
        pages.push(i);
      } else if (i === 1 || i === lastPage) {
        pages.push(i);
      }
    }

    return pages;
  }, [products, itemsPerPage, currentPage]);

  return (
    <div className='pagination'>
      <Pagination>
        {totalPages && totalPages.map((page, i) =>
          <PaginationItem key={i} page={page} index={i} totalPages={totalPages} lastPage={lastPage} siblings={siblings}/>
        )}
      </Pagination>
    </div>
  );
};

export default PaginationHandler;
