import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
*, input, button {
    font-family: 'Maven Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

export const Main = styled.main`
  height: 100vh;
  position: relative;

  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #424242;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #F9B43A;
  }
`;
