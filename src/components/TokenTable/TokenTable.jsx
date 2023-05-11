import React from "react";
import styled from "styled-components";
import GeneralButton from "../GeneralButton/GenerallButton";
import ActiveRangeIcon from "../../images/menuIcons/dai_icon.svg";
const dummyData = [1, 2, 3];
const TokenTable = ({}) => {
  return (
    <TableContent>
      <Header>
        <Token>
          <FieldName>Token</FieldName>
        </Token>
        <Price>
          <FieldName>Price</FieldName>
        </Price>
        <Discount>
          <FieldName>Discount</FieldName>
        </Discount>
        <MaxPayout>
          <FieldName>Max Payout</FieldName>
        </MaxPayout>
        <Duration>
          <FieldName>Duration</FieldName>
        </Duration>
        <Button>{/* <FieldName>Duration</FieldName> */}</Button>
      </Header>
      {dummyData.map((item, index) => {
        return (
          <TableRow>
            <Token>
              <TokenName>
                <Icon src={ActiveRangeIcon} />
                <TokenTextContainer>
                  <TokenTitle>DAI</TokenTitle>
                  <SubTitle>Get Asset</SubTitle>
                </TokenTextContainer>
              </TokenName>
            </Token>
            <Price>
              <FieldName>0.00 DAI</FieldName>
            </Price>
            <Discount>
              <DiscountContent>99.9%</DiscountContent>
            </Discount>
            <MaxPayout>
              <MaxPayoutContent>
                <PayoutAmount>13KK SDAO</PayoutAmount>
              </MaxPayoutContent>
            </MaxPayout>
            <Duration>
              <FieldName>1min</FieldName>
            </Duration>
            <Button>
              <GeneralButton
                bgColor="#32373e"
                labelColor="white"
                label="Bond for SDAO"
                border="1px solid white"
              />
            </Button>
          </TableRow>
        );
      })}
    </TableContent>
  );
};

export default TokenTable;

const SubTitle = styled.div`
  font-size: 12px;
  color: white;
`;
const TokenTitle = styled.div`
  font-size: 16px;
  color: white;
  font-weight: 500;
  margin-bottom: 3px;
`;
const TokenTextContainer = styled.div`
  // display: flex;
  margin-left: 7px;
`;
const TokenName = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
const MaxPayoutContent = styled.div``;
const PayoutAmount = styled.div`
  font-size: 14px;
  color: white;
`;
const DiscountContent = styled.div`
  font-size: 12px;
  height: 28px;
  border-radius: 14px;
  background-color: #2be79a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
`;
const Button = styled.div`
  flex: 1;
`;
const Token = styled.div`
  flex: 1;
`;
const Price = styled.div`
  flex: 1;
`;
const Discount = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
`;
const MaxPayout = styled.div`
  flex: 1;
`;
const Duration = styled.div`
  flex: 1;
`;
const FieldName = styled.div`
  flex: 1;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

const Header = styled.div`
  display: flex;
  padding: 10px 0;
  margin-bottom: 15px;
`;
const TableRow = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
`;
const TableContent = styled.div`
  background-color: #32373e;
  // width: 100%;
  border-radius: 5px;
  margin-top: 50px;
  padding: 20px 20px;
`;
