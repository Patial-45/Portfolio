import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { FramerButton } from './FramerButton';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#bio-section' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Articles', href: '#thoughts' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(250, 247, 243, 0.88)' : 'rgba(250, 247, 243, 0.6)',
          backdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid transparent',
          padding: '16px 0',
        }}
      >
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo / Brand Name */}
          <a
            href="#hero-section"
            style={{
              textDecoration: 'none',
              color: 'var(--token-dark)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '18px',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>{PORTFOLIO_DATA.profile.name}</span>
            <span
              className="nav-available-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 8px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 600,
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                color: '#059669',
                border: '1px solid rgba(16, 185, 129, 0.25)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.3)',
                }}
              />
              Available
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--token-dark)',
                  fontSize: '14px',
                  fontWeight: 600,
                  opacity: 0.75,
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.75';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="nav-resume-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: 'transparent',
                color: 'var(--token-dark)',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.35)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <FileText size={13} />
              <span>Resume</span>
            </button>

            {/* Framer Button with Dual Flying Arrows */}
            <FramerButton
              text="Get in Touch"
              hoverText="Let's Build"
              href="#contact"
              variant="primary"
              size="sm"
            />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                color: 'var(--token-dark)',
              }}
              className="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 49,
            backgroundColor: 'rgba(250, 247, 243, 0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '100px 28px 40px 28px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase' }}>
              / Navigation
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: 'var(--token-dark)',
                  fontSize: '28px',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                  paddingBottom: '12px',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.3)', fontFamily: 'var(--font-body)' }}>
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          <div>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  color: 'var(--token-dark)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  color: 'var(--token-dark)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)' }}>
              © 2026 {PORTFOLIO_DATA.profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      )}

      {/* Responsive media query styling */}
      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
        @media (max-width: 580px) {
          .nav-resume-btn {
            display: none !important;
          }
        }
        @media (max-width: 420px) {
          .nav-available-badge {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
