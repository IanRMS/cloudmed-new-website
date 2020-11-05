import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegMap } from 'react-icons/fa';

import Title from '../../components/Title';

import { ValidationEmail, ValidationMessage, ValidationName } from './utils/fieldsValidation';

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
  MapPin,
  ProgressContainer,
  SubmitButton,
  TdIcon,
  TdInfo,
  TextArea
} from './styles';
import { LinearProgress } from '@material-ui/core';
import ContainerProps from '../../models/container';

const Contact: React.FC<ContainerProps> = ({forwardRef}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      name,
      email,
      message
    };
    console.log(data);
  }

  const handleDisabled = ():boolean => {
    if ( !name.length || ValidationName(name) ||
      !email.length || !ValidationEmail(email) ||
        !message.length || ValidationMessage(message)) {
          return true
        }
        return false
  }

  return (
    <Container ref={forwardRef}>
      <Title text="ENTRE EM CONTATO" />
      <Content>
        <FormCard>
          { !loading &&
            <ProgressContainer>
              <LinearProgress color="primary"
                style={{
                  height: 6,
                  borderRadius: '8px 8px 0px 0px'
                }}
              />
            </ProgressContainer>
          }
          <form onSubmit={handleSubmit}>
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
                error={ValidationMessage(message)}
              />
            </InputContainer>
            <SubmitButton type="submit" disabled={handleDisabled()}>
              {loading ? 'CARREGANDO' : 'ENVIAR MENSAGEM'}
            </SubmitButton>
          </form>
        </FormCard>
        <LocalizationContainer>
          <InfoCard>
            <InfoLogotipo />
            <InfoTable>
              <tbody>
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
              </tbody>
              <tbody></tbody>
            </InfoTable>
          </InfoCard>
        <MapCard>
          <div>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyDRxMe7kjCqBPaWoWQv-XXVx6wS0rE9HTs' }}
              defaultZoom={15}
              defaultCenter={{lat: -20.5382427, lng: -47.3753856  }}
            >
              <MapPin
                lat={-20.5382427}
                lng={-47.3753856}
              >
                <FaMapMarkerAlt/>
              </MapPin>
            </GoogleMapReact>
          </div>
        </MapCard>
        </LocalizationContainer>
      </Content>
    </Container>
  );
};

export default Contact;
