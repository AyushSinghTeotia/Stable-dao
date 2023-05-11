import styled from "styled-components";

export const LabelText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #9ea0a4;
  line-height: 35px;
  text-align: center;
  font-weight: 400;
  width: 500px;
  @media (max-width: 768px) {
    width: auto;
  }
`;
export const Content = styled.div`
  display: flex;
  line-height: 70px;
  font-size: 50px;
  font-weight: 700;
  margin-top: 50px;
  @media (max-width: 920px) {
    flex-direction: column;
  }
  // margin-bottom: 100px;
  background-color: #1e1e1e;
  padding-bottom: 100px;
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LargeLeftTitle = styled.div`
  color: white;
  text-align: left;
  padding-top: 30px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BottomPanel = styled.div`
  display: flex;
  height: auto;

  position: relative;
`;

export const RightPanel = styled.div``;

export const TopPanel = styled.div`
  display: flex;
`;
