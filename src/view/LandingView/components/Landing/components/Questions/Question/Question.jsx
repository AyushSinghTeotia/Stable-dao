import React from "react";
import styled from "styled-components";

const Question = ({ question, answer, open, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Value>{question}</Value>
      {open && <Description>{answer}</Description>}
    </Container>
  );
};

export default Question;

const Container = styled.div`
  text-align: left;
  flex: 1;
  margin: 5px;
  margin-bottom: 25px;
  border-image: linear-gradient(to right, #beffba, #ffffff) 1;
  border-bottom: 1px solid;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 0 0 20px 0;
  }
  cursor: pointer;
`;
const Description = styled.div`
  color: #9ea0a4;
  font-size: 12px;
`;
const Value = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;
