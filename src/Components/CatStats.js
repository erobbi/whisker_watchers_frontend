import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  AreaChart,
  Area,
  Label,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import WeightForm from "./WeightForm";
import WeightRender from "./WeightRender";

export default function CatStats() {
  const { id } = useParams();
  const [cat, setCat] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const data = [];
  if (isLoaded === true) {
    cat.weights.map((entry) => {
      if (entry.weight) {
        data.push({ date: entry.created_at, weight: entry.weight });
      }
    });
  }

  useEffect(() => {
    fetch(`/cats/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((cat) => {
          setCat(cat);
          setIsLoaded(true);
          history.push(`/cats/${id}`);
        });
      }
    });
  }, [id]);
  return (
    <div className="catstats">
      <h2>Cat Stats for {cat.name}</h2>
      <h3>Current weight: {cat.current_weight} lbs</h3>

      <div>
        <AreaChart
          width={500}
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
          <XAxis dataKey="date" />
          <YAxis>
            <Label value="Weight (lbs)" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="weight"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
      {/* <div className='fill'></div> */}
      <div >
        <WeightRender cat_id={id} />
        <br />
        <br />
        <WeightForm />
      </div>
    </div>
  );
}
