import React from 'react';
import { useSelector } from 'react-redux';
import { selectItemsPerPage, selectPage } from '../../store/pagination/selector';
import { selectProducts } from '../../store/products/selector';
import CardContainer from '../Card/Card';
import './List.scss';

const List = () => {

  const productsList = useSelector(selectProducts);
  const page = useSelector(selectPage);
  const itemsPerPage = useSelector(selectItemsPerPage);

  return (
    <div className='list-container'>
      <h3 className='text-uppercase'>Products</h3>
      <div className='list-products-contaier'>
        {productsList && productsList.length > 0 &&
          productsList.slice((page-1) * itemsPerPage, (page-1) * itemsPerPage + itemsPerPage).map((product, i) => 
            <CardContainer product={product} key={i} />
          )
        }
      </div>
    </div>
  );
};

export default List;
