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
  scroll-snap-align: start;
  padding-top: 140px;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width:95%;
  max-width: 1024px;
  margin: 25px 0px;

  @media(max-width: 768px){
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.div<CardProps>`
  user-select: none;
  border-radius: 20px;
  transition: 180ms ease-in;
  width: 240px;
  min-width: 200px;
  padding: 8px;
  background-color: ${props => props.backgroundColor};
  max-height: ${props => props.active ? '460px' : '350px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.backgroundColor === '#3F3D56' ? '#E9ECED' : '#3F3D56' };

  @media(max-width: 768px){
    width: 100%;
    margin-bottom: 20px;
  }

  > img {
    width: 100%;
    height: 150px;
    margin: 20px 0px;
  }

  > h2 {
    font-size: 20px;
    font-weight: normal;
  }

  > span {
    display: ${props => props.active ? 'block' : 'none'};
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
