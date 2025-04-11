
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import NavigationBar from "@/components/NavigationBar";

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - would connect to backend in production
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully signed in!");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-cyber-black">
      <NavigationBar />
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-blue/5 to-cyber-black/10 z-0"></div>
      
      <div className="container relative z-10 pt-28 pb-12 min-h-screen flex flex-col items-center justify-center">
        <Card className="w-full max-w-md border-cyber-blue/30 bg-cyber-black/70 backdrop-blur-lg shadow-[0_0_15px_rgba(0,187,255,0.2)]">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="font-orbitron text-2xl text-cyber-blue">
              Access Quantum Portal
            </CardTitle>
            <CardDescription className="text-foreground/70">
              Enter your credentials to secure your digital realm
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-cyber-blue/70" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="quantum@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 border-cyber-blue/30 bg-cyber-darkblue/30 focus:border-cyber-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-cyber-blue/70" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pl-10 border-cyber-blue/30 bg-cyber-darkblue/30 focus:border-cyber-blue"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-foreground/50 hover:text-foreground"
                  >
                    {showPassword ? 
                      <EyeOff className="h-4 w-4" /> : 
                      <Eye className="h-4 w-4" />
                    }
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="rememberMe" 
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, rememberMe: checked === true }))
                    }
                    className="border-cyber-blue/50 data-[state=checked]:bg-cyber-blue data-[state=checked]:text-black"
                  />
                  <label 
                    htmlFor="rememberMe" 
                    className="text-sm cursor-pointer text-foreground/80"
                  >
                    Remember me
                  </label>
                </div>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-cyber-blue hover:text-cyber-brightblue hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full font-orbitron bg-cyber-blue hover:bg-cyber-brightblue text-cyber-black"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="h-4 w-4 border-2 border-cyber-black border-t-transparent rounded-full animate-spin"></div>
                    <span className="ml-2">Authenticating...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Sign In</span>
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 pt-0">
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cyber-blue/20"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-cyber-black px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="cyber-button">
                GitHub
              </Button>
              <Button variant="outline" className="cyber-button">
                Google
              </Button>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              New to QuantumPhish?{" "}
              <Link to="/register" className="text-cyber-blue hover:text-cyber-brightblue hover:underline">
                Create an account
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
