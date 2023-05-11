import React from "react";
import styled from "styled-components";
import SmallLogo from "../../../../images/small_logo.svg";
import TwitterLogo from "../../../../images/twitter.svg";
import Discord from "../../../../images/discord.svg";
import Cat from "../../../../images/cat.svg";
import Instagram from "../../../../images/instagram.svg";
import Telegram from "../../../../images/telegram.svg";
import Bear from "../../../../images/bear.svg";
import Youtube from "../../../../images/youtube.svg";

const Footer = () => {
  return (
    <Container>
      <Icons>
        <Logo>
          <LogoImage src={SmallLogo} alt="Your SVG" />
          <LogoTitle>StableDAO</LogoTitle>
        </Logo>
        <IconList>
          <LogoImage src={TwitterLogo} alt="" />
          <LogoImage src={Discord} alt="" />
          <LogoImage src={Cat} alt="" />
          <LogoImage src={Instagram} alt="" />
        </IconList>
        <IconList>
          <LogoImage src={Telegram} alt="" />
          <LogoImage src={Youtube} alt="" />
          <LogoImage src={Bear} alt="" />
        </IconList>
      </Icons>
      <Col>
        <Title>Products</Title>
        <Content>STABLEDAO PRO</Content>
        <Content>STAKING</Content>
        <Content>BONDS</Content>
      </Col>
      <Col>
        <Title>Learn</Title>
        <Content>DOCUMENTATION</Content>
        <Content>BLOG</Content>
        <Content>MEDIUM</Content>
      </Col>
      <Col>
        <Title>Contact us</Title>
        <Content>JOIN STABLE DISCORD</Content>
        <Content>MEDIA INQUIRIES</Content>
      </Col>
    </Container>
  );
};

export default Footer;

const Title = styled.div`
  font-size: 16px;
  color: #2be79a;
  font-weight: 600;
  margin-bottom: 40px;
`;
const Content = styled.div`
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: 600;
`;
const Col = styled.div`
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Icons = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
const IconList = styled.div`
  margin-top: 20px;
`;
const Container = styled.div`
  display: flex;
  background-color: #1b1f24;
  color: white;
  padding: 40px 40px;
  padding-left: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
export const Logo = styled.div`
  flex: 1;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  align-items: center;
  margin-bottom: 40px;
`;
