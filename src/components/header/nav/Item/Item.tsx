import React, { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import useNav from '../../../../hooks/useNav';
import IonIcon from '@reacticons/ionicons';

export const HeaderNavItem: FunctionComponent<{
  to: string;
  i: any;
}> = ({ to, children, i }) => {
  const { handleNav } = useNav();

  return (
    <li className="header-nav-item">
      <Link
        activeClass="header-nav-item__active"
        to={to}
        spy={true}
        smooth={true}
        duration={500}
        onClick={handleNav}
      >
        <IonIcon className="ion-icon" name={i} />
        {children}
      </Link>
    </li>
  );
};
