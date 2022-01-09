import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './Form.scss';
import FormItem from '../FormItem/FormItem';
import { validateFields } from '../../utils/form';

const formConstants = {
  name: {
    id: 'name',
    label: 'Name',
    placeholder: 'Enter your name.',
    className: 'form__item__input'
  },
  surname: {
    id: 'surname',
    label: 'Surname',
    placeholder: 'Enter your surname.',
    className: 'form__item__input'
  },
  address: {
    id: 'address',
    label: 'Address',
    placeholder: 'Enter your address.',
    className: 'form__item__input'
  },
  card: {
    id: 'card',
    label: 'Card number',
    placeholder: '5555 5555 5555 5555',
    className: 'form__item__input',
    max: 16,
  },
  expiry: {
    id: 'expiry',
    label: 'Expiry date',
    placeholder: 'MM/YY',
    className: 'form__item__input',
    max: 5,
  },
  cvc: {
    id: 'cvc',
    label: 'CVC',
    placeholder: '000',
    className: 'form__item__input',
    max: 4,
    min: 3,
  }
};

const Form  = ({ handlePaying, totalAmount, handleModal }) => {

  const [values, setValue] = useState({
    name: '',
    surname: '',
    address: '',
    card: '',
    expiry: '',
    cvc: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    address: '',
    card: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (id, val) => {
    setValue({
      ...values,
      [id]: val,
    });

    const error = validateFields(id, val);
    if(error){
      setErrors({
        ...errors,
        [id]: error
      });
    } else {
      setErrors({
        ...errors,
        [id]: '',
      });
    };
  };

  const setOrder = () => {
    let hasErrors = false;
    const validationErrors = {};
    for (const key in values) {
      const err = validateFields(key, values[key]);
      if(err){
        hasErrors = true;
        validationErrors[key] = err;
      }
    }

    if(hasErrors){
      setErrors({
        ...errors,
        ...validationErrors
      });
      return;
    }

    handleModal();
  };

  return (
    <div className='form'>
      <div className='form__header'>
        <h5 className='text-uppercase'>Order information</h5>
        <Button onClick={handlePaying}> Cancel </Button>
      </div>
      <div className='form__body'>
        <FormItem id={formConstants.name.id} label={formConstants.name.label} type='text' className={formConstants.name.className} placeholder={formConstants.name.placeholder} value={values.name} onChange={handleChange} error={errors.name} />
        <FormItem id={formConstants.surname.id} label={formConstants.surname.label} type='text' className={formConstants.surname.className} placeholder={formConstants.surname.placeholder} value={values.surname} onChange={handleChange} error={errors.surname} />
        <FormItem id={formConstants.address.id} label={formConstants.address.label} type='text' className={formConstants.address.className} placeholder={formConstants.address.placeholder} value={values.address} onChange={handleChange} error={errors.address} />
        <FormItem id={formConstants.card.id} label={formConstants.card.label} type='text' className={formConstants.card.className} placeholder={formConstants.card.placeholder} max={formConstants.card.max} value={values.card} onChange={handleChange} error={errors.card} />
        <div className='form__body__cardInfo'>
          <FormItem id={formConstants.expiry.id} label={formConstants.expiry.label} type='text' className={formConstants.expiry.className} placeholder={formConstants.expiry.placeholder} max={formConstants.expiry.max} value={values.expiry} onChange={handleChange} error={errors.expiry} />
          <FormItem id={formConstants.cvc.id} label={formConstants.cvc.label} type='text' className={formConstants.cvc.className} placeholder={formConstants.cvc.placeholder} max={formConstants.cvc.max} min={formConstants.cvc.min} value={values.cvc} onChange={handleChange} error={errors.cvc} />
        </div>
      </div>
      <Button onClick={setOrder}>{`Set order $ ${totalAmount}`}</Button>
    </div>
  );
};

Form.propTypes = {
  handlePaying: PropTypes.func,
  totalAmount: PropTypes.string,
  handleModal: PropTypes.func,
};

export default Form;
