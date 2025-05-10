
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";

const transactions = [
  {
    hash: "0x8f23...91ae",
    recordId: "MED-2025-04-15",
    type: "Record Creation",
    timestamp: "Apr 15, 2025",
    status: "Confirmed",
  },
  {
    hash: "0x7a61...2f5e",
    recordId: "MED-2025-04-15",
    type: "Access Granted",
    timestamp: "Apr 15, 2025",
    status: "Confirmed",
  },
  {
    hash: "0x92c4...54e7",
    recordId: "MED-2025-03-22",
    type: "Record Update",
    timestamp: "Mar 23, 2025",
    status: "Confirmed",
  },
  {
    hash: "0x8d3a...4e7c",
    recordId: "MED-2025-01-05",
    type: "Access Revoked",
    timestamp: "Mar 15, 2025",
    status: "Confirmed",
  },
];

const BlockchainVerificationTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Blockchain Verification</CardTitle>
        <CardDescription>Verify the integrity of your health records on the blockchain</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="p-4 bg-medblue-50 border border-medblue-100 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-5 w-5 text-medblue-500 mr-2" />
              <h3 className="font-medium text-medblue-700">Blockchain Verification Status</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-medblue-700 mb-1">All records verified and secured</div>
                <div className="text-xs text-medblue-600">Last verification: April 19, 2025 at 10:15 AM</div>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Verified
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Recent Blockchain Transactions</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Hash
                    </TableHead>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Record ID
                    </TableHead>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Event Type
                    </TableHead>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </TableHead>
                    <TableHead className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx, index) => (
                    <TableRow key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-medblue-600">
                        {tx.hash}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tx.recordId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tx.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {tx.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {tx.status}
                        </div>
                      </td>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockchainVerificationTab;
