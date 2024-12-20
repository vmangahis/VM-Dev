import { useState, useEffect } from 'react';

function getWindowDimension() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimension() {
  const [winDimension, setWinDimension] = useState(getWindowDimension());

  useEffect(() => {
    function resizeHandler() {
      setWinDimension(getWindowDimension());
    }

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return winDimension;
}
