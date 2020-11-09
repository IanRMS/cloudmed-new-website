import React, { useEffect, useState } from 'react';

import { CloudIcon, Container, Links, MenuButton } from './styles';

import icon from '../../assets/images/cloudmed-icon.svg';
import icondark from '../../assets/images/cloudmed-icon-dark.svg';
import {FaBars} from 'react-icons/fa';
import MenuProps from '../../models/menu';

const Header: React.FC<MenuProps> = ({onClick, goToHome, goToAbout, goToContact, goToTecnologies}) => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isScrolled={isScrolled}>
      <CloudIcon isScrolled={isScrolled} alt="" src={isScrolled ? icondark : icon}/>
      <Links>
        <li onClick={goToHome} className={!isScrolled ? 'disabled' : ''} >Início</li>
        <li onClick={goToAbout}>Sobre</li>
        <li onClick={goToTecnologies}>Tecnologias</li>
        <li onClick={goToContact}>Contato</li>
      </Links>
      <MenuButton onClick={onClick}>
        <FaBars fontSize={24} color={ isScrolled ? "#080B24" : "#fafafa"}/>
      </MenuButton>
    </Container>
  );
};

export default Header;
