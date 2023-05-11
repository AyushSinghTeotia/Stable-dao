import React from "react";
import "./App.css";
import LandingView from "./view/LandingView";
import Dashboard from "./view/Dashboard";
import Bond from "./view/Bond";
import Range from "./view/Range";
import Stake from "./view/Stake";
import styled from "styled-components";
import MenuFrame from "./view/MenuFrame";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Container>
          <MenuFrame />
          <Routes>
            <Route path="/" element={<LandingView />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bond" element={<Bond />} />
            <Route path="/range" element={<Range />} />
            <Route path="/stake" element={<Stake />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
`;
