import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // --- ENHANCED LUXURY CONFIGURATION ---
    const CONFIG = {
      // Increased density for more premium feel
      densityDivisor: 15000, 
      maxParticles: 150, 
      bgColor: '#000000',
      starColor: 'rgba(0, 255, 255, 0.8)', 
      // CONNECTION LOGIC
      connectionDistance: 120, 
      linkColor: 'rgba(255, 255, 255, 0.05)',
      // LUXURY FEATURES
      mouseRadius: 100, 
      packetChance: 0.004, 
      packetColor: '#FFFFFF',
      // NEW PREMIUM FEATURES
      pulseSpeed: 0.0002,
      glowIntensity: 15,
      constellationChance: 0.0015,
      energyWaveSpeed: 0.00008,
      particleTrailLength: 8,
      hypernovaChance: 0.00001,
      quantumFlickerSpeed: 0.0005,
      dimensionalRiftChance: 0.0002,
    };

    let w, h, animationId;
    let particles = [];
    let packets = []; 
    let mouse = { x: -1000, y: -1000 };
    let time = 0;
    let constellations = [];
    let energyWaves = [];
    let hypernovas = [];
    let dimensionalRifts = [];
    let particleTrails = new Map();

    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * w;
        this.y = y || Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        // FIXED SIZE with slight variation for depth
        this.size = Math.random() * 0.5 + 1.0;
        this.baseSize = this.size;
        // Premium particle properties
        this.hue = Math.random() * 60 - 30; // Color variation
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.5 + Math.random() * 1.5;
        this.glowIntensity = Math.random() * 0.3 + 0.7;
        this.isPremium = Math.random() > 0.85; // 15% are "premium" particles
        this.energyLevel = this.isPremium ? 1 : Math.random() * 0.5;
        this.trailPositions = [];
        this.quantumState = Math.random();
      }
      
      update() {
        // Store trail positions
        if (this.trailPositions.length > CONFIG.particleTrailLength) {
          this.trailPositions.shift();
        }
        this.trailPositions.push({ x: this.x, y: this.y });
        
        // Movement
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
        
        // Pulsing effect
        this.pulsePhase += CONFIG.pulseSpeed * this.pulseSpeed;
        this.size = this.baseSize * (1 + Math.sin(this.pulsePhase) * 0.3);
        
        // Quantum flicker
        this.quantumState += (Math.random() - 0.5) * CONFIG.quantumFlickerSpeed;
        this.quantumState = Math.max(0.3, Math.min(1, this.quantumState));
        
        // Mouse attraction for premium particles
        if (this.isPremium) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONFIG.mouseRadius * 1.5) {
            const force = (1 - dist / (CONFIG.mouseRadius * 1.5)) * 0.15;
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
            // Damping
            this.vx *= 0.95;
            this.vy *= 0.95;
          }
        }
      }
      
      draw() {
        // Draw particle trail (motion blur effect)
        if (this.trailPositions.length > 1) {
          ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * this.quantumState})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(this.trailPositions[0].x, this.trailPositions[0].y);
          for (let i = 1; i < this.trailPositions.length; i++) {
            const alpha = (i / this.trailPositions.length) * 0.1 * this.quantumState;
            ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
            ctx.lineTo(this.trailPositions[i].x, this.trailPositions[i].y);
          }
          ctx.stroke();
        }
        
        // Premium particle glow
        if (this.isPremium) {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
          gradient.addColorStop(0, `rgba(255, 0, 128, ${0.4 * this.energyLevel * this.quantumState})`);
          gradient.addColorStop(0.5, `rgba(0, 255, 255, ${0.2 * this.energyLevel * this.quantumState})`);
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Main particle with glow
        ctx.shadowBlur = CONFIG.glowIntensity * this.glowIntensity * this.quantumState;
        ctx.shadowColor = this.isPremium ? '#FF0080' : '#00FFFF';
        ctx.fillStyle = this.isPremium ? 
          `rgba(255, 0, 128, ${0.9 * this.quantumState})` : 
          `rgba(0, 255, 255, ${0.8 * this.quantumState})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Core highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 * this.quantumState})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class DataPacket {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.progress = 0;
        this.dead = false;
        this.speed = 0.01 + Math.random() * 0.02;
        this.color = Math.random() > 0.5 ? '#FF0080' : '#00FFFF';
        this.size = 1.2 + Math.random() * 0.8;
        this.pulsePhase = 0;
      }
      update() {
        this.progress += this.speed;
        this.pulsePhase += 0.2;
        if (this.progress >= 1) this.dead = true;
      }
      draw() {
        const cx = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
        const cy = this.p1.y + (this.p2.y - this.p1.y) * this.progress;
        
        // Packet trail
        const trailLength = 5;
        for (let i = 0; i < trailLength; i++) {
          const trailProgress = this.progress - (i * 0.02);
          if (trailProgress > 0) {
            const tx = this.p1.x + (this.p2.x - this.p1.x) * trailProgress;
            const ty = this.p1.y + (this.p2.y - this.p1.y) * trailProgress;
            const alpha = (1 - i / trailLength) * 0.3;
            ctx.fillStyle = `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.beginPath();
            ctx.arc(tx, ty, this.size * 0.6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        // Main packet with enhanced glow
        const pulseSize = this.size * (1 + Math.sin(this.pulsePhase) * 0.3);
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(cx, cy, pulseSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Outer glow ring
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `${this.color}40`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, pulseSize * 2, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    class Constellation {
      constructor(particleGroup) {
        this.particles = particleGroup;
        this.alpha = 0;
        this.maxAlpha = 0.3;
        this.growing = true;
        this.lifetime = 200 + Math.random() * 300;
        this.age = 0;
      }
      update() {
        this.age++;
        if (this.age > this.lifetime) {
          this.growing = false;
        }
        if (this.growing) {
          this.alpha = Math.min(this.maxAlpha, this.alpha + 0.005);
        } else {
          this.alpha = Math.max(0, this.alpha - 0.003);
        }
      }
      draw() {
        if (this.alpha <= 0) return;
        
        // Draw polygon connecting particles
        ctx.strokeStyle = `rgba(255, 0, 128, ${this.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        this.particles.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.stroke();
        
        // Fill with gradient
        if (this.particles.length >= 3) {
          const centerX = this.particles.reduce((sum, p) => sum + p.x, 0) / this.particles.length;
          const centerY = this.particles.reduce((sum, p) => sum + p.y, 0) / this.particles.length;
          const maxDist = Math.max(...this.particles.map(p => 
            Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2)
          ));
          
          const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxDist);
          gradient.addColorStop(0, `rgba(255, 0, 128, ${this.alpha * 0.1})`);
          gradient.addColorStop(1, 'rgba(255, 0, 128, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          this.particles.forEach((p, i) => {
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          });
          ctx.closePath();
          ctx.fill();
        }
      }
    }

    class EnergyWave {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 80 + Math.random() * 60;
        this.alpha = 0.6;
        this.color = color || '#00FFFF';
        this.speed = 1.5 + Math.random() * 1;
      }
      update() {
        this.radius += this.speed;
        this.alpha *= 0.96;
      }
      draw() {
        if (this.alpha < 0.01) return;
        ctx.strokeStyle = `${this.color}${Math.floor(this.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Inner ring
        ctx.strokeStyle = `${this.color}${Math.floor(this.alpha * 0.5 * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 0.8, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    class Hypernova {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        this.alpha = 1;
        this.lifetime = 150;
        this.age = 0;
        
        // Create explosion particles
        const count = 30 + Math.floor(Math.random() * 20);
        for (let i = 0; i < count; i++) {
          const angle = (Math.PI * 2 * i) / count;
          const speed = 2 + Math.random() * 3;
          this.particles.push({
            x: this.x,
            y: this.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: 1 + Math.random() * 2,
            color: Math.random() > 0.5 ? '#FF0080' : '#00FFFF',
            decay: 0.96 + Math.random() * 0.03
          });
        }
      }
      update() {
        this.age++;
        this.alpha = 1 - (this.age / this.lifetime);
        this.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= p.decay;
          p.vy *= p.decay;
        });
      }
      draw() {
        if (this.alpha <= 0) return;
        
        // Central flash
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 40);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.alpha * 0.8})`);
        gradient.addColorStop(0.5, `rgba(255, 0, 128, ${this.alpha * 0.4})`);
        gradient.addColorStop(1, 'rgba(255, 0, 128, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 40, 0, Math.PI * 2);
        ctx.fill();
        
        // Explosion particles
        this.particles.forEach(p => {
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fillStyle = `${p.color}${Math.floor(this.alpha * 255).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }
    }

    class DimensionalRift {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 100;
        this.alpha = 0;
        this.growing = true;
        this.age = 0;
        this.lifetime = 250;
        this.rotation = 0;
      }
      update() {
        this.age++;
        this.rotation += 0.02;
        
        if (this.growing) {
          this.radius = Math.min(this.maxRadius, this.radius + 1.5);
          this.alpha = Math.min(0.6, this.alpha + 0.02);
          if (this.radius >= this.maxRadius) this.growing = false;
        } else {
          this.alpha = Math.max(0, this.alpha - 0.005);
        }
        
        if (this.age > this.lifetime) this.alpha = 0;
      }
      draw() {
        if (this.alpha <= 0) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Spiral effect
        for (let i = 0; i < 5; i++) {
          const spiralRadius = this.radius * (1 - i * 0.15);
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, spiralRadius);
          gradient.addColorStop(0, 'rgba(255, 0, 128, 0)');
          gradient.addColorStop(0.7, `rgba(255, 0, 128, ${this.alpha * 0.1})`);
          gradient.addColorStop(1, `rgba(0, 255, 255, ${this.alpha * 0.2})`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, spiralRadius, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Distortion rings
        for (let i = 0; i < 3; i++) {
          ctx.strokeStyle = `rgba(255, 0, 128, ${this.alpha * 0.3})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.ellipse(0, 0, this.radius * (0.5 + i * 0.25), this.radius * (0.3 + i * 0.15), i * Math.PI / 3, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      packets = [];
      constellations = [];
      energyWaves = [];
      hypernovas = [];
      dimensionalRifts = [];
      particleTrails.clear();
      
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      
      const count = Math.min(Math.floor((w * h) / CONFIG.densityDivisor), CONFIG.maxParticles);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    };

    const animate = () => {
      time += CONFIG.energyWaveSpeed;
      
      // Fade effect for trails (instead of clear)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, w, h);
      
      // Ambient energy field (subtle background animation)
      const gradient = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w, h) / 2);
      gradient.addColorStop(0, `rgba(0, 255, 255, ${0.02 + Math.sin(time * 2) * 0.01})`);
      gradient.addColorStop(0.5, 'rgba(255, 0, 128, 0.01)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
      
      // Update and draw dimensional rifts
      dimensionalRifts = dimensionalRifts.filter(rift => {
        rift.update();
        rift.draw();
        return rift.alpha > 0;
      });
      
      // Update Particles
      particles.forEach(p => { 
        p.update(); 
        p.draw(); 
      });

      // Connections, Packets & Special Effects
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);

          if (dist < CONFIG.connectionDistance) {
            
            // Enhanced connection line with gradient
            const alpha = (1 - dist / CONFIG.connectionDistance) * 0.15;
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            
            if (p1.isPremium || p2.isPremium) {
              gradient.addColorStop(0, `rgba(255, 0, 128, ${alpha})`);
              gradient.addColorStop(0.5, `rgba(128, 128, 255, ${alpha * 0.5})`);
              gradient.addColorStop(1, `rgba(0, 255, 255, ${alpha})`);
            } else {
              gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.3})`);
              gradient.addColorStop(1, `rgba(0, 255, 255, ${alpha * 0.2})`);
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = p1.isPremium || p2.isPremium ? 0.8 : 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Energy pulse along connection
            if ((p1.isPremium || p2.isPremium) && Math.random() > 0.97) {
              const pulsePos = Math.sin(time * 10 + dist) * 0.5 + 0.5;
              const px = p1.x + (p2.x - p1.x) * pulsePos;
              const py = p1.y + (p2.y - p1.y) * pulsePos;
              
              ctx.shadowBlur = 15;
              ctx.shadowColor = '#FF0080';
              ctx.fillStyle = '#FF0080';
              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            }

            // Spawn Data Packet
            if (Math.random() < CONFIG.packetChance) {
              packets.push(new DataPacket(p1, p2));
              
              // Occasionally spawn energy wave
              if (Math.random() > 0.7) {
                const midX = (p1.x + p2.x) / 2;
                const midY = (p1.y + p2.y) / 2;
                energyWaves.push(new EnergyWave(midX, midY, p1.isPremium ? '#FF0080' : '#00FFFF'));
              }
            }
          }
        }
      }

      // Update and draw energy waves
      energyWaves = energyWaves.filter(wave => {
        wave.update();
        wave.draw();
        return wave.radius < wave.maxRadius && wave.alpha > 0.01;
      });

      // Update and draw packets
      packets = packets.filter(p => !p.dead);
      packets.forEach(p => { p.update(); p.draw(); });

      // Update and draw hypernovas
      hypernovas = hypernovas.filter(nova => {
        nova.update();
        nova.draw();
        return nova.alpha > 0;
      });

      // Constellation formation (random groups)
      if (Math.random() < CONFIG.constellationChance && constellations.length < 3) {
        const groupSize = 3 + Math.floor(Math.random() * 3);
        const nearbyParticles = particles
          .sort(() => Math.random() - 0.5)
          .slice(0, groupSize);
        constellations.push(new Constellation(nearbyParticles));
      }

      // Update and draw constellations
      constellations = constellations.filter(c => {
        c.update();
        c.draw();
        return c.alpha > 0;
      });

      // Random hypernova
      if (Math.random() < CONFIG.hypernovaChance) {
        const p = particles[Math.floor(Math.random() * particles.length)];
        hypernovas.push(new Hypernova(p.x, p.y));
      }

      // Random dimensional rift
      if (Math.random() < CONFIG.dimensionalRiftChance && dimensionalRifts.length < 2) {
        dimensionalRifts.push(new DimensionalRift(
          Math.random() * w,
          Math.random() * h
        ));
      }

      // ENHANCED Mouse Interaction
      if (mouse.x > 0) {
        // Mouse aura
        const mouseGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, CONFIG.mouseRadius);
        mouseGradient.addColorStop(0, 'rgba(255, 0, 128, 0.08)');
        mouseGradient.addColorStop(0.5, 'rgba(255, 0, 128, 0.03)');
        mouseGradient.addColorStop(1, 'rgba(255, 0, 128, 0)');
        ctx.fillStyle = mouseGradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, CONFIG.mouseRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Orbital rings around cursor
        for (let i = 0; i < 3; i++) {
          const ringRadius = CONFIG.mouseRadius * (0.3 + i * 0.25);
          const ringAlpha = 0.15 - i * 0.04;
          ctx.strokeStyle = `rgba(255, 0, 128, ${ringAlpha})`;
          ctx.lineWidth = 1.5 - i * 0.3;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, ringRadius, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        // Draw Magnetic Lines with enhanced effects
        let magneticConnections = 0;
        particles.forEach(p => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if(dist < CONFIG.mouseRadius) {
            magneticConnections++;
            const alpha = (1 - dist / CONFIG.mouseRadius) * 0.6;
            
            // Gradient magnetic line
            const lineGradient = ctx.createLinearGradient(mouse.x, mouse.y, p.x, p.y);
            lineGradient.addColorStop(0, `rgba(255, 0, 128, ${alpha})`);
            lineGradient.addColorStop(0.7, `rgba(255, 128, 192, ${alpha * 0.5})`);
            lineGradient.addColorStop(1, `rgba(0, 255, 255, ${alpha * 0.3})`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = p.isPremium ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
            
            // Energy particles along magnetic line
            if (p.isPremium && Math.random() > 0.85) {
              const particlePos = Math.random();
              const epx = mouse.x + dx * particlePos;
              const epy = mouse.y + dy * particlePos;
              
              ctx.shadowBlur = 8;
              ctx.shadowColor = '#FF0080';
              ctx.fillStyle = '#FFFFFF';
              ctx.beginPath();
              ctx.arc(epx, epy, 1, 0, Math.PI * 2);
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        });
        
        // Spawn energy wave on high magnetic activity
        if (magneticConnections > 10 && Math.random() > 0.95) {
          energyWaves.push(new EnergyWave(mouse.x, mouse.y, '#FF0080'));
        }
      }

      // Scan line effect (premium feel)
      const scanY = (time * 100) % h;
      const scanGradient = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2);
      scanGradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
      scanGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.05)');
      scanGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
      ctx.fillStyle = scanGradient;
      ctx.fillRect(0, scanY - 2, w, 4);

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => { init(); };
    
    const handleMouseMove = (e) => { 
      mouse.x = e.clientX; 
      mouse.y = e.clientY;
      
      // Spawn occasional energy wave on mouse movement
      if (Math.random() > 0.97) {
        energyWaves.push(new EnergyWave(mouse.x, mouse.y, '#FF0080'));
      }
    };
    
    const handleClick = (e) => {
      // Click creates hypernova
      hypernovas.push(new Hypernova(e.clientX, e.clientY));
      
      // And a dimensional rift
      if (Math.random() > 0.5) {
        dimensionalRifts.push(new DimensionalRift(e.clientX, e.clientY));
      }
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-black pointer-events-none">
      <div className="absolute inset-0 bg-black"></div>
      
      {/* --- HERE IS THE FIX: OPACITY 70 --- */}
      <canvas ref={canvasRef} className="absolute inset-0 block opacity-70" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80"></div>
      {/* Premium vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(0,0,0,0.4)_70%,#000000_100%)]"></div>
      {/* Subtle top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
    </div>
  );
};

export default Background;