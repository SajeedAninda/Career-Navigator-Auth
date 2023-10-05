import React from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

function Statistics() {
  // Sample data for the charts (replace with actual data)
  const jobData = [
    { month: 'Jan', jobCount: 100 },
    { month: 'Feb', jobCount: 120 },
    { month: 'Mar', jobCount: 150 },
    { month: 'Apr', jobCount: 130 },
    { month: 'May', jobCount: 160 },
    { month: 'Jun', jobCount: 140 },
    // Add more data points as needed
  ];

  const salaryData = [
    { jobTitle: 'Developer', averageSalary: 80000 },
    { jobTitle: 'Designer', averageSalary: 70000 },
    { jobTitle: 'Manager', averageSalary: 90000 },
    { jobTitle: 'Marketing', averageSalary: 75000 },
    { jobTitle: 'Sales', averageSalary: 85000 },
    // Add more data points as needed
  ];

  const unemploymentData = [
    { ageGroup: '< 25', unemploymentRate: 10 },
    { ageGroup: '25-34', unemploymentRate: 7 },
    { ageGroup: '35-44', unemploymentRate: 5 },
    { ageGroup: '45-54', unemploymentRate: 4 },
    { ageGroup: '55+', unemploymentRate: 3 },
    // Add more data points as needed
  ];

  const pieChartData = [
    { name: 'Employed', value: 85 },
    { name: 'Unemployed', value: 15 },
  ];

  // Colors for the pie chart segments
  const COLORS = ['#82ca9d', '#205F3C'];

  return (
    <div className="statistics-page px-8 pb-8">
      <h1 className="text-4xl text-center font-semibold mb-12">Job Statistics</h1>

      {/* Line Chart */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Job Trends Over Months</h2>
        <p className="mb-2">This line chart illustrates the number of job postings over several months.</p>
        <LineChart width={1000} height={400} data={jobData}>
          <Line type="monotone" dataKey="jobCount" stroke="#82ca9d" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>

      {/* Area Chart */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Salary Distribution</h2>
        <p className="mb-2">This area chart shows the distribution of average salaries for different job titles.</p>
        <AreaChart width={1000} height={400} data={salaryData}>
          <Area type="monotone" dataKey="averageSalary" stroke="#82ca9d" fill="#82ca9d" />
          <XAxis dataKey="jobTitle" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>

      {/* Bar Chart */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Unemployment by Age Group</h2>
        <p className="mb-2">This bar chart displays the unemployment rates across different age groups.</p>
        <BarChart width={1000} height={400} data={unemploymentData}>
          <Bar dataKey="unemploymentRate" fill="#82ca9d" />
          <XAxis dataKey="ageGroup" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </div>

      {/* Pie Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Employment Status</h2>
        <p className="mb-2">This pie chart illustrates the distribution of employment and unemployment status.</p>
        <div className='flex items-center justify-center'>
          <PieChart width={400} height={400}>
            <Pie dataKey="value" data={pieChartData} cx={200} cy={150} outerRadius={80} fill="#82ca9d">
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
