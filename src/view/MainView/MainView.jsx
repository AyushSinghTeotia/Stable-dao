import React, { useState } from "react";
import {
  Container,
  Header,
  HeaderItem,
  RightPart,
  Logo,
  LogoImage,
  LogoTitle,
} from "./styles";
import SmallLogo from "../../images/small_logo.svg";
import GradientButton from "../../components/GradientButton";
import Footer from "./components/Footer";
import { ButtonContainer } from "./styles";
import { useNavigate } from "react-router-dom";

const menus = [
  { label: "Stake" },
  { label: "Bond" },
  { label: "StableDAO Pro" },
  { label: "Blog" },
  { label: "Transparency" },
  { label: "Governance" },
];
const MainView = ({ children, onSelectIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <Logo>
          <LogoImage src={SmallLogo} alt="Your SVG" />
          <LogoTitle>StableDAO</LogoTitle>
        </Logo>
        <RightPart>
          {menus.map((menu, index) => {
            return (
              <HeaderItem
                selected={index === selectedIndex}
                onClick={() => {
                  setSelectedIndex(index);
                  if (onSelectIndex) {
                    onSelectIndex(index);
                  }
                }}
                key={menu.label}
              >
                {menu.label}
              </HeaderItem>
            );
          })}
          <ButtonContainer>
            <GradientButton
              label={"Launch App"}
              onClick={() => {
                navigate("/dashboard");
              }}
            />
          </ButtonContainer>
        </RightPart>
      </Header>
      {children}
      <Footer />
    </Container>
  );
};

export default MainView;
