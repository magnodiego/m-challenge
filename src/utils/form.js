export const validateFields = (id, val) => {
  switch (id) {
  case 'name':
    if(val.trim().length <= 2){
      return 'The name must be at least 2 characters long.';
    }
    break;
  case 'surname':
    if(val.trim().length <= 2){
      return 'The surname must be at least 2 characters long.';
    }
    break;
  case 'address':
    if(val.trim().length <= 2){
      return 'The address must be at least 2 characters long.';
    }
    break;
  case 'phone':
    if(!val.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g)){
      return 'Please enter a valid phone number.';
    }
    break;
  default:
    break;
  };
};
