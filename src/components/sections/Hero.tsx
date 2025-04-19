
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute right-0 bottom-0 -mb-40 -mr-40 h-[600px] w-[600px] rounded-full bg-medteal-300 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 top-0 -ml-40 -mt-40 h-[600px] w-[600px] rounded-full bg-medblue-300 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h5 className="inline-block px-3 py-1 text-sm font-medium text-medblue-700 bg-medblue-100 rounded-full mb-4">
                Healthcare Reimagined with Blockchain
              </h5>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Your Health Data <span className="bg-gradient-to-r from-medblue-500 to-medteal-500 bg-clip-text text-transparent">Secure</span> & <span className="bg-gradient-to-r from-medteal-500 to-medblue-500 bg-clip-text text-transparent">Accessible</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-lg">
                MEDNEXUS empowers patients with full control of their health records while enabling seamless, secure data exchange between healthcare providers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-medblue-500 to-medteal-500 text-white hover:opacity-90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-medblue-500 text-medblue-600">
                Learn More
              </Button>
            </div>
            
            <div className="pt-4 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-medblue-${i * 100} flex items-center justify-center text-white text-xs font-medium`}>
                    {i === 4 ? '+' : ''}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <span className="text-gray-600 text-sm">Trusted by</span>
                <p className="font-medium text-gray-900">100+ Healthcare Providers</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-medblue-500/20 to-medteal-500/20 rounded-3xl -rotate-6 transform scale-95"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-medblue-500 to-medteal-500 p-4 flex items-center">
                <div className="w-3 h-3 rounded-full bg-white/20 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-white/20 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Patient Health Record</h4>
                      <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md">Encrypted</div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Record ID:</span>
                        <span className="font-mono">0x8f23...91ae</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Last Updated:</span>
                        <span>April 17, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Access Control:</span>
                        <span className="text-medblue-600">Patient-Managed</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-medblue-50 rounded-lg border border-medblue-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-medblue-100 rounded-full flex items-center justify-center mr-3">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-medblue-500">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <h4 className="font-medium">Blockchain Verification</h4>
                      </div>
                      <div className="px-2 py-1 bg-medblue-100 text-medblue-800 text-xs rounded-md">Verified</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="font-medium mb-2">Access Requests</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm p-2 bg-white rounded border border-gray-100">
                        <span>Dr. Sarah Johnson</span>
                        <Button size="sm" variant="outline" className="h-7 text-xs">Approve</Button>
                      </div>
                      <div className="flex items-center justify-between text-sm p-2 bg-white rounded border border-gray-100">
                        <span>City Hospital Lab</span>
                        <Button size="sm" variant="outline" className="h-7 text-xs">Approve</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
