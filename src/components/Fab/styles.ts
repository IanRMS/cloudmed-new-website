import styled from 'styled-components';

export const Container = styled.a.attrs({
  target: "_blank",
})`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.3);
  background: #F9B43A;
  position: fixed;
  right: 20px;
  bottom: 20px;

  > svg {
    color: #fafafa;
    font-size: 26px;
  }
`;
