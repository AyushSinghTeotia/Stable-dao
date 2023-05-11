import React from "react";
import styled from "styled-components";

const GradientButton = ({ label, onClick }) => {
  return <Container onClick={onClick}>{label}</Container>;
};
export default GradientButton;

const Container = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
  line-height: 40px;
  height: 40px;
  cursor: pointer;
  background: linear-gradient(
    97.67deg,
    #beffba -14.73%,
    #ffffff 51.18%,
    #c4dff8 117.09%
  );
`;
