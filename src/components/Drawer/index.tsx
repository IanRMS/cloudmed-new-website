import React from 'react';
import {FaArrowRight} from 'react-icons/fa';

import { BackDrop, Container, DrawerHeader, DrawerLinksContainer } from './styles';

interface Props {
  show: boolean;
  onClick: () => void;
  goToHome: (ref: any) => void;
  goToAbout: (ref: any) => void;
  goToTecnologies: (ref: any) => void;
  goToContact: (ref: any) => void;
}

const Drawer: React.FC<Props> = ({show, onClick, goToHome, goToAbout, goToTecnologies, goToContact }) => {
  // const {goToHome, goToAbout, goToTecnologies, goToContact} = rest;
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
              <button onClick={goToHome}>Início</button>
            </li>
            <li>
              <button onClick={goToAbout}>Sobre</button>
            </li>
            <li>
              <button onClick={goToTecnologies}>Tecnologias</button>
            </li>
            <li>
              <button onClick={goToContact}>Contato</button>
            </li>
          </ul>
        </DrawerLinksContainer>
      </Container>
      <BackDrop show={show} onClick={onClick}/>
    </>
  );
};

export default Drawer;
