import React from "react";
import "./chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Earnings: 4560,
    Revenue: 10260,
  },
  {
    name: "February",
    Earnings: 6302,
    Revenue: 15702,
  },
  {
    name: "March",
    Earnings: 3846,
    Revenue: 12706,
  },
  {
    name: "April",
    Earnings: 3526,
    Revenue: 11309,
  },
  {
    name: "May",
    Earnings: 7123,
    Revenue: 18234,
  },
  {
    name: "June",
    Earnings: 7805,
    Revenue: 13626,
  },
];

const Chart = ({ aspect, title }) => {
  const graph = (
    <ResponsiveContainer width="100%" aspect={aspect}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="gray" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Revenue"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Earnings" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div className="chartArea">{graph}</div>
    </div>
  );
};

export default Chart;
