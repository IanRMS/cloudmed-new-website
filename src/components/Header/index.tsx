import React from 'react';

import { CloudIcon, Container, Links, MenuButton } from './styles';

import icon from '../../assets/images/cloudmed-icon.svg';
import {FaBars} from 'react-icons/fa';
import MenuProps from '../../models/menu';

const Header: React.FC<MenuProps> = ({onClick, goToHome, goToAbout, goToContact, goToTecnologies}) => {
  return (
    <Container>
      <CloudIcon alt="" src={icon}/>
      <Links>
        <li onClick={goToHome}>Início</li>
        <li onClick={goToAbout}>Sobre</li>
        <li onClick={goToTecnologies}>Tecnologias</li>
        <li onClick={goToContact}>Contato</li>
     </Links>
     <MenuButton onClick={onClick}>
       <FaBars fontSize={24} color="#fff"/>
     </MenuButton>
    </Container>
  );
};

export default Header;
