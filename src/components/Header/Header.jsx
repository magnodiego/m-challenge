import React from 'react';
import mercatLogo from '../../public/images/mercat-logo.png';
import cartIcon from '../../public/icons/cart-icon.png';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartTotalItems } from '../../store/cart/selector';
import { toggleCart } from '../../store/cart/actions';
import { useNavigate } from 'react-router-dom';
import { rootPaths } from '../../router/paths';

const Header = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(selectCartTotalItems);
  const navigate = useNavigate();

  const handleOpenCart = () => {
    dispatch(toggleCart());
  };

  const goHome = () => {
    navigate(rootPaths.home);
  };
  
  return (
    <div className='header'>
      <img src={mercatLogo} alt='mercat-logo' onClick={goHome}/>
      <div className='header__cart' onClick={handleOpenCart}>
        <img src={cartIcon} alt='cart-icon' />
        {totalItems > 0 &&
          <div>
            {totalItems}
          </div>
        }
      </div>  
    </div>
  );
};

export default Header;
