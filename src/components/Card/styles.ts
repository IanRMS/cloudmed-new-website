import styled from 'styled-components';

interface ContainerProps {
  cardId: number;
  objectId: number;
}

export const Container = styled.div<ContainerProps>`
min-width: 190px;
max-width: 190px;
height:300px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: linear-gradient(#F3D091, #fff, #fff );
border-radius: 8px;
text-align: center;
align-items: center;
margin: 10px 0px;
user-select: none;
filter: ${props => props.cardId === props.objectId ? 'brightness(30%)' : 'brightness(100%)'};
transition: 280ms ease-in-out;
`;

export const Text = styled.span`
font-size: 21px;
color:#302F42;
`;

export const Image = styled.img`
width:90%;
margin-top: 5px;
`;

export const Button = styled.button`
cursor: pointer;
background: transparent;
border: none;
margin-bottom: 5px;
transition: 180ms linear;
outline: none;

&:hover {
  transform: scale(1.2);
}
`;

