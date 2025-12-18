"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import Search from "./Search";
import {motion} from "framer-motion";
import { useContext } from "react";
import { MyContext } from "./ContextProvider";

type Role = "admin" | "editor" | "user";

type PermissionKeys = "manageUsers" | "manageContent" | "viewAnalytics";

type RolePermissions = Record<PermissionKeys, boolean>;

interface Permissions {
  admin: RolePermissions;
  editor: RolePermissions;
  user: RolePermissions;
}

export default function RoleNPermissions() {
  const {day} = useContext(MyContext);

  const [permissions, setPermissions] = useState<Permissions>({
    admin: {
      manageUsers: true,
      manageContent: true,
      viewAnalytics: true,
    },
    editor: {
      manageUsers: false,
      manageContent: true,
      viewAnalytics: false,
    },
    user: {
      manageUsers: false,
      manageContent: false,
      viewAnalytics: true,
    },
  });

  const togglePermission = (role: Role, perm: PermissionKeys, val: boolean) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [perm]: val,
      },
    }));
  };

  return (
      <main className="flex-1 p-10 z-10 space-y-10 overflow-auto h-full">
          <Search />
    
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
           className={`${day ? "text-black" : "text-white"} text-5xl font-extrabold tracking-wide mb-4`}
        >
           User Roles & Permissions
          </motion.h1>

         <motion.div
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1,delay:0.2 }}
    className=" space-y-6">
      <Card className={`${day ? "bg-white" : "bg-[#0F0F0F] border-gray-800"} border`}>
        <CardHeader>
          <CardTitle className={`${day ? "text-black" : "text-white"} text-xl`}>Roles & Permissions</CardTitle>
        </CardHeader>
         <div>

        
        <CardContent className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {(
            Object.entries(permissions) as [Role, RolePermissions][]
          ).map(([role, perms]) => (
            <Card key={role} className={`${day ? "bg-white" : "bg-[#181818] border-gray-700"} border`}>
              <CardHeader>
                <CardTitle className={`capitalize ${day ? "text-black" : "text-white"}`}>{role}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {(Object.entries(perms) as [PermissionKeys, boolean][]).map(
                  ([perm, value]) => (
                    <div
                      key={perm}
                      className="flex justify-between items-center py-2 border-b border-gray-800"
                    >
                      <span className={`${day ? "text-gray-500" : "text-gray-300"} capitalize`}>
                        {perm.replace(/([A-Z])/g, " $1")}
                      </span>

                      <Switch
                        checked={value}
                        onCheckedChange={(val) =>
                          togglePermission(role, perm, val)
                        }
                      />
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          ))}
        </CardContent>
         </div>
      </Card>
    </motion.div>
    </main>
  );
}
