const cardValidationRegex = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;
export const expiryValidationRegex = new RegExp('(0[1-9]|10|11|12)/[0-9]{2}$');
export const cvcValidationRegex = new RegExp('^[0-9]*$');

export const validateFields = (id, val) => {
  const userData = {
    name: 'name',
    surname: 'surname',
    address: 'address',
  };

  const validation = {
    card: () => {
      if(!val || !val.match(cardValidationRegex)){
        return 'Please enter a valid card number.';
      }
    },
    expiry: () => {
      if(!val || !val.match(expiryValidationRegex)){
        return 'Please enter a valid date.';
      }
    },
    cvc: () => {
      if(!val || !val.match(cvcValidationRegex)){
        return 'Please enter a valid CVC number.';
      }
    },
    [userData[id]]: () => {
      if(val.trim().length <= 2){
        return `The ${id} must be at least 2 characters long.`;
      }
    }
  };

  return validation[id]();
};
