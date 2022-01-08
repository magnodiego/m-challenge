import React from 'react';
import mercatLogo from '../../public/images/mercat-logo.png';
import cartIcon from '../../public/icons/cart-icon.png';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/selector';
import { toggleCart } from '../../store/cart/actions';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const handleOpenCart = () => {
    dispatch(toggleCart());
  };

  const goHome = () => {
    navigate('/home');
  };
  
  return (
    <div className='header-container'>
      <img src={mercatLogo} alt='mercat-logo' onClick={goHome}/>
      <div className='header-cart-container' onClick={handleOpenCart}>
        <img src={cartIcon} alt='cart-icon' />
        {cartItems && cartItems.length > 0 &&
          <div>
            {cartItems.length}
          </div>
        }
      </div>  
    </div>
  );
};

export default Header;
