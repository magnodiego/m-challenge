import React from 'react';
import PropTypes from 'prop-types';
import './CartCard.scss';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem, removeAllItemFor, removeItem } from '../../store/cart/actions';

const CartCard = ({ product, isCart }) => {
  const dispatch = useDispatch();
  const {image, type, name, price, count} = product;

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
    <div className='cartCard'>
      <div className='cartCard__data__container'>
        {isCart && <img src={image}/>}
        <div className='cartCard__data'>
          <span>{type}</span>
          <h6>{name}</h6>
          {!isCart && <h6>{`$ ${price.toFixed(2)}`}</h6> }
        </div>
      </div>
      <div className='cartCard__controls'>
        {isCart && <h4>{`$ ${price.toFixed(2)}`}</h4> }
        <div>
          <Button onClick={removeCartItem}>-</Button>
          <span> {count} </span>
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
