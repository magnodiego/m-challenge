import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../../store/cart/actions';
import { useDispatch } from 'react-redux';

const SubmitModal = ({ isOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(emptyCart());
    navigate('/home');
  };

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Set!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for your order, we will contact you soon.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Continue shopping
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

SubmitModal.propTypes = {
  isOpen: PropTypes.bool,
};

export default SubmitModal;
