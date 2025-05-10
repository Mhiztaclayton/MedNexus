
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { File, Users, Shield, Search, UserPlus } from "lucide-react";

const statItems = [
  {
    icon: <UserPlus className="h-5 w-5" />,
    title: "Total Patients",
    value: "1,248",
    change: "+24 this month",
    color: "bg-blue-500",
  },
  {
    icon: <File className="h-5 w-5" />,
    title: "Health Records",
    value: "4,536",
    change: "+152 this month",
    color: "bg-green-500",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Staff Members",
    value: "84",
    change: "12 departments",
    color: "bg-amber-500",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security Score",
    value: "98%",
    change: "+5% from last audit",
    color: "bg-purple-500",
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {statItems.map((item, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: item.color }}>
                {item.icon}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-xs text-gray-500">{item.title}</div>
                <div className="text-xs text-gray-400">{item.change}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatCards;
