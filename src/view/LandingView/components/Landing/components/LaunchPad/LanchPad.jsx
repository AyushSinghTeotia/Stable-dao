import React from "react";
import {
  Content,
  LeftPanel,
  RightImage,
  TopImage,
  BottomImage,
  Description,
  LeftArrow,
  BottomPanel,
  RightPanel,
  ActionPanel,
  ButtonContainer,
  ReadDoc,
  LabelText,
  LogoImage,
  LargeLeftTitle,
  SmallLeftTitle,
  ArrowContainer,
  Spacer,
} from "./styles";

import BottomMark from "../../../../../../images/bottom_mark.svg";
import TopMark from "../../../../../../images/top_mark.svg";
import ReadIcon from "../../../../../../images/read.svg";
import LeftArrowImage from "../../../../../../images/left_arrow.svg";
import GradientButton from "../../../../../../components/GradientButton";

const LaunchPad = () => {
  return (
    <Content>
      <LeftPanel>
        <LargeLeftTitle>
          The Decentralized <br /> Reserve Currency of <br />
          the Future
        </LargeLeftTitle>
        <SmallLeftTitle>
          The Decentralized Reserve Currency of the Future
        </SmallLeftTitle>
        <BottomPanel>
          <ArrowContainer>
            <Spacer />
            <LeftArrow src={LeftArrowImage} />
          </ArrowContainer>
          <RightPanel>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pharetra et ultrices neque ornare aenean euismod. Vitae et leo
              duis ut diam quam nulla porttitor massa. Nec feugiat nisl pretium
              fusce id.
            </Description>
            <ActionPanel>
              <ButtonContainer>
                <GradientButton label="Launch App" />
              </ButtonContainer>
              <ReadDoc>
                <LogoImage src={ReadIcon} />
                <LabelText>Read Docs</LabelText>
              </ReadDoc>
            </ActionPanel>
          </RightPanel>
        </BottomPanel>
      </LeftPanel>
      <RightImage>
        <TopImage src={TopMark} />
        <BottomImage src={BottomMark} />
      </RightImage>
    </Content>
  );
};

export default LaunchPad;
