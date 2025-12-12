"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, User, ShoppingBag, Settings } from "lucide-react";
import Search from "./Search";

const activityData = [
  {
    icon: <User className="text-blue-400" />,
    title: "New user registered",
    desc: "John Doe has created an account.",
    time: "5 minutes ago",
  },
  {
    icon: <ShoppingBag className="text-green-400" />,
    title: "New order placed",
    desc: "Order #002 has been placed by Jane.",
    time: "20 minutes ago",
  },
  {
    icon: <Settings className="text-yellow-400" />,
    title: "Settings updated",
    desc: "Admin updated system configurations.",
    time: "1 hour ago",
  },
  {
    icon: <Bell className="text-purple-400" />,
    title: "New notification",
    desc: "System alert triggered for activity spikes.",
    time: "2 hours ago",
  },
];

export default function Recent() {
  return (
    <main className="flex-1 p-10 space-y-10 overflow-auto h-full">

      <Search />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-wide mb-8"
      >
        Recent Activity
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Card className="bg-[#0F0F0F] border-gray-900 p-8 rounded-3xl shadow-2xl">
          <CardContent>
            <h3 className="text-2xl mb-6 font-semibold text-gray-200">
              Latest Events
            </h3>

            <div className="space-y-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-800"></div>

              {activityData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-6 relative"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-gray-800 flex items-center justify-center z-10">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">{item.desc}</p>
                    <p className="text-sm text-gray-500 mt-1">{item.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
