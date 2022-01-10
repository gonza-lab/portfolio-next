import React, { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import useNav from '../../../../hooks/useNav';
import IonIcon from '@reacticons/ionicons';

export const HeaderNavItem: FunctionComponent<{
  to: string;
  i: any;
  onClick: () => void;
}> = ({ to, children, i, onClick }) => {
  const { handleNav } = useNav(onClick, to);

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

HeaderNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  i: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
