import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const GoButton = ({ color }) => {
  return (
    <Container color={color}>
      <AiOutlineArrowRight size={20} color={color || "white"} />
    </Container>
  );
};
export default GoButton;

const Container = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
  line-height: 40px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ color }) => color || "white"};
`;
