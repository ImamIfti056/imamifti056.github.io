// ScrollToNavigate.jsx
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const routeOrder = [
  '/',
  '/about',
  '/skills',
  '/education',
  '/projects',
  '/experience',
  '/extracurricular',
  '/contact',
  '/',
];

const ScrollToNavigate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (scrollTimeout.current) return;

      const deltaY = e.deltaY;
      const currentIndex = routeOrder.indexOf(location.pathname);

      if (deltaY > 0 && currentIndex < routeOrder.length - 1) {
        localStorage.setItem('scrollDirection', 'down');
        navigate(routeOrder[currentIndex + 1]);
      } else if (deltaY < 0 && currentIndex > 0) {
        localStorage.setItem('scrollDirection', 'up');
        navigate(routeOrder[currentIndex - 1]);
      }

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 1000);
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [location.pathname, navigate]);

  return null;
};

export default ScrollToNavigate;
