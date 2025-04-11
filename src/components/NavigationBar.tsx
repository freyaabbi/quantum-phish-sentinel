
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShieldCheck, FileText, BarChart2, Globe, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur-lg border-b border-cyber-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and site name */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-cyber-blue animate-pulse-glow" />
              <span className="font-orbitron text-xl font-bold text-cyber-blue">QuantumPhish</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="font-orbitron text-sm text-foreground/80 hover:text-cyber-blue px-3 py-2 hover:bg-cyber-blue/10 rounded-md transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="font-orbitron text-sm text-foreground/80 hover:text-cyber-blue px-3 py-2 hover:bg-cyber-blue/10 rounded-md transition-colors">
                Dashboard
              </Link>
              <Link to="/analysis" className="font-orbitron text-sm text-foreground/80 hover:text-cyber-blue px-3 py-2 hover:bg-cyber-blue/10 rounded-md transition-colors">
                Email Analysis
              </Link>
              <Link to="/threat-intel" className="font-orbitron text-sm text-foreground/80 hover:text-cyber-blue px-3 py-2 hover:bg-cyber-blue/10 rounded-md transition-colors">
                Threat Intel
              </Link>
            </div>
          </div>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              variant="outline" 
              className="cyber-button text-xs"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
            <Button 
              className="bg-cyber-blue text-cyber-black hover:bg-cyber-brightblue font-orbitron text-xs"
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-cyber-blue hover:text-white hover:bg-cyber-blue/10 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cyber-darkblue/90 backdrop-blur-lg border-b border-cyber-blue/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMobileMenu} className="font-orbitron block text-foreground hover:text-cyber-blue px-3 py-2 rounded-md hover:bg-cyber-blue/10">
              Home
            </Link>
            <Link to="/dashboard" onClick={toggleMobileMenu} className="font-orbitron block text-foreground hover:text-cyber-blue px-3 py-2 rounded-md hover:bg-cyber-blue/10">
              Dashboard
            </Link>
            <Link to="/analysis" onClick={toggleMobileMenu} className="font-orbitron block text-foreground hover:text-cyber-blue px-3 py-2 rounded-md hover:bg-cyber-blue/10">
              Email Analysis
            </Link>
            <Link to="/threat-intel" onClick={toggleMobileMenu} className="font-orbitron block text-foreground hover:text-cyber-blue px-3 py-2 rounded-md hover:bg-cyber-blue/10">
              Threat Intel
            </Link>
            <div className="flex flex-col space-y-2 pt-4 pb-2 border-t border-cyber-blue/20">
              <Button 
                variant="outline" 
                size="sm" 
                className="cyber-button w-full"
                onClick={() => {
                  navigate('/signin');
                  toggleMobileMenu();
                }}
              >
                Sign In
              </Button>
              <Button 
                size="sm" 
                className="bg-cyber-blue text-cyber-black hover:bg-cyber-brightblue font-orbitron w-full"
                onClick={() => {
                  navigate('/register');
                  toggleMobileMenu();
                }}
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
