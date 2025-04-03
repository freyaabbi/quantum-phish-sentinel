
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for the quantum circuit visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle system
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      decreasing: boolean;
    }[] = [];

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: [
          '#00f6ff',  // cyber-blue
          '#00a3ff',  // bright-blue
          '#9b30ff',  // purple
          '#7e1fff',  // violet
          '#39ff14',  // green
        ][Math.floor(Math.random() * 5)],
        alpha: Math.random() * 0.5 + 0.2,
        decreasing: Math.random() > 0.5
      });
    }

    // Lines between particles
    const connectParticles = (p1: typeof particles[0], p2: typeof particles[0]) => {
      const maxDistance = 100;
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < maxDistance) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 246, 255, ${0.15 * (1 - distance / maxDistance)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Update alpha for pulsing effect
        if (p.decreasing) {
          p.alpha -= 0.005;
          if (p.alpha <= 0.1) {
            p.decreasing = false;
          }
        } else {
          p.alpha += 0.005;
          if (p.alpha >= 0.5) {
            p.decreasing = true;
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.alpha})`).replace('rgb', 'rgba');
        ctx.fill();
        
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          connectParticles(p, particles[j]);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background canvas for quantum visualization */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyber-green/40 bg-cyber-green/10 text-cyber-green text-sm font-medium mb-4">
              <Zap className="mr-1 h-3.5 w-3.5" />
              <span>Quantum-Powered Security</span>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="cyber-heading">🔍 Detecting Phishing</span>
              <br />
              <span className="cyber-heading">with Quantum Precision</span>
            </h1>
            
            <p className="text-foreground/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              The next generation of email security powered by quantum algorithms and artificial intelligence. Stay ahead of threats with unprecedented accuracy.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/analysis">
                <Button size="lg" className="font-orbitron bg-cyber-blue text-cyber-black hover:bg-cyber-brightblue">
                  Scan an Email Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="cyber-button">
                  View Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyber-blue/20 mb-2">
                  <ShieldCheck className="w-5 h-5 text-cyber-blue" />
                </div>
                <p className="text-sm text-foreground/80">Advanced Protection</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyber-purple/20 mb-2">
                  <Zap className="w-5 h-5 text-cyber-purple" />
                </div>
                <p className="text-sm text-foreground/80">Quantum-Powered</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyber-green/20 mb-2">
                  <Globe className="w-5 h-5 text-cyber-green" />
                </div>
                <p className="text-sm text-foreground/80">Global Intel</p>
              </div>
            </div>
          </div>
          
          {/* 3D Visualization */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto animate-float">
              <div className="aspect-square rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple opacity-30 blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4"></div>
              
              {/* Circuit board visualization */}
              <svg
                className="w-full h-auto relative z-10"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Quantum circuit paths - animated in CSS */}
                <g className="circuit-paths">
                  <path d="M150 30 L150 270" strokeWidth="2" strokeDasharray="3,3" />
                  <path d="M70 90 L230 90" strokeWidth="2" />
                  <path d="M70 150 L230 150" strokeWidth="2" />
                  <path d="M70 210 L230 210" strokeWidth="2" />
                  
                  <path d="M90 30 L90 270" strokeWidth="2" strokeDasharray="3,3" />
                  <path d="M210 30 L210 270" strokeWidth="2" strokeDasharray="3,3" />
                  
                  <path d="M150 90 L150 150" strokeWidth="3" className="animate-circuit-flow" />
                  <path d="M90 150 L90 210" strokeWidth="3" className="animate-circuit-flow" />
                  <path d="M210 90 L210 210" strokeWidth="3" className="animate-circuit-flow" />
                </g>
                
                {/* Quantum gates */}
                <rect x="140" y="80" width="20" height="20" fill="#00f6ff" opacity="0.8" className="animate-pulse-glow" />
                <rect x="80" y="140" width="20" height="20" fill="#9b30ff" opacity="0.8" className="animate-pulse-glow" />
                <rect x="200" y="140" width="20" height="20" fill="#39ff14" opacity="0.8" className="animate-pulse-glow" />
                <rect x="140" y="200" width="20" height="20" fill="#00a3ff" opacity="0.8" className="animate-pulse-glow" />
                
                {/* Connecting circles */}
                <circle cx="90" cy="90" r="5" fill="#00f6ff" />
                <circle cx="210" cy="90" r="5" fill="#00f6ff" />
                <circle cx="150" cy="150" r="5" fill="#9b30ff" />
                <circle cx="90" cy="210" r="5" fill="#39ff14" />
                <circle cx="210" cy="210" r="5" fill="#39ff14" />
                
                {/* Decorative elements */}
                <circle cx="150" cy="150" r="60" stroke="#00f6ff" strokeWidth="1" opacity="0.3" className="animate-rotate-slow" />
                <circle cx="150" cy="150" r="90" stroke="#9b30ff" strokeWidth="1" opacity="0.2" className="animate-rotate-slow" />
              </svg>
              
              {/* Scanning line effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
                <div className="w-full h-8 bg-gradient-to-b from-cyber-blue/30 to-transparent animate-scanning"></div>
              </div>
              
              {/* Glass reflections */}
              <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full" style={{height: "60px"}} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0f1631" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#0f1631" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#0f1631"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
