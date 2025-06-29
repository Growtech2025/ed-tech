import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const userData = {
    name: 'Krishna Shukla',
    email: 'krishna@example.com',
    totalSpent: 12500,
    booksPurchased: 12,
    coursesPurchased: 5,
  };

  const activityHistory = [
    { type: 'Book', title: 'JavaScript Mastery', amount: 500, date: '2024-05-10' },
    { type: 'Course', title: 'React Full Stack', amount: 1500, date: '2024-05-15' },
    { type: 'Book', title: 'Data Structures', amount: 400, date: '2024-06-01' },
    { type: 'Video', title: 'System Design 101', amount: 800, date: '2024-06-15' },
    { type: 'Course', title: 'Node.js Deep Dive', amount: 2000, date: '2024-06-20' },
  ];

  const pieData = [
    { name: 'Books', value: userData.booksPurchased },
    { name: 'Courses', value: userData.coursesPurchased },
  ];

  const COLORS = ['#6366F1', '#34D399'];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        📊 Your Dashboard
      </h1>

      {/* User Info */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8 hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">👤 User Info</h2>
        <div className="grid sm:grid-cols-2 gap-4 text-gray-700 text-lg">
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Total Spent:</strong> ₹{userData.totalSpent}</p>
          <p><strong>Books:</strong> {userData.booksPurchased}</p>
          <p><strong>Courses:</strong> {userData.coursesPurchased}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8 hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">📈 Purchase Breakdown</h2>
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      {/* Purchase History */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-8 hover:shadow-lg transition">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">🕘 Spend History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 font-medium">Type</th>
                <th className="p-3 font-medium">Title</th>
                <th className="p-3 font-medium">Amount (₹)</th>
                <th className="p-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {activityHistory.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3">{item.type}</td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">₹{item.amount}</td>
                  <td className="p-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-md transition">
          👤 View Profile
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-md transition">
          ⬇️ Download Report
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
