import styled from 'styled-components';

export const Title = styled.h1.attrs({className: "titulo"})`
    font-size: 100px;
`;

export const Container = styled.div`
    width: 100px;
    height: 100px;
    background: red;
`;

export const TitleWrap = styled(Container)`
    ${Title} {
        font-size: ${({small}) => small ? "10px" : "100px"};
    }
`;