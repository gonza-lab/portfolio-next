import { useCallback } from 'react';
import { scroller } from 'react-scroll';

const useNav = (onClick: () => void, to: string): { handleNav: () => void } => {
  const isOnHome = true;

  const handleNav = useCallback(() => {
    if (onClick) {
      onClick();
    }

    if (!isOnHome) {
      setTimeout(() => {
        scroller.scrollTo(to, {
          duration: 500,
          smooth: true,
        });
      }, 100);
    }
  }, [onClick, to]);

  return { handleNav };
};

export default useNav;
