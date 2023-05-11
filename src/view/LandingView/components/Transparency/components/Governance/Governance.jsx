import React from "react";
import styled from "styled-components";
import GoButton from "../../../../../../components/GoButton";

const Governance = () => {
  return (
    <Panel>
      <TopPanel>
        <Title>Governance Flows</Title>
      </TopPanel>
      <Content>
        <ContentLabel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
          et ultrices neque ornare aenean euismod. Vitae et leo duis ut diam
          quam nulla porttitor massa. Nec feugiat nisl pretium fusce id.
        </ContentLabel>
        <ButtonContainer>
          <GoButton color="black" />
        </ButtonContainer>
      </Content>
    </Panel>
  );
};

export default Governance;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;
const ContentLabel = styled.div``;
const TopPanel = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  color: black;
  background: linear-gradient(
    97.67deg,
    #beffba -14.73%,
    #ffffff 51.18%,
    #c4dff8 117.09%
  );
  @media (max-width: 768px) {
    flex-direction: column;
  }
  padding: 50px;
  line-height: 30px;
  font-size: 16px;
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
