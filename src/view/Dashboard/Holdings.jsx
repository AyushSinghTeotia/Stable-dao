import React from "react";
import styled from "styled-components";
import SubgraphImg from "../../images/largeIcon.svg";
import ExpandImg from "../../images/expand.svg";

const Holdings = () => {
  const values = [1, 2, 3, 4, 5];
  return (
    <Container>
      <TopLine>
        <TitleLine>
          <Title>Holdings</Title>
          <Date>2022-11-19</Date>
        </TitleLine>
        <Subgraph>
          <ActionIcon src={SubgraphImg} />
        </Subgraph>
        <Expand>
          <ActionIcon src={ExpandImg} />
        </Expand>
      </TopLine>
      <TableHeader>
        <Asset>Asset</Asset>
        <Category>Category</Category>
        <Blockchain>Blockchain</Blockchain>
        <ValueContainer>Value</ValueContainer>
      </TableHeader>
      {values.map((value) => {
        return (
          <TableRow>
            <Asset>DAI</Asset>
            <Category>Stable</Category>
            <Blockchain>Ethereum</Blockchain>
            <ValueContainer>1069.447</ValueContainer>
          </TableRow>
        );
      })}
    </Container>
  );
};

export default Holdings;

const TableRow = styled.div`
  display: flex;
  color: white;
  font-weight: 400;
  margin-bottom: 7px;
`;
const TableHeader = styled.div`
  display: flex;
  color: white;
  font-weight: 600;
  margin-bottom: 5px;
`;
const Asset = styled.div`
  flex: 2;
`;
const Category = styled.div`
  flex: 1;
`;
const Blockchain = styled.div`
  flex: 1;
`;
const ValueContainer = styled.div`
  flex: 0.5;
  text-align: left;
`;
const TitleLine = styled.div`
  flex: 1;
`;
const Container = styled.div`
  margin-top: 20px;
`;

const Date = styled.div`
  font-size: 22px;
  color: white;
  font-weight: 600;
`;
const ActionIcon = styled.img`
  width: 15px;
  height: 15px;
`;
export const Expand = styled.div`
  width: 30px;
  height: 30px;
  background-color: #9ea0a4;
  margin-left: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Subgraph = styled.div`
  width: 30px;
  height: 30px;
  background-color: #6747ed;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Value = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
  color: white;
`;

export const TopLine = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #2be79a;
  margin-bottom: 10px;
  flex: 1;
`;
