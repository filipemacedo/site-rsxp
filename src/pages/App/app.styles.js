import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #100f12;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const CardGrid = styled.div`
  padding: 43px 90px;
  box-sizing: border-box;
  display: grid;
  grid-gap: 40px 80px;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
`;
