import styled from "styled-components";

export const PageContent = styled.div`
  padding: 0 40px;
`;
export const LogoTitle = styled.div`
  font-size: 20px;
  color: white;
`;
export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export const ButtonContainer = styled.div`
  @media (max-width: 920px) {
    margin-top: 20px;
  }
`;
export const Header = styled.div`
  display: flex;
  padding-left: 40px;
  @media (max-width: 920px) {
    flex-direction: column;
    padding-left: 0px;
  }
`;

export const HeaderItem = styled.div`
  font-size: 14px;
  color: #97999d;
  padding: 30px 30px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ selected }) => (selected ? "#2be79a" : "#97999d")};

  @media (max-width: 920px) {
    padding: 7px 0;
    border-bottom: 1px solid white;
    width: 100%;
    text-align: center;
  }
`;

export const StableDao = styled.div``;
export const Container = styled.div`
  background-color: #1e1e1e;
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  @media (max-width: 920px) {
    flex-direction: column;
    padding-right: 0;
  }
`;

export const Logo = styled.div`
  flex: 1;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  @media (max-width: 920px) {
    padding-top: 15px;
    margin-left: 15px;
    margin-bottom: 15px;
  }
`;
