import React from 'react';
import Card from '../../components/Card';
import PageDescription from '../../components/PageDescription';
import Title from '../../components/Title';

import { CardContent, Container, Content, Wrapper } from './styles';
import Focamos from '../../assets/images/focamos-nas-pessoas.svg';
import Somos from '../../assets/images/somos-inconformados.svg';
import Prezamos from '../../assets/images/prezamos.svg';
import Acreditamos from '../../assets/images/acreditamos.svg';
import Formamos from '../../assets/images/formamos.svg';
import Pensamos from '../../assets/images/pensamos.svg';

const About: React.FC = () => {
  return (
    <Container>
      <Content>
      <Title text="SOBRE NÓS"/>
      <PageDescription text="Oferecemos soluções para o setor da saúde, focando na melhoria de
        processos e beneficiando diretamente a vida das pessoas."/>
      <CardContent>
        <Wrapper>
          <Card text="Focamos nas pessoas" img={Focamos}/>
          <Card text="Somos inconformados" img={Somos}/>
          <Card text="Prezamos pela transparência" img={Prezamos}/>
          <Card text="Acreditamos no novo" img={Acreditamos}/>
          <Card text="Formamos um time" img={Formamos}/>
          <Card text="Pensamos simples" img={Pensamos}/>
        </Wrapper>
      </CardContent>
        </Content>

    </Container>
  );
};

export default About;
