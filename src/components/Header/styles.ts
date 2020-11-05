import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height:120px;
  display: flex;
  flex-direction: row;
  align-self: center;
  position: fixed;
  justify-content: center;
  top: 0px;
  right:0;
  left:0;
  z-index: 10;

@media(max-width: 768px){
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
`;

export const CloudIcon = styled.img`
width:48px;
left: 90px;
position: absolute;
top: 30px;

@media(max-width: 768px){
  position: relative;
  top: 10px;
  left: 0px;
}
`;

export const Links = styled.ul`
list-style: none;
display: flex;
flex-direction: row;
align-items: center;

li {
    color: #EDF2F7;
    font-size: 18px;
    cursor: pointer;

    & + li {
        margin-left: 40px;
    }

    &:hover {
        transform: scale(1.1);
        transition: 280ms linear;
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

