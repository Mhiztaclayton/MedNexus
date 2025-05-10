
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const currentPermissions = [
  {
    name: "Dr. Sarah Johnson",
    role: "Primary Care Physician",
    access: "Full Access",
    expires: "Jan 15, 2026",
    status: "Active",
  },
  {
    name: "City Hospital Lab",
    role: "Testing Facility",
    access: "Test Results Only",
    expires: "Jul 22, 2025",
    status: "Active",
  },
  {
    name: "Dr. Robert Chen",
    role: "Cardiologist",
    access: "Cardiology Records",
    expires: "Aug 10, 2025",
    status: "Active",
  },
];

const pendingRequests = [
  {
    name: "Medical Research Institute",
    role: "Research Organization",
    access: "Anonymized Data",
    requested: "Apr 18, 2025",
  },
  {
    name: "Dr. Linda Martinez",
    role: "Dermatologist",
    access: "Dermatology Records",
    requested: "Apr 17, 2025",
  },
];

const AccessControlTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Access Management</CardTitle>
        <CardDescription>Control who can access your medical records</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Current Access Permissions</h3>
            <div className="space-y-3">
              {currentPermissions.map((permission, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-medblue-100 flex items-center justify-center text-medblue-500 mr-4">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{permission.name}</div>
                      <div className="text-sm text-gray-500">{permission.role}</div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-4">
                    <div className="text-right md:text-left">
                      <div className="text-xs text-gray-500">Access Level</div>
                      <div className="text-sm">{permission.access}</div>
                    </div>
                    <div className="text-right md:text-left">
                      <div className="text-xs text-gray-500">Expires</div>
                      <div className="text-sm">{permission.expires}</div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {permission.status}
                    </div>
                    <Button variant="outline" size="sm">
                      Revoke
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Pending Access Requests</h3>
            <div className="space-y-3">
              {pendingRequests.map((request, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mr-4">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">{request.name}</div>
                      <div className="text-sm text-gray-500">
                        {request.role} • Requested: {request.requested}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{request.access}</span>
                    <Button variant="outline" size="sm" className="border-red-500 text-red-600">
                      Deny
                    </Button>
                    <Button size="sm" className="bg-medblue-500 text-white">
                      Approve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessControlTab;
