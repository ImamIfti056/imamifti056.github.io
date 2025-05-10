// ScrollToNavigate.jsx
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const routeOrder = [
  '/',
  '/skills',
  '/education',
  '/projects',
  '/experience',
//   '/achievements',
  '/extracurricular',
  '/contact',
];

const ScrollToNavigate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (scrollTimeout.current) return; // throttle

      const deltaY = e.deltaY;
      const currentIndex = routeOrder.indexOf(location.pathname);

      if (deltaY > 0 && currentIndex < routeOrder.length - 1) {
        // Scroll down
        navigate(routeOrder[currentIndex + 1]);
      } else if (deltaY < 0 && currentIndex > 0) {
        // Scroll up
        navigate(routeOrder[currentIndex - 1]);
      }

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 1000); // 1s throttle
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [location.pathname, navigate]);

  return null;
};

export default ScrollToNavigate;
