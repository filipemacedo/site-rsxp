import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #100f12;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardGrid = styled.div`
  padding: 43px 90px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(560px, 1fr));
  grid-auto-rows: 200px;
`;
