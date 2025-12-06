import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type SalePoint = {
  date: string;
  revenue: number;
};

type Props = {
  sales: SalePoint[];
};

function SalesChart({ sales }: Props) {
  return (
    <div style={{ padding: 16, border: "2px solid #666", borderRadius: 12, }}>
      <h2 style={{ marginBottom: 16, color: "#222", fontWeight: 700 }}>Sales (Last 5 Days)</h2>
      <LineChart width={600} height={300} data={sales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default SalesChart;
