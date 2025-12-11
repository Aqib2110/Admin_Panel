"use client"

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle,CardHeader } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Search from "./Search";

const metricsData = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 65 },
  { name: "Apr", value: 50 },
  { name: "May", value: 80 },
];

const recentOrders = [
  { id: "#001", customer: "John Doe", product: "Laptop", amount: "$1200", status: "Shipped" },
  { id: "#002", customer: "Jane Smith", product: "Phone", amount: "$800", status: "Pending" },
  { id: "#003", customer: "Alice Brown", product: "Monitor", amount: "$300", status: "Delivered" },
];


const Overview = () => {
     const [metrics, setMetrics] = useState([0, 0, 0, 0]);
    
      useEffect(() => {
        setTimeout(() => {
          setMetrics([
            Math.floor(Math.random() * 900 + 90000),
            Math.floor(Math.random() * 900 + 3000),
            Math.floor(Math.random() * 900 + 2000),
            Math.floor(Math.random() * 900 + 100),
          ]);
        }, 500);
      }, []);

       const cards = [
    { label: "Revenue", value: metrics[0], color: "from-purple-600 to-blue-500" },
    { label: "Orders", value: metrics[1], color: "from-green-400 to-teal-500" },
    { label: "Customers", value: metrics[2], color: "from-pink-500 to-red-500" },
    { label: "Growth", value: metrics[3], color: "from-yellow-400 to-orange-500" },
  ];

  return (
      <main className="flex-1 p-10 space-y-10 overflow-auto h-full">
        
        <Search />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold tracking-wide mb-8"
        >
          Dashboard
        </motion.h1>

        <div className="grid grid-cols-1  md:grid-cols-4 gap-8">
          {cards.map((card) => (

              <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300,duration: 1,delay:0.2 }}>
             <Card key={card.label} className="bg-[#0F0F0F] border border-gray-900  rounded-3xl shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">{card.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold ">
                  <CountUp
                    end={card.label === "Growth" ? card.value/100 : card.value}
                    duration={2}
                    prefix={card.label === "Revenue" ? "$" : ""}
                    suffix={card.label === "Growth" ? "%" : ""}
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
        transition={{duration:1,delay:0.4}}
        className="grid grid-cols-1  md:grid-cols-2 gap-8">
          <Card className="bg-[#0F0F0F]  border-gray-900 p-6 rounded-3xl shadow-2xl">
            <CardContent>
              <CardTitle className=" text-white mb-4 ">Revenue Overview</CardTitle>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={metricsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip contentStyle={{ backgroundColor: "#111217", borderRadius: "8px", borderColor: "#444" }} />
                  <defs>
                    <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0d0d0d" />
                      <stop offset="100%" stopColor="#0d0d0d" />
                    </linearGradient>
                  </defs>
                  <Line type="monotone" dataKey="value" stroke="url(#gradientLine)" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-[#0F0F0F] border-gray-900 p-6 rounded-3xl shadow-2xl">
            <CardContent>
              <CardTitle className=" text-white mb-4 ">Orders</CardTitle>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={metricsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                  <XAxis dataKey="name" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip contentStyle={{ backgroundColor: "#111217", borderRadius: "8px", borderColor: "#444" }} />
                  <Bar dataKey="value" fill="#0d0d0d" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

        </motion.div>

        <motion.div
         initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration:1,delay:0.6}}
        >
        <Card className="bg-[#0F0F0F] border-gray-900 p-6 rounded-3xl shadow-2xl">
          <CardContent>
              <CardTitle className="text-white mb-4 ">Recent Orders</CardTitle>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2 text-black px-4">Order ID</th>
                    <th className="py-2 text-black px-4">Customer</th>
                    <th className="py-2 text-black px-4">Product</th>
                    <th className="py-2 text-black px-4">Amount</th>
                    <th className="py-2 text-black px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                      <td className="py-2 text-white px-4">{order.id}</td>
                      <td className="py-2 text-white px-4">{order.customer}</td>
                      <td className="py-2 text-white px-4">{order.product}</td>
                      <td className="py-2 text-white px-4">{order.amount}</td>
                      <td className="py-2 text-white px-4">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
         </motion.div>
      </main>
  )
}

export default Overview
