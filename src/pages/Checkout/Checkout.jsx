import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CartCard from '../../components/CartCard/CartCard';
import CheckoutList from '../../components/CheckoutList/CheckoutList';
import Form from '../../components/Form/Form';
import SubmitModal from '../../components/SubmitModal/SubmitModal';
import { selectCartItems } from '../../store/cart/selector';
import './Checkout.scss';

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const cartItems = useSelector(selectCartItems);

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, product) => {
      return total + product.price * product.count;
    }, 0).toFixed(2);
  }, [cartItems]);

  const handlePaying = () => {
    setIsPaying(!isPaying);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='checkout'>
      <SubmitModal isOpen={isOpen} />
      <h3 className='text-uppercase'>Checkout</h3>
      <div className='checkout__list__container'>
        <CheckoutList handlePaying={handlePaying} isPaying={isPaying} totalAmount={totalAmount} />
      </div>
      {isPaying &&
        <Form handlePaying={handlePaying} totalAmount={totalAmount} handleModal={handleModal}/>
      }
    </div>
  );
};

export default Checkout;
