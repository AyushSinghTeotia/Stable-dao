import React from "react";
import styled from "styled-components";

const StatInfo = ({ value, label }) => {
  return (
    <Container>
      <Description>{label}</Description>
      <Value>${value.toLocaleString()}</Value>
    </Container>
  );
};

export default StatInfo;

const Container = styled.div`
  text-align: left;
  // flex: 1;
  margin: 5px;
  @media (max-width: 768px) {
    margin-bottom: 17px;
  }
`;
const Description = styled.div`
  color: #2be79a;
  font-size: 16px;
`;
const Value = styled.div`
  color: white;
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 15px;
`;
