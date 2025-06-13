// ScrollToAnchor.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          setTimeout(tryScroll, 100); // Wait for element to render if it's not ready
        }
      };
      tryScroll();
    }
  }, [location]);

  return null;
};

export default ScrollToAnchor;
