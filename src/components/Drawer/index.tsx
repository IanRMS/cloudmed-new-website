import React from 'react';
import {FaArrowRight} from 'react-icons/fa';

import { BackDrop, Container, DrawerHeader, DrawerLinksContainer } from './styles';

interface Props {
  show: boolean;
  onClick: () => void;
}

const Drawer: React.FC<Props> = ({show, onClick}) => {
  return (
    <>
      <Container show={show}>
        <DrawerHeader>
          <button onClick={onClick}>
            <FaArrowRight color="#F9B43A" fontSize="32px" />
          </button>
        </DrawerHeader>
        <DrawerLinksContainer>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
               <li>
              <a href="#">Sobre</a>
            </li>
               <li>
              <a href="#">Tecnologias</a>
            </li>
               <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </DrawerLinksContainer>
      </Container>
      <BackDrop show={show} onClick={onClick}/>
    </>
  );
};

export default Drawer;
