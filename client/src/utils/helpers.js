export const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const getInitials = (firstName, lastName) => {
  return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
};

export const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
