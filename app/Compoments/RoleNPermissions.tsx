"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import Search from "./Search";
import {motion} from "framer-motion";


type Role = "admin" | "editor" | "user";

type PermissionKeys = "manageUsers" | "manageContent" | "viewAnalytics";

type RolePermissions = Record<PermissionKeys, boolean>;

interface Permissions {
  admin: RolePermissions;
  editor: RolePermissions;
  user: RolePermissions;
}

export default function RoleNPermissions() {
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
      <main className="flex-1 p-10 space-y-10 overflow-auto h-full">
          <Search />
    
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-extrabold tracking-wide mb-4"
          >
           User Roles & Permissions
          </motion.h1>

         <motion.div
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1,delay:0.2 }}
    className=" space-y-6">
      <Card className="bg-[#0F0F0F] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white text-xl">Roles & Permissions</CardTitle>
        </CardHeader>
         <div>

        
        <CardContent className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {(
            Object.entries(permissions) as [Role, RolePermissions][]
          ).map(([role, perms]) => (
            <Card key={role} className="bg-[#181818] border-gray-700">
              <CardHeader>
                <CardTitle className="capitalize text-white">{role}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {(Object.entries(perms) as [PermissionKeys, boolean][]).map(
                  ([perm, value]) => (
                    <div
                      key={perm}
                      className="flex justify-between items-center py-2 border-b border-gray-800"
                    >
                      <span className="text-gray-300 capitalize">
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
