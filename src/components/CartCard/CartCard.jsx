import React from 'react';
import PropTypes from 'prop-types';
import './CartCard.scss';

const CartCard = ({ product }) => {

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
  }),
};

export default CartCard;
