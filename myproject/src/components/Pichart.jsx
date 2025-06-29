import React from "react";
import {PieChart,Pie,Cell,Tooltip,Legend, ResponsiveContainer,} from "recharts";
import "../components/Pichart.css"

const Priceperesale = 100;

const data = [
  { name: "NodeJS", sales: 5, amount: 5 * Priceperesale },
  { name: "ReactJS", sales: 7, amount: 7 * Priceperesale },
  { name: "MongoDB", sales: 6, amount: 6 * Priceperesale },
  { name: "ExpressJS", sales: 4, amount: 4* Priceperesale },


];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const renderCustomLabel = ({ name, sales }) =>
 ` ${name} (${sales} sales - ₹${sales * Priceperesale})`;

function Pichart() {
  const totalSales = data.reduce((acc, curr) => acc + curr.sales, 0);
  const totalAmount = totalSales * Priceperesale;

  const topCourse = data.reduce((max, course) =>
    course.sales > max.sales ? course : max
  );

  const topCourses = [...data]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 3);

  return (
    <div className="pichart-container">
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={140}
              fill="#8884d8"
              labelLine={false}
              label={renderCustomLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name, props) => [
               ` ₹${value},${props.payload.name} (${props.payload.sales} sales),`
              ]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="summary-wrapper">
        <h3>Course-wise Sales Summary</h3>
        {data.map((course, index) => (
          <div key={index} className="course-card">
            <strong>{course.name}</strong>
            <br />
            Sales: {course.sales}
            <br />
            Amount: ₹{course.amount}
          </div>
        ))}

        <div className="top-course">
          <strong>🔥 Top Selling Course:</strong>
          <br />
          {topCourse.name} with {topCourse.sales} sales
          <br />
          Revenue: ₹{topCourse.amount}
        </div>
        <p className="total-summary">
          Total Sales: {totalSales} <br />
          Total Revenue: ₹{totalAmount}
        </p>
      </div>
    </div>
  );
}

export default Pichart;