
import { Shield, Zap, FileBarChart, BrainCircuit, Globe, Lock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-cyber-blue" />,
      title: 'Advanced Phishing Detection',
      description: 'Identify sophisticated phishing attempts with our quantum algorithms that detect subtle patterns invisible to traditional systems.',
      color: 'cyber-blue',
    },
    {
      icon: <Zap className="h-10 w-10 text-cyber-purple" />,
      title: 'Quantum-Powered Analysis',
      description: 'Leverage the power of quantum computing to process millions of threat signals simultaneously for unprecedented accuracy.',
      color: 'cyber-purple',
    },
    {
      icon: <FileBarChart className="h-10 w-10 text-cyber-green" />,
      title: 'Comprehensive Reporting',
      description: 'Access detailed threat analysis with visual reports explaining why emails were flagged and recommended actions.',
      color: 'cyber-green',
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-cyber-blue" />,
      title: 'AI-Enhanced Learning',
      description: 'Our system continuously learns from new threats, adapting its detection algorithms to evolving phishing techniques.',
      color: 'cyber-blue',
    },
    {
      icon: <Globe className="h-10 w-10 text-cyber-purple" />,
      title: 'Global Threat Intelligence',
      description: 'Stay protected with real-time updates from our global network tracking emerging phishing campaigns and attack vectors.',
      color: 'cyber-purple',
    },
    {
      icon: <Lock className="h-10 w-10 text-cyber-green" />,
      title: 'Enterprise-Grade Security',
      description: 'Deploy our solution across your organization with role-based access control and secure authentication.',
      color: 'cyber-green',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="features">
      {/* Background grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 cyber-heading">
            Quantum-Enhanced Protection
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Our platform combines quantum computing with advanced AI to provide unmatched phishing detection capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-panel group hover:border-cyber-blue/40 transition-all duration-300 backdrop-blur-sm"
            >
              <div className={`p-2 rounded-lg mb-4 inline-block bg-${feature.color}/10 border border-${feature.color}/30`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-3 text-foreground group-hover:text-cyber-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
