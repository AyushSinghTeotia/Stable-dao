import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const RelatedLinks = () => {
  return (
    <Panel>
      <Title>Related Links</Title>
      <Content>
        <Item>
          <Name>Bonding</Name>
          <AiOutlineArrowRight size={20} color="#1b1f24" />
        </Item>
        <Space />
        <Item>
          <Name>Docs</Name>
          <AiOutlineArrowRight size={20} color="#1b1f24" />
        </Item>
        <Space />
        <Item>
          <Name>Forum</Name>
          <AiOutlineArrowRight size={20} color="#1b1f24" />
        </Item>
        <Space />
        <Item>
          <Name>Blogs</Name>
          <AiOutlineArrowRight size={20} color="#1b1f24" />
        </Item>
      </Content>
    </Panel>
  );
};

export default RelatedLinks;

const Name = styled.div`
  color: #1b1f24;
  font-size: 16px;
  margin-right: 35px;
  font-weight: 700;
  flex: 1;
`;
const Item = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid #1b1f24;
  padding: 15px 20px;
`;
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
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  color: #2be79a;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
  flex: 1;
  color: #005432;
`;
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
  background-color: #2be79a;
  padding: 40px;
`;
