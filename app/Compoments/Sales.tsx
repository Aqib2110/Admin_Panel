"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import CountUp from "react-countup";
import Search from "./Search";
import { motion } from "framer-motion";

const salesData = [
  { month: "Jan", sales: 4200 },
  { month: "Feb", sales: 5100 },
  { month: "Mar", sales: 4800 },
  { month: "Apr", sales: 6100 },
  { month: "May", sales: 7000 },
  { month: "Jun", sales: 6900 },
];

const productSales = [
  { name: "Headphones", value: 2400 },
  { name: "Keyboards", value: 1800 },
  { name: "Controllers", value: 2800 },
  { name: "Accessories", value: 1600 },
];

export default function Sales() {
  return (
    <main className="flex-1 p-10 space-y-10 overflow-auto h-full">

      <Search />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-wide mb-8"
      >
        Sales Analytics
      </motion.h1>

                   <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{delay:0.2,duration:1}}
                     className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <Card className="bg-[#0F0F0F] border border-gray-800 backdrop-blur-xl">
          <CardHeader className="flex justify-between">
            <CardTitle className="text-white">Total Sales</CardTitle>
            <ArrowUpRight className="text-green-400" />
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            <CountUp end={70200} duration={2} prefix="$" />
            <p className="text-sm text-green-400 mt-1">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-[#0F0F0F] border border-gray-800 backdrop-blur-xl">
          <CardHeader className="flex justify-between">
            <CardTitle className="text-white">Average Order Value</CardTitle>
            <ArrowUpRight className="text-green-400" />
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            <CountUp end={86} duration={2} prefix="$" />
            <p className="text-sm text-green-400 mt-1">+4% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-[#0F0F0F] border border-gray-800 backdrop-blur-xl">
          <CardHeader className="flex justify-between">
            <CardTitle className="text-white">Refunds</CardTitle>
            <ArrowDownRight className="text-red-400" />
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            <CountUp end={320} duration={2} />
            <p className="text-sm text-red-400 mt-1">-3% from last month</p>
          </CardContent>
        </Card>
      </motion.div>

                   <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{delay:0.4,duration:1}}
                     className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <Card className="bg-[#0F0F0F] border border-gray-800 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-white">Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#1c1c1c", border: "none" }} />
                <Line type="monotone" dataKey="sales" stroke="#0d0d0d" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-[#0F0F0F] border border-gray-800 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-white">Product Category Sales</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productSales}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#1c1c1c", border: "none" }} />
                <Bar dataKey="value" fill="#0d0d0d" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>

    </main>
  );
}

