import React from "react";
import styled from "styled-components";

import {
  Area,
  ComposedChart,
  Label,
  Line,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  // Tooltip,
  // TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

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
    uv: 590,
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
    uv: 590,
    secondV: 490,
    thirdV: 390,
    fourV: 290,
    lv: 967,
    amt: 1506,
    cnt: 590,
    timestamp: 300,
    price: 600,
  },
];

const Chart = () => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={chartData}>
          <defs>
            <pattern
              id="diagonalHatch"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <path
                d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                stroke="#8B5559"
                strokeWidth="1"
              />
            </pattern>
            <pattern
              id="diagonalHatchLow"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <path
                d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2"
                stroke="#596D66"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <XAxis
            reversed
            scale="auto"
            dataKey="timestamp"
            interval="preserveStartEnd"
            tick={false}
            hide
          ></XAxis>
          <YAxis
            scale="auto"
            // tickFormatter={(number) => formatCurrency(number, 2)}
            orientation="left"
            type="number"
            domain={[0, "dataMax"]}
            padding={{ top: 20, bottom: 20 }}
            tick={false}
            hide
          />
          {/* <Tooltip content={<TooltipContent />} /> */}
          <Area
            type="monotone"
            dataKey="uv"
            fill={"#ff494a"}
            stroke={"green"}
            strokeDasharray={"6 3"}
            strokeWidth={1}
            fillOpacity={0.4}
          />
          <Area
            type="monotone"
            dataKey="secondV"
            fill="black"
            stroke={"yellow"}
            strokeDasharray={"6 3"}
            strokeWidth={1}
            fillOpacity={1}
          />
          <Area
            type="linear"
            fill={"blue"}
            dataKey="thirdV"
            stroke={"green"}
            dot={false}
            fillOpacity={0.4}
            strokeDasharray="6 3"
            strokeWidth={1}
          />
          <Area
            type="linear"
            fill="url(#diagonalHatchLow)"
            dataKey="fourV"
            stroke={"orange"}
            dot={false}
            strokeDasharray="6 3"
            strokeWidth={1}
            fillOpacity={0.4}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={"white"}
            dot={false}
            strokeWidth={4}
          />
          <ReferenceLine
            y={200}
            stroke={"red"}
            strokeDasharray={"6 3"}
            strokeWidth={0.5}
            className="moving-average"
            label={"Target Price:$11.07"}
            position="start"
          />
          <ReferenceDot
            x={200}
            y={300}
            // shape={CustomReferenceDot}
            fill={"brown"}
          >
            <Label position={"top"}>{"Ask: $12.73"}</Label>
          </ReferenceDot>
          <ReferenceDot
            x={"now"}
            y={15}
            // shape={CustomReferenceDot}
            fill="#F8CC82"
          >
            <Label
              // className={classes.currentPrice}
              // position={isSquishyAsk && askPriceDelta < 0 ? "top" : "bottom"}

              position={"bottom"}
            >
              {`Ask: 2`}
            </Label>
          </ReferenceDot>

          <ReferenceDot
            x={"now"}
            y={5}
            // shape={CustomReferenceDot}
            fill={"green"}
          >
            <Label
              // className={classes.currentPrice}
              position={"bottom"}
            >
              {`Bid: $10`}
            </Label>
          </ReferenceDot>
        </ComposedChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default Chart;

const ChartContainer = styled.div`
  background-color: black;
  padding: 20px;
  border-radius: 15px;
`;
