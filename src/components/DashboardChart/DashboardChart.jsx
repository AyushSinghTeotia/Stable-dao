import React from "react";
import styled from "styled-components";

import SubgraphImg from "../../images/largeIcon.svg";
import ExpandImg from "../../images/expand.svg";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const TICK_COUNT = 5;
const XAXIS_PADDING_RIGHT = 30;
const XAXIS_TICK_INTERVAL = "preserveStart"; // Ensures that the last x-axis tick (current day) is displayed
const XAXIS_TICK_GAP = 20; // Ensures that x-axis ticks on mobile are dropped
const LINE_STROKE_WIDTH = 3;

const chartData = [
  {
    name: "Page A",
    uv: 590,
    secondV: 490,
    thirdV: 390,
    fourV: 290,
    lv: 967,
    amt: 1400,
    cnt: 490,
    timestamp: 100,
    price: 480,
  },

  {
    name: "Page B",
    uv: 490,
    secondV: 490,
    thirdV: 390,
    fourV: 290,
    lv: 967,
    amt: 1506,
    cnt: 590,
    timestamp: 200,
    price: 600,
  },
  {
    name: "Page B",
    uv: 780,
    secondV: 780,
    thirdV: 390,
    fourV: 290,
    lv: 967,
    amt: 1506,
    cnt: 590,
    timestamp: 300,
    price: 600,
  },
];

const BackingChart = ({ title, value, bottomComponent }) => {
  const onMouseMove = () => {};

  return (
    <Container>
      <TopLine>
        <Title>{title}</Title>
        <Subgraph>
          <ActionIcon src={SubgraphImg} />
        </Subgraph>
        <Expand>
          <ActionIcon src={ExpandImg} />
        </Expand>
      </TopLine>
      {value && <Value>${value}</Value>}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData} onMouseMove={onMouseMove}>
          <CartesianGrid horizontal={false} strokeDasharray="4" />
          <defs>
            <linearGradient id={`color-uv`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={"green"} stopOpacity={1} />
              <stop offset="90%" stopColor={"yellow"} stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="timestamp"
            axisLine={true}
            reversed={true}
            padding={{ right: XAXIS_PADDING_RIGHT }}
            Ticks
            // tick={tickStyle}
            interval={XAXIS_TICK_INTERVAL}
            minTickGap={XAXIS_TICK_GAP}
            tickLine={false}
            // tickFormatter={(str) => getTickFormatter(DataFormat.DateMonth, str)}
          />
          <YAxis
            // tickCount={isExpanded ? TICK_COUNT_EXPANDED : TICK_COUNT}
            tickCount={TICK_COUNT}
            axisLine={false}
            tickLine={false}
            // tick={tickStyle}
            // width={dataFormat == DataFormat.Percentage ? 33 : 55}
            width={33}
            // tickFormatter={(number) => getTickFormatter(dataFormat, number)}
            domain={[0, 1000]}
            dx={3}
            allowDataOverflow={false}
          />
          {/* <Tooltip
        content={
          <CustomTooltip
            dataKeyBulletpointStyles={dataKeyBulletpointStyles}
            dataKeyLabels={dataKeyLabels}
            dataFormat={dataFormat}
            dataKeys={dataKeys}
            displayTotal={displayTooltipTotal}
          />
        }
      /> */}
          <Line dataKey={"uv"} stroke="#2be79a" fillOpacity={1} />
          <Line
            dataKey={"thirdV"}
            stroke="#2be79a"
            //   fill={"yellow"}
            //   fillOpacity={1}
          />
        </LineChart>
      </ResponsiveContainer>
      {bottomComponent}
    </Container>
  );
};

export default BackingChart;

const ActionIcon = styled.img`
  width: 15px;
  height: 15px;
`;
export const Expand = styled.div`
  width: 30px;
  height: 30px;
  background-color: #9ea0a4;
  margin-left: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Subgraph = styled.div`
  width: 30px;
  height: 30px;
  background-color: #6747ed;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Value = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
  color: white;
`;
export const Container = styled.div`
  padding: 20px 20px 0 20px;
`;

export const TopLine = styled.div`
  display: flex;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #2be79a;
  margin-bottom: 10px;
  flex: 1;
`;
