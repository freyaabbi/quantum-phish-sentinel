
import NavigationBar from '@/components/NavigationBar';
import AIAssistant from '@/components/AIAssistant';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Globe, Search, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ThreatIntel = () => {
  // Sample threat data
  const recentThreats = [
    {
      domain: 'secure-banking-verification.com',
      ip: '23.45.67.89',
      type: 'Credential Phishing',
      firstSeen: '2 hours ago',
      threatLevel: 'High'
    },
    {
      domain: 'amazon-delivery-tracking.co',
      ip: '98.76.54.32',
      type: 'Brand Impersonation',
      firstSeen: '6 hours ago',
      threatLevel: 'High'
    },
    {
      domain: 'microsoft365-security-alert.net',
      ip: '45.67.89.12',
      type: 'Credential Phishing',
      firstSeen: '1 day ago',
      threatLevel: 'Medium'
    },
    {
      domain: 'paypal-account-security.info',
      ip: '34.56.78.90',
      type: 'Brand Impersonation',
      firstSeen: '2 days ago',
      threatLevel: 'High'
    },
    {
      domain: 'tax-refund-gov.com',
      ip: '56.78.90.12',
      type: 'Government Impersonation',
      firstSeen: '3 days ago',
      threatLevel: 'Medium'
    }
  ];
  
  // Threat trends data
  const threatTrends = [
    {
      title: 'AI-Generated Content',
      description: 'Phishing emails using AI-generated text to bypass traditional filters',
      change: '+34%',
      indicator: 'up'
    },
    {
      title: 'Supply Chain Attacks',
      description: 'Targeting trusted vendors to compromise downstream customers',
      change: '+27%',
      indicator: 'up'
    },
    {
      title: 'QR Code Phishing',
      description: 'Using QR codes to redirect to malicious websites',
      change: '+42%',
      indicator: 'up'
    },
    {
      title: 'Email Spoofing',
      description: 'Traditional email-based phishing attempts',
      change: '-8%',
      indicator: 'down'
    }
  ];
  
  return (
    <div className="min-h-screen pb-16">
      <NavigationBar />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-orbitron font-bold mb-2 cyber-heading">
            Threat Intelligence
          </h1>
          <p className="text-foreground/70">
            Global phishing threat landscape and emerging attack vectors
          </p>
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground/50" />
              <Input
                placeholder="Search threats, domains, or IP addresses..."
                className="pl-9 pr-4 py-2 bg-cyber-darkblue/50 border-cyber-blue/30"
              />
            </div>
          </div>
          
          <div className="flex space-x-2 ml-4">
            <Button variant="outline" size="sm" className="cyber-button">
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              Last 7 Days
            </Button>
            <Button variant="outline" size="sm" className="cyber-button">
              <Globe className="mr-1.5 h-3.5 w-3.5" />
              Global
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="bg-cyber-darkblue/50 border border-cyber-blue/20">
            <TabsTrigger value="overview" className="data-[state=active]:bg-cyber-blue/20">Overview</TabsTrigger>
            <TabsTrigger value="domains" className="data-[state=active]:bg-cyber-blue/20">Domains</TabsTrigger>
            <TabsTrigger value="trends" className="data-[state=active]:bg-cyber-blue/20">Trends</TabsTrigger>
            <TabsTrigger value="map" className="data-[state=active]:bg-cyber-blue/20">Threat Map</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Active threats card */}
            <Card className="cyber-panel border-cyber-blue/30 lg:col-span-2">
              <div className="p-6">
                <h2 className="text-xl font-orbitron mb-4 text-cyber-blue">Recent Phishing Domains</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-xs uppercase text-foreground/60 border-b border-cyber-blue/20">
                      <tr>
                        <th className="px-4 py-2 text-left">Domain/URL</th>
                        <th className="px-4 py-2 text-left">IP Address</th>
                        <th className="px-4 py-2 text-left">Type</th>
                        <th className="px-4 py-2 text-left">First Seen</th>
                        <th className="px-4 py-2 text-left">Threat Level</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-cyber-blue/10">
                      {recentThreats.map((threat, index) => (
                        <tr 
                          key={index} 
                          className="hover:bg-cyber-blue/5 transition-colors cursor-pointer"
                        >
                          <td className="px-4 py-3 font-medium truncate max-w-[200px]">
                            {threat.domain}
                          </td>
                          <td className="px-4 py-3 text-foreground/70">
                            {threat.ip}
                          </td>
                          <td className="px-4 py-3 text-foreground/70">
                            {threat.type}
                          </td>
                          <td className="px-4 py-3 text-foreground/70">
                            {threat.firstSeen}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              threat.threatLevel === 'High' 
                                ? 'bg-red-500/20 text-red-400' 
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {threat.threatLevel}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm" className="cyber-button text-xs">
                    View All Threats
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Trends card */}
            <Card className="cyber-panel border-cyber-blue/30">
              <div className="p-6">
                <h2 className="text-xl font-orbitron mb-4 text-cyber-blue">Emerging Threats</h2>
                
                <div className="space-y-4">
                  {threatTrends.map((trend, index) => (
                    <div 
                      key={index} 
                      className="p-3 border border-cyber-blue/20 rounded-lg hover:bg-cyber-blue/5 transition-colors cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium mb-1">{trend.title}</h3>
                        <span className={trend.indicator === 'up' ? 'text-red-400' : 'text-cyber-green'}>
                          {trend.change}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/70">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            {/* Threat Map */}
            <Card className="cyber-panel border-cyber-blue/30 col-span-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-orbitron text-cyber-blue">Global Threat Map</h2>
                  <Button variant="outline" size="sm" className="cyber-button text-xs">
                    <Shield className="mr-1.5 h-3.5 w-3.5" />
                    Live View
                  </Button>
                </div>
                
                <div className="relative h-96 border border-cyber-blue/20 rounded-md overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-darkblue/50"></div>
                  <div className="absolute inset-0 bg-cyber-grid bg-[length:20px_20px] opacity-20"></div>
                  
                  {/* This would be replaced with an actual map visualization in a real application */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      {/* World Map Placeholder SVG */}
                      <svg width="80%" height="80%" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M150,50 L350,50 L450,150 L550,50 L750,50 L850,150 L850,350 L750,450 L550,450 L450,350 L350,450 L150,450 Z" 
                              fill="none" stroke="#00f6ff" strokeWidth="2" />
                        
                        {/* Hotspots */}
                        <circle cx="250" cy="150" r="15" fill="#ff3333" opacity="0.6">
                          <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="450" cy="200" r="20" fill="#ff3333" opacity="0.6">
                          <animate attributeName="r" values="20;25;20" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="650" cy="150" r="12" fill="#ff3333" opacity="0.6">
                          <animate attributeName="r" values="12;18;12" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="350" cy="300" r="25" fill="#ff3333" opacity="0.6">
                          <animate attributeName="r" values="25;30;25" dur="2.2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="550" cy="350" r="18" fill="#ff3333" opacity="0.6">
                          <animate attributeName="r" values="18;22;18" dur="2.8s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="750" cy="250" r="22" fill="#ff3333" opacity="0.6">
                          <animate attributeName="r" values="22;28;22" dur="3.2s" repeatCount="indefinite" />
                        </circle>
                        
                        {/* Connection lines */}
                        <line x1="250" y1="150" x2="450" y2="200" stroke="#ff3333" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
                        <line x1="450" y1="200" x2="650" y2="150" stroke="#ff3333" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
                        <line x1="350" y1="300" x2="550" y2="350" stroke="#ff3333" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
                        <line x1="550" y1="350" x2="750" y2="250" stroke="#ff3333" strokeWidth="1" strokeDasharray="5,5" opacity="0.4" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-cyber-darkblue/30 p-3 rounded-md">
                    <div className="text-xs text-foreground/70 mb-1">Attack Sources</div>
                    <div className="font-medium">823 IPs</div>
                  </div>
                  <div className="bg-cyber-darkblue/30 p-3 rounded-md">
                    <div className="text-xs text-foreground/70 mb-1">Top Origin</div>
                    <div className="font-medium">Eastern Europe</div>
                  </div>
                  <div className="bg-cyber-darkblue/30 p-3 rounded-md">
                    <div className="text-xs text-foreground/70 mb-1">Top Target</div>
                    <div className="font-medium">Financial Services</div>
                  </div>
                  <div className="bg-cyber-darkblue/30 p-3 rounded-md">
                    <div className="text-xs text-foreground/70 mb-1">Detection Rate</div>
                    <div className="font-medium">98.2% (Quantum)</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="domains">
            <div className="cyber-panel h-96 flex items-center justify-center">
              <p className="text-foreground/60">
                Detailed phishing domains information will be displayed here.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="trends">
            <div className="cyber-panel h-96 flex items-center justify-center">
              <p className="text-foreground/60">
                Phishing trend analysis will be displayed here.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="map">
            <div className="cyber-panel h-96 flex items-center justify-center">
              <p className="text-foreground/60">
                Interactive global threat map will be displayed here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default ThreatIntel;
