import styled from 'styled-components';

interface LinkProps {
  hoverColor: string;
}

export const Container = styled.div`
  background: #3F3D56;
  padding: 30px 20px;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1280px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterSpan = styled.span`
  color: rgba(255, 255, 255, 0.3);
  font-size: 16px;
`;

export const IconButton = styled.a.attrs({
  target: "_blank",
})<LinkProps>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    font-size: 26px;
    color: #fafafa;
    transition: 180ms ease-in;
  }

  :hover{
    > svg {
      color: ${props => props.hoverColor}
    }
  }

  @media(max-width: 480px){
    width: 42px;
    height: 42px;

    > svg {
      font-size: 20px;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  > a + a {
    margin-left: 10px;
  }
`;
