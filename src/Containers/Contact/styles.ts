import styled from 'styled-components';
import background from '../../assets/images/contact-background.jpg';
import logo from '../../assets/images/logotipo.svg';

interface InputProps {
  error?: boolean;
}

interface PinProps {
  lat: number;
  lng: number;
}

export const Container = styled.div`
  background-image:url(${background});
  background-position: top;
  background-size: cover;
  max-width: 100vw;
  min-height: 100vh;
  scroll-snap-align: start;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 140px 0px 20px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 960px;
  width:100%;
  justify-content: space-between;
  margin-top: 20px;

  @media(max-width: 768px) {
    flex-direction: column;
    padding: 0px 15px;
  }
`;

export const FormCard = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 25px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    max-width: 680px;
    width: 60%;
    min-width: 310px;
    margin-right: 15px;
  }

  @media(max-width: 768px){
    width: 100%;
    margin: 0px;
    max-width: 100%;
    margin-bottom: 10px;
  }

  > form {
    width: 100%;

    input, textarea {
      border-radius: 5px;
      background-color: #fff !important;
      padding: 16px;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #585858;
      transition: 280ms ease-in-out;
      resize: none;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  height:48px;
  border: ${props => `1px solid ${props.error ? '#D7182A' : '#e0e0e0' } `};

  &:focus {
    outline: none;
    border: ${props => `2px solid ${props.error ? '#D7182A' : '#3F3D56'}`};
  }

  &::-internal-autofill-selected {
    background-color: #fff;
  }
`;

export const TextArea = styled.textarea<InputProps>`
  width:100%;
  padding: 8px;
  min-height: 160px;
  border: 1px solid ${props => props.error ? '#D7182A' : '#e0e0e0'};

  &:focus {
    outline: none;
    border: ${props => `2px solid ${props.error ? '#D7182A' : '#3F3D56'}`};
  }
`;

export const SubmitButton = styled.button`
  padding: 16px 24px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #3f3d56;
  color: #fff;
  box-shadow: 0px 0px 7px rgba(0,0,0,0.3);
  transition: 180ms ease-in;

  :hover {
    filter: brightness(120%);
    cursor: pointer;
  }
  :active {
    filter: brightness(150%);
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  color:#D7182A;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  bottom: -16px;
  left:0px;
`;

export const LocalizationContainer = styled.div`
  width: 35%;
  max-width: 230px;
  min-width: 370px;
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 100%;
    max-width:100%;
  }
`;

export const InfoCard = styled.div`
  width:100%;
  border-radius:8px;
  background: #fff;
  padding: 8px;
  margin-bottom: 10px;
`;

export const InfoLogotipo = styled.img.attrs({
  src: `${logo}`,
  alt: "",
})`
  height: 65px;
  margin-bottom: 10px;
`;

export const InfoTable = styled.table`
  width: 100%;

svg {
    font-size: 24px;
    color: #F9B43A;
    margin-right: 16px;
}

  tr {
    height: 48px;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
`;

export const TdIcon = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
`;

export const TdInfo = styled.td`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
`;

export const MapCard = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 8px;
  background: #FFF;

  > div {
    width: 100%;
    height: 100%;

    div {
      border-radius: 8px !important;
    }
  }

`;

export const MapPin = styled.div<PinProps>`
  background: none;
  padding: 15px 10px;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  svg {
    font-size: 36px;
    color: #D7182A;
  }
`;
