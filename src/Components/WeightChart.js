import React from 'react'
import {
  AreaChart,
  Area,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function WeightChart({isLoaded, cat, reRender}) {
      const data = [];
        // console.log(reRender)
      if (isLoaded === true) {
        cat.weights.map((entry) => {
          let i=1;
          if (entry.weight) {
            data.push({ date: i, weight: entry.weight });
            i+=1
          }
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
          <Label value="Weight (lbs)" angle={-90} position="top" />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="weight"
            stroke="#8884d8"
            fill="#f06060"
          />
        </AreaChart>
      </div>
    );
}
