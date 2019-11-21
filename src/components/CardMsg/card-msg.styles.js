import styled from "styled-components";

// const TitleSmall = `
//     font-size: 10px;
//     color: white;

//     &:hover {
//         font-size: 100px;
//     }
// `;

// const TitleLarge = `
//     font-size: 100px;
//     color: black
// `;

// export const Title = styled.h1.attrs({ className: "titulo" })`
//   font-size: 100px;
// `;

// export const Container = styled.div`
//   width: 100px;
//   height: 100px;
//   background: red;
// `;

// export const TitleWrap = styled(Container)`
//   ${Title} {
//     transition: all 2s;

//     ${({ small }) => (small ? TitleSmall : TitleLarge)}
//   }
// `;

export const Container = styled.div`
  // position: relative;
  // display: block;
  width: 99%;
  // min-width: 400px;
  // height: max-content;
  // box-sizing: border-box;
  margin: 15px 5px 5px 0px;
`;

export const UserName = styled.h3`
  font-family: "Source Sans Pro";
  font-weight: bold;
  font-size: 32px;
  color: #00f5ff;
  margin: 0;
  padding: 0;
`;

export const Photo = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`;

export const UserPhoto = styled.div`
  position: absolute;
  width: 87px;
  height: 87px;
  background: #3a3840;
  border-radius: 50%;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  left: -43px;
  top: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserMsg = styled.p`
  font-family: "Source Sans Pro";
  font-weight: 300;
  font-size: 27px;
  line-height: 33px;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

const CardSelectedStyle = `
  animation-name: selected;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  box-shadow: 0px 20px 40px rgba(0,0,0,0.6);
}

@keyframes selected {
  0% { 
    position: relative;
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    position: relative;
    opacity: 0; 
    transform: scale(0);
  }
  55% {
    position: fixed;
    opacity: 0; 
    transform: scale(0);
  }
  60% {
    transform: scale(1.6);
    z-index: 999;
    width: 60%;
    height: max-content;
    }
  100% {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 60%;
    height: max-content;
    margin: auto;
    opacity: 1; 
    transform: scale(1.4);
    z-index: 999;
  }
}
`;

const CardStyle = `
  box-shadow: 0px 5px 10px #000;
  position: relative;
`;

export const Card = styled.div`
  border-radius: 20px;
  background: #252429;
  padding: 30px 70px;
  box-sizing: border-box;

  ${({ isSelected }) => (isSelected ? CardSelectedStyle : CardStyle)}
`;
