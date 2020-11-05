import React from 'react';
import {FaAngleDown} from 'react-icons/fa';

import { ArrowIcon, Container, Description, Logo } from './styles';
import logo from '../../assets/images/cloudmed-logo.png';
import ContainerProps from '../../models/container';

const Home: React.FC<ContainerProps> = ({forwardRef}) => {
  return (
    <Container ref={forwardRef}>
      <Logo alt="" src={logo}/>
      <Description>
      Mais que soluções tecnologicas <br/>
      na área da saúde
      </Description>
      <ArrowIcon>
        <FaAngleDown color="#fff" size="3em"/>
      </ArrowIcon>
    </Container>
  );
};

export default Home;
