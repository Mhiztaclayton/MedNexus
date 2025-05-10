
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, File, Users, Link, Search } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <header className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-medblue-500 to-medteal-500 rounded-md flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-medblue-500 to-medteal-400 bg-clip-text text-transparent">
                MEDNEXUS
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Button variant="ghost" size="sm" className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-medblue-100 flex items-center justify-center text-medblue-500 text-sm font-medium">
                    JD
                  </div>
                  <span className="hidden md:inline">John Doe</span>
                </Button>
              </div>
            </div>
          </header>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome back, John</h1>
            <p className="text-gray-600 mt-1">Manage your health records and access controls</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button className="bg-gradient-to-r from-medblue-500 to-medteal-500 text-white">Add New Record</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: <File className="h-5 w-5" />,
              title: "Total Records",
              value: "12",
              change: "+2 this month",
              color: "bg-blue-500",
            },
            {
              icon: <Users className="h-5 w-5" />,
              title: "Access Requests",
              value: "3",
              change: "2 pending approval",
              color: "bg-amber-500",
            },
            {
              icon: <Shield className="h-5 w-5" />,
              title: "Security Score",
              value: "98%",
              change: "+5% from last check",
              color: "bg-green-500",
            },
            {
              icon: <Search className="h-5 w-5" />,
              title: "Record Views",
              value: "24",
              change: "Last 30 days",
              color: "bg-purple-500",
            },
          ].map((item, index) => (
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
        
        <Tabs defaultValue="health-records" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="health-records">Health Records</TabsTrigger>
            <TabsTrigger value="access-control">Access Control</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain Verification</TabsTrigger>
          </TabsList>
          
          <TabsContent value="health-records">
            <Card>
              <CardHeader>
                <CardTitle>Your Health Records</CardTitle>
                <CardDescription>View and manage your encrypted health records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
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
                  ].map((record, index) => (
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
          </TabsContent>
          
          <TabsContent value="access-control">
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
                      {[
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
                      ].map((permission, index) => (
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
                      {[
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
                      ].map((request, index) => (
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
          </TabsContent>
          
          <TabsContent value="blockchain">
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
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Transaction Hash
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Record ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Event Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Timestamp
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
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
                          ].map((tx, index) => (
                            <tr key={index}>
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
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
