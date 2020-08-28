const setItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export default { setItem, getItem };
