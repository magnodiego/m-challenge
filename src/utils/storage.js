export const loadStore = () => {
  try { 
    const serializedData = localStorage.getItem('cartState');
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

export const saveStore = (state) => {
  try {
    const serializedData = JSON.stringify(state);
    localStorage.setItem('cartState', serializedData);
  } catch (error) {
    
  }
};
