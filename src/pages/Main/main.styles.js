import styled from "styled-components";
import Masonry from "react-masonry-css";
import { Container as CardMsgContainer } from "../../components/CardMsg/card-msg.styles";

const breakpointColumnsObj = {
  default: 3,
  1300: 2,
  1000: 1,
  500: 1
};

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #100f12;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const CardGrid = styled(Masonry).attrs({
  breakpointCols: breakpointColumnsObj,
  columnClassName: "columns"
})`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 35px;
  box-sizing: border-box;

  .columns {
  }

  ${CardMsgContainer} {
    padding: 0 40px; /* gutter size */
    box-sizing: border-box;
    background-clip: padding-box;
  }
`;
