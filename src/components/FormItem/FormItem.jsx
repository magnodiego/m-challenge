import React from 'react';
import PropTypes from 'prop-types';
import './FormItem.scss';

const FormItem = ({ id, label, type, className, placeholder, value, error, onChange  }) => {
  
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };
  
  return (
    <div className='form__item'>
      <label className="form__item__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`${className} ${error ? 'error' : ''}`}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {error && <span className='form__item__span error'> {error} </span>}
    </div>
  );
};

FormItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormItem;
