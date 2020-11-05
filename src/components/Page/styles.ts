import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    overflow-y: scroll;

    @media(min-width:1025px) {
      scroll-snap-type: y mandatory;
    }
`;
