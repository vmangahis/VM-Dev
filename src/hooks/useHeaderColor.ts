import { useState } from 'react';

export const useHeaderColor = () => {
  const [headerColor, setHeaderColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return headerColor;
};
