import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  Label,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from "recharts";

export default function WeightChart({ isLoaded, cat, reRender }) {
  const data = [];
  const goalData = [];
  let refLineX = 1000;
  // console.log(reRender)
  console.log(cat.weights)
  if (isLoaded === true && cat.weights.length > 0) {
    cat.weights.map((entry) => {
      if (entry.weight) {
        data.push({
          date: cat.weights.indexOf(entry),
          historicalWeight: entry.weight,
        });
      }
    });
    let popped = data.pop()
    refLineX= popped.date;
    data.push({
      date: popped.date,
      historicalWeight: popped.historicalWeight,
      goalWeight: popped.historicalWeight,
    });
    data.push({
      date: data[data.length - 1].date + 1,
      goalWeight: cat.goalWeight,
    });
  }

  return (
    <div>
      <AreaChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis interval={100}>
          <Label value="Time" angle={0} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value="Weight (lbs)" angle={-90} position="insideLeft" />
        </YAxis>
        <Label value="Weight (lbs)" angle={-90} position="top" height={40} />
        <Legend verticalAlign="bottom" height={36} />

        <Tooltip />
        <Area
          // type="monotone"
          dataKey="historicalWeight"
          stroke="#afafaf"
          fill="#e7e7e7"
          strokeWidth="2"
        />
        <Area
          type="monotone"
          dataKey="goalWeight"
          stroke="#f08f10"
          fill="#f3b562"
          strokeWidth="2"
          label={{ fill: "black", fontSize: 20 }}
        />
        <ReferenceLine x={refLineX} stroke="black" label="Future" />
      </AreaChart>
    </div>
  );
}
