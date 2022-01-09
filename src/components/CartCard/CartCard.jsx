import React from 'react';
import PropTypes from 'prop-types';
import './CartCard.scss';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem, removeAllItemFor, removeItem } from '../../store/cart/actions';

const CartCard = ({ product, isCart }) => {
  const dispatch = useDispatch();

  const addCartItem = () => {
    dispatch(addItem(product));
  };

  const removeCartItem = () => {
    dispatch(removeItem(product));
  };

  const removeAllRepeatedItems = () => {
    dispatch(removeAllItemFor(product));
  };

  return(
    <div className='cartCard-container'>
      <div className='cartCard-data-container'>
        {isCart && <img src={product.image}/>}
        <div className='cartCard-data'>
          <span>{product.type}</span>
          <h6>{product.name}</h6>
          {!isCart && <h6>{`$ ${product.price.toFixed(2)}`}</h6> }
        </div>
      </div>
      <div className='cartCard-controls'>
        {isCart && <h4>{`$ ${product.price.toFixed(2)}`}</h4> }
        <div>
          <Button onClick={removeCartItem}>-</Button>
          <span className='cartCard-item-count'> {product.count} </span>
          <Button onClick={addCartItem}>+</Button>
        </div>
        {!isCart && <Button variant='outline-danger' onClick={removeAllRepeatedItems}>Remove</Button>}
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
  isCart: PropTypes.bool,
};

export default CartCard;
