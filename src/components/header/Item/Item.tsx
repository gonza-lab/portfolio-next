import React, { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import useNav from '../../../hooks/useNav';
import IonIcon from '@reacticons/ionicons';

export const HeaderItem: FunctionComponent<{
  to: string;
  i: any;
  onClick?: () => void;
}> = ({ to, children, i, onClick }) => {
  const { handleNav } = useNav(onClick);

  return (
    <li className="header-nav-item">
      <Link
        activeClass="header-nav-item__active"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        onClick={handleNav}
        href="/"
      >
        <IonIcon className="ion-icon" name={i} />
        {children}
      </Link>
    </li>
  );
};
