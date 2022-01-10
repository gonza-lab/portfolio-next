import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { scroller } from 'react-scroll';

const useNav = (onClick?: () => void): { handleNav: () => void } => {
  const router = useRouter();

  const handleNav = useCallback(() => {
    if (router.asPath !== '/') {
      router.push('/');
    }

    if (onClick) onClick();
  }, [onClick, router]);

  return { handleNav };
};

export default useNav;
