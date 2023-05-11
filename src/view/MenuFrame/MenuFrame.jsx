import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import SmallLogo from "../../images/small_logo.svg";
import DashIcon from "../../images/menuIcons/dash.svg";
import DisableDashIcon from "../../images/menuIcons/disable_dash.svg";
import DisableBondIcon from "../../images/menuIcons/bond.svg";
import ActiveBondIcon from "../../images/menuIcons/active_bond.svg";
import DisableRangeIcon from "../../images/menuIcons/range.svg";
import ActiveRangeIcon from "../../images/menuIcons/active_range.svg";
import DisableStakeIcon from "../../images/menuIcons/stake.svg";
import ActiveStakeIcon from "../../images/menuIcons/active_stake.svg";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: DashIcon,
    disableIcon: DisableDashIcon,
  },
  {
    label: "Bond",
    path: "/bond",
    icon: ActiveBondIcon,
    disableIcon: DisableBondIcon,
  },
  {
    label: "Range",
    path: "/range",
    icon: ActiveRangeIcon,
    disableIcon: DisableRangeIcon,
  },
  {
    label: "Stake",
    path: "/stake",
    icon: ActiveStakeIcon,
    disableIcon: DisableStakeIcon,
  },
];
const MenuFrame = ({}) => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();

  return (
    <Menu isDashboard={location.pathname === "/"}>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <LogoImage src={SmallLogo} alt="Your SVG" />
        <LogoTitle>StableDAO</LogoTitle>
      </Logo>
      {menuItems.map((item, index) => {
        return (
          <MenuItem
            onClick={() => {
              navigate(item.path);
              setSelectedIndex(index);
            }}
          >
            {selectedIndex === index ? (
              <Icon src={item.icon} />
            ) : (
              <Icon src={item.disableIcon} />
            )}

            <ItemText>{item.label}</ItemText>
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default MenuFrame;

const ItemText = styled.div`
  font-size: 16px;
  color: white;
  margin-left: 15px;
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
const MenuItem = styled.div`
  display: flex;
  padding: 15px 10px;
  cursor: pointer;
`;
const Menu = styled.div`
  width: 300px;
  background-color: #121418;
  padding-top: 30px;
  padding-left: 20px;
  display: ${({ isDashboard }) => (isDashboard ? "none" : "block")};
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
  cursor: pointer;
`;
