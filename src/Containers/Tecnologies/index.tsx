import React, { useState } from 'react';
import Title from '../../components/Title';

import { Card, Container, Content } from './styles';

import TudoImg from '../../assets/images/tudo-em.svg';
import FerramentasImg from '../../assets/images/ferramentas-de-ponta.svg';
import DesignImg from '../../assets/images/design-e-tudo.svg';
import PageDescription from '../../components/PageDescription';
import ContainerProps from '../../models/container';

const Tecnologies: React.FC<ContainerProps> = ({forwardRef}) => {
  const [idSelected, setIdSelected] = useState(0);

  // const handleSelectId = (id: number) => {
  //   if (idSelected === id) {
  //     setIdSelected(0);
  //   } else {
  //     setIdSelected(id);
  //   }
  // }
  return (
    <Container ref={forwardRef}>
      <Title text="NOSSAS TECNOLOGIAS"/>
      <PageDescription text="Somos uma empresa de tecnologia que oferece soluções
        para o setor de saúde, com foco na melhoria de processos,
        beneficando diretamente a vida das pessoas."
      />
      <Content>
        <Card idNumber={1}
          activeId={idSelected}
          backgroundColor="#3F3D56"
          active={idSelected === 1}
        >
          <img alt="" src={TudoImg}/>
          <h2>Tudo em um só lugar</h2>
          <span>Primamos pela inovação e pensamentos simples, de modo
            que nossas ferramentas e
            plataformas são construídas para operar sobre estruturas em nuvem, com o aproveitamento dos
            melhores recursos, disponíveis
            pelas maiores empresas desses serviços no mundo.
          </span>
          {/* <button type="button" onClick={() => handleSelectId(1)}>
            <FaAngleDown size="2.5em"/>
          </button> */}
        </Card>
        <Card idNumber={2}
          backgroundColor="#FABB32"
          active={idSelected === 2}
          activeId={idSelected}
        >
          <img alt="" src={FerramentasImg}/>
          <h2>Ferramentas de ponta</h2>
          <span>Nosso time de criação e desenvolvimento usam as mais modernas
            ferramentas e metodologias de desenvolvimento existentes, além disso,
            estão sempre antenados sobre as novidades que aparecem.
          </span>
          {/* <button type="button" onClick={() => handleSelectId(2)}>
            <FaAngleDown size="2.5em" />
          </button> */}
        </Card>
        <Card idNumber={3}
          backgroundColor="#3F3D56"
          active={idSelected === 3}
          activeId={idSelected}
        >
          <img alt="" src={DesignImg}/>
          <h2>Design é tudo</h2>
          <span>Apostamos nossas fichas que o segredo de uma solução bem
            elaborada começa pelo design e a encantadora experiência do usuário.
            Por aqui nos preocupamos com simplicidade da usabilidade sem perder
            a essência da qualidade do resultado.
          </span>
          {/* <button type="button" onClick={() => handleSelectId(3)}>
            <FaAngleDown size="2.5em"/>
          </button> */}
        </Card>
      </Content>
    </Container>
  );
};

export default Tecnologies;
