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
`;

export const CloudIcon = styled.img`
width:48px;
left: 90px;
position: absolute;
top: 30px;
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
`;

