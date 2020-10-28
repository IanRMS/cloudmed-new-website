import React from 'react';

import { CloudIcon, Container, Links, MenuButton } from './styles';

import icon from '../../assets/images/cloudmed-icon.svg';
import {FaBars} from 'react-icons/fa';

interface Props {
  onClick: () => void;
}

const Header: React.FC<Props> = ({onClick}) => {
  return (
    <Container>
      <CloudIcon alt="" src={icon}/>
      <Links>
        <li>Início</li>
        <li>Sobre</li>
        <li>Tecnologias</li>
        <li>Contato</li>
     </Links>
     <MenuButton onClick={onClick}>
       <FaBars fontSize={24} color="#fff"/>
     </MenuButton>
    </Container>
  );
};

export default Header;
