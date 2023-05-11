import React from "react";
import styled from "styled-components";
import StatInfo from "./StatInfo";
const Stats = () => {
  return (
    <Content>
      <Panel>
        <StatInfo value={120000} />
        <StatInfo value={947433} />
        <StatInfo value={357} />
      </Panel>
    </Content>
  );
};

export default Stats;

const Content = styled.div`
  position: relative;
  height: 150px;
  @media (max-width: 768px) {
    height: auto;
  }
`;
const Panel = styled.div`
  background-color: #2be79a;
  display: flex;
  align-items: flex-start;
  width: 50%;
  padding: 30px 30px;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: -25px;
  @media (max-width: 768px) {
    flex-direction: column;
    top: 0px;
    position: relative;
    margin-bottom: 30px;
    width: auto;
    padding: 20px 10px;
  }
`;
