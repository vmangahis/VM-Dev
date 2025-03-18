import { useState } from 'react';
export const useHamburgerToggle = () => {
  const [hamburger, setHamburger] = useState(false);

  return { hamburger, setHamburger };
};
