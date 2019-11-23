import styled from "styled-components";
import CardMsg from "../CardMsg";

const ShowStyle = `
    z-index: 999999;
    transition: opacity 0.4s ease;
    top: 0;
    opacity: 1;
    .selected {
        animation-name: selected;
        animation-duration: 400ms;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }

    @keyframes selected {
        0% {
            transform: translateY(-100px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

const HideStyle = `
    z-index: 999999;
    transition: all 250ms ease;
    opacity: 0;
    top: 0;
    animation: hide 250ms forwards;
    .selected {
        animation-name: unselected;
        animation-duration: 400ms;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.27, 0.55, 0.68, -2.55);
    }

    @keyframes unselected {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px);
            opacity: 0;
        }
    }
    
    @keyframes hide {
        0% {
            left: 0;
        }
        99% {
            left: 0;
        }
        100% {
            left: -3000px;
        }
    }
`;

export const Container = styled.div`
  z-index: 999999;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  transition: all 1s;

  ${({ isOpened }) => (isOpened ? ShowStyle : HideStyle)}
`;

export const Modal = styled(CardMsg).attrs({ className: "selected" })`
  max-width: 75%;
`;
