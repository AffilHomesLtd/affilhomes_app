import { useEffect, useState } from 'react';

export default function useScreen() {
  const [isMobile, setIsMobile] = useState(null);
  const [screen, setScreen] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    setIsMobile(screen <= 768);
    return () => window.removeEventListener('resize', handleResize);
  }, [screen]);

  return { isMobile };
}
