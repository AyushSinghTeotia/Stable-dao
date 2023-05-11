import React from "react";
import styled from "styled-components";
import Item from "./Item";

const Participation = () => {
  return (
    <Panel>
      <Title>How to Participate</Title>
      <Content>
        <Item label="Staking" />
        <Space />
        <Item label="Bonding" />
      </Content>
    </Panel>
  );
};

export default Participation;

const Space = styled.div`
  width: 30px;
  @media (max-width: 768px) {
    height: 20px;
  }
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  color: white;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 35px;
`;
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
`;
