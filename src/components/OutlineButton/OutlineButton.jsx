import React from "react";
import styled from "styled-components";

const OutlineButton = ({ label, labelColor }) => {
  return <Container labelColor={labelColor}>{label}</Container>;
};
export default OutlineButton;

const Container = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
  line-height: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ labelColor }) => labelColor || "#beffba"};
  border: 1px solid white;
`;
