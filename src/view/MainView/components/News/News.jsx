import React from "react";
import styled from "styled-components";
import Item from "./Item";

const News = () => {
  return (
    <Panel>
      <Title>What's New</Title>
      <Content>
        <Item label="Staking" date="June 5, 2020" time={9} />
        <Space />
        <Item label="Staking" date="June 5, 2020" time={9} />
        <Space />
        <Item label="Staking" date="June 5, 2020" time={9} />
      </Content>
    </Panel>
  );
};

export default News;

const Space = styled.div`
  width: 30px;
  @media (max-width: 768px) {
    height: 15px;
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
  color: #beefba;
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
