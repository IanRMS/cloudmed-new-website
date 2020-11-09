import styled from 'styled-components';
import background from '../../assets/images/tecnologies.jpg';

interface CardProps {
  backgroundColor: string;
  active: boolean;
  idNumber: number;
  activeId: number;
}

export const Container = styled.div`
  background-image:url(${background});
  background-position: top;
  background-size: cover;
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  scroll-snap-align: start;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:95%;
  max-width: 1024px;
  margin: 25px 0px;

  > div + div {
    margin-top: 20px;
  }
`;

export const Card = styled.div<CardProps>`
  user-select: none;
  border-radius: 20px;
  transition: 180ms ease-in;
  width: 100%;
  max-width: 960px;
  padding: 8px;
  background-color: ${props => props.backgroundColor};
  max-height: ${props => props.active ? '460px' : '350px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.backgroundColor === '#3F3D56' ? '#E9ECED' : '#3F3D56' };

  @media(max-width: 768px){
    width: 100%;
    margin-bottom: 20px;
  }

  > img {
    height: 150px;
    margin: 12px 0px;
  }

  > h2 {
    font-size: 20px;
    font-weight: normal;
  }

  > span {
    /* display: ${props => props.active ? 'block' : 'none'}; */
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    text-align: center;
  }

  > button {
    background: none;
    border: none;
    outline: none;
    margin-top: 16px;
    cursor: pointer;
    transition: 180ms ease-in;

    :hover {
      transform: scale(1.2);
    }
  }

  svg {
    transition: 280ms ease-in;
    color: ${props => props.backgroundColor === '#3F3D56' ? '#E9ECED' : '#3F3D56' };
    transform: ${props => props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;
