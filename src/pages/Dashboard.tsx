
import NavigationBar from '@/components/NavigationBar';
import ThreatStats from '@/components/ThreatStats';
import RecentEmails from '@/components/RecentEmails';
import AIAssistant from '@/components/AIAssistant';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RefreshCw, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <div className="min-h-screen pb-16">
      <NavigationBar />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h1 className="text-3xl font-orbitron font-bold mb-4 md:mb-0 cyber-heading">
            Security Dashboard
          </h1>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" className="cyber-button text-xs">
              <RefreshCw className="mr-1 h-3.5 w-3.5" />
              Refresh Data
            </Button>
            <Button variant="outline" size="sm" className="cyber-button text-xs">
              <Download className="mr-1 h-3.5 w-3.5" />
              Export Report
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="bg-cyber-darkblue/50 border border-cyber-blue/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-cyber-blue/20">Overview</TabsTrigger>
            <TabsTrigger value="threats" className="data-[state=active]:bg-cyber-blue/20">Threats</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-cyber-blue/20">Analytics</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-cyber-blue/20">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 space-y-8">
            <ThreatStats />
            <RecentEmails />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="cyber-panel border-cyber-blue/30 col-span-full lg:col-span-1">
                <div className="p-6">
                  <h3 className="text-lg font-orbitron mb-4 text-cyber-blue">Quantum Processing</h3>
                  
                  {/* Simple visualization of quantum processing */}
                  <div className="relative h-40 border border-cyber-blue/20 rounded-md mb-4 overflow-hidden">
                    <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-20"></div>
                    
                    {/* Quantum waves animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div 
                          key={i}
                          className="absolute w-full h-full border-2 border-cyber-blue/30 rounded-full animate-pulse-glow" 
                          style={{
                            width: `${(i + 1) * 20}%`,
                            height: `${(i + 1) * 20}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                      
                      <div className="h-12 w-12 bg-cyber-blue/20 rounded-full flex items-center justify-center z-10 animate-pulse-glow">
                        <div className="h-6 w-6 bg-cyber-blue rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Qubits Active:</span>
                      <span className="font-medium">128</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Error Correction:</span>
                      <span className="font-medium">99.8%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Processing Cycles:</span>
                      <span className="font-medium">4.2M / s</span>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="cyber-panel border-cyber-blue/30 col-span-full lg:col-span-2">
                <div className="p-6">
                  <h3 className="text-lg font-orbitron mb-4 text-cyber-blue">Global Threat Map</h3>
                  
                  <div className="relative h-64 border border-cyber-blue/20 rounded-md overflow-hidden">
                    <div className="absolute inset-0 bg-cyber-darkblue/50"></div>
                    <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-20"></div>
                    
                    {/* This would be replaced with an actual map visualization in a real application */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-cyber-blue/70 text-sm">Interactive Threat Map</p>
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        {/* World Map Placeholder SVG */}
                        <svg width="80%" height="80%" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M150,50 L350,50 L450,150 L550,50 L750,50 L850,150 L850,350 L750,450 L550,450 L450,350 L350,450 L150,450 Z" 
                            fill="none" stroke="#00f6ff" strokeWidth="2" />
                          
                          {/* Hotspots */}
                          <circle cx="250" cy="150" r="10" fill="#00f6ff" opacity="0.6" />
                          <circle cx="450" cy="200" r="15" fill="#9b30ff" opacity="0.6" />
                          <circle cx="650" cy="150" r="12" fill="#00f6ff" opacity="0.6" />
                          <circle cx="350" cy="300" r="20" fill="#39ff14" opacity="0.6" />
                          <circle cx="550" cy="350" r="8" fill="#00f6ff" opacity="0.6" />
                          <circle cx="750" cy="250" r="18" fill="#9b30ff" opacity="0.6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-cyber-darkblue/30 p-3 rounded-md">
                      <div className="text-xs text-foreground/70 mb-1">North America</div>
                      <div className="font-medium">238 Threats</div>
                    </div>
                    <div className="bg-cyber-darkblue/30 p-3 rounded-md">
                      <div className="text-xs text-foreground/70 mb-1">Europe</div>
                      <div className="font-medium">182 Threats</div>
                    </div>
                    <div className="bg-cyber-darkblue/30 p-3 rounded-md">
                      <div className="text-xs text-foreground/70 mb-1">Asia</div>
                      <div className="font-medium">341 Threats</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="threats">
            <div className="flex items-center justify-center h-64 cyber-panel border-cyber-blue/30">
              <p className="text-foreground/60">Detailed threat information will be displayed here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="flex items-center justify-center h-64 cyber-panel border-cyber-blue/30">
              <p className="text-foreground/60">Advanced analytics will be displayed here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="flex items-center justify-center h-64 cyber-panel border-cyber-blue/30">
              <p className="text-foreground/60">Dashboard settings will be displayed here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Dashboard;
