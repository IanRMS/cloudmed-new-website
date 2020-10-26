import styled from 'styled-components';
import background from '../../assets/images/about-background.jpg';

export const Container = styled.div`
    background-image:url(${background});
    background-position: top;
    background-size: cover;
    max-width: 100vw;
    min-height: 100vh;
    /* height: 100vh; */
    padding-top: 150px;
    scroll-snap-align: start;
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
