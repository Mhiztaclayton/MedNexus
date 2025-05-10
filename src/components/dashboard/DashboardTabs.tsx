
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HealthRecordsTab from './HealthRecordsTab';
import AccessControlTab from './AccessControlTab';
import BlockchainVerificationTab from './BlockchainVerificationTab';

const DashboardTabs = () => {
  return (
    <Tabs defaultValue="health-records" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="health-records">Patient Records</TabsTrigger>
        <TabsTrigger value="access-control">Staff Access</TabsTrigger>
        <TabsTrigger value="blockchain">Blockchain Verification</TabsTrigger>
      </TabsList>
      
      <TabsContent value="health-records">
        <HealthRecordsTab />
      </TabsContent>
      
      <TabsContent value="access-control">
        <AccessControlTab />
      </TabsContent>
      
      <TabsContent value="blockchain">
        <BlockchainVerificationTab />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
