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

export const buildClassNamesFromProps = (initialClass = "", props) => {
  if (typeof props !== "object") return initialClass;
  return Object.keys(props)
    .reduce(
      (acc, key) => {
        if (props[key]) acc.push(`${initialClass}--${key}`);
        return acc;
      },
      [initialClass]
    )
    .join(" ");
};

export const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
