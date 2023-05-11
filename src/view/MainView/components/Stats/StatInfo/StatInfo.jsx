import React from "react";
import styled from "styled-components";

const StatInfo = ({ value }) => {
  return (
    <Container>
      <Value>${value.toLocaleString()}</Value>
      <Description>Treasure Balance</Description>
    </Container>
  );
};

export default StatInfo;

const Container = styled.div`
  text-align: left;
  flex: 1;
  margin: 5px;
  @media (max-width: 768px) {
    margin-bottom: 17px;
  }
`;
const Description = styled.div`
  color: #9ea0a4;
  font-size: 12px;
`;
const Value = styled.div`
  color: white;
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 5px;
`;
