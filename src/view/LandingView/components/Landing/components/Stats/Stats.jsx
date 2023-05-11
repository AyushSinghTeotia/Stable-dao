import React from "react";
import styled from "styled-components";
import StatInfo from "./StatInfo";
const Stats = () => {
  return (
    <Panel>
      <Title>Protocol Stats</Title>
      <Content>
        <StatInfo value={241924660} />
        <StatInfo value={120000} />
        <StatInfo value={69359977} />
        <StatInfo value={50} />
      </Content>
    </Panel>
  );
};

export default Stats;

const Content = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  color: #beffba;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Panel = styled.div`
  background-color: #1b1f24;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
`;
