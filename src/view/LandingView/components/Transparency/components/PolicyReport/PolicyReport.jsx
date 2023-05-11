import React from "react";
import styled from "styled-components";
import Item from "../Item";
import OutlineButton from "../../../../../../components/OutlineButton";

const PolicyReport = () => {
  return (
    <Panel>
      <TopPanel>
        <Title>Policy Reports</Title>
        <OutlineButton label="View All"></OutlineButton>
      </TopPanel>
      <Content>
        <Item label="June 2022 Policy Report" date="June 5, 2020" time={9} />
        <Space />
        <Item label="May 2022 Policy Report" date="June 5, 2020" time={9} />
        <Space />
        <Item label="April 2022 Policy Report" date="June 5, 2020" time={9} />
      </Content>
    </Panel>
  );
};

export default PolicyReport;

const TopPanel = styled.div`
  display: flex;
  width: 100%;
`;
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
  color: #2be79a;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 35px;
  flex: 1;
`;
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
`;
