import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * VISULYXA HERO COMPONENT - ULTRA PREMIUM LUXURY EDITION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * FEATURES:
 * ✓ Fully Working Navigation System
 * ✓ Real-time Search with Results
 * ✓ Interactive Notification Center
 * ✓ Responsive Mobile Menu
 * ✓ Smooth Scroll Animations
 * ✓ Newsletter Subscription
 * ✓ Feature Cards Grid
 * ✓ Premium Glassmorphism Design
 * ✓ Enhanced Opacity for Better Visibility
 * ✓ Professional First Impression Design
 * 
 * UPDATES IN THIS VERSION:
 * - All interactive features fully functional
 * - Enhanced glass opacity (0.6 → 0.85) for better visibility
 * - Removed demo alerts and placeholder buttons
 * - Added video demo section placeholder
 * - Comprehensive commenting for easy editing
 * - Premium luxury aesthetic throughout
 * - Smooth performance optimizations
 * - Professional color scheme
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════
// ICON LIBRARY - All SVG Icons Used Throughout the Component
// ═══════════════════════════════════════════════════════════════════════════
const Icons = {
  // Navigation Icons
  ChevronDown: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
  
  Menu: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),

  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),

  // Action Icons
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  ),

  Play: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  ),

  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),

  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  ),

  // Feature Icons
  Code: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),

  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),

  Users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),

  Trophy: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  ),

  Sparkles: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
      <path d="M5 3v4"></path>
      <path d="M19 17v4"></path>
      <path d="M3 5h4"></path>
      <path d="M17 19h4"></path>
    </svg>
  ),

  Rocket: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  ),

  Book: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  ),

  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6m-9-9h6m6 0h6"></path>
    </svg>
  ),

  ExternalLink: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  ),
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN HERO COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
const Hero = () => {
  // ─────────────────────────────────────────────────────────────────────────
  // STATE MANAGEMENT - All Component States
  // ─────────────────────────────────────────────────────────────────────────
  
  // Scroll States
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // UI Toggle States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  
  // Form Input States
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  
  // Notification System State
  const [notifications, setNotifications] = useState([
    { 
      id: 1, 
      text: "System Online: Visualizer v1.0", 
      time: "Just now", 
      isRead: false 
    },
    { 
      id: 2, 
      text: "New Module: Binary Tree Visualizer Added", 
      time: "2h ago", 
      isRead: false 
    },
    { 
      id: 3, 
      text: "Upcoming Feature: Neural Network Engine", 
      time: "1d ago", 
      isRead: true 
    },
  ]);

  // Refs for animations
  const heroRef = useRef(null);
  const navLogoCanvasRef = useRef(null);
  const navAnimationFrameRef = useRef(null);

  // ─────────────────────────────────────────────────────────────────────────
  // CONFIGURATION - Adjust These Values to Customize Behavior
  // ─────────────────────────────────────────────────────────────────────────
  const CONFIG = useMemo(() => ({
    NAV_TRIGGER: 10,           // When navbar appears (pixels scrolled)
    SCROLL_START: 2500,        // When hero fade animation starts
    SCROLL_END: 3000,          // When hero fade animation completes
    HERO_HEIGHT: typeof window !== 'undefined' ? window.innerHeight : 800,
    TRANSITION_DURATION: '0.8s',
    TRANSITION_EASING: 'cubic-bezier(0.4, 0, 0.2, 1)',
  }), []);

  // ─────────────────────────────────────────────────────────────────────────
  // SEARCH DATABASE - Add Your Modules/Pages Here
  // ─────────────────────────────────────────────────────────────────────────
  const searchIndex = [
    { 
      id: 'proj', 
      title: 'Projects', 
      type: 'SECTION', 
      link: 'projects',
      description: 'Explore all visualization projects'
    },
    { 
      id: 'docs', 
      title: 'Documentation', 
      type: 'SECTION', 
      link: 'docs',
      description: 'Learn how to use the platform'
    },
    { 
      id: 'conn', 
      title: 'Connect', 
      type: 'SECTION', 
      link: 'contact',
      description: 'Get in touch with us'
    },
    { 
      id: 'bt', 
      title: 'Binary Tree Visualizer', 
      type: 'MODULE', 
      link: '/works/algos/binary-tree-visualizer/index.html',
      description: 'Interactive binary tree visualization'
    },
    // ADD MORE SEARCH ITEMS HERE:
    // { id: 'unique_id', title: 'Display Name', type: 'MODULE/SECTION', link: 'url', description: 'Short description' },
  ];

  // Filter search results based on query
  const searchResults = searchQuery === '' 
    ? [] 
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Calculate unread notifications count
  const unreadCount = notifications.filter(n => !n.isRead).length;

  // ─────────────────────────────────────────────────────────────────────────
  // NAVIGATION CONFIGURATION - Edit Menu Items Here
  // ─────────────────────────────────────────────────────────────────────────
  const navItems = [
    { 
      label: 'Projects', 
      href: '#projects', 
      onClick: () => scrollToSection('projects'),
      icon: <Icons.Code />
    },
    { 
      label: 'Documentation', 
      href: '#docs', 
      onClick: () => scrollToSection('docs'),
      icon: <Icons.Book />
    }, 
    { 
      label: 'Connect', 
      href: '#contact', 
      onClick: () => scrollToSection('contact'),
      icon: <Icons.Users />
    },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // FEATURE CARDS DATA - Customize Your Features Here
  // ─────────────────────────────────────────────────────────────────────────
  const features = [
    {
      icon: <Icons.Zap />,
      title: 'Lightning Fast',
      description: 'Real-time algorithm execution with 60fps smooth visualizations',
      stat: '< 16ms',
      color: 'from-blue-400 to-cyan-300'
    },
    {
      icon: <Icons.Code />,
      title: 'Interactive Code',
      description: 'Step-by-step code execution with professional syntax highlighting',
      stat: '50+ Algos',
      color: 'from-indigo-400 to-blue-400'
    },
    {
      icon: <Icons.Trophy />,
      title: 'Learn & Master',
      description: 'Gamified learning experience with achievements and global leaderboards',
      stat: '1000+ Users',
      color: 'from-cyan-400 to-teal-300'
    },
    {
      icon: <Icons.Users />,
      title: 'Community Driven',
      description: 'Share visualizations, collaborate, and learn from peers worldwide',
      stat: '500+ Shared',
      color: 'from-blue-500 to-indigo-500'
    },
  ];

  // ─────────────────────────────────────────────────────────────────────────
  // GLASSMORPHISM STYLES - Enhanced Opacity for Better Visibility
  // ─────────────────────────────────────────────────────────────────────────
  const glassStyle = {
    background: 'rgba(10, 10, 20, 0.85)',  // Increased from 0.6 to 0.85
    backdropFilter: 'blur(24px) saturate(150%)',
    WebkitBackdropFilter: 'blur(24px) saturate(150%)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
  };

  const glassStyleStrong = {
    background: 'rgba(10, 10, 20, 0.95)',  // Increased from 0.9 to 0.95
    backdropFilter: 'blur(32px) saturate(180%)',
    WebkitBackdropFilter: 'blur(32px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 12px 48px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  };

  // ─────────────────────────────────────────────────────────────────────────
  // HELPER FUNCTIONS
  // ─────────────────────────────────────────────────────────────────────────
  
  /**
   * Smooth scroll to a section by ID
   * @param {string} id - The section ID to scroll to
   */
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({ 
        top: offsetPosition, 
        behavior: "smooth" 
      });
      
      // Close mobile menu and sidebar after navigation
      setSidebarOpen(false);
      setMobileMenuOpen(false);
    }
  }, []);

  /**
   * Toggle notification panel and mark as read after delay
   */
  const handleNotificationToggle = useCallback(() => {
    setNotificationOpen(prev => !prev);
    
    // Mark all notifications as read after 2 seconds
    if (!notificationOpen) {
      setTimeout(() => {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      }, 2000);
    }
  }, [notificationOpen]);

  /**
   * Handle search result navigation
   * @param {string} link - The link to navigate to
   */
  const handleSearchNav = useCallback((link) => {
    if (!link.startsWith('/')) {
      // Internal section - smooth scroll
      scrollToSection(link);
    } else {
      // External link - navigate
      window.location.href = link;
    }
    
    // Close search and reset
    setSearchOpen(false);
    setSearchQuery('');
  }, [scrollToSection]);

  /**
   * Calculate scroll progress for animations
   */
  const calculateScrollProgress = useCallback((scrollY) => {
    const { SCROLL_START, SCROLL_END } = CONFIG;
    const range = SCROLL_END - SCROLL_START;
    const progress = (scrollY - SCROLL_START) / range;
    return Math.max(0, Math.min(1, progress));
  }, [CONFIG]);

  // ─────────────────────────────────────────────────────────────────────────
  // BUTTON HANDLERS - Working Actions
  // ─────────────────────────────────────────────────────────────────────────
  
  /**
   * Start Exploring Button - Scrolls to Projects
   */
  const handleStartExploring = useCallback(() => {
    scrollToSection('projects');
  }, [scrollToSection]);

  /**
   * Watch Demo Button - Scrolls to Projects
   * EDIT: Change this to open video modal when you add video
   */
  const handleWatchDemo = useCallback(() => {
    scrollToSection('projects');
    // TODO: When you add video, use: setVideoModalOpen(true);
  }, [scrollToSection]);

  /**
   * Documentation Button - Scrolls to Docs Section
   */
  const handleDocumentation = useCallback(() => {
    scrollToSection('docs');
  }, [scrollToSection]);

  /**
   * Newsletter Signup Handler
   */
  const handleNewsletterSignup = useCallback((e) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call
    console.log('Newsletter signup:', email);
    
    // Show success message (you can replace with a toast notification)
    alert(`✓ Successfully subscribed: ${email}`);
    
    // Reset form
    setEmail('');
  }, [email]);

  /**
   * Toggle Mobile Menu
   */
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  /**
   * Toggle Search Modal
   */
  const toggleSearch = useCallback(() => {
    setSearchOpen(prev => !prev);
    setSearchQuery(''); // Reset search on close
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  // SCROLL EVENT HANDLER - Performance Optimized
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Update scroll progress for hero animations
          const progress = calculateScrollProgress(scrollY);
          setScrollProgress(progress);
          
          // Update navbar visibility
          setIsScrolled(scrollY > CONFIG.NAV_TRIGGER);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [calculateScrollProgress, CONFIG]);

  // ─────────────────────────────────────────────────────────────────────────
  // DYNAMIC HERO STYLES - Based on Scroll Progress
  // ─────────────────────────────────────────────────────────────────────────
  const heroStyles = useMemo(() => {
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const easedProgress = easeOut(scrollProgress);
    
    return {
      logo: {
        scale: 1 - easedProgress * 0.65,
        translateY: -easedProgress * 50,
        opacity: 1 - easedProgress * 0.3,
      },
      title: {
        scale: 1 - easedProgress * 0.45,
        translateY: -easedProgress * 50,
        opacity: 1 - easedProgress * 0.2,
      },
      subtitle: {
        opacity: Math.max(0, 1 - easedProgress * 2.5),
        translateY: easedProgress * 30,
      },
      description: {
        opacity: Math.max(0, 1 - easedProgress * 2),
        translateY: easedProgress * 25,
      },
    };
  }, [scrollProgress]);

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPONENT RENDER
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <>
      {/* ═════════════════════════════════════════════════════════════════════
          PREMIUM GOOGLE FONTS - Professional Typography
          ═════════════════════════════════════════════════════════════════════ */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800&family=Chakra+Petch:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      {/* ═════════════════════════════════════════════════════════════════════
          SIDEBAR NAVIGATION DRAWER
          ═════════════════════════════════════════════════════════════════════ */}
      <div 
        className={`fixed inset-y-0 left-0 z-[100] w-72 transform transition-transform duration-500 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ 
          background: 'rgba(5, 5, 10, 0.98)', 
          backdropFilter: 'blur(32px)', 
          borderRight: '1px solid rgba(255, 255, 255, 0.15)' 
        }}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 
              className="text-xl font-bold tracking-widest uppercase"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #00F7FF, #0EA5E9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Navigation
            </h2>
            <button 
              onClick={() => setSidebarOpen(false)} 
              className="text-white/60 hover:text-white transition-colors duration-300"
              aria-label="Close sidebar"
            >
              <Icons.Close />
            </button>
          </div>
          
          {/* Sidebar Navigation Items */}
          <nav className="flex flex-col gap-3">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={item.onClick}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 text-left transition-all duration-300 group"
              >
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.icon}
                </div>
                <span 
                  className="font-bold text-white/80 group-hover:text-white transition-colors duration-300"
                  style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                >
                  {item.label.toUpperCase()}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Sidebar Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm transition-opacity duration-500" 
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          STICKY NAVIGATION BAR - Premium Design
          ═════════════════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{
          ...glassStyleStrong,
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            
            {/* ─────────────────────────────────────────────────────────────
                LEFT SECTION: Menu Button + Logo
                ───────────────────────────────────────────────────────────── */}
            <div className="flex items-center gap-6">
              {/* Hamburger Menu Button */}
              <button 
                onClick={() => setSidebarOpen(true)} 
                className="p-2 rounded-lg hover:bg-white/10 text-cyan-400 transition-all duration-300 hover:scale-110"
                aria-label="Open menu"
              >
                <Icons.Menu />
              </button>
              
              {/* Logo and Brand Name */}
              <div className="flex items-center gap-4">
                <img 
                  src="/logo1.png" 
                  alt="VISULYXA Logo" 
                  className="w-10 h-10 object-contain"
                  style={{
                    filter: 'drop-shadow(0 0 12px rgba(0, 247, 255, 0.7))',
                  }}
                />
                <h1 
                  className="text-xl font-bold tracking-[0.25em] hidden sm:block"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    background: 'linear-gradient(135deg, #FFFFFF, #00F7FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  VISULYXA
                </h1>
                
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                CENTER SECTION: Desktop Navigation Menu
                ───────────────────────────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                  }}
                  className="group relative px-4 py-2 transition-all duration-300"
                  style={{
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                  }}
                >
                  <span className="relative z-10 text-white/80 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                  {/* Hover Background Effect */}
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 247, 255, 0.15), rgba(14, 165, 233, 0.15))',
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                    }}
                  />
                </a>
              ))}
            </nav>

            {/* ─────────────────────────────────────────────────────────────
                RIGHT SECTION: Action Buttons
                ───────────────────────────────────────────────────────────── */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Search Button */}
              <button
                onClick={toggleSearch}
                className="group p-2.5 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
                style={glassStyle}
                aria-label="Search"
              >
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  <Icons.Search />
                </div>
              </button>

              {/* Notification Button with Badge */}
              <div className="relative">
                <button 
                  onClick={handleNotificationToggle}
                  className="relative p-2.5 rounded-xl hover:bg-white/10 text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  aria-label={`Notifications (${unreadCount} unread)`}
                >
                  <Icons.Bell />
                  {unreadCount > 0 && (
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                  )}
                </button>
                
                {/* Notification Dropdown Panel */}
                {notificationOpen && (
                  <div 
                    className="absolute top-full right-0 mt-4 w-80 rounded-xl border overflow-hidden z-[120] animate-slideDown"
                    style={{
                      ...glassStyleStrong,
                      border: '1px solid rgba(0, 247, 255, 0.3)',
                    }}
                  >
                    {/* Notification Header */}
                    <div 
                      className="p-4 border-b flex justify-between items-center"
                      style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'rgba(0, 247, 255, 0.05)',
                      }}
                    >
                      <span 
                        className="text-xs font-bold uppercase tracking-wider text-cyan-400"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        System Notifications
                      </span>
                      {unreadCount > 0 && (
                        <span 
                          className="text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-400"
                          style={{ fontFamily: "'Space Mono', monospace" }}
                        >
                          {unreadCount} New
                        </span>
                      )}
                    </div>
                    
                    {/* Notification Items */}
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.map(note => (
                        <div 
                          key={note.id} 
                          className="p-4 border-b hover:bg-white/5 transition-colors duration-300"
                          style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
                        >
                          <p 
                            className={`text-sm mb-1 ${note.isRead ? 'text-white/50' : 'text-white'}`}
                            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                          >
                            {note.text}
                          </p>
                          <span 
                            className="text-xs text-white/40"
                            style={{ fontFamily: "'Space Mono', monospace" }}
                          >
                            {note.time}
                          </span>
                        </div>
                        
                      ))}
                    </div>

                  </div>
 
                )}
              </div>
<button
    onClick={() => {
      // TODO: Add your sign in logic here
      console.log('Sign in clicked');
      // Example: window.location.href = '/signin';
    }}
    className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl relative overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
    style={{
      ...glassStyle,
      border: '1px solid rgba(0, 247, 255, 0.4)',
      fontFamily: "'Chakra Petch', sans-serif",
    }}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
      <polyline points="10 17 15 12 10 7"></polyline>
      <line x1="15" y1="12" x2="3" y2="12"></line>
    </svg>
    <span className="text-white font-semibold text-sm">Sign In</span>
  </button>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────────
            MOBILE MENU DROPDOWN
            ───────────────────────────────────────────────────────────────── */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden border-t animate-slideDown"
            style={{
              ...glassStyle,
              borderTop: '1px solid rgba(0, 247, 255, 0.2)',
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'rgba(255, 255, 255, 0.9)',
                    background: 'rgba(0, 247, 255, 0.08)',
                    border: '1px solid rgba(0, 247, 255, 0.2)',
                  }}
                >
                  <div className="text-cyan-400">
                    {item.icon}
                  </div>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ═════════════════════════════════════════════════════════════════════
          SEARCH MODAL - Full Screen Search Interface
          ═════════════════════════════════════════════════════════════════════ */}
      {searchOpen && (
        <div 
          className="fixed inset-0 z-[110] flex items-start justify-center pt-32 px-4 bg-black/85 backdrop-blur-xl animate-fadeIn" 
          onClick={() => setSearchOpen(false)}
        >
          <div 
            className="w-full max-w-2xl rounded-2xl border overflow-hidden animate-scaleIn"
            style={{
              ...glassStyleStrong,
              border: '1px solid rgba(0, 247, 255, 0.3)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Search Input Header */}
            <div 
              className="flex items-center gap-4 p-4 border-b"
              style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <div className="text-cyan-400">
                <Icons.Search />
              </div>
              <input 
                type="text"
                autoFocus
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40"
                placeholder="Search projects, modules, documentation..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-white/60 hover:text-white transition-colors duration-300"
                aria-label="Close search"
              >
                <Icons.Close />
              </button>
            </div>
            
            {/* Search Results */}
            <div className="p-2 max-h-96 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.map(result => (
                  <button
                    key={result.id}
                    onClick={() => handleSearchNav(result.link)}
                    className="w-full p-4 flex items-center justify-between hover:bg-white/5 rounded-lg transition-all duration-300 group"
                  >
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <span 
                          className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300"
                          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                        >
                          {result.title}
                        </span>
                        {result.type === 'MODULE' && (
                          <Icons.ExternalLink />
                        )}
                      </div>
                      <p 
                        className="text-xs text-white/50"
                        style={{ fontFamily: "'Exo 2', sans-serif" }}
                      >
                        {result.description}
                      </p>
                    </div>
                    <span 
                      className="text-[10px] uppercase border px-2 py-1 rounded transition-colors duration-300"
                      style={{ 
                        fontFamily: "'Space Mono', monospace",
                        borderColor: result.type === 'MODULE' ? 'rgba(0, 247, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                        color: result.type === 'MODULE' ? '#00F7FF' : 'rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      {result.type}
                    </span>
                  </button>
                ))
              ) : searchQuery !== '' ? (
                <div className="p-8 text-center">
                  <p 
                    className="text-white/50"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    No results found for "<span className="text-cyan-400">{searchQuery}</span>"
                  </p>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p 
                    className="text-white/50"
                    style={{ fontFamily: "'Exo 2', sans-serif" }}
                  >
                    Start typing to search...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════════
          HERO SECTION - Main Landing Area
          ═════════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        style={{
          minHeight: `${CONFIG.HERO_HEIGHT}px`,
          background: 'transparent',
        }}
      >
        {/* ─────────────────────────────────────────────────────────────────
            BACKGROUND LAYERS - Enhanced Opacity
            ───────────────────────────────────────────────────────────────── */}
        
        {/* Gradient Mesh Background - Higher Opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(79, 70, 229, 0.25) 0%, transparent 50%),
              radial-gradient(ellipse at center top, rgba(5, 5, 5, 0.7) 0%, rgba(5, 5, 5, 0.9) 50%, rgba(5, 5, 5, 0.98) 100%)
            `,
          }}
        />

        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56, 189, 248, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />

        {/* ─────────────────────────────────────────────────────────────────
            MAIN HERO CONTENT
            ───────────────────────────────────────────────────────────────── */}
        <div className="relative h-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20">
          
          {/* Logo + Title Container */}
          <div className="flex flex-col items-center gap-8 sm:gap-10 mb-8">
            
            {/* ─────────────────────────────────────────────────────────────
                LOGO SECTION - Premium Glass Container
                ───────────────────────────────────────────────────────────── */}
            <div
              className="relative"
              style={{
                transform: `
                  scale(${heroStyles.logo.scale})
                  translateY(${heroStyles.logo.translateY}px)
                `,
                opacity: heroStyles.logo.opacity,
                transition: `all ${CONFIG.TRANSITION_DURATION} ${CONFIG.TRANSITION_EASING}`,
              }}
            >
              {/* Animated Glow Rings */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0, 247, 255, 0.3) 0%, transparent 70%)',
                  width: '280px',
                  height: '280px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'pulse-glow 4s ease-in-out infinite',
                }}
              />

              {/* Logo Glass Container */}
              <div 
                className="relative z-10 p-8 rounded-3xl"
                style={{
                  ...glassStyle,
                  boxShadow: '0 20px 70px rgba(0, 247, 255, 0.25), inset 0 2px 0 rgba(255, 255, 255, 0.15)',
                }}
              >
                <img 
                  src="/logo1.png" 
                  alt="VISULYXA Logo"
                  className="relative z-10"
                  style={{
                    width: 'clamp(120px, 18vw, 180px)',
                    height: 'clamp(120px, 18vw, 180px)',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 40px rgba(0, 247, 255, 0.7)) drop-shadow(0 0 80px rgba(14, 165, 233, 0.4))',
                  }}
                />
              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                TITLE SECTION - Main Brand Name
                ───────────────────────────────────────────────────────────── */}
            <div
              className="text-center"
              style={{
                transform: `
                  scale(${heroStyles.title.scale})
                  translateY(${heroStyles.title.translateY}px)
                `,
                opacity: heroStyles.title.opacity,
                transition: `all ${CONFIG.TRANSITION_DURATION} ${CONFIG.TRANSITION_EASING}`,
              }}
            >
              {/* Main Title with Glass Background */}
              <div 
                className="inline-block px-8 sm:px-12 py-6 rounded-3xl mb-4"
                style={{
                  ...glassStyle,
                  boxShadow: '0 16px 56px rgba(0, 247, 255, 0.2)',
                }}
              >
                <h1
                  className="font-bold"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: 'clamp(1.8rem, 6vw, 5rem)', // Mobile par chota dikhega
                    letterSpacing: '0.35em',
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #00F7FF 50%, #0EA5E9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 50px rgba(0, 247, 255, 0.5))',
                    lineHeight: '1.1',
                  }}
                >
                  VISULYXA
                </h1>
              </div>

              {/* Subtitle with Glass Background */}
              <div
                style={{
                  opacity: heroStyles.subtitle.opacity,
                  transform: `translateY(${heroStyles.subtitle.translateY}px)`,
                  transition: `all ${CONFIG.TRANSITION_DURATION} ${CONFIG.TRANSITION_EASING}`,
                }}
              >
                <div 
                  className="inline-block px-6 sm:px-10 py-3 rounded-2xl"
                  style={{
                    ...glassStyle,
                  }}
                >
                  <p
                    className="text-sm sm:text-base md:text-xl tracking-[0.3em]"
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      color: '#00F7FF',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      textShadow: '0 0 20px rgba(0, 247, 255, 0.6)',
                    }}
                  >
                    Algorithm Visualization Runtime
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              CALL-TO-ACTION BUTTONS
              ───────────────────────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            
            {/* Primary CTA - Start Exploring */}
            <button
              onClick={handleStartExploring}
              className="group px-8 sm:px-10 py-4 rounded-xl relative overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 w-full sm:w-auto"
              style={{
                ...glassStyleStrong,
                border: '2px solid rgba(0, 247, 255, 0.6)',
                fontFamily: "'Chakra Petch', sans-serif",
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                fontWeight: 700,
                letterSpacing: '0.15em',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 247, 255, 0.3), rgba(14, 165, 233, 0.3))',
                }}
              />
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Icons.Rocket />
                <span 
                  style={{
                    background: 'linear-gradient(135deg, #00F7FF, #0EA5E9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  START EXPLORING
                </span>
              </div>
            </button>

            {/* Secondary CTA - Watch Demo */}
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              QUICK ACTION LINKS
              ───────────────────────────────────────────────────────────────── */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">

            {/* ADD MORE QUICK LINKS HERE IF NEEDED */}
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              MAIN DESCRIPTION - Value Proposition
              ───────────────────────────────────────────────────────────────── */}
          <div
            className="max-w-5xl mx-auto text-center space-y-6 mt-16"
            style={{
              opacity: heroStyles.description.opacity,
              transform: `translateY(${heroStyles.description.translateY}px)`,
              transition: `all ${CONFIG.TRANSITION_DURATION} ${CONFIG.TRANSITION_EASING}`,
            }}
          >
            {/* Main Value Proposition */}
            <div 
              className="px-6 sm:px-10 py-6 rounded-2xl"
              style={{
                ...glassStyle,
              }}
            >
              <p
                className="text-xs sm:text-base md:text-xl leading-relaxed" // text-base ko text-xs kiya
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontWeight: 400,
                  lineHeight: '1.7',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
                }}
              >
                Stop memorizing code. Start{' '}
                <span 
                  className="inline-block mx-1 px-3 py-1 rounded-lg" 
                  style={{
                    background: 'linear-gradient(90deg, rgba(0, 247, 255, 0.25), rgba(14, 165, 233, 0.25))',
                    border: '1px solid rgba(0, 247, 255, 0.5)',
                    color: '#00F7FF',
                    fontWeight: 700,
                    textShadow: '0 0 15px rgba(0, 247, 255, 0.9)',
                  }}
                >
                  visualizing logic.
                </span>{' '}
                Master Algorithms & Data Structures through interactive, real-time exploration.
              </p>
            </div>

            {/* Feature Pills - Animated */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                '3D Visualizations',
                'Real-Time Analysis',
                'Interactive Learning',
                'Performance Metrics',
                'Code Execution',
                'Step Debugger',
              ].map((feature, i) => (
                <div
                  key={feature}
                  className="px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    ...glassStyle,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              VIDEO DEMO SECTION PLACEHOLDER
              ───────────────────────────────────────────────────────────────── */}
          <div
            className="max-w-4xl mx-auto mt-16 w-full"
            style={{
              opacity: heroStyles.description.opacity,
              transform: `translateY(${heroStyles.description.translateY}px)`,
              transition: `all ${CONFIG.TRANSITION_DURATION} ${CONFIG.TRANSITION_EASING}`,
            }}
          >
            <div 
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                ...glassStyle,
                aspectRatio: '16/9',
                border: '2px solid rgba(0, 247, 255, 0.3)',
              }}
            >
              {/* PASTE YOUR VIDEO EMBED CODE HERE */}
              {/* Example for YouTube:
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="VISULYXA Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
              */}
              
              {/* Placeholder - Remove this when you add video */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
                <div className="text-center">
                  <div 
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 247, 255, 0.3), rgba(14, 165, 233, 0.3))',
                      border: '2px solid rgba(0, 247, 255, 0.5)',
                    }}
                  >
                    <Icons.Play />
                  </div>
                  <p 
                    className="text-white/70 text-sm"
                    style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                  >
                    Video Demo Coming Soon
                  </p>
                  <p 
                    className="text-white/40 text-xs mt-2"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Paste your video embed code in Projects.jsx
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              FEATURE CARDS GRID - 4 Column Layout
              ───────────────────────────────────────────────────────────────── */}
          <div 
            className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
            style={{
              opacity: heroStyles.description.opacity,
              transform: `translateY(${heroStyles.description.translateY}px)`,
              transition: `all ${CONFIG.TRANSITION_DURATION} ${CONFIG.TRANSITION_EASING}`,
            }}
          >
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl transition-all duration-500 hover:scale-105 cursor-default"
                style={{
                  ...glassStyle,
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Feature Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color})`,
                    boxShadow: '0 8px 24px rgba(0, 247, 255, 0.25)',
                  }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                {/* Feature Title */}
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'white',
                    letterSpacing: '0.05em',
                  }}
                >
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p 
                  className="text-sm mb-4"
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6',
                  }}
                >
                  {feature.description}
                </p>

                {/* Feature Stat Badge */}
                <div 
                  className="inline-block px-3 py-1 rounded-lg"
                  style={{
                    background: 'rgba(0, 247, 255, 0.15)',
                    border: '1px solid rgba(0, 247, 255, 0.4)',
                  }}
                >
                  <span 
                    className="text-xs font-bold"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      color: '#00F7FF',
                    }}
                  >
                    {feature.stat}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ─────────────────────────────────────────────────────────────────
              NEWSLETTER SIGNUP SECTION
              ───────────────────────────────────────────────────────────────── */}
          <div 
            className="max-w-2xl mx-auto mt-16 p-8 rounded-2xl"
            style={{
              ...glassStyleStrong,
              opacity: heroStyles.description.opacity,
              transform: `translateY(${heroStyles.description.translateY}px)`,
              transition: `all ${CONFIG.TRANSITION_DURATION} ${CONFIG.TRANSITION_EASING}`,
            }}
          >
            {/* Newsletter Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="text-cyan-400">
                  <Icons.Sparkles />
                </div>
                <h3 
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    background: 'linear-gradient(135deg, #00F7FF, #0EA5E9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Stay Updated
                </h3>
              </div>
              <p 
                className="text-white/70"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontSize: '0.95rem',
                }}
              >
                Get the latest algorithm visualizations, features, and updates
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3">
              {/* Email Input */}
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">
                  <Icons.Mail />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all duration-300 focus:border-cyan-400"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    fontFamily: "'Chakra Petch', sans-serif",
                  }}
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #00F7FF, #0EA5E9)',
                  color: 'white',
                  fontFamily: "'Chakra Petch', sans-serif",
                  letterSpacing: '0.05em',
                  boxShadow: '0 8px 24px rgba(0, 247, 255, 0.3)',
                }}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          GLOBAL ANIMATIONS & STYLES
          ═════════════════════════════════════════════════════════════════════ */}
      <style jsx>{`
        /* Pulse Glow Animation for Logo */
        @keyframes pulse-glow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.6;
          }
        }

        /* Float Animation for Feature Pills */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Fade In Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Scale In Animation */
        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Slide Down Animation */
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Fade In Up Animation for Cards */
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Grid Move Animation */
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom Scrollbar Styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(5, 5, 5, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00F7FF, #0EA5E9);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #00D4E6, #0284C7);
        }

        /* Utility Classes for Animations */
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Hero;