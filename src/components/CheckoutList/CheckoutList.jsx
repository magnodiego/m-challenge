import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import CartCard from '../CartCard/CartCard';
import './CheckoutList.scss';
import { selectCartItems } from '../../store/cart/selector';
import { useSelector } from 'react-redux';

const CheckoutList = ({ handlePaying, isPaying, totalAmount }) => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className='checkout__list'>
      <h5 className='text-uppercase'>Items</h5>
      <div className='checkout__list__products'>
        {cartItems && cartItems.length > 0 ?
          <React.Fragment>
            {cartItems.map((product, i) => 
              <CartCard product={product} key={i} />
            )}
            <div className='checkout__list__total'>
              <h4>
                {`Total: $ ${totalAmount}`}
              </h4>
              {!isPaying &&
                <Button onClick={handlePaying}>Order</Button>
              }
            </div>
          </React.Fragment>
          :
          <p>
            Your cart is empty
          </p>
        }
      </div>
    </div>
  );
};

CheckoutList.propTypes = {
  handlePaying: PropTypes.func,
  isPaying: PropTypes.bool,
  totalAmount: PropTypes.string,
};

export default CheckoutList;
