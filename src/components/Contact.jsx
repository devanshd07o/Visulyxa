import React, { useState, useEffect, useRef } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * VISULYXA CONNECT SECTION - ULTRA PREMIUM LUXURY EDITION
 * ═══════════════════════════════════════════════════════════════════════════
 * * FEATURES:
 * ✓ Minimalist Digital Business Card Layout
 * ✓ Premium Glassmorphism Design
 * ✓ Interactive Mouse-Follow Glow Effects
 * ✓ Professional Social Links
 * ✓ Responsive Bento Grid Layout
 * ✓ Smooth Animations Throughout
 * ✓ Cyber-Luxury Aesthetic
 * * UPDATES:
 * - Removed Large Identity Header
 * - Removed Communication Terminal Form
 * - Centered Focus on Professional Links & Contact Info
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════
// ICON LIBRARY - Premium SVG Icons
// ═══════════════════════════════════════════════════════════════════════════
const Icons = {
  LinkedIn: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  
  GitHub: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  
  Mail: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  ),
  
  MapPin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  
  Terminal: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
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
// MAIN CONTACT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
const Contact = () => {
  // ─────────────────────────────────────────────────────────────────────────
  // STATE MANAGEMENT
  // ─────────────────────────────────────────────────────────────────────────
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // ─────────────────────────────────────────────────────────────────────────
  // GLASSMORPHISM STYLES
  // ─────────────────────────────────────────────────────────────────────────
  const glassStyle = {
    background: 'rgb(0, 0, 0)',
    backdropFilter: 'blur(24px) saturate(150%)',
    WebkitBackdropFilter: 'blur(24px) saturate(150%)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px rgba(0, 40, 96, 0.61), inset 0 1px 0 rgba(255, 255, 255, 0.86)',
  };

  // ─────────────────────────────────────────────────────────────────────────
  // MOUSE TRACKING FOR GLOW EFFECTS
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // ─────────────────────────────────────────────────────────────────────────
  // SOCIAL LINKS CONFIGURATION
  // ─────────────────────────────────────────────────────────────────────────
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Icons.LinkedIn />,
      url: 'https://www.linkedin.com/in/devansh-dubey-aa802b305',
      label: 'PROFESSIONAL_NETWORK',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Icons.GitHub />,
      url: 'https://github.com/devanshd07o',
      label: 'CODE_REPOSITORY',
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Portfolio',
      icon: <Icons.Terminal />,
      url: '#', // Reserved for future use
      label: 'RESERVED_ACCESS',
      color: 'from-cyan-400 to-teal-500',
      comingSoon: true
    }
  ];

  // ═══════════════════════════════════════════════════════════════════════════
  // COMPONENT RENDER
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 px-4 sm:px-6 overflow-hidden flex flex-col justify-center"
      style={{
        background: '#000000',
      }}
    >
      {/* ─────────────────────────────────────────────────────────────────────
          BACKGROUND EFFECTS
          ───────────────────────────────────────────────────────────────────── */}
      
      {/* Mouse Follow Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.88), transparent 40%)`,
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(0, 0, 0, 0.93) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* ─────────────────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER
          ───────────────────────────────────────────────────────────────────── */}
      <div className="relative max-w-7xl mx-auto w-full">
        
        {/* ═════════════════════════════════════════════════════════════════
            SECTION HEADER
            ═════════════════════════════════════════════════════════════════ */}
        <div className="text-center mb-16 animate-fadeInUp">
          {/* System Access Label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span
              className="text-xs uppercase tracking-[0.3em]"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: 'rgba(3, 44, 45, 0.87)',
              }}
            >
              SYSTEM_ACCESS_GRANTED
            </span>
          </div>

          {/* Main Title */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(135deg, #FFFFFF 0%, #00F7FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.05em',
            }}
          >
            ESTABLISH CONNECTION
          </h2>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: "'Exo 2', sans-serif",
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            Initiating secure communication protocol. All channels operational.
          </p>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            CENTERED CONTENT LAYOUT - No Large Name, No Form
            ═════════════════════════════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          
          <div className="space-y-6">
            
            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.comingSoon ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl relative overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{
                    ...glassStyle,
                    animationDelay: `${0.2 + idx * 0.1}s`,
                  }}
                >
                  {/* Background Gradient on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(0, 0, 0, 0.86), rgb(0, 0, 0))`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 mb-3">
                      {social.icon}
                    </div>

                    {/* Name */}
                    <div
                      className="text-sm font-bold text-white mb-1"
                      style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                    >
                      {social.name}
                    </div>

                    {/* Label */}
                    <div
                      className="text-[10px] uppercase tracking-wider text-white/40"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {social.label}
                    </div>

                    {/* Coming Soon Badge */}
                    {social.comingSoon && (
                      <div
                        className="absolute top-3 right-3 px-2 py-1 rounded text-[8px] uppercase tracking-wider"
                        style={{
                          background: 'rgba(0, 247, 255, 0.2)',
                          border: '1px solid rgba(0, 247, 255, 0.4)',
                          color: '#00F7FF',
                          fontFamily: "'Space Mono', monospace",
                        }}
                      >
                        RESERVED
                      </div>
                    )}

                    {/* External Link Icon */}
                    {!social.comingSoon && (
                      <div className="absolute bottom-3 right-3 text-white/30 group-hover:text-cyan-400 transition-colors duration-300">
                        <Icons.ExternalLink />
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Details Card */}
            <div
              className="p-8 rounded-2xl space-y-4"
              style={glassStyle}
            >
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-cyan-400 mt-1">
                  <Icons.Mail />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider text-white/50 mb-1"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    EMAIL
                  </div>
                  <a
                    href="mailto:ddevansh881@gmail.com"
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                    style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                  >
                    ddevansh881@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="text-cyan-400 mt-1">
                  <Icons.MapPin />
                </div>
                <div>
                  <div
                    className="text-xs uppercase tracking-wider text-white/50 mb-1"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    LOCATION
                  </div>
                  <div
                    className="text-white"
                    style={{ fontFamily: "'Chakra Petch', sans-serif" }}
                  >
                    DELHI, INDIA
                  </div>
                  <div
                    className="text-xs text-white/40 mt-1"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    28.6139° N, 77.2090° E
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════════
            FOOTER SIGNATURE
            ═════════════════════════════════════════════════════════════════ */}
        <div className="pt-8 border-t border-white/10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div
              className="text-xs text-white/30"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              © 2026 VISULYXA SYSTEMS. ALL RIGHTS RESERVED.
            </div>

            {/* Signature */}
            <div className="flex items-center gap-3">
              <div
                className="text-xs uppercase tracking-wider text-white/20"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                ENGINEERED IN INDIA
              </div>
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <div
                className="text-xs text-white/30"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                Built by <span className="text-cyan-400/50">Devansh Dubey</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═════════════════════════════════════════════════════════════════════
          ANIMATIONS
          ═════════════════════════════════════════════════════════════════════ */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default Contact;