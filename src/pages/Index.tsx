
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import NavigationBar from '@/components/NavigationBar';
import AIAssistant from '@/components/AIAssistant';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <Features />
      
      {/* Call to action section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darkblue/50 to-cyber-black/70 z-0"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 cyber-heading">
            Ready to Secure Your Inbox?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Try our quantum-powered phishing detection system today and stay protected against even the most sophisticated attacks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/analysis">
              <Button size="lg" className="font-orbitron bg-cyber-blue text-cyber-black hover:bg-cyber-brightblue">
                Start Scanning Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="cyber-button">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-cyber-black border-t border-cyber-blue/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="font-orbitron text-lg font-bold text-cyber-blue">QuantumPhish</span>
              <span className="ml-2 text-xs text-foreground/40">© {new Date().getFullYear()} Quantum Security, Inc.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-cyber-blue transition-colors">Privacy</a>
              <a href="#" className="text-foreground/60 hover:text-cyber-blue transition-colors">Terms</a>
              <a href="#" className="text-foreground/60 hover:text-cyber-blue transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
      
      <AIAssistant />
    </div>
  );
};

export default Index;
