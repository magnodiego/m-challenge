import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/cart/actions';
import { selectCartIsOpen, selectCartItems } from '../../store/cart/selector';
import closeIcon from '../../public/icons/close-icon.png';
import './Cart.scss';
import { Button } from 'react-bootstrap';
import CartCard from '../CartCard/CartCard';

const CartModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectCartIsOpen);
  const cartItems = useSelector(selectCartItems);
  const [isClosing, setIsClosing] = useState(false);

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0).toFixed(2);
  }, [cartItems]);

  const handleOpenCart = () => {
    if(!isClosing){
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        dispatch(toggleCart());
      }, 300);
    }
  };

  return(
    isOpen ?
      <React.Fragment>
        <div className={`cart-modal-backdrop ${isClosing ? 'close' : 'open'}`} onClick={handleOpenCart}/>
        <div className={`cart-modal ${isClosing ? 'close' : 'open'}`}>
          <div className='cart-modal-header'>
            <h2> My Cart </h2>
            <img className='cart-modal-close' src={closeIcon} alt='close-icon' onClick={handleOpenCart}/>
          </div>
          <div className={`cart-modal-body ${cartItems.length === 0 ? 'no-items' : '' }`}>
            {cartItems && cartItems.length > 0 ?
              cartItems.map((product, i) => 
                <CartCard product={product} key={i} />
              )
              :
              <p className='cart-modal-body-empty'>
                Your cart is empty
              </p>
            }
            {cartItems && cartItems.length > 0 &&
              <h4>
                {`Total: $ ${totalAmount}`}
              </h4>
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
