import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/products/selector';
import CardContainer from '../Card/Card';
import './List.scss';

const List = () => {

  const productsList = useSelector(selectProducts);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);

  return (
    <div className='list-container'>
      <h3 className='text-uppercase'>Products</h3>
      <div className='list-products-contaier'>
        {productsList && productsList.length > 0 &&
          productsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((el, i) => {
            console.log('el', el);
            return(
              <CardContainer element={el} key={i} />
            );
          })
        }
      </div>
    </div>
  );
};

export default List;
