import styled from "styled-components";

export const Container = styled.div`
  // position: relative;
  // display: block;
  width: 99%;
  // min-width: 400px;
  // height: max-content;
  // box-sizing: border-box;
  margin: 35px 5px 5px 0px;
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

export const UserMedia = styled.img`
  margin-top: 15px;
  border-radius: 12px;
  max-height: 350px;
  max-width: 100%;
`

const CardSelectedStyle = ``;

const CardStyle = `
  box-shadow: 0px 5px 10px #000;
  position: relative;
`;

export const Card = styled.div`
  border-radius: 20px;
  position: relative;
  background: #252429;
  padding: 30px 70px;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 1);

  /* ${({ isSelected }) => (isSelected ? CardSelectedStyle : CardStyle)} */
`;