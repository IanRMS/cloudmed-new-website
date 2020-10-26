import styled, { keyframes } from 'styled-components';
import background from '../../assets/images/home-background.jpg';

export const Container = styled.div`
    background-image:url(${background});
    background-position: top;
    background-size: cover;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
`;

export const Logo = styled.img`
width: 95%;
max-width:520px;
`;

export const Description = styled.span`
font-size: 28px;
font-weight: 400;
text-align: center;
color: #edf2f7;
margin-top: 25px;
text-shadow: 0px 0px 4px rgba(0,0,0,0.8);
`;

const arrowBouncing = keyframes`
0% {transform: translatey(0)};
50% {transform: translatey(0)}
60% {transform: translatey(20px);}
75% {transform: translatey(0px);}
86% {transform: translatey(5px);}
100% {transform: translatey(0px)}
`

export const ArrowIcon = styled.div`
width:48px;
height:48px;
animation: ${arrowBouncing} 2.5s linear infinite;
animation-delay: 1.5s;
position: absolute;
bottom: 20px;
opacity: 1;
`;
