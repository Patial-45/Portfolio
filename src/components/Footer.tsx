import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, Compass, Radio, Copy, Check, ExternalLink, Shield, FileText, Scale, Sparkles, Clock, MapPin, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

type LegalModalType = 'terms' | 'privacy' | 'license' | null;

export const Footer: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        padding: 'clamp(40px, 6vw, 80px) clamp(16px, 3.5vw, 40px) 40px',
        backgroundColor: 'var(--token-bg)',
        position: 'relative',
      }}
    >
      {/* High-Contrast Production End Card Container */}
      <div
        className="container-custom"
        style={{
          backgroundColor: '#090D16',
          borderRadius: '32px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: 'clamp(28px, 5vw, 60px)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 50px rgba(56, 189, 248, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          color: '#FAF7F3',
        }}
      >
        {/* Glowing Top Rainbow Border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #F59E0B 0%, #38BDF8 50%, #10B981 100%)',
          }}
        />

        {/* Ambient Radial Mesh in background */}
        <div
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-120px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-120px',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Top Tagline & Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1.25fr',
            gap: 'clamp(32px, 4.5vw, 56px)',
            marginBottom: '54px',
            position: 'relative',
            zIndex: 1,
          }}
          className="footer-grid"
        >
          {/* Brand Tagline & Live Status */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '5px 12px',
                  borderRadius: '999px',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#10B981',
                  marginBottom: '18px',
                  letterSpacing: '0.04em',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                    boxShadow: '0 0 10px #10B981',
                  }}
                />
                Available for Full-Stack & AI Roles
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: '#FFFFFF',
                  marginBottom: '14px',
                }}
              >
                Building High-Impact Full-Stack & AI Systems.
              </h2>
              <p style={{ fontSize: '14.5px', color: '#94A3B8', maxWidth: '420px', lineHeight: 1.6, marginBottom: '24px' }}>
                Production experience building AI-integrated systems (React, Node.js, PostgreSQL) and real-world vector matching platforms.
              </p>
            </div>

            {/* Live Clock & Location Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '14px',
                fontSize: '12.5px',
                color: '#CBD5E1',
                width: 'fit-content',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} color="#F59E0B" />
                <span>Chandigarh, India</span>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} color="#38BDF8" />
                <span>IST: <strong>{currentTime || '12:00 PM'}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Links / Navigation Directory */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#F59E0B',
                marginBottom: '20px',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Compass size={14} />
              <span>Navigation Directory</span>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
              {[
                { label: 'Home & Intro', href: '#hero-section' },
                { label: 'About & Bio', href: '#bio-section' },
                { label: 'Core Services', href: '#services' },
                { label: 'Featured Projects', href: '#projects', badge: '5 Systems' },
                { label: 'Experience & Stack', href: '#experience' },
                { label: 'Engineering Thoughts', href: '#thoughts' },
                { label: 'Get in Touch', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: '#CBD5E1',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '6px 10px',
                      borderRadius: '8px',
                      transition: 'all 0.2s ease',
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.transform = 'translateX(0px)';
                    }}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 800,
                          padding: '1px 7px',
                          borderRadius: '999px',
                          backgroundColor: 'rgba(245, 158, 11, 0.15)',
                          color: '#F59E0B',
                          border: '1px solid rgba(245, 158, 11, 0.3)',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#38BDF8',
                marginBottom: '20px',
                paddingBottom: '8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <Radio size={14} />
              <span>Direct Communication</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Interactive Email Card with 1-Click Copy */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.2s ease',
                }}
              >
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  style={{
                    textDecoration: 'none',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minWidth: 0,
                  }}
                >
                  <Mail size={16} color="#38BDF8" style={{ flexShrink: 0 }} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {PORTFOLIO_DATA.profile.email}
                  </span>
                </a>

                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.profile.email, 'email')}
                  title="Copy email address"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    backgroundColor: copiedType === 'email' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                    color: copiedType === 'email' ? '#10B981' : '#94A3B8',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check size={12} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Interactive Phone Card with 1-Click Copy */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.2s ease',
                }}
              >
                <a
                  href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                  style={{
                    textDecoration: 'none',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <Phone size={16} color="#10B981" style={{ flexShrink: 0 }} />
                  <span>{PORTFOLIO_DATA.profile.phone}</span>
                </a>

                <button
                  onClick={() => handleCopy(PORTFOLIO_DATA.profile.phone, 'phone')}
                  title="Copy phone number"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    backgroundColor: copiedType === 'phone' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                    color: copiedType === 'phone' ? '#10B981' : '#94A3B8',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check size={12} />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Interactive Card */}
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(10, 102, 194, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <LinkedinIcon size={16} />
                  <span>LinkedIn Profile</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '11px', color: '#94A3B8' }}>sahil-patial45</span>
                  <ExternalLink size={13} color="#94A3B8" />
                </div>
              </a>

              {/* GitHub Interactive Card */}
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <GithubIcon size={16} />
                  <span>GitHub Repos</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '11px', color: '#F59E0B' }}>Patial-45</span>
                  <ExternalLink size={13} color="#94A3B8" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Production-Grade Legal Badges & Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '18px',
            fontSize: '12.5px',
            color: '#94A3B8',
          }}
        >
          {/* Copyright & Architecture */}
          <div>
            <span>© 2026 {PORTFOLIO_DATA.profile.name}. </span>
            <span style={{ color: '#64748B' }}>Built with React 19, TypeScript & Vite.</span>
          </div>

          {/* Interactive Legal & Compliance Links */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <button
              onClick={() => setLegalModal('terms')}
              style={{
                background: 'none',
                border: 'none',
                color: '#CBD5E1',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 6px',
                borderRadius: '6px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F59E0B')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
            >
              <FileText size={13} />
              <span>Terms & Conditions</span>
            </button>

            <button
              onClick={() => setLegalModal('privacy')}
              style={{
                background: 'none',
                border: 'none',
                color: '#CBD5E1',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 6px',
                borderRadius: '6px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38BDF8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
            >
              <Shield size={13} />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => setLegalModal('license')}
              style={{
                background: 'none',
                border: 'none',
                color: '#CBD5E1',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 6px',
                borderRadius: '6px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#10B981')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#CBD5E1')}
            >
              <Scale size={13} />
              <span>MIT License</span>
            </button>

            {/* Back to Top Interactive Button */}
            <button
              onClick={scrollToTop}
              title="Back to top"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F59E0B';
                e.currentTarget.style.color = '#0A0A0A';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Production Legal Modal (Terms, Privacy, License) */}
      {legalModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            backgroundColor: 'rgba(0, 0, 0, 0.78)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setLegalModal(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '650px',
              maxHeight: '85vh',
              backgroundColor: '#0F172A',
              color: '#F8FAFC',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              boxShadow: '0 30px 70px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '18px 24px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {legalModal === 'terms' && <FileText size={18} color="#F59E0B" />}
                {legalModal === 'privacy' && <Shield size={18} color="#38BDF8" />}
                {legalModal === 'license' && <Scale size={18} color="#10B981" />}
                <h3 style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: '#FFFFFF' }}>
                  {legalModal === 'terms' && 'Terms of Service & Engagement'}
                  {legalModal === 'privacy' && 'Privacy & Data Protection Policy'}
                  {legalModal === 'license' && 'MIT Open Source License'}
                </h3>
              </div>

              <button
                onClick={() => setLegalModal(null)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px', overflowY: 'auto', fontSize: '13.5px', lineHeight: 1.7, color: '#CBD5E1' }}>
              {legalModal === 'terms' && (
                <div>
                  <h4 style={{ color: '#FFFFFF', marginBottom: '8px' }}>1. Professional Services & Engineering Contracts</h4>
                  <p style={{ marginBottom: '16px' }}>
                    All consulting, software architecture, and full-stack development engagements performed by Sahil Patial are executed under agreed statement of work (SOW) deliverables, standard milestone reviews, and clean production testing phases.
                  </p>

                  <h4 style={{ color: '#FFFFFF', marginBottom: '8px' }}>2. Code Ownership & Intellectual Property</h4>
                  <p style={{ marginBottom: '16px' }}>
                    Upon milestone completion and receipt of contract disbursements, all bespoke client software, backend integrations, and custom database schemas belong entirely to the contracting entity or client.
                  </p>

                  <h4 style={{ color: '#FFFFFF', marginBottom: '8px' }}>3. Confidentiality & Non-Disclosure</h4>
                  <p style={{ marginBottom: '16px' }}>
                    Proprietary business logic, enterprise database contacts, API credentials, and internal workflows are handled under strict confidentiality in compliance with standard NDAs.
                  </p>

                  <h4 style={{ color: '#FFFFFF', marginBottom: '8px' }}>4. AI & Production Reliability</h4>
                  <p>
                    All AI-driven vector pipelines (pgvector, OpenAI, Gemini) and automated scraping tools are engineered with rate limiting, error fallbacks, and data sanitization for production uptime.
                  </p>
                </div>
              )}

              {legalModal === 'privacy' && (
                <div>
                  <h4 style={{ color: '#FFFFFF', marginBottom: '8px' }}>1. Zero Telemetry & No Ad Tracking</h4>
                  <p style={{ marginBottom: '16px' }}>
                    This portfolio website does not employ third-party advertising trackers, cross-site behavioral beacons, or invasive analytics pixels. Your visit is private.
                  </p>

                  <h4 style={{ color: '#FFFFFF', marginBottom: '8px' }}>2. Communication Data</h4>
                  <p style={{ marginBottom: '16px' }}>
                    Contact information submitted through the inquiry form or shared via direct channels is used solely for professional collaboration, job opportunities, and technical discussions.
                  </p>

                  <h4 style={{ color: '#FFFFFF', marginBottom: '8px' }}>3. Infrastructure Security</h4>
                  <p>
                    Hosted on Vercel's global edge network with automated SSL/TLS encryption, HTTP/2 delivery, and continuous security patching.
                  </p>
                </div>
              )}

              {legalModal === 'license' && (
                <div>
                  <div
                    style={{
                      padding: '14px',
                      backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: '10px',
                      fontFamily: 'monospace',
                      fontSize: '12px',
                      color: '#E2E8F0',
                      lineHeight: 1.6,
                      marginBottom: '16px',
                    }}
                  >
                    MIT License<br /><br />
                    Copyright (c) 2026 Sahil Patial<br /><br />
                    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies...
                  </div>
                  <p>
                    Public software repositories featured on GitHub (AI Resume Builder, VectraWork Marketplace, Quite Hours) are distributed under their respective open-source licenses as noted in their GitHub repositories.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div
              style={{
                padding: '14px 24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <button
                onClick={() => setLegalModal(null)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#0A0A0A',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
};
