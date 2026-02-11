import React, { useState, useEffect, useRef } from 'react';

/**
 * VISULYXA Projects Component - ULTRA PREMIUM EDITION
 * Seamlessly blends with Hero.jsx using gradient transition
 * Features large row-based showcase cards with rich sci-fi content
 */

// ==================== ICON LIBRARY ====================
const Icons = {
  Terminal: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
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
  
  Database: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
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
  
  Code: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  
  Eye: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
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
  
  Layers: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  ),
  
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
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
  
  Sparkles: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
      <path d="M5 3v4"></path>
      <path d="M19 17v4"></path>
      <path d="M3 5h4"></path>
      <path d="M17 19h4"></path>
    </svg>
  ),
};

const Projects = () => {
  // ==================== STATE MANAGEMENT ====================
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeFeature, setActiveFeature] = useState({ tree: null, analyzer: null });
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

  // ==================== PROJECT HANDLERS ====================
  const handleBinaryTreeClick = () => {
    window.location.href = "/works/algos/binary-tree-visualizer/index.html";
  };

  const handleCodeAnalyzerClick = () => {
    alert("System Status: Neural Engine Loading...");
  };

  // ==================== PROJECT DATA ====================
  const projects = [
    {
      id: 'binary-tree',
      name: 'Binary Tree Visualizer',
      subtitle: 'NEURAL ARCHITECTURE MAPPING SYSTEM',
      description: 'Advanced tree structure visualization engine with real-time node traversal analytics. Built on quantum rendering algorithms for instantaneous state propagation across hierarchical data networks.',
      longDescription: 'Experience the future of data structure visualization with our proprietary Binary Tree Mapping System. Utilizing advanced rendering protocols and predictive analysis algorithms, this neural architecture engine provides real-time insights into tree topology, node relationships, and complexity metrics.',
      category: 'DATA STRUCTURES',
      systemType: 'CORE ENGINE',
      complexity: 'O(log n)',
      status: 'OPERATIONAL',
      version: 'v3.7.2',
      onClick: handleBinaryTreeClick,
      features: [
        {
          icon: <Icons.Activity />,
          title: 'Real-Time Traversal',
          description: 'Live visualization of Pre-Order, In-Order, Post-Order, and Level-Order traversal patterns with microsecond precision tracking'
        },
        {
          icon: <Icons.Database />,
          title: 'Memory Heap View',
          description: 'Advanced memory allocation monitoring with dynamic heap structure visualization and pointer reference mapping'
        },
        {
          icon: <Icons.Cpu />,
          title: 'Big-O Analysis',
          description: 'Real-time computational complexity analysis with asymptotic notation graphs and performance benchmarking'
        },
        {
          icon: <Icons.GitBranch />,
          title: 'Node Manipulation',
          description: 'Interactive insertion, deletion, and rotation operations with automatic tree balancing and structural integrity checks'
        },
        {
          icon: <Icons.Layers />,
          title: 'Tree Balancing',
          description: 'Automatic AVL and Red-Black tree balancing protocols with visual step-by-step transformation sequences'
        },
        {
          icon: <Icons.Eye />,
          title: 'Path Visualization',
          description: 'Highlighted path tracking from root to any node with distance metrics and depth calculations'
        }
      ],
      technologies: [
        { name: 'React Fiber', type: 'Rendering Engine' },
        { name: 'Canvas API', type: 'Graphics Layer' },
        { name: 'WebGL Shaders', type: 'Accelerated Compute' },
        { name: 'D3.js', type: 'Data Binding' }
      ],
      metrics: [
        { label: 'Processing Speed', value: '< 16ms', unit: 'per frame' },
        { label: 'Max Tree Size', value: '10,000+', unit: 'nodes' },
        { label: 'Render Quality', value: '4K', unit: 'resolution' },
        { label: 'Animation FPS', value: '60', unit: 'fps locked' }
      ],
      imageGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      imagePlaceholder: `
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="treeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="800" height="600" fill="#0a0a14"/>
          
          <!-- Grid Background -->
          <g opacity="0.1">
            ${Array.from({ length: 20 }, (_, i) => `
              <line x1="${i * 40}" y1="0" x2="${i * 40}" y2="600" stroke="#00F7FF" stroke-width="0.5"/>
              <line x1="0" y1="${i * 30}" x2="800" y2="${i * 30}" stroke="#00F7FF" stroke-width="0.5"/>
            `).join('')}
          </g>
          
          <!-- Tree Structure -->
          <g filter="url(#glow)">
            <!-- Root Node -->
            <circle cx="400" cy="100" r="30" fill="url(#treeGrad)" stroke="#00F7FF" stroke-width="3"/>
            <text x="400" y="110" text-anchor="middle" fill="white" font-family="Space Mono" font-size="20" font-weight="bold">50</text>
            
            <!-- Level 1 -->
            <line x1="400" y1="130" x2="300" y2="220" stroke="#00F7FF" stroke-width="2" opacity="0.6"/>
            <line x1="400" y1="130" x2="500" y2="220" stroke="#00F7FF" stroke-width="2" opacity="0.6"/>
            
            <circle cx="300" cy="250" r="25" fill="url(#treeGrad)" stroke="#00F7FF" stroke-width="2.5"/>
            <text x="300" y="258" text-anchor="middle" fill="white" font-family="Space Mono" font-size="18" font-weight="bold">30</text>
            
            <circle cx="500" cy="250" r="25" fill="url(#treeGrad)" stroke="#FF0080" stroke-width="2.5"/>
            <text x="500" y="258" text-anchor="middle" fill="white" font-family="Space Mono" font-size="18" font-weight="bold">70</text>
            
            <!-- Level 2 -->
            <line x1="300" y1="275" x2="240" y2="360" stroke="#00F7FF" stroke-width="2" opacity="0.4"/>
            <line x1="300" y1="275" x2="360" y2="360" stroke="#00F7FF" stroke-width="2" opacity="0.4"/>
            <line x1="500" y1="275" x2="440" y2="360" stroke="#FF0080" stroke-width="2" opacity="0.4"/>
            <line x1="500" y1="275" x2="560" y2="360" stroke="#FF0080" stroke-width="2" opacity="0.4"/>
            
            <circle cx="240" cy="390" r="20" fill="url(#treeGrad)" stroke="#00F7FF" stroke-width="2"/>
            <text x="240" y="397" text-anchor="middle" fill="white" font-family="Space Mono" font-size="16" font-weight="bold">20</text>
            
            <circle cx="360" cy="390" r="20" fill="url(#treeGrad)" stroke="#00F7FF" stroke-width="2"/>
            <text x="360" y="397" text-anchor="middle" fill="white" font-family="Space Mono" font-size="16" font-weight="bold">40</text>
            
            <circle cx="440" cy="390" r="20" fill="url(#treeGrad)" stroke="#FF0080" stroke-width="2"/>
            <text x="440" y="397" text-anchor="middle" fill="white" font-family="Space Mono" font-size="16" font-weight="bold">60</text>
            
            <circle cx="560" cy="390" r="20" fill="url(#treeGrad)" stroke="#FF0080" stroke-width="2"/>
            <text x="560" y="397" text-anchor="middle" fill="white" font-family="Space Mono" font-size="16" font-weight="bold">80</text>
          </g>
          
          <!-- Metrics Display -->
          <g opacity="0.9">
            <rect x="20" y="20" width="200" height="120" rx="10" fill="rgba(10,10,20,0.8)" stroke="#00F7FF" stroke-width="1.5"/>
            <text x="120" y="45" text-anchor="middle" fill="#00F7FF" font-family="Orbitron" font-size="12" font-weight="bold">TREE METRICS</text>
            <text x="35" y="70" fill="white" font-family="Space Mono" font-size="11">Height: 3</text>
            <text x="35" y="90" fill="white" font-family="Space Mono" font-size="11">Nodes: 7</text>
            <text x="35" y="110" fill="white" font-family="Space Mono" font-size="11">Balanced: TRUE</text>
            <text x="35" y="130" fill="#00F7FF" font-family="Space Mono" font-size="11">O(log n)</text>
          </g>
          
          <!-- Status Indicator -->
          <g opacity="0.9">
            <rect x="580" y="20" width="200" height="50" rx="10" fill="rgba(10,10,20,0.8)" stroke="#FF0080" stroke-width="1.5"/>
            <circle cx="600" cy="45" r="5" fill="#00FF00">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <text x="615" y="50" fill="white" font-family="Orbitron" font-size="13" font-weight="bold">SYSTEM ACTIVE</text>
          </g>
        </svg>
      `
    },
    {
      id: 'code-analyzer',
      name: 'Code Analyzer',
      subtitle: 'NEURAL CODE INTELLIGENCE ENGINE',
      description: 'Revolutionary static analysis platform powered by quantum pattern recognition. Detects vulnerabilities, optimizes performance, and provides intelligent refactoring suggestions through deep semantic understanding.',
      longDescription: 'Deploy our next-generation Code Intelligence System to transform your development workflow. Leveraging machine learning algorithms and advanced syntax parsing, this neural engine provides comprehensive code quality metrics, security vulnerability detection, and automated optimization recommendations in real-time.',
      category: 'DEVELOPMENT TOOLS',
      systemType: 'ANALYSIS CORE',
      complexity: 'O(n)',
      status: 'BETA ACCESS',
      version: 'v2.1.9',
      onClick: handleCodeAnalyzerClick,
      features: [
        {
          icon: <Icons.Terminal />,
          title: 'Syntax Parsing',
          description: 'Advanced multi-language syntax analysis with abstract syntax tree generation and semantic token classification'
        },
        {
          icon: <Icons.Zap />,
          title: 'Performance Metrics',
          description: 'Real-time code execution profiling with bottleneck detection, memory leak identification, and optimization suggestions'
        },
        {
          icon: <Icons.Server />,
          title: 'Security Scanning',
          description: 'Deep vulnerability analysis using OWASP Top 10 patterns, injection detection, and authentication flaw recognition'
        },
        {
          icon: <Icons.Code />,
          title: 'Smart Refactoring',
          description: 'AI-powered code restructuring with design pattern recommendations and maintainability score improvements'
        },
        {
          icon: <Icons.Sparkles />,
          title: 'Auto-Documentation',
          description: 'Intelligent comment generation and API documentation synthesis using natural language processing models'
        },
        {
          icon: <Icons.GitBranch />,
          title: 'Dependency Analysis',
          description: 'Package relationship mapping with circular dependency detection and version conflict resolution'
        }
      ],
      technologies: [
        { name: 'AST Parser', type: 'Syntax Engine' },
        { name: 'ESLint Core', type: 'Linting Framework' },
        { name: 'TensorFlow.js', type: 'ML Models' },
        { name: 'Monaco Editor', type: 'Code Interface' }
      ],
      metrics: [
        { label: 'Languages', value: '15+', unit: 'supported' },
        { label: 'Analysis Speed', value: '< 500ms', unit: 'per file' },
        { label: 'Accuracy', value: '98.7%', unit: 'detection' },
        { label: 'Rules', value: '300+', unit: 'active checks' }
      ],
      imageGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      imagePlaceholder: `
        <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#f093fb;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#f5576c;stop-opacity:1" />
            </linearGradient>
            <filter id="codeGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="800" height="600" fill="#0a0a14"/>
          
          <!-- Circuit Pattern Background -->
          <g opacity="0.08">
            <circle cx="100" cy="100" r="40" fill="none" stroke="#00F7FF" stroke-width="1"/>
            <circle cx="700" cy="500" r="60" fill="none" stroke="#FF0080" stroke-width="1"/>
            <line x1="100" y1="100" x2="700" y2="500" stroke="#00F7FF" stroke-width="0.5" stroke-dasharray="5,5"/>
          </g>
          
          <!-- Code Editor Window -->
          <g filter="url(#codeGlow)">
            <rect x="100" y="100" width="600" height="400" rx="10" fill="rgba(15,15,25,0.95)" stroke="url(#codeGrad)" stroke-width="2"/>
            
            <!-- Title Bar -->
            <rect x="100" y="100" width="600" height="40" rx="10" fill="url(#codeGrad)" opacity="0.9"/>
            <circle cx="120" cy="120" r="6" fill="#FF5F56"/>
            <circle cx="140" cy="120" r="6" fill="#FFBD2E"/>
            <circle cx="160" cy="120" r="6" fill="#27C93F"/>
            <text x="350" y="127" text-anchor="middle" fill="white" font-family="Orbitron" font-size="14" font-weight="bold">analyzer.js</text>
            
            <!-- Line Numbers -->
            <g opacity="0.4">
              ${Array.from({ length: 12 }, (_, i) => `
                <text x="120" y="${165 + i * 25}" fill="#00F7FF" font-family="Space Mono" font-size="12">${i + 1}</text>
              `).join('')}
            </g>
            
            <!-- Code Content -->
            <g font-family="Space Mono" font-size="13">
              <text x="150" y="165" fill="#FF0080">function</text>
              <text x="220" y="165" fill="#00F7FF">analyzeCode</text>
              <text x="315" y="165" fill="white">(</text>
              <text x="325" y="165" fill="#FFBD2E">source</text>
              <text x="380" y="165" fill="white">) {</text>
              
              <text x="170" y="190" fill="#00F7FF">const</text>
              <text x="215" y="190" fill="white">ast = </text>
              <text x="265" y="190" fill="#FF0080">parse</text>
              <text x="310" y="190" fill="white">(source);</text>
              
              <text x="170" y="215" fill="#00F7FF">const</text>
              <text x="215" y="215" fill="white">metrics = {</text>
              
              <text x="190" y="240" fill="#FFBD2E">complexity</text>
              <text x="280" y="240" fill="white">: </text>
              <text x="295" y="240" fill="#27C93F">calculateComplexity</text>
              <text x="445" y="240" fill="white">(ast),</text>
              
              <text x="190" y="265" fill="#FFBD2E">security</text>
              <text x="265" y="265" fill="white">: </text>
              <text x="280" y="265" fill="#27C93F">scanVulnerabilities</text>
              <text x="455" y="265" fill="white">(ast),</text>
              
              <text x="190" y="290" fill="#FFBD2E">performance</text>
              <text x="285" y="290" fill="white">: </text>
              <text x="305" y="290" fill="#27C93F">profileExecution</text>
              <text x="460" y="290" fill="white">(ast)</text>
              
              <text x="170" y="315" fill="white">};</text>
              
              <text x="170" y="340" fill="#FF0080">return</text>
              <text x="225" y="340" fill="white">metrics;</text>
              
              <text x="150" y="365" fill="white">}</text>
            </g>
            
            <!-- Analysis Results Panel -->
            <rect x="100" y="520" width="600" height="60" rx="5" fill="rgba(0,247,255,0.1)" stroke="#00F7FF" stroke-width="1"/>
            <text x="120" y="545" fill="#00F7FF" font-family="Orbitron" font-size="11" font-weight="bold">ANALYSIS COMPLETE</text>
            <text x="120" y="565" fill="white" font-family="Space Mono" font-size="10">Complexity: LOW | Security: PASS | Performance: OPTIMIZED</text>
            
            <!-- Status Indicators -->
            <circle cx="650" cy="540" r="8" fill="#00FF00">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </g>
          
          <!-- Metrics Dashboard -->
          <g opacity="0.9">
            <rect x="20" y="30" width="60" height="60" rx="8" fill="rgba(10,10,20,0.9)" stroke="#00F7FF" stroke-width="1.5"/>
            <text x="50" y="55" text-anchor="middle" fill="#00F7FF" font-family="Orbitron" font-size="20" font-weight="bold">15</text>
            <text x="50" y="75" text-anchor="middle" fill="white" font-family="Space Mono" font-size="9">LANGS</text>
          </g>
          
          <g opacity="0.9">
            <rect x="720" y="30" width="60" height="60" rx="8" fill="rgba(10,10,20,0.9)" stroke="#FF0080" stroke-width="1.5"/>
            <text x="750" y="55" text-anchor="middle" fill="#FF0080" font-family="Orbitron" font-size="16" font-weight="bold">98%</text>
            <text x="750" y="75" text-anchor="middle" fill="white" font-family="Space Mono" font-size="9">ACCURATE</text>
          </g>
        </svg>
      `
    }
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        id="projects"
        className="relative w-full min-h-screen"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.95) 60%, rgb(0,0,0) 100%)',
          paddingTop: '0',
          paddingBottom: '120px',
        }}
      >
        {/* ==================== SECTION HEADER ==================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div 
            className="text-center mb-24"
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
                SYSTEM KERNEL
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
              Neural Projects
            </h2>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8"
              style={{
                fontFamily: "'Exo 2', sans-serif",
                lineHeight: '1.8',
              }}
            >
              Advanced algorithmic visualization systems engineered for maximum cognitive processing efficiency. 
              Each project represents a breakthrough in computational interface design.
            </p>

            {/* Status Bar */}
            <div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                ...glassStyle,
                fontFamily: "'Chakra Petch', sans-serif",
              }}
            >
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{
                    boxShadow: '0 0 10px rgba(0, 255, 0, 0.6)',
                    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  }}
                />
                <span className="text-sm text-white/90">ALL SYSTEMS OPERATIONAL</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <span className="text-sm text-cyan-400">2 CORES ACTIVE</span>
            </div>
          </div>

          {/* ==================== PROJECT SHOWCASE ROWS ==================== */}
          <div className="space-y-32 md:space-y-40">
            
            {/* ==================== PROJECT 1: BINARY TREE (Image Left, Text Right) ==================== */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
              }}
            >
              {/* Image Card - LEFT */}
              <div 
                className="relative group order-2 lg:order-1"
                onMouseEnter={() => setHoveredProject('binary-tree')}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 min-h-[300px] md:min-h-[500px]"
                  style={{
                    ...glassStyleStrong,
                    transform: hoveredProject === 'binary-tree' ? 'scale(1.02) translateY(-8px)' : 'scale(1)',
                    boxShadow: hoveredProject === 'binary-tree' 
                      ? '0 30px 60px rgba(0, 247, 255, 0.3), 0 0 40px rgba(102, 126, 234, 0.2)' 
                      : '0 20px 40px rgba(0, 0, 0, 0.4)',
                  }}
                  onClick={projects[0].onClick}
                >
                  {/* SVG Visualization */}
                  <div 
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: projects[0].imagePlaceholder }}
                  />

                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))',
                      opacity: hoveredProject === 'binary-tree' ? 1 : 0,
                    }}
                  >
                    <div className="text-center">
                      <div className="mb-4 text-white">
                        <Icons.Eye />
                      </div>
                      <p 
                        className="text-2xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        LAUNCH SYSTEM
                      </p>
                      <div className="flex items-center justify-center gap-2 text-cyan-300">
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.9rem' }}>
                          Initialize Core
                        </span>
                        <Icons.ArrowRight />
                      </div>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div 
                    className="absolute top-4 right-4 px-4 py-2 rounded-lg"
                    style={{
                      background: 'rgba(0, 247, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 247, 255, 0.4)',
                    }}
                  >
                    <span 
                      className="text-xs font-bold text-cyan-300"
                      style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}
                    >
                      {projects[0].version}
                    </span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 -z-10 rounded-2xl transition-opacity duration-500"
                  style={{
                    background: projects[0].imageGradient,
                    filter: 'blur(40px)',
                    opacity: hoveredProject === 'binary-tree' ? 0.4 : 0.2,
                  }}
                />
              </div>

              {/* Content Card - RIGHT */}
              <div className="space-y-6 order-1 lg:order-2">
                {/* System Type Badge */}
                <div className="flex items-center gap-3">
                  <div 
                    className="px-4 py-2 rounded-lg"
                    style={{
                      background: 'rgba(102, 126, 234, 0.15)',
                      border: '1px solid rgba(102, 126, 234, 0.3)',
                    }}
                  >
                    <span 
                      className="text-xs font-bold"
                      style={{ 
                        fontFamily: "'Space Mono', monospace",
                        color: '#667eea',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {projects[0].systemType}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                </div>

                {/* Title */}
                <div>
                  <h3 
                    className="text-4xl md:text-5xl font-bold mb-3"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {projects[0].name}
                  </h3>
                  <p 
                    className="text-sm text-purple-300"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      letterSpacing: '0.2em',
                    }}
                  >
                    {projects[0].subtitle}
                  </p>
                </div>

                {/* Description */}
                <p 
                  className="text-white/80 leading-relaxed text-base"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  {projects[0].longDescription}
                </p>

                {/* System Metrics */}
                <div 
                  className="grid grid-cols-2 gap-4 p-6 rounded-xl"
                  style={{
                    ...glassStyle,
                  }}
                >
                  {projects[0].metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <p 
                        className="text-2xl font-bold mb-1"
                        style={{
                          fontFamily: "'Orbitron', sans-serif",
                          color: '#00F7FF',
                        }}
                      >
                        {metric.value}
                      </p>
                      <p 
                        className="text-xs text-white/60"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {metric.label}
                      </p>
                      <p 
                        className="text-xs text-purple-400 mt-1"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {metric.unit}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="space-y-3">
                  <p 
                    className="text-sm font-bold text-cyan-400 mb-4"
                    style={{ 
                      fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: '0.15em',
                    }}
                  >
                    CORE FEATURES
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projects[0].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="group p-4 rounded-lg cursor-pointer transition-all duration-300"
                        style={{
                          background: activeFeature.tree === idx 
                            ? 'rgba(102, 126, 234, 0.2)' 
                            : 'rgba(255, 255, 255, 0.05)',
                          border: activeFeature.tree === idx
                            ? '1px solid rgba(102, 126, 234, 0.5)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                        onMouseEnter={() => setActiveFeature({ ...activeFeature, tree: idx })}
                        onMouseLeave={() => setActiveFeature({ ...activeFeature, tree: null })}
                      >
                        <div className="flex items-start gap-3">
                          <div 
                            className="text-purple-400 mt-1 transition-transform duration-300"
                            style={{
                              transform: activeFeature.tree === idx ? 'scale(1.2)' : 'scale(1)',
                            }}
                          >
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <p 
                              className="text-sm font-bold text-white mb-1"
                              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                            >
                              {feature.title}
                            </p>
                            <p 
                              className="text-xs text-white/60 leading-relaxed"
                              style={{ fontFamily: "'Exo 2', sans-serif" }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div 
                  className="p-6 rounded-xl"
                  style={{
                    ...glassStyle,
                  }}
                >
                  <p 
                    className="text-xs font-bold text-cyan-400 mb-4"
                    style={{ 
                      fontFamily: "'Space Mono', monospace",
                      letterSpacing: '0.2em',
                    }}
                  >
                    TECHNOLOGY STACK
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 rounded-lg"
                        style={{
                          background: 'rgba(102, 126, 234, 0.1)',
                          border: '1px solid rgba(102, 126, 234, 0.3)',
                        }}
                      >
                        <p 
                          className="text-xs font-bold text-purple-300"
                          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                        >
                          {tech.name}
                        </p>
                        <p 
                          className="text-xs text-white/40"
                          style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem' }}
                        >
                          {tech.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={projects[0].onClick}
                  className="group w-full px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '0.1em',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
                  }}
                >
                  <span>LAUNCH VISUALIZER</span>
                  <div className="transition-transform duration-300 group-hover:translate-x-2">
                    <Icons.ArrowRight />
                  </div>
                </button>
              </div>
            </div>

            {/* ==================== PROJECT 2: CODE ANALYZER (Image Right, Text Left) ==================== */}
            <div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
              }}
            >
              {/* Content Card - LEFT */}
              <div className="space-y-6 order-1">
                {/* System Type Badge */}
                <div className="flex items-center gap-3">
                  <div 
                    className="px-4 py-2 rounded-lg"
                    style={{
                      background: 'rgba(240, 147, 251, 0.15)',
                      border: '1px solid rgba(240, 147, 251, 0.3)',
                    }}
                  >
                    <span 
                      className="text-xs font-bold"
                      style={{ 
                        fontFamily: "'Space Mono', monospace",
                        color: '#f093fb',
                        letterSpacing: '0.15em',
                      }}
                    >
                      {projects[1].systemType}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-pink-500/30 to-transparent" />
                </div>

                {/* Title */}
                <div>
                  <h3 
                    className="text-4xl md:text-5xl font-bold mb-3"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {projects[1].name}
                  </h3>
                  <p 
                    className="text-sm text-pink-300"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      letterSpacing: '0.2em',
                    }}
                  >
                    {projects[1].subtitle}
                  </p>
                </div>

                {/* Description */}
                <p 
                  className="text-white/80 leading-relaxed text-base"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  {projects[1].longDescription}
                </p>

                {/* System Metrics */}
                <div 
                  className="grid grid-cols-2 gap-4 p-6 rounded-xl"
                  style={{
                    ...glassStyle,
                  }}
                >
                  {projects[1].metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <p 
                        className="text-2xl font-bold mb-1"
                        style={{
                          fontFamily: "'Orbitron', sans-serif",
                          color: '#FF0080',
                        }}
                      >
                        {metric.value}
                      </p>
                      <p 
                        className="text-xs text-white/60"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {metric.label}
                      </p>
                      <p 
                        className="text-xs text-pink-400 mt-1"
                        style={{ fontFamily: "'Space Mono', monospace" }}
                      >
                        {metric.unit}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features Grid */}
                <div className="space-y-3">
                  <p 
                    className="text-sm font-bold text-pink-400 mb-4"
                    style={{ 
                      fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: '0.15em',
                    }}
                  >
                    NEURAL CAPABILITIES
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projects[1].features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="group p-4 rounded-lg cursor-pointer transition-all duration-300"
                        style={{
                          background: activeFeature.analyzer === idx 
                            ? 'rgba(240, 147, 251, 0.2)' 
                            : 'rgba(255, 255, 255, 0.05)',
                          border: activeFeature.analyzer === idx
                            ? '1px solid rgba(240, 147, 251, 0.5)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                        onMouseEnter={() => setActiveFeature({ ...activeFeature, analyzer: idx })}
                        onMouseLeave={() => setActiveFeature({ ...activeFeature, analyzer: null })}
                      >
                        <div className="flex items-start gap-3">
                          <div 
                            className="text-pink-400 mt-1 transition-transform duration-300"
                            style={{
                              transform: activeFeature.analyzer === idx ? 'scale(1.2)' : 'scale(1)',
                            }}
                          >
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <p 
                              className="text-sm font-bold text-white mb-1"
                              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                            >
                              {feature.title}
                            </p>
                            <p 
                              className="text-xs text-white/60 leading-relaxed"
                              style={{ fontFamily: "'Exo 2', sans-serif" }}
                            >
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div 
                  className="p-6 rounded-xl"
                  style={{
                    ...glassStyle,
                  }}
                >
                  <p 
                    className="text-xs font-bold text-pink-400 mb-4"
                    style={{ 
                      fontFamily: "'Space Mono', monospace",
                      letterSpacing: '0.2em',
                    }}
                  >
                    RUNTIME ENVIRONMENT
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[1].technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 rounded-lg"
                        style={{
                          background: 'rgba(240, 147, 251, 0.1)',
                          border: '1px solid rgba(240, 147, 251, 0.3)',
                        }}
                      >
                        <p 
                          className="text-xs font-bold text-pink-300"
                          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                        >
                          {tech.name}
                        </p>
                        <p 
                          className="text-xs text-white/40"
                          style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem' }}
                        >
                          {tech.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={projects[1].onClick}
                  className="group w-full px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
                    color: 'white',
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '0.1em',
                    boxShadow: '0 10px 30px rgba(240, 147, 251, 0.4)',
                  }}
                >
                  <span>INITIALIZE ANALYZER</span>
                  <div className="transition-transform duration-300 group-hover:translate-x-2">
                    <Icons.ArrowRight />
                  </div>
                </button>
              </div>

              {/* Image Card - RIGHT */}
              <div 
                className="relative group order-2"
                onMouseEnter={() => setHoveredProject('code-analyzer')}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 min-h-[300px] md:min-h-[500px]"
                  style={{
                    ...glassStyleStrong,
                    transform: hoveredProject === 'code-analyzer' ? 'scale(1.02) translateY(-8px)' : 'scale(1)',
                    boxShadow: hoveredProject === 'code-analyzer' 
                      ? '0 30px 60px rgba(255, 0, 128, 0.3), 0 0 40px rgba(240, 147, 251, 0.2)' 
                      : '0 20px 40px rgba(0, 0, 0, 0.4)',
                  }}
                  onClick={projects[1].onClick}
                >
                  {/* SVG Visualization */}
                  <div 
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: projects[1].imagePlaceholder }}
                  />

                  {/* Hover Overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.9), rgba(245, 87, 108, 0.9))',
                      opacity: hoveredProject === 'code-analyzer' ? 1 : 0,
                    }}
                  >
                    <div className="text-center">
                      <div className="mb-4 text-white">
                        <Icons.Zap />
                      </div>
                      <p 
                        className="text-2xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        ACTIVATE ENGINE
                      </p>
                      <div className="flex items-center justify-center gap-2 text-pink-300">
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.9rem' }}>
                          Boot Neural Core
                        </span>
                        <Icons.ArrowRight />
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div 
                    className="absolute top-4 right-4 px-4 py-2 rounded-lg"
                    style={{
                      background: 'rgba(255, 0, 128, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 0, 128, 0.4)',
                    }}
                  >
                    <span 
                      className="text-xs font-bold text-pink-300"
                      style={{ fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}
                    >
                      {projects[1].status}
                    </span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 -z-10 rounded-2xl transition-opacity duration-500"
                  style={{
                    background: projects[1].imageGradient,
                    filter: 'blur(40px)',
                    opacity: hoveredProject === 'code-analyzer' ? 0.4 : 0.2,
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ==================== BOTTOM SECTION - Coming Soon Projects ==================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div 
            className="text-center mb-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.9s',
            }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Icons.Sparkles />
              <h3 
                className="text-2xl md:text-3xl font-bold"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  background: 'linear-gradient(135deg, #00F7FF, #FF0080)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                More Neural Systems In Development
              </h3>
            </div>
            <p 
              className="text-white/60 text-sm"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Advanced algorithmic interfaces currently in quantum incubation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Graph Pathfinder', icon: <Icons.GitBranch />, color: '#4ade80' },
              { name: 'Sorting Visualizer', icon: <Icons.Activity />, color: '#fbbf24' },
              { name: 'Memory Manager', icon: <Icons.Server />, color: '#f472b6' },
            ].map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  ...glassStyle,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${1.1 + idx * 0.1}s`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="p-3 rounded-lg"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                    >
                      {project.name}
                    </h4>
                  </div>
                </div>
                <div 
                  className="px-3 py-2 rounded-lg inline-block"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <span 
                    className="text-xs text-white/50"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    COMING SOON
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GLOBAL STYLES ==================== */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Projects;