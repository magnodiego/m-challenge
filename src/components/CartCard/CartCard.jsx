import React from 'react';
import PropTypes from 'prop-types';
import './CartCard.scss';

const CartCard = ({element}) => {

  return(
    <div className='cartCard-container'>
      <div className='cartCard-data-container'>
        <img src={element.image}/>
        <div className='cartCard-data'>
          <span>{element.type}</span>
          <h6>{element.name}</h6>
        </div>
      </div>
      <div className='cartCard-controls'>
        <h4>{`$ ${element.price.toFixed(2)}`}</h4>

      </div>
    </div>
  );
};

CartCard.propTypes = {
  element: PropTypes.shape({
    image: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default CartCard;
