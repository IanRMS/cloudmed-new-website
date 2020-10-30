import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegMap } from 'react-icons/fa';

import Title from '../../components/Title';

import { ValidationEmail, ValidationName } from './utils/fieldsValidation';

import {
  Container,
  Content,
  ErrorMessage,
  FormCard,
  InfoCard,
  InfoLogotipo,
  InfoTable,
  Input,
  InputContainer,
  LocalizationContainer,
  MapCard,
  SubmitButton,
  TdIcon,
  TdInfo,
  TextArea
} from './styles';

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Title text="ENTRE EM CONTATO" />
      <Content>
        <FormCard>
          <form>
            <InputContainer>
              <Input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={e => setName(e.target.value)}
                error={ValidationName(name)}
                autoComplete="off"
                disabled={loading}
            />
            {ValidationName(name) &&
              <ErrorMessage>Preencha com seu nome completo</ErrorMessage>
            }
            </InputContainer>
            <InputContainer>
              <Input
                type="e-mail"
                name="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={!ValidationEmail(email)}
                autoComplete="off"
                disabled={loading}
              />
              {!ValidationEmail(email) &&
                <ErrorMessage>Preencha com um e-mail válido</ErrorMessage>
              }
            </InputContainer>
            <InputContainer>
              <TextArea
                name="mensagem"
                placeholder="Digite sua mensagem"
                value={message}
                onChange={e => setMessage(e.target.value)}
                autoComplete="off"
                disabled={loading}
              />
            </InputContainer>
            <SubmitButton type="submit">ENVIAR MENSAGEM</SubmitButton>
          </form>
        </FormCard>
        <LocalizationContainer>
          <InfoCard>
            <InfoLogotipo />
            <InfoTable>
              <tr>
                <TdIcon><FaMapMarkerAlt style={{marginLeft: 3}}/></TdIcon>
                <TdInfo>Avenida Ver. Jose Granzotte, nº 2339 - Jardim Piratininga</TdInfo>
              </tr>
              <tr>
                <TdIcon><FaRegMap/></TdIcon>
                <TdInfo>Franca - SP, 14403-597</TdInfo>
              </tr>
                <tr>
                <TdIcon><FaEnvelope/></TdIcon>
                <TdInfo>contato@cloudmed.io</TdInfo>
              </tr>
              <tr>
                <TdIcon><FaPhoneAlt/></TdIcon>
                <TdInfo>16 3704-3165</TdInfo>
              </tr>
              <tbody></tbody>
            </InfoTable>
          </InfoCard>
        <MapCard>
          {/* <GoogleMapReact></GoogleMapReact> */}
        </MapCard>
        </LocalizationContainer>
      </Content>
    </Container>
  );
};

export default Contact;
