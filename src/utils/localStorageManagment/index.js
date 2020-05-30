export const addToLS = (key, value) => localStorage.setItem(key, value);

export const removeFromLS = (key, value) => localStorage.removeItem(key, value);

export const getItemFromLS = (key, value) => localStorage.getItem(key, value);

export const clearLS = () => localStorage.clear();
