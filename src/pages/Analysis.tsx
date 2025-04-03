
import NavigationBar from '@/components/NavigationBar';
import EmailAnalyzer from '@/components/EmailAnalyzer';
import AIAssistant from '@/components/AIAssistant';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Analysis = () => {
  return (
    <div className="min-h-screen pb-16">
      <NavigationBar />
      
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-orbitron font-bold mb-2 cyber-heading">
            Email Analysis
          </h1>
          <p className="text-foreground/70">
            Scan emails for phishing attempts using our advanced quantum detection system
          </p>
        </div>
        
        <Tabs defaultValue="email-analysis" className="mb-8">
          <TabsList className="bg-cyber-darkblue/50 border border-cyber-blue/20">
            <TabsTrigger value="email-analysis" className="data-[state=active]:bg-cyber-blue/20">
              Email Analysis
            </TabsTrigger>
            <TabsTrigger value="bulk-scan" className="data-[state=active]:bg-cyber-blue/20">
              Bulk Scan
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-cyber-blue/20">
              History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="email-analysis" className="mt-6">
            <EmailAnalyzer />
          </TabsContent>
          
          <TabsContent value="bulk-scan">
            <div className="cyber-panel h-[500px] flex items-center justify-center">
              <p className="text-foreground/60">
                Bulk scanning functionality will be available here.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div className="cyber-panel h-[500px] flex items-center justify-center">
              <p className="text-foreground/60">
                Your scan history will appear here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <AIAssistant />
    </div>
  );
};

export default Analysis;
