import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import { Button } from 'react-bootstrap';
import { addItem } from '../../store/cart/actions';
import { useDispatch } from 'react-redux';

const CardContainer = ({element}) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addItem(element));
  };

  return(
    <div className='card-container'> 
      <img src={element.image} alt='element-image' />
      <div className='card-data'>
        <span>{element.type}</span>
        <h4>{element.name}</h4>
        <h5>{`$ ${element.price.toFixed(2)}`}</h5>
        <Button variant='primary' onClick={addItemToCart}>Add to cart</Button>
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  element: PropTypes.shape({
    image: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default CardContainer;
