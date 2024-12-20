import { useEffect, useState } from 'react';

export default function useScrollProgress() {
  const [hamburger, toggleHamburger] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [headerColor, changeHeaderColor] = useState(false);

  const scrollFunction = () => {
    const wndScroll = document.documentElement.scrollTop;
    const h =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProg = (wndScroll / h) * 100;

    setScrollY(scrollProg);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, []);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      changeHeaderColor(true);
    } else {
      changeHeaderColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);
  return { hamburger, scrollY, headerColor, toggleHamburger };
}
