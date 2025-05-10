
import React from 'react';

const DashboardHeader = () => {
  return (
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
              <button className="flex gap-2 items-center text-sm font-medium">
                <div className="w-8 h-8 rounded-full bg-medblue-100 flex items-center justify-center text-medblue-500 text-sm font-medium">
                  JD
                </div>
                <span className="hidden md:inline">John Doe</span>
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default DashboardHeader;
