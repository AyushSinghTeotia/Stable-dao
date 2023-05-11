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
  flex: 1;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.div`
  color: black;
  font-size: 12px;
`;
const Value = styled.div`
  color: black;
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 5px;
`;
