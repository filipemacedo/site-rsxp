import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #100f12;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const CardGrid = styled.div`
  // padding: 43px 90px;
  // box-sizing: border-box;
  // display: grid;
  // grid-gap: 40px 80px;
  // grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  columns: 3 300px;
  columns-gap: 5px;
  width: 80%;
  margin: 0 auto;
`;
