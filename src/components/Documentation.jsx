import React, { useState, useEffect, useRef } from 'react';

/**
 * VISULYXA Documentation Component - SYSTEM CONTROL MANUAL
 * Ultra-premium Bento Grid layout with HUD-style interface
 * Seamlessly integrates with Projects.jsx aesthetic
 */

// ==================== ICON LIBRARY ====================
const Icons = {
  Book: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  ),
  
  Terminal: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  ),
  
  Zap: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  
  Activity: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  ),
  
  GitBranch: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15"></line>
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
  ),
  
  Cpu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <line x1="9" y1="1" x2="9" y2="4"></line>
      <line x1="15" y1="1" x2="15" y2="4"></line>
      <line x1="9" y1="20" x2="9" y2="23"></line>
      <line x1="15" y1="20" x2="15" y2="23"></line>
      <line x1="20" y1="9" x2="23" y2="9"></line>
      <line x1="20" y1="14" x2="23" y2="14"></line>
      <line x1="1" y1="9" x2="4" y2="9"></line>
      <line x1="1" y1="14" x2="4" y2="14"></line>
    </svg>
  ),
  
  AlertCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  ),
  
  CheckCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  
  Code: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  
  Layers: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  ),
  
  Server: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  
  Play: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  ),
  
  RotateCcw: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="1 4 1 10 7 10"></polyline>
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
    </svg>
  ),
  
  Sparkles: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
      <path d="M5 3v4"></path>
      <path d="M19 17v4"></path>
      <path d="M3 5h4"></path>
      <path d="M17 19h4"></path>
    </svg>
  ),
  
  Database: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
};

const Documentation = () => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeShortcut, setActiveShortcut] = useState(null);
  const [systemStatus, setSystemStatus] = useState({
    cpu: 0,
    memory: 0,
    throughput: 0,
  });
  const sectionRef = useRef(null);

  // ==================== INTERSECTION OBSERVER ====================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // ==================== SIMULATED SYSTEM METRICS ====================
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus({
        cpu: Math.floor(Math.random() * 30) + 15,
        memory: Math.floor(Math.random() * 40) + 30,
        throughput: Math.floor(Math.random() * 50) + 50,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // ==================== GLASS MORPHISM STYLES ====================
  const glassStyle = {
    background: 'rgba(10, 10, 20, 0.6)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };

  const glassStyleStrong = {
    background: 'rgba(10, 10, 20, 0.85)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    border: '1px solid rgba(0, 247, 255, 0.2)',
  };

  // ==================== VISUAL LEGEND DATA ====================
  const visualLegend = [
    {
      color: '#00FF00',
      label: 'Node Insertion',
      description: 'Active node creation in tree structure',
      icon: '●',
      animationType: 'pulse',
    },
    {
      color: '#FF0080',
      label: 'Node Deletion',
      description: 'Removal operation with cleanup',
      icon: '●',
      animationType: 'flash',
    },
    {
      color: '#9333EA',
      label: 'Traversal Path',
      description: 'Active scanning sequence visualization',
      icon: '●',
      animationType: 'flow',
    },
    {
      color: '#00F7FF',
      label: 'Selected Node',
      description: 'Current focus target in operation',
      icon: '●',
      animationType: 'glow',
    },
    {
      color: '#FFBD2E',
      label: 'Warning State',
      description: 'Complexity threshold exceeded',
      icon: '●',
      animationType: 'blink',
    },
    {
      color: '#64748B',
      label: 'Inactive Node',
      description: 'Dormant state, awaiting operation',
      icon: '●',
      animationType: 'static',
    },
  ];

  // ==================== KEYBOARD SHORTCUTS DATA ====================
  const keyboardShortcuts = [
    {
      key: 'SPACE',
      action: 'Play / Pause',
      description: 'Toggle animation state',
      icon: <Icons.Play />,
    },
    {
      key: 'R',
      action: 'Reset System',
      description: 'Clear all nodes and restart',
      icon: <Icons.RotateCcw />,
    },
    {
      key: '←',
      action: 'Step Backward',
      description: 'Previous traversal frame',
      icon: <Icons.ArrowRight />,
      rotate: true,
    },
    {
      key: '→',
      action: 'Step Forward',
      description: 'Next traversal frame',
      icon: <Icons.ArrowRight />,
    },
    {
      key: '↑',
      action: 'Speed Up',
      description: 'Increase animation velocity',
      icon: <Icons.Zap />,
    },
    {
      key: '↓',
      action: 'Slow Down',
      description: 'Decrease animation velocity',
      icon: <Icons.Activity />,
    },
  ];

  // ==================== SYSTEM ARCHITECTURE FLOW ====================
  const architectureFlow = [
    {
      stage: 'INPUT',
      description: 'User commands & data injection',
      icon: <Icons.Terminal />,
      color: '#00F7FF',
    },
    {
      stage: 'PROCESS',
      description: 'Algorithm execution & tree manipulation',
      icon: <Icons.Cpu />,
      color: '#9333EA',
    },
    {
      stage: 'RENDER',
      description: 'Canvas visualization & frame rendering',
      icon: <Icons.Layers />,
      color: '#FF0080',
    },
  ];

  // ==================== QUICK START STEPS ====================
  const quickStartGuide = [
    {
      step: 1,
      title: 'Initialize System',
      description: 'Click the "New Tree" button to spawn root node',
      icon: <Icons.CheckCircle />,
    },
    {
      step: 2,
      title: 'Insert Nodes',
      description: 'Enter values and watch automatic BST insertion',
      icon: <Icons.CheckCircle />,
    },
    {
      step: 3,
      title: 'Select Algorithm',
      description: 'Choose traversal type from command panel',
      icon: <Icons.CheckCircle />,
    },
    {
      step: 4,
      title: 'Execute & Observe',
      description: 'Run visualization and analyze complexity metrics',
      icon: <Icons.CheckCircle />,
    },
  ];

  // ==================== TROUBLESHOOTING DATA ====================
  const troubleshooting = [
    {
      issue: 'Animation Lag',
      solution: 'Reduce tree size or disable shadows',
      severity: 'low',
    },
    {
      issue: 'Unbalanced Tree',
      solution: 'Use AVL mode or manual rebalancing',
      severity: 'medium',
    },
    {
      issue: 'Memory Overflow',
      solution: 'Clear nodes before exceeding 10k limit',
      severity: 'high',
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        id="documentation"
        className="relative w-full min-h-screen"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 50%, rgb(0,0,0) 100%)',
          paddingTop: '80px',
          paddingBottom: '120px',
        }}
      >
        {/* ==================== SECTION HEADER ==================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div
            className="text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div
                className="h-px w-8"
                style={{
                  background: 'linear-gradient(to right, transparent, #00F7FF)',
                }}
              />
              <span
                className="text-xs font-bold tracking-[0.3em] px-4 py-2 rounded-full"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  background: 'rgba(0, 247, 255, 0.1)',
                  border: '1px solid rgba(0, 247, 255, 0.3)',
                  color: '#00F7FF',
                }}
              >
                SYSTEM MANUAL
              </span>
              <div
                className="h-px w-8"
                style={{
                  background: 'linear-gradient(to left, transparent, #00F7FF)',
                }}
              />
            </div>

            {/* Main Title */}
            <h2
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #00F7FF 0%, #FF0080 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.02em',
              }}
            >
              Documentation
            </h2>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                lineHeight: '1.8',
              }}
            >
              Complete operational guide for VISULYXA neural visualization systems.
              Master the interface, understand the architecture, deploy with confidence.
            </p>
          </div>
        </div>

        {/* ==================== BENTO GRID LAYOUT ==================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            
            {/* ==================== CARD 1: VISUAL LEGEND (Large - Spans 2 Columns) ==================== */}
            <div
              className="lg:col-span-2 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                ...glassStyleStrong,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                boxShadow: hoveredCard === 'legend'
                  ? '0 20px 60px rgba(0, 247, 255, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
              onMouseEnter={() => setHoveredCard('legend')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: 'rgba(0, 247, 255, 0.1)',
                    border: '1px solid rgba(0, 247, 255, 0.3)',
                  }}
                >
                  <Icons.Sparkles />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Visual Legend
                  </h3>
                  <p
                    className="text-sm text-white/60"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Color-coded system indicators
                  </p>
                </div>
                <div
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    background: 'rgba(0, 247, 255, 0.1)',
                    color: '#00F7FF',
                    border: '1px solid rgba(0, 247, 255, 0.2)',
                  }}
                >
                  LIVE
                </div>
              </div>

              {/* Legend Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visualLegend.map((item, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="flex items-center gap-4">
                      {/* Animated Indicator */}
                      <div className="relative">
                        <div
                          className="w-6 h-6 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor: item.color,
                            boxShadow: `0 0 20px ${item.color}`,
                            animation: `${item.animationType} 2s ease-in-out infinite`,
                          }}
                        />
                        {/* Outer Ring */}
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            border: `2px solid ${item.color}`,
                            opacity: 0.3,
                            transform: 'scale(1.5)',
                            animation: 'pulse-ring 2s ease-in-out infinite',
                          }}
                        />
                      </div>

                      {/* Label */}
                      <div className="flex-1">
                        <p
                          className="text-sm font-bold text-white mb-1"
                          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-xs text-white/50"
                          style={{ fontFamily: "'Exo 2', sans-serif" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Info Bar */}
              <div
                className="mt-6 p-4 rounded-lg flex items-center justify-between"
                style={{
                  background: 'rgba(0, 247, 255, 0.05)',
                  border: '1px solid rgba(0, 247, 255, 0.2)',
                }}
              >
                <div className="flex items-center gap-2">
                  <Icons.Activity />
                  <span
                    className="text-sm text-white/80"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Real-time state synchronization active
                  </span>
                </div>
                <div
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{
                    boxShadow: '0 0 10px rgba(0, 255, 0, 0.6)',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  }}
                />
              </div>
            </div>

            {/* ==================== CARD 2: STATUS DASHBOARD (Medium) ==================== */}
            <div
              className="rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                ...glassStyleStrong,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
                boxShadow: hoveredCard === 'status'
                  ? '0 20px 60px rgba(147, 51, 234, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
              onMouseEnter={() => setHoveredCard('status')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: 'rgba(147, 51, 234, 0.1)',
                    border: '1px solid rgba(147, 51, 234, 0.3)',
                  }}
                >
                  <Icons.Server />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    System Status
                  </h3>
                  <p
                    className="text-xs text-white/60"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Live performance metrics
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-6">
                {/* CPU Usage */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className="text-xs text-white/70"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      CPU USAGE
                    </span>
                    <span
                      className="text-xs font-bold text-cyan-400"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {systemStatus.cpu}%
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${systemStatus.cpu}%`,
                        background: 'linear-gradient(90deg, #00F7FF, #9333EA)',
                        boxShadow: '0 0 10px rgba(0, 247, 255, 0.5)',
                      }}
                    />
                  </div>
                </div>

                {/* Memory */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className="text-xs text-white/70"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      MEMORY HEAP
                    </span>
                    <span
                      className="text-xs font-bold text-purple-400"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {systemStatus.memory}%
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${systemStatus.memory}%`,
                        background: 'linear-gradient(90deg, #9333EA, #FF0080)',
                        boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)',
                      }}
                    />
                  </div>
                </div>

                {/* Throughput */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span
                      className="text-xs text-white/70"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      THROUGHPUT
                    </span>
                    <span
                      className="text-xs font-bold text-pink-400"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {systemStatus.throughput}%
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${systemStatus.throughput}%`,
                        background: 'linear-gradient(90deg, #FF0080, #FFBD2E)',
                        boxShadow: '0 0 10px rgba(255, 0, 128, 0.5)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* System Info */}
              <div
                className="mt-6 p-4 rounded-lg space-y-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex justify-between text-xs">
                  <span
                    className="text-white/50"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Runtime
                  </span>
                  <span
                    className="text-cyan-400 font-bold"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    00:47:23
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span
                    className="text-white/50"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Processes
                  </span>
                  <span
                    className="text-purple-400 font-bold"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    3 Active
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span
                    className="text-white/50"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Version
                  </span>
                  <span
                    className="text-pink-400 font-bold"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    v3.7.2
                  </span>
                </div>
              </div>
            </div>

            {/* ==================== CARD 3: KEYBOARD SHORTCUTS (Large - Spans 2 Columns) ==================== */}
            <div
              className="lg:col-span-2 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                ...glassStyleStrong,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
                boxShadow: hoveredCard === 'shortcuts'
                  ? '0 20px 60px rgba(255, 0, 128, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
              onMouseEnter={() => setHoveredCard('shortcuts')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: 'rgba(255, 0, 128, 0.1)',
                    border: '1px solid rgba(255, 0, 128, 0.3)',
                  }}
                >
                  <Icons.Terminal />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Command Center
                  </h3>
                  <p
                    className="text-sm text-white/60"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Keyboard shortcuts for rapid execution
                  </p>
                </div>
              </div>

              {/* Shortcuts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyboardShortcuts.map((shortcut, idx) => (
                  <div
                    key={idx}
                    className="group p-5 rounded-xl cursor-pointer transition-all duration-300"
                    style={{
                      background: activeShortcut === idx
                        ? 'rgba(255, 0, 128, 0.15)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: activeShortcut === idx
                        ? '1px solid rgba(255, 0, 128, 0.4)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      transform: activeShortcut === idx ? 'scale(1.05)' : 'scale(1)',
                    }}
                    onMouseEnter={() => setActiveShortcut(idx)}
                    onMouseLeave={() => setActiveShortcut(null)}
                  >
                    {/* Key Cap */}
                    <div className="mb-4">
                      <div
                        className="inline-flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300"
                        style={{
                          background: activeShortcut === idx
                            ? 'linear-gradient(135deg, rgba(255, 0, 128, 0.2), rgba(147, 51, 234, 0.2))'
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: activeShortcut === idx
                            ? '0 8px 20px rgba(255, 0, 128, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                            : '0 4px 10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                          minWidth: '60px',
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          color: activeShortcut === idx ? '#FF0080' : '#fff',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {shortcut.key}
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="text-pink-400 transition-transform duration-300"
                        style={{
                          transform: activeShortcut === idx
                            ? shortcut.rotate
                              ? 'rotate(180deg) scale(1.2)'
                              : 'scale(1.2)'
                            : 'scale(1)',
                        }}
                      >
                        {shortcut.icon}
                      </div>
                      <p
                        className="text-sm font-bold text-white"
                        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                      >
                        {shortcut.action}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="text-xs text-white/50"
                      style={{ fontFamily: "'Exo 2', sans-serif" }}
                    >
                      {shortcut.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Tip */}
              <div
                className="mt-6 p-4 rounded-lg flex items-start gap-3"
                style={{
                  background: 'rgba(255, 0, 128, 0.05)',
                  border: '1px solid rgba(255, 0, 128, 0.2)',
                }}
              >
                <div className="text-pink-400 mt-0.5">
                  <Icons.AlertCircle />
                </div>
                <div>
                  <p
                    className="text-sm text-white/80 mb-1"
                    style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 'bold' }}
                  >
                    Pro Tip
                  </p>
                  <p
                    className="text-xs text-white/60"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    Hold SHIFT while using arrow keys for 5x speed adjustment. Press ESC to cancel any operation.
                  </p>
                </div>
              </div>
            </div>

            {/* ==================== CARD 4: SYSTEM ARCHITECTURE (Medium) ==================== */}
            <div
              className="rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                ...glassStyleStrong,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
                boxShadow: hoveredCard === 'architecture'
                  ? '0 20px 60px rgba(0, 247, 255, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
              onMouseEnter={() => setHoveredCard('architecture')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: 'rgba(0, 247, 255, 0.1)',
                    border: '1px solid rgba(0, 247, 255, 0.3)',
                  }}
                >
                  <Icons.GitBranch />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    System Logic
                  </h3>
                  <p
                    className="text-xs text-white/60"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Data flow architecture
                  </p>
                </div>
              </div>

              {/* Flow Diagram */}
              <div className="space-y-6">
                {architectureFlow.map((stage, idx) => (
                  <div key={idx}>
                    {/* Stage Card */}
                    <div
                      className="p-5 rounded-xl transition-all duration-300"
                      style={{
                        background: `${stage.color}10`,
                        border: `1px solid ${stage.color}40`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="p-2 rounded-lg"
                          style={{
                            background: `${stage.color}20`,
                            color: stage.color,
                          }}
                        >
                          {stage.icon}
                        </div>
                        <h4
                          className="text-lg font-bold"
                          style={{
                            fontFamily: "'Orbitron', sans-serif",
                            color: stage.color,
                          }}
                        >
                          {stage.stage}
                        </h4>
                      </div>
                      <p
                        className="text-sm text-white/70"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {stage.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    {idx < architectureFlow.length - 1 && (
                      <div className="flex justify-center my-3">
                        <div
                          className="text-white/30"
                          style={{
                            transform: 'rotate(90deg)',
                          }}
                        >
                          <Icons.ArrowRight />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Latency Info */}
              <div
                className="mt-6 p-4 rounded-lg"
                style={{
                  background: 'rgba(0, 247, 255, 0.05)',
                  border: '1px solid rgba(0, 247, 255, 0.2)',
                }}
              >
                <div className="flex justify-between items-center">
                  <span
                    className="text-xs text-white/70"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    AVG LATENCY
                  </span>
                  <span
                    className="text-sm font-bold text-cyan-400"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {'<'} 16ms
                  </span>
                </div>
              </div>
            </div>

            {/* ==================== CARD 5: QUICK START GUIDE (Medium) ==================== */}
            <div
              className="rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                ...glassStyleStrong,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
                boxShadow: hoveredCard === 'quickstart'
                  ? '0 20px 60px rgba(147, 51, 234, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
              onMouseEnter={() => setHoveredCard('quickstart')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: 'rgba(147, 51, 234, 0.1)',
                    border: '1px solid rgba(147, 51, 234, 0.3)',
                  }}
                >
                  <Icons.Zap />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Quick Start
                  </h3>
                  <p
                    className="text-xs text-white/60"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Get running in 4 steps
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {quickStartGuide.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Step Number */}
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{
                        background: 'linear-gradient(135deg, #9333EA, #FF0080)',
                        fontFamily: "'Space Mono', monospace",
                        color: 'white',
                      }}
                    >
                      {item.step}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p
                        className="text-sm font-bold text-white mb-1"
                        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-xs text-white/60"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Check Icon */}
                    <div className="flex-shrink-0 text-green-400">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== CARD 6: TROUBLESHOOTING (Medium) ==================== */}
            <div
              className="rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                ...glassStyleStrong,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s',
                boxShadow: hoveredCard === 'troubleshoot'
                  ? '0 20px 60px rgba(255, 0, 128, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
              onMouseEnter={() => setHoveredCard('troubleshoot')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="p-3 rounded-lg"
                  style={{
                    background: 'rgba(255, 0, 128, 0.1)',
                    border: '1px solid rgba(255, 0, 128, 0.3)',
                  }}
                >
                  <Icons.AlertCircle />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    Troubleshooting
                  </h3>
                  <p
                    className="text-xs text-white/60"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Common issues & fixes
                  </p>
                </div>
              </div>

              {/* Issues */}
              <div className="space-y-3">
                {troubleshooting.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Issue */}
                    <div className="flex items-start justify-between mb-2">
                      <p
                        className="text-sm font-bold text-white"
                        style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                      >
                        {item.issue}
                      </p>
                      <div
                        className="px-2 py-1 rounded text-xs font-bold"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          background:
                            item.severity === 'high'
                              ? 'rgba(255, 0, 0, 0.2)'
                              : item.severity === 'medium'
                              ? 'rgba(255, 165, 0, 0.2)'
                              : 'rgba(0, 255, 0, 0.2)',
                          color:
                            item.severity === 'high'
                              ? '#ff6b6b'
                              : item.severity === 'medium'
                              ? '#ffa500'
                              : '#00ff00',
                          border:
                            item.severity === 'high'
                              ? '1px solid rgba(255, 0, 0, 0.3)'
                              : item.severity === 'medium'
                              ? '1px solid rgba(255, 165, 0, 0.3)'
                              : '1px solid rgba(0, 255, 0, 0.3)',
                        }}
                      >
                        {item.severity.toUpperCase()}
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">→</span>
                      <p
                        className="text-xs text-white/70"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Help Link */}
              <div
                className="mt-6 p-4 rounded-lg text-center cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.1), rgba(147, 51, 234, 0.1))',
                  border: '1px solid rgba(255, 0, 128, 0.3)',
                }}
              >
                <p
                  className="text-sm font-bold text-pink-400"
                  style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                >
                  Need More Help?
                </p>
                <p
                  className="text-xs text-white/60 mt-1"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Contact support@visulyxa.io
                </p>
              </div>
            </div>

            {/* ==================== CARD 7: API REFERENCE (Large - Spans 3 Columns) ==================== */}
            <div
              className="lg:col-span-3 rounded-2xl p-8 transition-all duration-500 hover:scale-[1.01]"
              style={{
                ...glassStyleStrong,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s',
                boxShadow: hoveredCard === 'api'
                  ? '0 20px 60px rgba(0, 247, 255, 0.3)'
                  : '0 10px 30px rgba(0, 0, 0, 0.5)',
              }}
              onMouseEnter={() => setHoveredCard('api')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div
                    className="p-3 rounded-lg"
                    style={{
                      background: 'rgba(0, 247, 255, 0.1)',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                    }}
                  >
                    <Icons.Code />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                      API Reference
                    </h3>
                    <p
                      className="text-sm text-white/60"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      Core methods and interfaces
                    </p>
                  </div>
                </div>
                <div
                  className="px-4 py-2 rounded-lg"
                  style={{
                    background: 'rgba(0, 247, 255, 0.1)',
                    border: '1px solid rgba(0, 247, 255, 0.2)',
                  }}
                >
                  <span
                    className="text-xs font-bold text-cyan-400"
                    style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}
                  >
                    BETA
                  </span>
                </div>
              </div>

              {/* API Methods Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Method 1 */}
                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: 'rgba(0, 247, 255, 0.05)',
                    border: '1px solid rgba(0, 247, 255, 0.2)',
                  }}
                >
                  <div
                    className="inline-block px-3 py-1 rounded mb-4 text-xs font-bold"
                    style={{
                      background: 'rgba(0, 247, 255, 0.2)',
                      color: '#00F7FF',
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    METHOD
                  </div>
                  <h4
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                  >
                    insertNode(value)
                  </h4>
                  <p
                    className="text-sm text-white/70 mb-4"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    Inserts a new node into the binary search tree structure
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="text-white/50"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Param:
                      </span>
                      <span
                        className="text-purple-400 font-bold"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        number
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="text-white/50"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Returns:
                      </span>
                      <span
                        className="text-cyan-400 font-bold"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Node
                      </span>
                    </div>
                  </div>
                </div>

                {/* Method 2 */}
                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: 'rgba(147, 51, 234, 0.05)',
                    border: '1px solid rgba(147, 51, 234, 0.2)',
                  }}
                >
                  <div
                    className="inline-block px-3 py-1 rounded mb-4 text-xs font-bold"
                    style={{
                      background: 'rgba(147, 51, 234, 0.2)',
                      color: '#9333EA',
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    METHOD
                  </div>
                  <h4
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                  >
                    traverse(mode)
                  </h4>
                  <p
                    className="text-sm text-white/70 mb-4"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    Executes tree traversal in specified order pattern
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="text-white/50"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Param:
                      </span>
                      <span
                        className="text-purple-400 font-bold"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        string
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="text-white/50"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Returns:
                      </span>
                      <span
                        className="text-purple-400 font-bold"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Array
                      </span>
                    </div>
                  </div>
                </div>

                {/* Method 3 */}
                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: 'rgba(255, 0, 128, 0.05)',
                    border: '1px solid rgba(255, 0, 128, 0.2)',
                  }}
                >
                  <div
                    className="inline-block px-3 py-1 rounded mb-4 text-xs font-bold"
                    style={{
                      background: 'rgba(255, 0, 128, 0.2)',
                      color: '#FF0080',
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    METHOD
                  </div>
                  <h4
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                  >
                    deleteNode(value)
                  </h4>
                  <p
                    className="text-sm text-white/70 mb-4"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    Removes node and rebalances tree structure automatically
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="text-white/50"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Param:
                      </span>
                      <span
                        className="text-purple-400 font-bold"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        number
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className="text-white/50"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        Returns:
                      </span>
                      <span
                        className="text-pink-400 font-bold"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        boolean
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div
                className="mt-8 p-6 rounded-xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: '1px solid rgba(0, 247, 255, 0.2)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p
                    className="text-xs font-bold text-cyan-400"
                    style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.15em' }}
                  >
                    EXAMPLE USAGE
                  </p>
                  <button
                    className="px-3 py-1 rounded text-xs font-bold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(0, 247, 255, 0.1)',
                      color: '#00F7FF',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    COPY
                  </button>
                </div>
                <pre
                  className="text-sm overflow-x-auto"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: '#fff',
                    lineHeight: '1.6',
                  }}
                >
                  <code>
                    <span style={{ color: '#FF0080' }}>const</span>{' '}
                    <span style={{ color: '#fff' }}>tree</span>{' '}
                    <span style={{ color: '#fff' }}>=</span>{' '}
                    <span style={{ color: '#FF0080' }}>new</span>{' '}
                    <span style={{ color: '#00F7FF' }}>BinaryTree</span>
                    <span style={{ color: '#fff' }}>();</span>
                    {'\n'}
                    <span style={{ color: '#fff' }}>tree.</span>
                    <span style={{ color: '#9333EA' }}>insertNode</span>
                    <span style={{ color: '#fff' }}>(</span>
                    <span style={{ color: '#FFBD2E' }}>50</span>
                    <span style={{ color: '#fff' }}>);</span>
                    {'\n'}
                    <span style={{ color: '#FF0080' }}>const</span>{' '}
                    <span style={{ color: '#fff' }}>path</span>{' '}
                    <span style={{ color: '#fff' }}>=</span>{' '}
                    <span style={{ color: '#fff' }}>tree.</span>
                    <span style={{ color: '#9333EA' }}>traverse</span>
                    <span style={{ color: '#fff' }}>(</span>
                    <span style={{ color: '#00FF00' }}>'inorder'</span>
                    <span style={{ color: '#fff' }}>);</span>
                  </code>
                </pre>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== GLOBAL STYLES ==================== */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes flash {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes flow {
          0% {
            box-shadow: 0 0 10px currentColor;
          }
          50% {
            box-shadow: 0 0 25px currentColor;
          }
          100% {
            box-shadow: 0 0 10px currentColor;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 15px currentColor;
          }
          50% {
            box-shadow: 0 0 30px currentColor, 0 0 40px currentColor;
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes static {
          0%, 100% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1.5);
            opacity: 0.3;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Documentation;