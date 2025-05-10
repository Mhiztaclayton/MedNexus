
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { File, Shield } from "lucide-react";

const healthRecords = [
  {
    title: "Annual Physical Results",
    date: "Apr 15, 2025",
    provider: "Dr. Sarah Johnson",
    type: "Examination",
    status: "Verified",
  },
  {
    title: "Blood Work Analysis",
    date: "Mar 22, 2025",
    provider: "City Hospital Lab",
    type: "Laboratory",
    status: "Verified",
  },
  {
    title: "Vaccination Record",
    date: "Feb 10, 2025",
    provider: "Community Health Clinic",
    type: "Immunization",
    status: "Verified",
  },
  {
    title: "Cardiology Consultation",
    date: "Jan 05, 2025",
    provider: "Dr. Robert Chen",
    type: "Specialist",
    status: "Verified",
  },
];

const HealthRecordsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Health Records</CardTitle>
        <CardDescription>View and manage your encrypted health records</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {healthRecords.map((record, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-medblue-100 flex items-center justify-center text-medblue-500 mr-4">
                  <File className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{record.title}</div>
                  <div className="text-sm text-gray-500">
                    {record.date} • {record.provider}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                  {record.type}
                </div>
                <div className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  {record.status}
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline">View All Records</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthRecordsTab;
