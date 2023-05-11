import React from "react";
import styled from "styled-components";

const GeneralButton = ({
  label,
  onClick,
  bgColor,
  labelColor,
  border,
  icon,
}) => {
  return (
    <Container
      border={border}
      labelColor={labelColor}
      bgColor={bgColor}
      onClick={onClick}
    >
      {icon && icon}
      <Label>{label}</Label>
    </Container>
  );
};
export default GeneralButton;

const Label = styled.div`
  margin-left: 10px;
`;
const Container = styled.div`
  font-size: 14px;
  font-weight: 500;
  // padding: 0 20px;
  line-height: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ labelColor }) => labelColor || "#beffba"};
  // border: 1px solid white;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor || "#beffba"};
  border: ${({ border }) => border || "1px solid transparent"};
  width: 100%;
`;
