import React from "react";
import styled from "styled-components";
import GoButton from "../../../../../../components/GoButton";

const Item = ({ label, date, time }) => {
  return (
    <Container>
      <Date>
        {date} - {time} min read
      </Date>
      <Value>{label}</Value>
      <ButtonContainer>
        <GoButton />
      </ButtonContainer>
    </Container>
  );
};

export default Item;

const Date = styled.div`
  color: #9ea0a4;
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
  width: 100px;
  margin-top: 30px;
  font-size: 14px;
  color: #beefba;
`;
const Container = styled.div`
  text-align: left;
  flex: 1;
  background-color: #1b1f24;
  padding: 60px 30px;
  border: 1px solid white;
`;
const Value = styled.div`
  color: white;
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 5px;
`;
