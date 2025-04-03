
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-cyber-black">
      {/* Background grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 z-0"></div>
      
      <div className="relative z-10 max-w-md w-full text-center cyber-panel border-cyber-blue/30 p-8">
        <h1 className="text-8xl font-orbitron font-bold mb-4 cyber-heading">404</h1>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyber-blue to-transparent my-6"></div>
        <p className="text-xl text-foreground mb-8">Page not found in the quantum realm</p>
        <Link to="/">
          <Button className="cyber-button">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
