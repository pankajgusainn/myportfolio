import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  type: 'symbol' | 'binary' | 'shape';
  content: string;
  color: string;
  opacity: number;
  glowIntensity: number;
  pulsePhase: number;
  rotationSpeed: number;
  rotation: number;
}

const TECH_SYMBOLS = ['</', '{}', '[]', '=>', '&&', '||', '++', '**'];
const BINARY = ['0', '1'];
const SHAPES = ['◆', '◇', '○', '□', '△', '▽'];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;
      canvas.style.height = `${window.innerHeight * 2}px`;
    };

    const getRandomContent = (type: 'symbol' | 'binary' | 'shape') => {
      switch (type) {
        case 'symbol':
          return TECH_SYMBOLS[Math.floor(Math.random() * TECH_SYMBOLS.length)];
        case 'binary':
          return BINARY[Math.floor(Math.random() * BINARY.length)];
        case 'shape':
          return SHAPES[Math.floor(Math.random() * SHAPES.length)];
      }
    };

    const getRandomColor = () => {
      const colors = [
        { r: 56, g: 189, b: 248 },  // Cyan
        { r: 139, g: 92, b: 246 },  // Purple
        { r: 45, g: 212, b: 191 },  // Teal
        { r: 99, g: 102, b: 241 },  // Indigo
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const createParticles = () => {
      particles.current = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const type = Math.random() < 0.4 ? 'symbol' : Math.random() < 0.7 ? 'binary' : 'shape';
        const color = getRandomColor();
        
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: type === 'shape' ? 12 : 14,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          type,
          content: getRandomContent(type),
          color: `rgb(${color.r}, ${color.g}, ${color.b})`,
          opacity: Math.random() * 0.5 + 0.3,
          glowIntensity: Math.random() * 0.5 + 0.5,
          pulsePhase: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          rotation: Math.random() * Math.PI * 2
        });
      }
    };

    const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      // Calculate pulsing opacity and size
      const pulseOpacity = 0.3 + Math.sin(particle.pulsePhase) * 0.2;
      const pulseSize = 1 + Math.sin(particle.pulsePhase) * 0.1;

      // Draw glow effect
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
      const glowColor = particle.color.replace('rgb', 'rgba').replace(')', `, ${particle.glowIntensity * pulseOpacity})`);
      gradient.addColorStop(0, glowColor);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(-particle.size * 2, -particle.size * 2, particle.size * 4, particle.size * 4);

      // Draw the content
      const contentColor = particle.color.replace('rgb', 'rgba').replace(')', `, ${particle.opacity * pulseOpacity})`);
      ctx.fillStyle = contentColor;
      ctx.font = `${particle.size * pulseSize}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(particle.content, 0, 0);

      ctx.restore();
    };

    const drawConnection = (
      ctx: CanvasRenderingContext2D,
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      distance: number
    ) => {
      const maxDistance = 150;
      const opacity = (1 - distance / maxDistance) * 0.2;
      
      ctx.beginPath();
      ctx.strokeStyle = `rgba(156, 163, 175, ${opacity})`;
      ctx.lineWidth = 0.5;
      
      // Create dashed line effect
      ctx.setLineDash([2, 2]);
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        // Update position and state
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        particle.pulsePhase += 0.02;

        // Boundary check with smooth transition
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Mouse interaction
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100;
          particle.x -= Math.cos(angle) * force * 2;
          particle.y -= Math.sin(angle) * force * 2;
          particle.glowIntensity = Math.min(1, particle.glowIntensity + 0.05);
        } else {
          particle.glowIntensity = Math.max(
            particle.glowIntensity - 0.02,
            Math.random() * 0.5 + 0.5
          );
        }

        // Draw particle
        drawParticle(ctx, particle);

        // Draw connections
        particles.current.forEach((otherParticle) => {
          const pdx = particle.x - otherParticle.x;
          const pdy = particle.y - otherParticle.y;
          const particleDistance = Math.sqrt(pdx * pdx + pdy * pdy);

          if (particleDistance < 150 && particleDistance > 0) {
            drawConnection(
              ctx,
              particle.x,
              particle.y,
              otherParticle.x,
              otherParticle.y,
              particleDistance
            );
          }
        });
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top + window.scrollY
      };
    };

    // Initial setup
    resizeCanvas();
    createParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        background: 'transparent', 
        zIndex: 1,
        opacity: 0.8,
      }}
    />
  );
}