import React from 'react';
import PropTypes from 'prop-types';
import './CartCard.scss';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/cart/actions';

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  const addCartItem = () => {
    dispatch(addItem(product));
  };

  const removeCartItem = () => {
    dispatch(removeItem(product));
  };

  return(
    <div className='cartCard-container'>
      <div className='cartCard-data-container'>
        <img src={product.image}/>
        <div className='cartCard-data'>
          <span>{product.type}</span>
          <h6>{product.name}</h6>
        </div>
      </div>
      <div className='cartCard-controls'>
        <h4>{`$ ${product.price.toFixed(2)}`}</h4>
        <div>
          <Button onClick={removeCartItem}>-</Button>
          <span className='cartCard-item-count'> {product.count} </span>
          <Button onClick={addCartItem}>+</Button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }),
};

export default CartCard;
