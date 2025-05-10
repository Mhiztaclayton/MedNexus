
import { useState, useEffect } from "react";
import { Lock, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlockchainDemo = () => {
  const [step, setStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Automatic demo animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setStep((prev) => (prev < 3 ? prev + 1 : 1));
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="inline-block px-3 py-1 text-sm font-medium text-medteal-700 bg-medteal-100 rounded-full mb-4">
            Blockchain in Action
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See How MEDNEXUS Works</h2>
          <p className="text-xl text-gray-600">
            Experience our blockchain technology in action with this interactive demonstration.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Demo Controls */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center p-2 bg-white rounded-full shadow-md">
              {[1, 2, 3].map((i) => (
                <Button
                  key={i}
                  variant={step === i ? "default" : "ghost"}
                  className={`rounded-full px-6 ${step === i ? "bg-gradient-to-r from-medblue-500 to-medteal-500 text-white" : ""}`}
                  onClick={() => setStep(i)}
                >
                  Step {i}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Blockchain Visualization */}
          <div className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-6">
            <div className="absolute top-4 right-4 px-3 py-1 bg-medblue-100 text-medblue-800 text-xs rounded-md">
              Live Demo
            </div>
            
            {/* Step 1: Data Creation */}
            {step === 1 && (
              <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-50" : "opacity-100"}`}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-medblue-100 rounded-full flex items-center justify-center mr-4">
                    <Lock className="h-5 w-5 text-medblue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Step 1: Data Creation & Encryption</h3>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-medium text-gray-800">Patient Health Data</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Name:</span>
                          <span>John Doe</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Date of Birth:</span>
                          <span>01/15/1985</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Blood Type:</span>
                          <span>O+</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Medications:</span>
                          <span>Lisinopril, Metformin</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-pulse w-full h-full bg-medblue-500/10 rounded-lg flex items-center justify-center">
                          <Lock className="h-10 w-10 text-medblue-500" />
                        </div>
                      </div>
                      <div className="p-4 rounded-lg border border-medblue-200 bg-medblue-50">
                        <h4 className="font-medium text-gray-800 mb-2">Encrypted Data</h4>
                        <div className="font-mono text-xs text-gray-500 overflow-hidden">
                          <p>0xf85c8a25563a9c21b89d8a0d1d9e8</p>
                          <p>0x7a61a67bf1c2f5e96c4e7c8d3a54e</p>
                          <p>0x92c4e7c8d3a54e7a61a67bf1c2f5e</p>
                          <p>0x8d3a54e7a61a67bf1c2f5e96c4e7c</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Health data is encrypted using AES-256 encryption before being stored on the blockchain. Only authorized parties with the correct keys can decrypt and view this information.
                  </p>
                </div>
              </div>
            )}
            
            {/* Step 2: Blockchain Storage */}
            {step === 2 && (
              <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-50" : "opacity-100"}`}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-medblue-100 rounded-full flex items-center justify-center mr-4">
                    <Database className="h-5 w-5 text-medblue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Step 2: Blockchain Storage & Verification</h3>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  {[1, 2, 3, 4].map((block) => (
                    <div key={block} className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex-1 relative">
                      <div className="absolute top-2 right-2 text-xs text-gray-400 font-mono">Block #{block}</div>
                      <div className="mb-3 pt-2">
                        <div className="text-xs font-mono text-gray-500 mb-1">Previous Hash:</div>
                        <div className="bg-gray-50 p-1 rounded text-xs font-mono overflow-hidden">0x8f2a{block}e91...</div>
                      </div>
                      <div className="mb-3">
                        <div className="text-xs font-mono text-gray-500 mb-1">Data:</div>
                        <div className="bg-medblue-50 p-1 rounded text-xs font-mono overflow-hidden">
                          {block === 2 ? 
                            <span className="text-medblue-600">Patient Record</span> : 
                            "0xe91a54f8..."
                          }
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-500 mb-1">Hash:</div>
                        <div className="bg-gray-50 p-1 rounded text-xs font-mono overflow-hidden">0x7b3c{block}d42...</div>
                      </div>
                      {block < 4 && (
                        <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-medblue-400">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md mb-4">
                    ✓ Chain Verified - All blocks are valid
                  </div>
                  <p className="text-sm text-gray-600">
                    Health records are stored across a distributed network of nodes, creating an immutable and tamper-proof record. Each block contains multiple patient records, with cryptographic hashes ensuring data integrity.
                  </p>
                </div>
              </div>
            )}
            
            {/* Step 3: Access Control */}
            {step === 3 && (
              <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-50" : "opacity-100"}`}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-medblue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-medblue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Step 3: Patient-Controlled Access</h3>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-100">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-4">Access Control Dashboard</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-medblue-100 rounded-full flex items-center justify-center mr-3 text-xs">DR</div>
                            <div>
                              <p className="font-medium">Dr. Sarah Johnson</p>
                              <p className="text-xs text-gray-500">Cardiologist</p>
                            </div>
                          </div>
                          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">
                            Access Granted
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-medblue-100 rounded-full flex items-center justify-center mr-3 text-xs">CH</div>
                            <div>
                              <p className="font-medium">City Hospital Lab</p>
                              <p className="text-xs text-gray-500">Test Results Only</p>
                            </div>
                          </div>
                          <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">
                            Limited Access
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-medblue-100 rounded-full flex items-center justify-center mr-3 text-xs">RI</div>
                            <div>
                              <p className="font-medium">Research Institute</p>
                              <p className="text-xs text-gray-500">Medical Research</p>
                            </div>
                          </div>
                          <div className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-md">
                            Access Denied
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-4">Smart Contract Access</h4>
                      <div className="p-4 rounded-lg border border-medteal-200 bg-medteal-50">
                        <h4 className="font-medium text-medteal-800 mb-2">Access Smart Contract</h4>
                        <div className="font-mono text-xs space-y-1 mb-4">
                          <p><span className="text-medblue-700">function</span> <span className="text-medteal-700">grantAccess</span>(address provider, uint256 recordId) {'{'}</p>
                          <p>&nbsp;&nbsp;require(msg.sender == patientAddress);</p>
                          <p>&nbsp;&nbsp;accessRegistry[recordId][provider] = true;</p>
                          <p>&nbsp;&nbsp;emit AccessGranted(recordId, provider);</p>
                          <p>{'}'}</p>
                        </div>
                        <div className="text-xs text-gray-600">
                          Smart contracts automatically enforce access rules, with all access events recorded on the blockchain for complete transparency.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Patients maintain complete control over their health data, granting or revoking access with a simple interface. Smart contracts enforce these permissions automatically, creating an audit trail of all access events.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Temporary component for demo
const Database = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export default BlockchainDemo;
