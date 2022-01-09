import React from 'react';
import CartModal from "../Cart/Cart";
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Layout = ({ children }) => {

  return (
    <div className='layout'>
      <CartModal />
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
