import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './Form.scss';
import FormItem from '../FormItem/FormItem';
import { validateFields } from '../../utils/form';

const Form  = ({ handlePaying, totalAmount, handleModal }) => {

  const [values, setValue] = useState({
    name: '',
    surname: '',
    address: '',
    phone: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    address: '',
    phone: '',
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
        <FormItem id='name' label='Name' type='text' className='form__item__input' placeholder='Enter your name.' value={values.name} onChange={handleChange} error={errors.name} />
        <FormItem id='surname' label='Surname' type='text' className='form__item__input' placeholder='Enter your surname.' value={values.surname} onChange={handleChange} error={errors.surname} />
        <FormItem id='address' label='Address' type='text' className='form__item__input' placeholder='Enter your address.' value={values.address} onChange={handleChange} error={errors.address} />
        <FormItem id='phone' label='Phone number' type='text' className='form__item__input' placeholder='(123) 456-7890' value={values.phone} onChange={handleChange} error={errors.phone} />
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
