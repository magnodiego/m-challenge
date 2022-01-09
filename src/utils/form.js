const cardValidationRegex = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;
const expiryValidationRegex = new RegExp('(0[1-9]|10|11|12)/[0-9]{2}$');
const cvcValidationRegex = new RegExp('^[0-9]*$');
const userData = {
  name: 'name',
  surname: 'surname',
  address: 'address',
};

export const validateFields = (id, val) => {
  const validation = {
    card: () => (!val || !val.match(cardValidationRegex)) && 'Please enter a valid card number.',
    expiry: () => (!val || !val.match(expiryValidationRegex)) && 'Please enter a valid date.',
    cvc: () => (!val || !val.match(cvcValidationRegex)) && 'Please enter a valid CVC number.',
    [userData[id]]: () => val.trim().length <= 2 && `The ${id} must be at least 2 characters long.`,
  };

  return validation[id]();
};
