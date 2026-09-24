import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        paddingTop: '80px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        
        {/* Top Tagline & Columns matching Framer structure */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '48px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Brand Tagline */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--token-dark)',
                marginBottom: '16px',
              }}
            >
              {PORTFOLIO_DATA.profile.tagline}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--token-text-muted)', maxWidth: '420px', lineHeight: 1.6 }}>
              Production experience building AI-integrated systems (React, Node.js, PostgreSQL) and real-world matching platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--token-text-muted)',
                marginBottom: '20px',
              }}
            >
              / Quick links
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', href: '#hero-section' },
                { label: 'About Me', href: '#bio-section' },
                { label: 'Services', href: '#services' },
                { label: 'Works & Projects', href: '#projects' },
                { label: 'Experience & Skills', href: '#experience' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Engineering Thoughts', href: '#thoughts' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--token-dark)',
                      fontSize: '14px',
                      fontWeight: 500,
                      opacity: 0.75,
                      transition: 'opacity 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--token-text-muted)',
                marginBottom: '20px',
              }}
            >
              / Direct Channels
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <li>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--token-dark)',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Mail size={15} />
                  <span>{PORTFOLIO_DATA.profile.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--token-dark)',
                    fontSize: '14px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0.8,
                  }}
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn / sahil-patial45</span>
                </a>
              </li>

              <li>
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--token-dark)',
                    fontSize: '14px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0.8,
                  }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub / Patial-45</span>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--token-dark)',
                    fontSize: '14px',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0.8,
                  }}
                >
                  <Phone size={15} />
                  <span>{PORTFOLIO_DATA.profile.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            paddingTop: '32px',
            fontSize: '13px',
            color: 'var(--token-text-muted)',
          }}
        >
          <div>
            © 2026 {PORTFOLIO_DATA.profile.name}. Designed & Built with Full Stack & AI Precision.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Chandigarh, India</span>
            
            <button
              onClick={scrollToTop}
              title="Back to top"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: 'rgba(0, 0, 0, 0.03)',
                color: 'var(--token-dark)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
};
