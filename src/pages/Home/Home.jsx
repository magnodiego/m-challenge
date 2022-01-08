import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import List from '../../components/List/List';
import PaginationHandler from '../../components/Pagination/Pagination';
import { fetchProducts } from '../../store/products/actions';
import { selectProductsIsLoading } from '../../store/products/selector';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const isLoadingProducts = useSelector(selectProductsIsLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='home-container'>
      {isLoadingProducts ?
        <Spinner animation="border" />
        :
        <React.Fragment>
          <List />
          <PaginationHandler />
        </React.Fragment>
      }
    </div>
  );
};

export default Home;
