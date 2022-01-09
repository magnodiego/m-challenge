import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/cart/actions';
import { selectCartIsOpen, selectCartItems } from '../../store/cart/selector';
import closeIcon from '../../public/icons/close-icon.png';
import './Cart.scss';
import { Button } from 'react-bootstrap';
import CartCard from '../CartCard/CartCard';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from '../../router/paths';

const CartModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectCartIsOpen);
  const cartItems = useSelector(selectCartItems);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

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

  const goToCheckout = () => {
    dispatch(toggleCart());
    navigate(rootPaths.checkout);
  };

  return(
    isOpen ?
      <React.Fragment>
        <div className={`cart__backdrop ${isClosing ? 'close' : 'open'}`} onClick={handleOpenCart}/>
        <div className={`cart ${isClosing ? 'close' : 'open'}`}>
          <div className='cart__header'>
            <h2> My Cart </h2>
            <img className='cart__close' src={closeIcon} alt='close-icon' onClick={handleOpenCart}/>
          </div>
          <div className={`cart__body ${cartItems.length === 0 ? 'no-items' : '' }`}>
            {cartItems && cartItems.length > 0 ?
              <React.Fragment>
                {cartItems.map((product, i) => 
                  <CartCard product={product} key={i} isCart />
                )}
                <h4>
                  {`Total: $ ${totalAmount}`}
                </h4>
              </React.Fragment>
              :
              <p>
                Your cart is empty
              </p>
            }
          </div>
          <div className='cart__footer'>
            {cartItems && cartItems.length > 0 ?
              <Button variant="primary" onClick={goToCheckout}> Checkout </Button>
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
