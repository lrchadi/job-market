import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const analyticsData = [
  { month: "Jan", applicants: 120, likes: 300 },
  { month: "Feb", applicants: 200, likes: 450 },
  { month: "Mar", applicants: 150, likes: 390 },
  { month: "Apr", applicants: 220, likes: 500 },
  { month: "May", applicants: 180, likes: 460 },
  { month: "Jun", applicants: 250, likes: 520 },
  { month: "Jul", applicants: 300, likes: 610 },
];

export default function Analytics() {
  return (
    <div className="p-4 md:p-8 bg-white rounded-lg shadow-md w-full max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Job Offers Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 bg-purple-50 rounded shadow text-center">
          <h2 className="text-lg font-semibold">Total Applications</h2>
          <p className="text-3xl font-bold text-purple-600">1,420</p>
        </div>
        <div className="p-4 bg-pink-50 rounded shadow text-center">
          <h2 className="text-lg font-semibold">Top Liked Offers</h2>
          <p className="text-3xl font-bold text-pink-600">850 Likes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Applications Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData}>
              <Line type="monotone" dataKey="applicants" stroke="#8b5cf6" strokeWidth={2} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gray-50 p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Offer Likes Per Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData}>
              <Bar dataKey="likes" fill="#ec4899" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
