import styled from "styled-components";

const TitleSmall = `
    font-size: 10px;
    color: white;

    &:hover {
        font-size: 100px;
    }
`;

const TitleLarge = `
    font-size: 100px;
    color: black
`;

export const Title = styled.h1.attrs({ className: "titulo" })`
  font-size: 100px;
`;

export const Container = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`;

export const TitleWrap = styled(Container)`
  ${Title} {
    transition: all 2s;

    ${({ small }) => (small ? TitleSmall : TitleLarge)}
  }
`;
