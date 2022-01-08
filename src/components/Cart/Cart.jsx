import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/cart/actions';
import { selectCartIsOpen, selectCartItems } from '../../store/cart/selector';
import closeIcon from '../../public/icons/close-icon.png';
import './Cart.scss';
import { Button } from 'react-bootstrap';

const CartModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectCartIsOpen);
  const cartItems = useSelector(selectCartItems);
  const [close, setClose] = useState(true);

  useEffect(() => {
    if(!isOpen){
      setTimeout(() => {
        setClose(true);
      }, 300);
    } else {
      setClose(false);
    }
  }, [isOpen]);

  const handleOpenCart = () => {
    if(isOpen){
      dispatch(toggleCart());
    }
  };


  return(
    !close ?
      <React.Fragment>
        <div className={`cart-modal-backdrop ${!isOpen ? 'close' : 'open'}`} onClick={handleOpenCart}/>
        <div className={`cart-modal ${!isOpen ? 'close' : 'open'}`}>
          <div className='cart-modal-header'>
            <h2> My Cart </h2>
            <img className='cart-modal-close' src={closeIcon} alt='close-icon' onClick={handleOpenCart}/>
          </div>
          <div className='cart-modal-body'>
            {cartItems && cartItems.length > 0 ?
              <div>
                LIST
              </div>
              :
              <p className='cart-modal-body-empty'>
                Your cart is empty
              </p>
            }
          </div>
          <div className='cart-modal-footer'>
            {cartItems && cartItems.length > 0 ?
              <Button variant="primary"> Checkout </Button>
              :
              <Button variant="outline-primary" onClick={handleOpenCart}> Continue shopping </Button>
            }
          </div>
        </div>
      </React.Fragment>
      :
      null
  );
};

export default CartModal;
