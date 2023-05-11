import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Transparency from "./components/Transparency";
import MainView from "../MainView";
import Landing from "./components/Landing";

const LandingView = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <MainView
      onSelectIndex={(selectedIndex) => {
        setMenuIndex(selectedIndex);
      }}
    >
      {menuIndex === 4 && <Transparency />}
      {menuIndex !== 4 && <Landing />}
    </MainView>
  );
};

export default LandingView;
