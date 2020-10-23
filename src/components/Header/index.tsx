import React from 'react';

import { CloudIcon, Container, Links } from './styles';

import icon from '../../assets/images/cloudmed-icon.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <CloudIcon alt="" src={icon}/>
      <Links>
      <li>Início</li>
      <li>Soluções</li>
      <li>Tecnologia</li>
      <li>Contato</li>
      <li>Blog</li>
      </Links>
    </Container>
  );
};

export default Header;
