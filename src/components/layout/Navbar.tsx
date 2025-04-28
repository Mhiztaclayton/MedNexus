
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-medblue-500 to-medteal-500 rounded-md flex items-center justify-center text-white font-bold text-xl">M</div>
          <span className="text-2xl font-bold bg-gradient-to-r from-medblue-500 to-medteal-400 bg-clip-text text-transparent">MEDNEXUS</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-medblue-600 font-medium">Home</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-medblue-600 font-medium">Dashboard</Link>
          <Link to="#" className="text-gray-700 hover:text-medblue-600 font-medium">Features</Link>
          <Link to="#" className="text-gray-700 hover:text-medblue-600 font-medium">About Us</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex">Login</Button>
          <Button className="bg-gradient-to-r from-medblue-500 to-medteal-500 text-white">Try Demo</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
