import styled from "styled-components";
import Masonry from "react-masonry-css";
import { Container as CardMsgContainer } from "../../components/CardMsg/card-msg.styles";

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
  breakpointCols: 3,
  columnClassName: "columns"
})`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  width: 80%;

  .columns {
    padding: 35px;
  }

  ${CardMsgContainer} {
    padding-left: 100px; /* gutter size */
    background-clip: padding-box;
  }
`;
