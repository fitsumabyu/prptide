import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTop component that scrolls the window to the top (0,0)
 * whenever the route changes.
 */
const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top (0,0) when the route (pathname) changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop; 