import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { Button } from 'react-bootstrap';
import { addItem } from '../../store/cart/actions';
import { useDispatch } from 'react-redux';

const CardContainer = ({ product }) => {
  const dispatch = useDispatch();

  const addCartItem = () => {
    dispatch(addItem(product));
  };

  return(
    <div className='card-container'> 
      <img src={product.image} alt='product-image' />
      <div className='card-data'>
        <span>{product.type}</span>
        <h4>{product.name}</h4>
        <h5>{`$ ${product.price.toFixed(2)}`}</h5>
        <Button variant='primary' onClick={addCartItem}>Add to cart</Button>
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default CardContainer;
