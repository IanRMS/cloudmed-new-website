import styled from 'styled-components';

interface Props {
  show: boolean;
}

export const Container = styled.div<Props>`
  width: 260px;
  height: 100vh;
  position: fixed;
  z-index: 11;
  right: 0;
  top: 0;
  background-color: #fafafa;
  transition: 180ms ease-in-out;
  box-shadow: 2px 0px 20px 5px rgba(0,0,0,0.4);
  transform: ${props => props.show ? 'translatX(0px)' : 'translateX(260px)'};
  padding: 10px 20px;

  @media(min-width: 769px) {
    display: none;
  }
`;

export const BackDrop = styled.div<Props>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  right: 0px;
  background-color: rgba(0,0,0,0.4);
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 3;
`;

export const DrawerHeader = styled.div`
width: 100%;
height: 60px;
margin-bottom: 10px;
display: flex;
align-items: center;
justify-content: flex-end;

> button {
  background: transparent;
  outline: none;
  border: none;
}
`;

export const DrawerLinksContainer = styled.div`
ul {
  list-style: none;
li {
  border-bottom: 1px solid #bdbdbd;
  width:100%;
  height: 52px;
  display: flex;
  align-items: center;
  button {
    text-decoration: none;
    color: #212121;
    font-size: 20px;
    background: none;
    outline: none;
    border: none;
  }
}
}
`;
