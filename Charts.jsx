import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#6366F1", "#EC4899", "#10B981"];

export const WorkoutBarChart = ({ data }) => (
  <BarChart width={360} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip
      contentStyle={{
        backgroundColor: "#fef9ff",
        borderRadius: "10px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
      }}
      labelStyle={{ fontWeight: "bold", color: "#7e22ce" }}
    />
    <defs>
      <linearGradient id="workoutGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity={1} />
        <stop offset="100%" stopColor="#9333ea" stopOpacity={1} />
      </linearGradient>
    </defs>
    <Bar dataKey="workouts" fill="url(#workoutGradient)" radius={[8, 8, 0, 0]} />
  </BarChart>
);

export const CaloriesPieChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={50}
          labelLine={false}
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          cornerRadius={8}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#fff" strokeWidth={2} />
          ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-base font-bold fill-indigo-600"
        >
          {total} kcal
        </text>
        <Tooltip
          contentStyle={{
            backgroundColor: "#f3f4f6",
            borderRadius: "10px",
            border: "none",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend verticalAlign="bottom" iconType="circle" height={36} wrapperStyle={{ fontSize: "0.875rem" }} />
      </PieChart>
    </ResponsiveContainer>
  );
};
