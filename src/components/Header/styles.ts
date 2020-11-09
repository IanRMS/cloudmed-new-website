import styled from 'styled-components';

interface Props {
  isScrolled: boolean;
}

export const Container = styled.div<Props>`
  max-width:100vw;
  height:${props => props.isScrolled ? '70px' : '120px'};
  display: flex;
  flex-direction: row;
  align-self: center;
  position: ${props => props.isScrolled ? 'fixed' : 'absolute'};
  justify-content: center;
  top: 0px;
  right:0;
  left:0;
  z-index: 10;
  background: ${props => props.isScrolled ? '#fafafa' : 'transparent'};
  color: ${props => props.isScrolled ? '#212121' : '#EDF2F7;'};
  transition: 280ms ease-in;

@media(max-width: 768px){
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
`;

export const CloudIcon = styled.img<Props>`
width:48px;
left: 90px;
position: absolute;
top: ${props => props.isScrolled ? '6px' : '30px'};
transition: 280ms ease-in;

@media(max-width: 768px){
  position: relative;
  top: 0px;
  left: 0px;
}
`;

export const Links = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
align-items: center;

> .disabled {
  color: #e0e0e0;
  font-weight: bold;
  cursor: not-allowed;
}

li {
    font-size: 18px;
    user-select: none;
    cursor: pointer;

    & + li {
        margin-left: 40px;
    }

    &:hover {
        transform: scale(1.1);
        transition: 280ms linear;
        font-weight: bold;
    }
}

@media(max-width: 768px) {
  display: none;
}
`;

export const MenuButton = styled.div`

  @media(min-width:769px){
    display: none;
  }
`;

