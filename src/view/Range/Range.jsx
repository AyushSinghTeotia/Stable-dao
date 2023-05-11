import React from "react";
import styled from "styled-components";
import { Title } from "../viewStyles";
import GeneralButton from "../../components/GeneralButton";
import { BiWallet } from "react-icons/bi";
import { IoSwapVertical } from "react-icons/io5";
import SmallLogo from "../../images/small_logo.svg";
import OutlineButton from "../../components/OutlineButton";
import Chart from "./Chart";

const Range = ({}) => {
  return (
    <Container>
      <Content>
        <TopLine>
          <Title>Range</Title>
          <StakeButtonContainer>
            <GeneralButton
              bgColor="#32373e"
              labelColor="white"
              label="0x22....ef"
              icon={<BiWallet size={20} color={"white"} />}
            />
          </StakeButtonContainer>
        </TopLine>
        <DataContent>
          <ChartContent>
            <Chart />
          </ChartContent>
          <Spacer />
          <ExchangePanel>
            <ExchangePanelTop>
              <TokenTitle>
                <TokenIcon src={SmallLogo} />
                <TokenName>SDAO</TokenName>
              </TokenTitle>
              <MaxButtonContainer>
                <OutlineButton label="Max" labelColor="white" />
              </MaxButtonContainer>
              <BalanceLine>
                <BalanceText>00</BalanceText>
                <BalanceAmount>Balance 8.345 gSDAO</BalanceAmount>
              </BalanceLine>
              <ExchangeButton>
                <IoSwapVertical size={24} color={"black"} />
              </ExchangeButton>
            </ExchangePanelTop>
            <ExchangePanelLeft>
              <TokenTitle>
                <TokenIcon src={SmallLogo} />
                <TokenName>SDAO</TokenName>
              </TokenTitle>
              <BalanceLine>
                <BalanceText>00</BalanceText>
                <BalanceAmount>Balance 8.345 gSDAO</BalanceAmount>
              </BalanceLine>
            </ExchangePanelLeft>
            <ResultLine>
              <ResultText>Unstaked Balance</ResultText>
              <ResultAmount>159.429 SDAO</ResultAmount>
            </ResultLine>
            <ResultLine>
              <ResultText>Total Staked Balance</ResultText>
              <ResultAmount>4323 SDAO</ResultAmount>
            </ResultLine>
            <ResultLine>
              <ResultText>Your Next Rebase</ResultText>
              <ResultAmount>23.429 SDAO</ResultAmount>
            </ResultLine>
            <ApproveButtonContainer>
              <GeneralButton
                bgColor="#2be79a"
                labelColor="black"
                label="Swap DAI for SDAO"
              />
            </ApproveButtonContainer>
          </ExchangePanel>
        </DataContent>
      </Content>
    </Container>
  );
};

export default Range;

const Spacer = styled.div`
  width: 80px;
`;
const ChartContent = styled.div`
  flex: 1;
  padding-top: 10px;
`;
const DataContent = styled.div`
  display: flex;
`;
const ResultLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;
const ResultText = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 500;
`;
const ResultAmount = styled.div`
  color: white;
  font-size: 16px;
`;
const StakeButtonContainer = styled.div`
  width: 140px;
`;
const ExchangeButton = styled.div`
  background-color: #2be79a;
  width: 50px;
  height: 50px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -30px;
  left: 170px;
`;
const ApproveButtonContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
`;
const ExchangePanel = styled.div`
  width: 400px;
`;
const MaxButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
`;
const BalanceText = styled.div`
  font-size: 22px;
  color: #9ea0a4;
  font-weight: 600;
`;
const BalanceAmount = styled.div`
  color: #9ea0a4;
  font-size: 14px;
`;
const BalanceLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;
const ExchangePanelTop = styled.div`
  background-color: #32373e;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  padding: 20px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  position: relative;
`;
const ExchangePanelLeft = styled.div`
  background-color: #32373e;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  padding: 20px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;
const TokenTitle = styled.div`
  display: flex;
  background-color: #282d34;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  padding: 0 10px;
`;
const TokenName = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-left: 5px;
`;
const TokenIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const ButtonContainer = styled.div`
  // margin: 0 5px;
  width: 100px;
  margin-right: 7px;
`;
const ButtonArray = styled.div`
  display: flex;
  margin-top: 30px;
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
  padding-bottom: 100px;
`;
const Content = styled.div`
  margin-top: 50px;
  display: flex;
  width: 90%;
  flex-direction: column;
`;
