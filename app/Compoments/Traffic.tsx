"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";
import CountUp from "react-countup";
import Search from "./Search";

const trafficSummary = [
  { label: "Total Visitors", value: 1254300 },
  { label: "Unique Visitors", value: 884200 },
  { label: "Page Views", value: 2190000 },
  { label: "Bounce Rate", value: 38, isPercentage: true },
];

const trafficTrend = [
  { name: "Jan", visits: 120000 },
  { name: "Feb", visits: 135000 },
  { name: "Mar", visits: 150000 },
  { name: "Apr", visits: 142000 },
  { name: "May", visits: 160000 },
  { name: "Jun", visits: 178000 },
];

const sources = [
  { name: "Organic", value: 55 },
  { name: "Direct", value: 25 },
  { name: "Social", value: 12 },
  { name: "Referral", value: 8 },
];

const topCountries = [
  { country: "United States", visitors: "480,000" },
  { country: "India", visitors: "350,000" },
  { country: "United Kingdom", visitors: "180,000" },
  { country: "Canada", visitors: "90,000" },
  { country: "Australia", visitors: "78,000" },
];

const Traffic = () => {
  return (
    <main className="flex-1 p-10 space-y-10 overflow-auto h-full">
      <Search />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-wide mb-4"
      >
        Traffic Analytics
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {trafficSummary.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250,duration:1,delay:0.2 }}
          >
            <Card className="bg-[#0F0F0F] border border-gray-900  rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">{item.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold ">
                  <CountUp
                    end={item.value}
                    duration={2}
                    separator=","
                    suffix={item.isPercentage ? "%" : ""}
                  />
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:0.4 }}
      >
        <Card className="bg-[#0F0F0F] border-gray-900  rounded-3xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white">Monthly Traffic Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={trafficTrend}>
                <defs>
                  <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip contentStyle={{ backgroundColor: "#111217", borderRadius: "8px" }} />
                <Area
                  type="monotone"
                  dataKey="visits"
                  stroke="#6366F1"
                  strokeWidth={4}
                  fill="url(#trafficGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <Card className="bg-[#0F0F0F] border-gray-900  rounded-3xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white">Traffic Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sources}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip contentStyle={{ backgroundColor: "#111217", borderRadius: "8px" }} />
                <Bar dataKey="value" fill="#0d0d0d" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#0F0F0F] border-gray-900  rounded-3xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white">Top Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 px-4 text-gray-400">Country</th>
                  <th className="py-2 px-4 text-gray-400">Visitors</th>
                </tr>
              </thead>
              <tbody>
                {topCountries.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                    <td className="py-2 px-4 text-white">{item.country}</td>
                    <td className="py-2 px-4 text-white">{item.visitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
};

export default Traffic;
