import React, { useState } from 'react';
import {FaTimesCircle} from 'react-icons/fa';

import {
  AboutSpan,
  CardContent,
  CloseButton,
  Container,
  Content,
  Details,
  ImageContainer,
  TextContainer,
  Wrapper
} from './styles';
import Card from '../../components/Card';
import PageDescription from '../../components/PageDescription';
import Title from '../../components/Title';
import Focamos from '../../assets/images/focamos-nas-pessoas.svg';
import Somos from '../../assets/images/somos-inconformados.svg';
import Prezamos from '../../assets/images/prezamos.svg';
import Acreditamos from '../../assets/images/acreditamos.svg';
import Formamos from '../../assets/images/formamos.svg';
import Pensamos from '../../assets/images/pensamos.svg';
import {ObjectModel } from './models/ObjectModel';
import { AboutTexts } from './utils/texts';

const About: React.FC = () => {
  const defaultObject = {id: 0, title: '', text: '', image: ''};
  const [object, setObject] = useState<ObjectModel>(defaultObject)


  return (
    <Container>
      <Content>
      <Title text="SOBRE NÓS"/>
      <PageDescription text="Oferecemos soluções para o setor da saúde, focando na melhoria de
        processos e beneficiando diretamente a vida das pessoas."/>
      <Details show={object.text.length > 0}>
        <div>
          <ImageContainer>
            <div style={{backgroundImage: object.image}}/>
              </ImageContainer>
              <TextContainer>

              <h1>{object.title}</h1>
            <AboutSpan>
              {object.text}
            </AboutSpan>
            </TextContainer>
            </div>
            <CloseButton onClick={() => setObject(defaultObject)}>
              <FaTimesCircle color="#f9B43A" fontSize="28"/>
            </CloseButton>
          </Details>
      <CardContent>
          <Wrapper>
            <Card
              text="Focamos nas pessoas"
              img={Focamos}
              onPress={() => setObject(AboutTexts[0])}
              cardId={1}
              objectId={object.id}
            />
            <Card
              text="Somos inconformados"
              img={Somos}
              onPress={() => setObject(AboutTexts[1])}
              cardId={2}
              objectId={object.id}
            />
            <Card
              text="Prezamos pela transparência"
              img={Prezamos}
              onPress={() => setObject(AboutTexts[2])}
              cardId={3}
              objectId={object.id}
            />
            <Card
              text="Acreditamos no novo"
              img={Acreditamos}
              onPress={() => setObject(AboutTexts[3])}
              cardId={4}
              objectId={object.id}
            />
            <Card
              text="Formamos um time"
              img={Formamos}
              onPress={() => setObject(AboutTexts[4])}
              cardId={5}
              objectId={object.id}
            />
            <Card
              text="Pensamos simples"
              img={Pensamos}
              onPress={() => setObject(AboutTexts[5])}
              cardId={6}
              objectId={object.id}
            />
          </Wrapper>
      </CardContent>
        </Content>

    </Container>
  );
};

export default About;
