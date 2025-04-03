
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, File, Scan, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const EmailAnalyzer = () => {
  const [emailContent, setEmailContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<null | {
    score: number;
    verdict: 'safe' | 'suspicious' | 'dangerous';
    reasons: string[];
  }>(null);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setEmailContent(event.target?.result as string);
    };
    reader.readAsText(file);
  };

  const analyzeEmail = () => {
    if (!emailContent.trim()) return;

    setIsAnalyzing(true);
    setProgress(0);
    setAnalysisResult(null);

    // Simulate analysis with progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Mock analysis result - in a real app, this would come from your backend
            performMockAnalysis();
            setIsAnalyzing(false);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 300);
  };

  const performMockAnalysis = () => {
    // This is where you'd call your API for quantum phishing detection
    // For now, we'll use some simple heuristics on the email content
    
    const lowerEmail = emailContent.toLowerCase();
    
    // Simple detection rules
    const hasUrgentLanguage = /urgent|immediately|verify|suspend|account|login|password|bank|update|confirm/i.test(lowerEmail);
    const hasSuspiciousLinks = /https?:\/\/(?!google\.com|microsoft\.com|amazon\.com)[^\s]+/i.test(lowerEmail);
    const hasAttachmentMention = /attachment|attached|doc|pdf|invoice|statement/i.test(lowerEmail);
    const hasTypicalPhishingPhrases = /won|winner|lottery|million|prince|inheritance|investment opportunity/i.test(lowerEmail);
    
    // Calculate a simple score
    let score = 0;
    const reasons: string[] = [];
    
    if (hasUrgentLanguage) {
      score += 25;
      reasons.push('Contains urgent or alarming language typical of phishing attempts');
    }
    
    if (hasSuspiciousLinks) {
      score += 35;
      reasons.push('Contains suspicious links to non-standard domains');
    }
    
    if (hasAttachmentMention) {
      score += 15;
      reasons.push('References attachments which may contain malware');
    }
    
    if (hasTypicalPhishingPhrases) {
      score += 25;
      reasons.push('Contains phrases commonly found in phishing or scam emails');
    }
    
    // Determine verdict based on score
    let verdict: 'safe' | 'suspicious' | 'dangerous';
    if (score < 30) {
      verdict = 'safe';
      if (score === 0) {
        reasons.push('No suspicious patterns detected');
      }
    } else if (score < 60) {
      verdict = 'suspicious';
    } else {
      verdict = 'dangerous';
    }
    
    setAnalysisResult({ score, verdict, reasons });
  };

  const getVerdictColor = () => {
    if (!analysisResult) return 'bg-gray-300';
    
    if (analysisResult.verdict === 'safe') return 'bg-cyber-green';
    if (analysisResult.verdict === 'suspicious') return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const getVerdictIcon = () => {
    if (!analysisResult) return null;
    
    if (analysisResult.verdict === 'safe') 
      return <CheckCircle className="h-6 w-6 text-cyber-green" />;
    if (analysisResult.verdict === 'suspicious') 
      return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
    return <AlertTriangle className="h-6 w-6 text-red-500" />;
  };

  return (
    <div className="cyber-panel h-full">
      <h2 className="text-2xl font-orbitron mb-6 cyber-heading">Email Analysis</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-foreground/80">
                Email Content
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept=".eml,.msg,.txt"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <Button variant="outline" size="sm" className="text-xs cyber-button">
                  <Upload className="h-3.5 w-3.5 mr-1" />
                  Upload Email
                </Button>
              </div>
            </div>
            <Textarea 
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              placeholder="Paste email content here for analysis..."
              className="min-h-[300px] bg-cyber-darkblue/30 border-cyber-blue/30 focus-visible:ring-cyber-blue"
            />
          </div>
          
          <div className="mt-6">
            <Button
              onClick={analyzeEmail}
              disabled={isAnalyzing || !emailContent.trim()}
              className="w-full bg-cyber-blue text-cyber-black hover:bg-cyber-brightblue font-orbitron"
            >
              {isAnalyzing ? (
                <>
                  <Scan className="mr-2 h-4 w-4 animate-pulse" />
                  Scanning...
                </>
              ) : (
                <>
                  <Scan className="mr-2 h-4 w-4" />
                  Analyze with Quantum AI
                </>
              )}
            </Button>
          </div>
          
          {isAnalyzing && (
            <div className="mt-6">
              <div className="flex justify-between text-xs mb-2">
                <span>Analyzing Email Content</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-cyber-darkblue">
                <div 
                  className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </Progress>
            </div>
          )}
        </div>
        
        <div>
          {analysisResult ? (
            <div className="cyber-panel border-cyber-blue/30 h-full">
              <div className="flex items-center mb-6">
                {getVerdictIcon()}
                <h3 className={`text-xl font-orbitron ml-2 ${
                  analysisResult.verdict === 'safe' ? 'text-cyber-green' : 
                  analysisResult.verdict === 'suspicious' ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {analysisResult.verdict === 'safe' ? 'Email Appears Safe' :
                   analysisResult.verdict === 'suspicious' ? 'Suspicious Email Detected' : 'Dangerous Phishing Detected'}
                </h3>
              </div>
              
              <div className="mb-6">
                <label className="text-sm text-foreground/80 mb-1 block">
                  Threat Score
                </label>
                <div className="h-8 w-full bg-cyber-darkblue/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      analysisResult.score < 30 ? 'bg-cyber-green' : 
                      analysisResult.score < 60 ? 'bg-yellow-500' : 'bg-red-500'
                    } transition-all duration-1000 ease-out`}
                    style={{ width: `${analysisResult.score}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>Safe</span>
                  <span>Suspicious</span>
                  <span>Dangerous</span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <Info className="h-4 w-4 text-cyber-blue mr-2" />
                  <h4 className="text-sm font-medium">Analysis Results</h4>
                </div>
                
                <ul className="space-y-3">
                  {analysisResult.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-cyber-darkblue flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-xs font-medium">{index + 1}</span>
                      </span>
                      <span className="text-sm text-foreground/80">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="cyber-panel border-cyber-blue/30 h-full flex flex-col items-center justify-center text-center p-10">
              <File className="h-12 w-12 text-cyber-blue/50 mb-4" />
              <h3 className="text-lg font-orbitron mb-2">No Analysis Yet</h3>
              <p className="text-foreground/60 text-sm mb-6">
                Paste an email or upload a file to analyze it with our quantum AI engine.
              </p>
              <p className="text-xs text-foreground/40 max-w-xs">
                Our system uses quantum algorithms to detect sophisticated phishing attempts that traditional systems might miss.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailAnalyzer;
