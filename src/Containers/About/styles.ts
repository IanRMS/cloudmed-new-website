import styled from 'styled-components';
import background from '../../assets/images/about-background.jpg';

interface DetailsProps {
  show: boolean;
}

export const Container = styled.div`
    background-image:url(${background});
    background-position: top;
    background-size: cover;
    max-width: 100vw;
    min-height: 100vh;
    /* height: 100vh; */
    padding-top: 150px;
    scroll-snap-align: start;
    position: relative;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

export const Wrapper = styled.div`
display: flex;
  flex-direction: row;
  width:100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 25px;
  width: 95%;
  justify-content: center;
  overflow-x: scroll;
  max-width: 1190px;

& div + div {
    margin-left: 10px;
}

&::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #F9B43A;
  }
`;

export const Details = styled.div<DetailsProps>`
  width: 100%;
  padding: ${props => props.show ? '20px' : '0px'};
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  transition: 180ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  height: ${props => props.show ? 'auto' : '0px'};
  transition: 180ms ease-in-out;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.4);
  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 90%;
    max-width: 1024px;

    @media(max-width: 768px){
      flex-direction: column;
      align-items: center;
    }
    h1 {
      font-size: 22px;
      color: #F9B434;
      margin-bottom: 10px;
    }
  }

  @media(max-width: 768px) {
    width: 98%;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 4px;
     height: ${props => props.show ? 'calc(98% - 125px)' : '0px'};
  }
`;

export const TextContainer = styled.div`
  margin-left: 20px;
`;

export const ImageContainer = styled.div`
  min-width: 300px;
  max-width: 320px;
  height: 235px;
  background-color: #fff;
  border-radius: 8px;
  padding: 5px;

  > div {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    outline: none;
  }
`;

export const AboutSpan = styled.span`
  color:#212121;
  font-size: 17px;
  margin-left: 20px;
`;

export const CloseButton = styled.button`
  border: none;
  background: #fff;
  outline: none;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
