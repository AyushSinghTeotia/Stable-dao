import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Title } from "../viewStyles";
import StatInfo from "../../components/StatInfo";
import GeneralButton from "../../components/GeneralButton";
import { BiWallet } from "react-icons/bi";
import TokenTable from "../../components/TokenTable";

const Dashboard = ({}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <TopLine>
          <Title
            onClick={() => {
              navigate("/");
            }}
          >
            Bond
          </Title>
          <ButtonContainer>
            <GeneralButton
              bgColor="#32373e"
              labelColor="white"
              label="0x22....ef"
              icon={<BiWallet size={20} color={"white"} />}
            />
          </ButtonContainer>
        </TopLine>
        <Panel>
          <StatInfo value={241924660} label="Treasure Balance" />
          <StatInfo value={120000} label="SDAP Price" />
        </Panel>
        <TokenTable />
      </Content>
    </Container>
  );
};

export default Dashboard;

const ButtonContainer = styled.div`
  width: 140px;
`;
const TopLine = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 60px;
  justify-content: space-between;
`;
const Container = styled.div`
  background-color: #1e1e1e;
  flex: 1;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  margin-top: 50px;
  display: flex;
  width: 90%;
  flex-direction: column;
`;

const Panel = styled.div`
  background: linear-gradient(#1e1e1e, #1e1e1e) padding-box,
    linear-gradient(to right, #beffba, #ffffff) border-box;
  border: 3px solid transparent;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
`;
