"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Search from "./Search";
import {motion} from "framer-motion";
import { useContext } from "react";
import { MyContext } from "./ContextProvider";

export default function Users() {
  const users = [
    { id: 1, name: "Aqib", email: "aqib@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Ali", email: "ali@example.com", role: "User", status: "Suspended" },
    { id: 3, name: "Hassan", email: "hassan@example.com", role: "Editor", status: "Active" },
  ];
const {day} = useContext(MyContext);

  return (
     <main className="flex-1 z-10 p-10 space-y-10 overflow-auto h-full">
      <Search />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      className={`${day ? "text-black" : "text-white"} text-5xl font-extrabold tracking-wide mb-6`}
        >
        All Users
      </motion.h1>
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:0.2 }}
    className="space-y-6">
      <Card className={`${day ? "bg-white" : "bg-[#0F0F0F] border-gray-800" } border`}>
        <CardHeader>
          <CardTitle className={`${day ? "text-black" : "text-white"} text-xl`}>Users</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="p-3 text-gray-500">Name</th>
                  <th className="p-3 text-gray-500">Email</th>
                  <th className="p-3 text-gray-500">Role</th>
                  <th className="p-3 text-gray-500">Status</th>
                  <th className="p-3 text-gray-500">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-gray-900">
                    <td className={`p-3 ${day ? "text-black" : "text-gray-200"}`}>{u.name}</td>
                    <td className={`p-3 ${day ? "text-black" : "text-gray-200"}`}>{u.email}</td>
                    <td className={`p-3 ${day ? "text-black" : "text-gray-200"}`}>{u.role}</td>
                    <td className="p-3">
                      <Badge
                        className={
                          u.status === "Active"
                            ? `bg-green-700 ${day ? "text-black" : "text-white"}`
                            : `bg-red-700 ${day ? "text-black" : "text-white"}`
                        }
                      >
                        {u.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`  ${day ? "text-black" : "text-gray-400"} hover:text-white`}
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
