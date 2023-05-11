import React from "react";
import styled from "styled-components";

const Item = ({ label, date, time }) => {
  return (
    <Container>
      <Date>
        {date} - {time} min read
      </Date>
      <Value>{label}</Value>
      <Description>
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit, sed do eiusmod tempor <br />
        incididunt ut labore et dolore magna aliqua. <br />
        Pharetra et ultrices neque ornare aenean euismod. Vitae et leo duis ut
        diam quam <br />
        nulla porttitor massa.
      </Description>
      <ButtonContainer>Read More</ButtonContainer>
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
const Description = styled.div`
  color: #9ea0a4;
  font-size: 12px;
  line-height: 20px;
  margin-top: 20px;
`;
const Value = styled.div`
  color: white;
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 5px;
`;
