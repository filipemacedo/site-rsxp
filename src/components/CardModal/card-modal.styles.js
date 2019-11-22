import styled from "styled-components";
import CardMsg from "../CardMsg";
import CardModal from ".";

const ShowStyle = `
    z-index: 9999;
    transition: opacity 0.4s ease;
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
    z-index: 9999;
    transition: all 0.4s ease;
    opacity: 0;
    animation: hide 400ms forwards;
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
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  transition: all 1s;

  ${({ show }) => (show ? ShowStyle : HideStyle)}
`;

export const Modal = styled(CardMsg).attrs({ className: "selected" })`
  max-width: 75%;
`;
