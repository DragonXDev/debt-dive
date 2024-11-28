"use client"
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardNav from '@/components/DashboardNav';
import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const generateMonthlyData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map((month) => ({
    name: month,
    owed: Math.floor(Math.random() * 1000),
    owing: Math.floor(Math.random() * 800),
  }));
};

const COLORS = ['#4ADE80', '#F87171', '#60A5FA', '#818CF8'];

export default function Analytics() {
  const [monthlyData] = useState(generateMonthlyData());
  const [distributionData] = useState([
    { name: 'Rent', value: 400 },
    { name: 'Food', value: 300 },
    { name: 'Entertainment', value: 200 },
    { name: 'Other', value: 100 },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      
      <main className="flex-1 ml-64">
        <DashboardNav />
        
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">Analytics</h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Total Debts', value: '$450.00', change: '+12%', positive: true },
                { title: 'Active Debts', value: '8', change: '-2', positive: false },
                { title: 'Avg. Repayment Time', value: '15 days', change: '-2 days', positive: true },
                { title: 'Debt Resolution Rate', value: '85%', change: '+5%', positive: true },
              ].map((stat) => (
                <div key={stat.title} className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                  <h3 className="text-gray-400 text-sm">{stat.title}</h3>
                  <p className="text-2xl font-bold mt-2 text-white">{stat.value}</p>
                  <p className={`text-sm ${stat.positive ? 'text-[#4ADE80]' : 'text-red-400'}`}>
                    {stat.change} from last month
                  </p>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold mb-6 text-white">Debt Trends</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                        labelStyle={{ color: '#9CA3AF' }}
                      />
                      <Line type="monotone" dataKey="owed" stroke="#4ADE80" strokeWidth={2} />
                      <Line type="monotone" dataKey="owing" stroke="#F87171" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold mb-6 text-white">Monthly Overview</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                        labelStyle={{ color: '#9CA3AF' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="owed"
                        stackId="1"
                        stroke="#4ADE80"
                        fill="#4ADE80"
                        fillOpacity={0.2}
                      />
                      <Area
                        type="monotone"
                        dataKey="owing"
                        stackId="1"
                        stroke="#F87171"
                        fill="#F87171"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Detailed Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold mb-6 text-white">Debt Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={distributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {distributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                        labelStyle={{ color: '#9CA3AF' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-2">
                  {distributionData.map((item, index) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className="w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="text-gray-300">{item.name}</span>
                      </div>
                      <span className="text-gray-400">${item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold mb-6 text-white">Top Debtors</h3>
                <div className="space-y-4">
                  {[
                    { name: 'John Doe', amount: 150 },
                    { name: 'Alice Smith', amount: 100 },
                    { name: 'Bob Johnson', amount: 75 },
                  ].map((debtor) => (
                    <div key={debtor.name} className="flex justify-between items-center">
                      <span className="text-gray-300">{debtor.name}</span>
                      <span className="text-[#4ADE80]">${debtor.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold mb-6 text-white">Debt Categories</h3>
                <div className="space-y-4">
                  {[
                    { category: 'Rent', percentage: 40 },
                    { category: 'Food', percentage: 30 },
                    { category: 'Entertainment', percentage: 20 },
                    { category: 'Other', percentage: 10 },
                  ].map((category) => (
                    <div key={category.category}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{category.category}</span>
                        <span className="text-gray-400">{category.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-[#4ADE80] h-2 rounded-full"
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
