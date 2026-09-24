import React, { useState } from 'react';
import { Terminal, Sparkles, Code2, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TextReveal, FadeInView } from './MotionReveal';
import { FramerButton } from './FramerButton';

export const Hero: React.FC = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const roles = PORTFOLIO_DATA.profile.targetDesignations;

  return (
    <section
      id="hero-section"
      style={{
        paddingTop: '135px',
        paddingBottom: '35px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom">
        
        {/* Top Badges & Holographic 3D Element */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '28px',
          }}
        >
          {/* Target Role Selector Pills with High Contrast */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px',
              maxWidth: '100%',
            }}
          >
            {roles.map((role, idx) => {
              const isActive = activeRoleIndex === idx;
              return (
                <button
                  key={role}
                  onClick={() => setActiveRoleIndex(idx)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    border: isActive 
                      ? '1px solid #0A0A0A' 
                      : '1px solid rgba(10, 10, 10, 0.16)',
                    backgroundColor: isActive 
                      ? '#0A0A0A' 
                      : '#FFFFFF',
                    color: isActive 
                      ? '#FAF7F3' 
                      : '#1A1A1A',
                    boxShadow: isActive 
                      ? '0 6px 16px -2px rgba(10, 10, 10, 0.25), 0 0 0 1px rgba(245, 158, 11, 0.3)' 
                      : '0 2px 6px rgba(0, 0, 0, 0.04)',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#F59E0B' : 'rgba(10, 10, 10, 0.3)',
                      boxShadow: isActive ? '0 0 6px #F59E0B' : 'none',
                    }}
                  />
                  {role}
                </button>
              );
            })}
          </div>

          {/* 3D Holographic Element */}
          <div
            className="animate-float holo-badge-wrap"
            style={{
              width: 'clamp(56px, 9vw, 92px)',
              height: 'clamp(56px, 9vw, 92px)',
              flexShrink: 0,
              filter: 'drop-shadow(0 16px 28px rgba(0, 0, 0, 0.18))',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            <img
              src="/images/holo-element.png"
              alt="Holographic icon"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

        {/* Large Editorial Headline with High Contrast & Punch */}
        <div
          style={{
            position: 'relative',
            borderBottom: '2px solid rgba(10, 10, 10, 0.12)',
            paddingBottom: '32px',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              textTransform: 'uppercase',
              color: '#0A0A0A',
              maxWidth: '100%',
            }}
            className="hero-big-title"
          >
            {activeRoleIndex === 0 ? (
              <>
                <TextReveal text="FULL STACK" as="h1" className="title-row" />
                <TextReveal text="DEVELOPER" as="h1" className="title-row accent-row" delay={0.08} />
              </>
            ) : activeRoleIndex === 1 ? (
              <>
                <TextReveal text="SOFTWARE" as="h1" className="title-row" />
                <TextReveal text="ENGINEER" as="h1" className="title-row accent-row" delay={0.08} />
              </>
            ) : (
              <>
                <TextReveal text="SOFTWARE" as="h1" className="title-row" />
                <TextReveal text="DEVELOPER" as="h1" className="title-row accent-row" delay={0.08} />
              </>
            )}
          </div>

          {/* Meta Bar below title with High Contrast Badges */}
          <FadeInView delay={0.2}>
            <div
              style={{
                marginTop: '28px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '14px',
                fontSize: '13px',
                fontWeight: 700,
                color: '#2A2A2A',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                maxWidth: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <span style={{ padding: '4px 10px', borderRadius: '6px', backgroundColor: '#0A0A0A', color: '#FBF9F5', fontSize: '11.5px', fontWeight: 800 }}>
                  © 2026
                </span>
                <span style={{ color: '#1A1A1A' }}>
                  CHANDIGARH, INDIA
                </span>
                <span style={{ color: '#D97706', fontWeight: 800 }} className="hidden-mobile">
                  • AI & FULL STACK ARCHITECTURE
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(10, 10, 10, 0.12)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                  maxWidth: '100%',
                  flexWrap: 'wrap',
                }}
              >
                <Terminal size={14} color="#059669" />
                <span style={{ color: '#0A0A0A', fontWeight: 800, fontSize: '12px' }}>
                  REACT 19 • NODE.JS • POSTGRES (PGVECTOR)
                </span>
              </div>
            </div>
          </FadeInView>
        </div>

      </div>

      <style>{`
        .hero-big-title .title-row {
          font-size: clamp(2.35rem, 8.2vw, 7.2rem);
          display: flex;
          flex-wrap: wrap;
          max-width: 100%;
        }
        .hero-big-title .accent-row {
          color: #0A0A0A;
          text-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }
        @media (max-width: 640px) {
          .hero-big-title .title-row {
            font-size: clamp(2.1rem, 11vw, 3.4rem) !important;
            letter-spacing: -0.03em;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
