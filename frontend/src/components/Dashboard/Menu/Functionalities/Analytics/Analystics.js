import { useState } from "react";
import BarChart from "./BarChart";
import { getData } from "../../Data";

function Analytics() {
  const [getData, setgetData] = useState({
    labels: getData.map((data) => data.business_year),
    datasets: [
      {
        label: "Users Gained",
        data: getData.map((data) => data.total_open_amount),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <div style={{ width: 700 }}>
        <BarChart chartData={getData} />
      </div>
    </div>
  );
}

export default Analytics;