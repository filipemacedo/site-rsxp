import styled from "styled-components";

export const Container = styled.div``;

export const Rocket = styled.div`
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  width: 90px;
  height: 90px;
  z-index: 999;
  background-image: url("./Assets/rocket.svg");
  background-size: contain;
  background-repeat: no-repeat;
  animation: rocket 4s forwards;
  @keyframes rocket {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(1200px, -1200px);
    }
  }
`;
