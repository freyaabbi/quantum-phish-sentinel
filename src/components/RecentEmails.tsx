
import { Badge } from '@/components/ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

// Sample data for recent emails
const recentEmails = [
  {
    id: 1,
    subject: 'Your Account Security Alert',
    sender: 'security-alert@bankingsecure.net',
    receivedAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    score: 92,
    status: 'dangerous',
  },
  {
    id: 2,
    subject: 'Invoice #INV-2023-11-28',
    sender: 'accounting@acme-corp.com',
    receivedAt: new Date(Date.now() - 1000 * 60 * 120), // 2 hours ago
    score: 12,
    status: 'safe',
  },
  {
    id: 3,
    subject: 'Action Required: Verify Your Information',
    sender: 'customer-service@amazondelivery.co',
    receivedAt: new Date(Date.now() - 1000 * 60 * 180), // 3 hours ago
    score: 75,
    status: 'suspicious',
  },
  {
    id: 4,
    subject: 'Your Package Delivery Notification',
    sender: 'no-reply@shipping-notification.info',
    receivedAt: new Date(Date.now() - 1000 * 60 * 240), // 4 hours ago
    score: 88,
    status: 'dangerous',
  },
  {
    id: 5,
    subject: 'Team Meeting Notes - Nov 28',
    sender: 'sara.johnson@yourcompany.com',
    receivedAt: new Date(Date.now() - 1000 * 60 * 320), // 5.3 hours ago
    score: 3,
    status: 'safe',
  },
  {
    id: 6,
    subject: 'Urgent: Wire Transfer Request',
    sender: 'ceo.office@company-intl.co',
    receivedAt: new Date(Date.now() - 1000 * 60 * 400), // 6.7 hours ago
    score: 95,
    status: 'dangerous',
  }
];

const RecentEmails = () => {
  const getScoreBadge = (score: number, status: string) => {
    if (status === 'safe') {
      return (
        <div className="flex items-center">
          <CheckCircle className="w-3.5 h-3.5 text-cyber-green mr-1" />
          <span className="text-cyber-green">{score}%</span>
        </div>
      );
    } else if (status === 'suspicious') {
      return (
        <div className="flex items-center">
          <AlertTriangle className="w-3.5 h-3.5 text-yellow-500 mr-1" />
          <span className="text-yellow-500">{score}%</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center">
          <AlertCircle className="w-3.5 h-3.5 text-red-500 mr-1" />
          <span className="text-red-500">{score}%</span>
        </div>
      );
    }
  };
  
  const getStatusBadge = (status: string) => {
    if (status === 'safe') {
      return <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green/30">Safe</Badge>;
    } else if (status === 'suspicious') {
      return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Suspicious</Badge>;
    } else {
      return <Badge className="bg-red-500/20 text-red-500 border-red-500/30">Dangerous</Badge>;
    }
  };

  return (
    <div className="cyber-panel border-cyber-blue/30">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-orbitron cyber-heading">Recent Analyzed Emails</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase text-foreground/60 border-b border-cyber-blue/20">
            <tr>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Sender</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Score</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyber-blue/10">
            {recentEmails.map((email) => (
              <tr 
                key={email.id} 
                className="hover:bg-cyber-blue/5 transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 font-medium truncate max-w-[200px]">
                  {email.subject}
                </td>
                <td className="px-4 py-3 text-foreground/70 truncate max-w-[180px]">
                  {email.sender}
                </td>
                <td className="px-4 py-3 text-foreground/70">
                  {formatDistanceToNow(email.receivedAt, { addSuffix: true })}
                </td>
                <td className="px-4 py-3">
                  {getScoreBadge(email.score, email.status)}
                </td>
                <td className="px-4 py-3">
                  {getStatusBadge(email.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentEmails;
