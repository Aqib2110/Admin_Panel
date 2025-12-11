"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Search from "./Search";
import {motion} from "framer-motion";

export default function Users() {
  const users = [
    { id: 1, name: "Aqib", email: "aqib@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Ali", email: "ali@example.com", role: "User", status: "Suspended" },
    { id: 3, name: "Hassan", email: "hassan@example.com", role: "Editor", status: "Active" },
  ];

  return (
     <main className="flex-1  p-10 space-y-10 overflow-auto h-full">
      <Search />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-wide mb-6"
      >
        All Users
      </motion.h1>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:0.2 }}
    className="space-y-6">
      <Card className="bg-[#0F0F0F] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white text-xl">Users</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-3 text-gray-400">Name</th>
                  <th className="p-3 text-gray-400">Email</th>
                  <th className="p-3 text-gray-400">Role</th>
                  <th className="p-3 text-gray-400">Status</th>
                  <th className="p-3 text-gray-400">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-gray-900">
                    <td className="p-3 text-gray-200">{u.name}</td>
                    <td className="p-3 text-gray-400">{u.email}</td>
                    <td className="p-3 text-gray-300">{u.role}</td>
                    <td className="p-3">
                      <Badge
                        className={
                          u.status === "Active"
                            ? "bg-green-700 text-white"
                            : "bg-red-700 text-white"
                        }
                      >
                        {u.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-white"
                      >
                        <MoreVertical size={18} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
    </main>
  );
}
