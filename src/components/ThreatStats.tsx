
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, BarChart2, Zap } from 'lucide-react';

// Sample data for charts
const weeklyData = [
  { name: 'Mon', threats: 12 },
  { name: 'Tue', threats: 19 },
  { name: 'Wed', threats: 8 },
  { name: 'Thu', threats: 15 },
  { name: 'Fri', threats: 23 },
  { name: 'Sat', threats: 10 },
  { name: 'Sun', threats: 7 },
];

const monthlyData = [
  { name: 'Jan', spear: 40, mass: 24 },
  { name: 'Feb', spear: 30, mass: 28 },
  { name: 'Mar', spear: 20, mass: 39 },
  { name: 'Apr', spear: 27, mass: 35 },
  { name: 'May', spear: 18, mass: 42 },
  { name: 'Jun', spear: 23, mass: 31 },
  { name: 'Jul', spear: 34, mass: 29 },
  { name: 'Aug', spear: 36, mass: 33 },
  { name: 'Sep', spear: 21, mass: 25 },
  { name: 'Oct', spear: 18, mass: 27 },
  { name: 'Nov', spear: 25, mass: 32 },
  { name: 'Dec', spear: 30, mass: 40 },
];

const ThreatStats = () => {
  const stats = [
    {
      title: 'Total Scans',
      value: '1,438',
      change: '+24%',
      indicator: 'up',
      icon: <Shield className="h-4 w-4" />,
      color: 'cyber-blue',
    },
    {
      title: 'Threats Detected',
      value: '126',
      change: '-3%',
      indicator: 'down',
      icon: <AlertTriangle className="h-4 w-4" />,
      color: 'cyber-purple',
    },
    {
      title: 'Detection Rate',
      value: '98.2%',
      change: '+2.4%',
      indicator: 'up',
      icon: <BarChart2 className="h-4 w-4" />,
      color: 'cyber-green',
    },
    {
      title: 'Quantum Power',
      value: '128Q',
      change: '+32Q',
      indicator: 'up',
      icon: <Zap className="h-4 w-4" />,
      color: 'cyber-blue',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className="cyber-panel border-cyber-blue/30">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-medium text-foreground/70">
                {stat.title}
              </CardTitle>
              <div className={`p-1 rounded-full bg-${stat.color}/20 text-${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline">
              <div className="text-2xl font-bold mr-2">{stat.value}</div>
              <div className={`text-xs ${stat.indicator === 'up' ? 'text-cyber-green' : 'text-red-400'}`}>
                {stat.change}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Card className="cyber-panel border-cyber-blue/30 col-span-full md:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-foreground/70">
            Weekly Threat Detection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00f6ff" stopOpacity={1} />
                    <stop offset="100%" stopColor="#00f6ff" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.3} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f1631', 
                    borderColor: '#00f6ff33',
                    borderRadius: '0.5rem',
                    fontSize: '12px',
                  }} 
                />
                <Bar dataKey="threats" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="cyber-panel border-cyber-blue/30 col-span-full md:col-span-2">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-foreground/70">
            Phishing Attack Types (YTD)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.3} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <YAxis stroke="#64748b" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f1631', 
                    borderColor: '#00f6ff33',
                    borderRadius: '0.5rem',
                    fontSize: '12px',
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="spear" 
                  name="Spear Phishing"
                  stroke="#00f6ff" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mass" 
                  name="Mass Phishing"
                  stroke="#9b30ff" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThreatStats;
