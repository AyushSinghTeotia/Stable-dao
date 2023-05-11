import {
  Content,
  LeftPanel,
  Description,
  BottomPanel,
  RightPanel,
  LargeLeftTitle,
} from "./styles";

const LaunchPad = () => {
  return (
    <Content>
      <LeftPanel>
        <LargeLeftTitle>TRANSPARENCY</LargeLeftTitle>
        <BottomPanel>
          <RightPanel>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pharetra et ultrices neque ornare aenean euismod. Vitae et leo
              duis ut diam quam nulla porttitor massa. Nec feugiat nisl pretium
              fusce id.
            </Description>
          </RightPanel>
        </BottomPanel>
      </LeftPanel>
    </Content>
  );
};

export default LaunchPad;
