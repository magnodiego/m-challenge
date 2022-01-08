import React from 'react';
import CartModal from "../Cart/Cart";
import PropTypes from 'prop-types';

const Layout = (props) => {

  return (
    <div className='layout'>
      <CartModal />
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
