import React, { useState, useRef, useEffect } from 'react';
import { Mail, FileText, CheckCircle2, RotateCw, MapPin, Award, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { FramerButton } from './FramerButton';
import { TextReveal, FadeInView } from './MotionReveal';

interface BioAndAvatarProps {
  onOpenResume: () => void;
}

export const BioAndAvatar: React.FC<BioAndAvatarProps> = ({ onOpenResume }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 10,
      y: (x / (rect.width / 2)) * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="bio-section"
      style={{
        paddingTop: '60px',
        paddingBottom: '100px',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 390px) 1fr',
            gap: 'clamp(32px, 4.5vw, 56px)',
            alignItems: 'start',
          }}
          className="bio-grid"
        >
          {/* Left Column: Sticky Avatar & 3D Interactive Card with Warm Amber/Gold Ambient Glow */}
          <div
            style={{
              position: 'sticky',
              top: '90px',
              maxWidth: '100%',
            }}
            className="avatar-sticky-wrap"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="perspective-1000"
              style={{
                width: '100%',
                maxWidth: '380px',
                margin: '0 auto',
                cursor: 'pointer',
              }}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div
                className="transform-style-3d"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(440px, 75vw, 500px)',
                  borderRadius: '24px',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (isFlipped ? 180 : 0)}deg)`,
                  boxShadow: '0 25px 60px -12px rgba(10, 10, 10, 0.28), 0 0 50px rgba(245, 158, 11, 0.22)',
                }}
              >
                {/* Front Face: High-Res Portrait Photo with High Contrast Overlays */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    backfaceVisibility: 'hidden',
                    backgroundColor: '#0A0A0A',
                    border: '2px solid rgba(245, 158, 11, 0.35)',
                  }}
                >
                  <img
                    src={PORTFOLIO_DATA.profile.avatar}
                    alt={PORTFOLIO_DATA.profile.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'contrast(1.08) brightness(1)',
                    }}
                  />

                  {/* Gradient Overlay & High Contrast Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.25) 50%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '24px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          backgroundColor: '#0A0A0A',
                          border: '1px solid rgba(245, 158, 11, 0.5)',
                          color: '#F59E0B',
                          padding: '6px 14px',
                          borderRadius: '999px',
                          fontSize: '11px',
                          fontWeight: 800,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        }}
                      >
                        ✦ Sahil Patial
                      </span>

                      <button
                        title="Click to flip card"
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.28)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.4)',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <RotateCw size={15} />
                      </button>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '23px',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          marginBottom: '4px',
                          textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                        }}
                      >
                        {PORTFOLIO_DATA.profile.primaryRole}
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.88)', fontSize: '13.5px', fontWeight: 500 }}>
                        De Corporate Consulting • Chandigarh, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Back Face: High Contrast Developer Spec Sheet */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '24px',
                    overflow: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundColor: '#0D1117',
                    color: '#F0F6FC',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '2px solid rgba(56, 189, 248, 0.35)',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#38BDF8', fontWeight: 800 }}>
                        ✦ Developer ID & Stack
                      </span>
                      <RotateCw size={14} color="#38BDF8" />
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, marginBottom: '6px', color: '#FFFFFF' }}>
                      Sahil Patial
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#94A3B8', marginBottom: '22px' }}>
                      Full Stack Software Engineer • MCA AI/ML (CGPA 9.0)
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontSize: '10px', color: '#F59E0B', marginBottom: '2px', textTransform: 'uppercase', fontWeight: 700 }}>CORE ARCHITECTURE</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>React 19 • Node.js • pgvector • BullMQ</div>
                      </div>

                      <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontSize: '10px', color: '#10B981', marginBottom: '2px', textTransform: 'uppercase', fontWeight: 700 }}>PRODUCTION POSITION</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Senior Operations Associate @ De Corporate</div>
                      </div>

                      <div style={{ padding: '12px 14px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div style={{ fontSize: '10px', color: '#A855F7', marginBottom: '2px', textTransform: 'uppercase', fontWeight: 700 }}>TOP CERTIFICATION</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>OCI 2025 Certified Generative AI Professional</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '12px', color: '#64748B', textAlign: 'center' }}>
                    Click card to flip back to portrait
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div>
            
            <TextReveal
              text="Hey!"
              as="h2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '28px',
                color: '#0A0A0A',
              }}
            />

            <FadeInView delay={0.15}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: '#1F1F1F',
                  marginBottom: '40px',
                  fontWeight: 450,
                }}
              >
                <p>
                  {PORTFOLIO_DATA.profile.bioParagraphs[0]}
                </p>
                <p>
                  {PORTFOLIO_DATA.profile.bioParagraphs[1]}
                </p>
                <p>
                  {PORTFOLIO_DATA.profile.bioParagraphs[2]}
                </p>
              </div>
            </FadeInView>

            {/* Action Buttons using exact FramerButton */}
            <FadeInView delay={0.25}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '52px',
                }}
              >
                <FramerButton
                  text="Get Started"
                  hoverText="Start a Project"
                  href="#contact"
                  variant="primary"
                  size="lg"
                />

                <FramerButton
                  text="View Resume"
                  hoverText="Download / Print"
                  onClick={onOpenResume}
                  variant="secondary"
                  size="lg"
                  icon={<FileText size={16} />}
                />

                <FramerButton
                  text="GitHub"
                  hoverText="Visit @Patial-45"
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="lg"
                  icon={<GithubIcon size={16} />}
                />
              </div>
            </FadeInView>

            {/* High Contrast Impact Metrics Grid */}
            <FadeInView delay={0.35}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '14px',
                  paddingTop: '28px',
                  borderTop: '2px solid rgba(10, 10, 10, 0.12)',
                  maxWidth: '100%',
                }}
              >
                {/* Metric 1 */}
                <div
                  style={{
                    padding: '18px 16px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10, 10, 10, 0.12)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                    minWidth: 0,
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#0284C7', lineHeight: 1 }}>
                    20,000+
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#4B5563', marginTop: '6px', fontWeight: 600, lineHeight: 1.35 }}>
                    Contacts Curated & Indexed
                  </div>
                </div>

                {/* Metric 2 */}
                <div
                  style={{
                    padding: '18px 16px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10, 10, 10, 0.12)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                    minWidth: 0,
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#059669', lineHeight: 1 }}>
                    92%
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#4B5563', marginTop: '6px', fontWeight: 600, lineHeight: 1.35 }}>
                    AI Match Accuracy
                  </div>
                </div>

                {/* Metric 3 */}
                <div
                  style={{
                    padding: '18px 16px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10, 10, 10, 0.12)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                    minWidth: 0,
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#D97706', lineHeight: 1 }}>
                    500+
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#4B5563', marginTop: '6px', fontWeight: 600, lineHeight: 1.35 }}>
                    Daily Listings Scraped
                  </div>
                </div>

                {/* Metric 4 */}
                <div
                  style={{
                    padding: '18px 16px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10, 10, 10, 0.12)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.04)',
                    minWidth: 0,
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3.5vw, 32px)', fontWeight: 800, color: '#7C3AED', lineHeight: 1 }}>
                    9.0
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#4B5563', marginTop: '6px', fontWeight: 600, lineHeight: 1.35 }}>
                    MCA in AI/ML CGPA
                  </div>
                </div>
              </div>
            </FadeInView>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .bio-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .avatar-sticky-wrap {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
