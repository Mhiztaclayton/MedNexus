
import React from 'react';
import { Button } from "@/components/ui/button";

const DashboardWelcome = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome back, John</h1>
        <p className="text-gray-600 mt-1">Manage your health records and access controls</p>
      </div>
      
      <div className="mt-4 md:mt-0">
        <Button className="bg-gradient-to-r from-medblue-500 to-medteal-500 text-white">Add New Record</Button>
      </div>
    </div>
  );
};

export default DashboardWelcome;
