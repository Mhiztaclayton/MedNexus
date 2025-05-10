
import React from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardWelcome from '@/components/dashboard/DashboardWelcome';
import StatCards from '@/components/dashboard/StatCards';
import DashboardTabs from '@/components/dashboard/DashboardTabs';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-8">
        <DashboardWelcome />
        <StatCards />
        <DashboardTabs />
      </div>
    </div>
  );
};

export default Dashboard;
