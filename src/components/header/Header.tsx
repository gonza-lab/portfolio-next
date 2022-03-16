import React, { useCallback, useContext, useState } from 'react';

import { Box } from '@mui/material';

import Image from 'next/image';

import { Link } from 'react-scroll';

import IonIcon from '@reacticons/ionicons';

import useNav from '../../hooks/useNav';

import DataContext from '../../contexts/data';

import { HeaderHButton } from './HButton/HButton';
import { HeaderItem } from './Item/Item';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  const { global } = useContext(DataContext);

  const { handleNav } = useNav(handleToggleNav);

  return (
    <Box
      className={
        'header-wrapper' + (isNavOpen ? ' header-wrapper__expanded' : '')
      }
    >
      <header className={'header'}>
        <div className="profile">
          <div className="profile__img">
            <Image
              layout="fill"
              alt="Gonzalo Flores"
              src={global.attributes.avatar.data.attributes.url}
            />
          </div>
          <span>
            <Link
              href="/"
              onClick={handleNav}
              smooth={true}
              duration={500}
              to="home"
            >
              Gonzalo Flores
            </Link>
          </span>
          <div className="profile__social">
            {global.attributes.socialNetworks.map((social) => (
              <button key={social.id}>
                <a target="_blank" rel="noreferrer" href={social.url}>
                  <IonIcon className="ion-icon" name={social.icon} />
                </a>
              </button>
            ))}
          </div>
        </div>
        <nav className="header-nav">
          <ul>
            <HeaderItem onClick={handleToggleNav} to="home" i="home-outline">
              Home
            </HeaderItem>
            <HeaderItem onClick={handleToggleNav} to="about" i="person-outline">
              Sobre mi
            </HeaderItem>
            <HeaderItem
              onClick={handleToggleNav}
              to="portfolio"
              i="folder-outline"
            >
              Proyectos
            </HeaderItem>
          </ul>
        </nav>
        <HeaderHButton onChange={handleToggleNav} isActive={isNavOpen} />
      </header>
      <Box
        className="header-wrapper__background"
        onClick={handleToggleNav}
      ></Box>
    </Box>
  );
};

export default Header;
