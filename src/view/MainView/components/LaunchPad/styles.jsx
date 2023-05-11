import styled from "styled-components";

export const LabelText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

export const Spacer = styled.div`
  flex: 1;
`;
export const LogoImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ReadDoc = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;
export const ActionPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 380px) {
    flex-direction: column;
    margin-top: 20px;
  }
  margin-top: 30px;
  margin-bottom: -33px;
`;
export const ButtonContainer = styled.div`
  padding-left: 15px;
`;
export const Description = styled.div`
  font-size: 16px;
  color: #9ea0a4;
  line-height: 35px;
  text-align: left;
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
`;

export const LeftPanel = styled.div`
  flex: 1;
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
export const SmallLeftTitle = styled.div`
  color: white;
  text-align: left;
  padding-top: 30px;
  margin-bottom: 20px;
  display: none;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 35px;
    display: block;
  }
`;

export const RightImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;
export const BottomImage = styled.img`
  width: 500px;
  margin-top: -70px;
  @media (max-width: 768px) {
    width: 250px;
    margin-top: -35px;
  }
`;
export const TopImage = styled.img`
  width: 400px;
  margin-left: 30px;
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const LeftArrow = styled.img``;
export const BottomPanel = styled.div`
  display: flex;
  height: auto;
  // height: 150px;
  // @media (max-width: 768px) {
  //   height: auto;
  // }
  position: relative;
`;

export const RightPanel = styled.div``;
