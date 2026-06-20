import { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const sections = [
  { path: '/', id: 'intro' },
  { path: '/about', id: 'about' },
  { path: '/skills', id: 'skills' },
  { path: '/education', id: 'education' },
  { path: '/projects', id: 'projects' },
  { path: '/blogs', id: 'blogs' },
  { path: '/experience', id: 'experience' },
  { path: '/extracurricular', id: 'extracurricular' },
  { path: '/contact', id: 'contact' },
];

const pathToId = new Map(sections.map((section) => [section.path, section.id]));
const idToPath = new Map(sections.map((section) => [section.id, section.path]));

const getScrollContainer = () => document.querySelector('.content-shell');

const ScrollSync = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const observerUpdate = useRef(false);
  const hasScrolledOnLoad = useRef(false);
  const routeScrollLocked = useRef(false);
  const routeScrollTimer = useRef(null);
  const settleTimers = useRef([]);

  const scrollToPath = useCallback((path, shouldSettle = true) => {
    const targetId = pathToId.get(path) || 'intro';
    const target = document.getElementById(targetId);
    const scrollContainer = getScrollContainer();

    if (!target || !scrollContainer) return undefined;

    routeScrollLocked.current = true;
    if (routeScrollTimer.current) {
      window.clearTimeout(routeScrollTimer.current);
    }

    settleTimers.current.forEach((timer) => window.clearTimeout(timer));
    settleTimers.current = [];

    const scrollToTarget = () => {
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      const top = targetId === 'intro'
        ? 0
        : scrollContainer.scrollTop + targetTop - containerTop;

      if (targetId === 'intro') {
        scrollContainer.scrollTo({
          top: 0,
          behavior: hasScrolledOnLoad.current ? 'smooth' : 'auto',
        });
      } else {
        scrollContainer.scrollTo({
          top,
          behavior: hasScrolledOnLoad.current ? 'smooth' : 'auto',
        });
      }

      hasScrolledOnLoad.current = true;
    };

    window.requestAnimationFrame(() => {
      scrollToTarget();
    });

    if (shouldSettle) {
      [300, 900, 1800].forEach((delay) => {
        const timer = window.setTimeout(scrollToTarget, delay);
        settleTimers.current.push(timer);
      });
    }

    routeScrollTimer.current = window.setTimeout(() => {
      routeScrollLocked.current = false;
    }, shouldSettle ? 2200 : 800);

    return () => {
      if (routeScrollTimer.current) {
        window.clearTimeout(routeScrollTimer.current);
      }
      settleTimers.current.forEach((timer) => window.clearTimeout(timer));
      settleTimers.current = [];
    };
  }, []);

  useEffect(() => {
    if (observerUpdate.current) {
      observerUpdate.current = false;
      return undefined;
    }

    return scrollToPath(location.pathname);
  }, [location.pathname, scrollToPath]);

  useEffect(() => {
    const handleNavigateSection = (event) => {
      scrollToPath(event.detail?.path || location.pathname);
    };

    window.addEventListener('portfolio:navigate-section', handleNavigateSection);

    return () => {
      window.removeEventListener('portfolio:navigate-section', handleNavigateSection);
    };
  }, [location.pathname, scrollToPath]);

  useEffect(() => {
    const scrollContainer = getScrollContainer();
    const sectionNodes = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sectionNodes.length || !scrollContainer) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (routeScrollLocked.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        const nextPath = idToPath.get(visible.target.id);
        if (!nextPath || nextPath === location.pathname) return;

        observerUpdate.current = true;
        navigate(nextPath, { replace: true });
      },
      {
        root: scrollContainer,
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.12, 0.25, 0.45, 0.65],
      }
    );

    sectionNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [location.pathname, navigate]);

  return null;
};

export default ScrollSync;
