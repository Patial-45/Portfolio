import React, { useState } from 'react';
import { Star, RotateCw, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TextReveal, FadeInView } from './MotionReveal';

export const TestimonialsSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const backDetails: { [key: string]: { project: string; metric: string; context: string } } = {
    '1': {
      project: 'AI-Powered Client-Job Matching Platform',
      metric: '180+ daily matches surfaced across 10-person pilot',
      context: 'PostgreSQL pgvector semantic search engine + Elasticsearch + Redis/BullMQ task queue architecture.'
    },
    '2': {
      project: 'Re-Imagine Web Dev Hackathon Finalist',
      metric: '2 full-stack apps designed & deployed in 36 hours',
      context: 'React frontend, Express REST APIs, MongoDB compound indexes under 2 elimination rounds.'
    },
    '3': {
      project: 'AI Resume Compatibility & Scoring Engine',
      metric: '92% scoring accuracy + 500+ daily scraped listings',
      context: 'OpenAI GPT-4 & Groq Llama 3.1 analysis with automated BeautifulSoup and Selenium pipelines.'
    },
    '4': {
      project: 'Operations Automation & LinkedIn Tooling',
      metric: '30–40 person team daily adoption',
      context: 'Custom Chrome extensions for 1-click candidate extraction and automated email discovery.'
    }
  };

  return (
    <section
      id="testimonials"
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="container-custom">
        
        {/* Header matching Framer layout */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '48px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            paddingBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <TextReveal
              text="Testimonials"
              as="h2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--token-dark)',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--token-text-muted)' }}>
              [04 / Trust & Validation]
            </span>
          </div>

          <span style={{ fontSize: '13px', color: 'var(--token-text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            3D Interactive Cards • Click to Flip
          </span>
        </div>

        {/* 3D Flip Testimonial Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {PORTFOLIO_DATA.testimonials.map((t, idx) => {
            const isFlipped = !!flippedCards[t.id];
            const detail = backDetails[t.id] || backDetails['1'];

            return (
              <FadeInView key={t.id} delay={idx * 0.1} yOffset={20}>
                <div
                  className="perspective-1000"
                  style={{
                    minHeight: '340px',
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                  onClick={() => toggleFlip(t.id)}
                >
                  <div
                    className="transform-style-3d"
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      borderRadius: '20px',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                  >
                    {/* Front Face */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--token-dark)',
                        color: 'var(--token-bg)',
                        borderRadius: '20px',
                        padding: '34px 28px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backfaceVisibility: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 12px 32px -8px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill="#FAF7F3" color="#FAF7F3" />
                            ))}
                          </div>
                          <span style={{ fontSize: '11px', color: 'rgba(250,247,243,0.4)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            Flip <RotateCw size={11} />
                          </span>
                        </div>

                        <p
                          style={{
                            fontSize: '15px',
                            lineHeight: 1.65,
                            color: 'rgba(250, 247, 243, 0.92)',
                            marginBottom: '24px',
                          }}
                        >
                          "{t.quote}"
                        </p>
                      </div>

                      {/* Author */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '14px',
                          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                          paddingTop: '18px',
                        }}
                      >
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                            color: '#FAF7F3',
                          }}
                        >
                          {t.avatarText}
                        </div>

                        <div>
                          <h4
                            style={{
                              fontFamily: 'var(--font-heading)',
                              fontSize: '15px',
                              fontWeight: 700,
                              color: '#FAF7F3',
                              marginBottom: '2px',
                            }}
                          >
                            {t.author}
                          </h4>
                          <div style={{ fontSize: '12px', color: 'rgba(250, 247, 243, 0.6)' }}>
                            {t.role} • {t.organization}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Face: Verified Technical Outcomes */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: '#1b1b1b',
                        color: 'var(--token-bg)',
                        borderRadius: '20px',
                        padding: '34px 28px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: '0 12px 32px -8px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10b981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <CheckCircle2 size={12} /> Verified Outcomes
                          </span>
                          <RotateCw size={12} color="rgba(250,247,243,0.5)" />
                        </div>

                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#FAF7F3', marginBottom: '8px' }}>
                          {detail.project}
                        </h4>

                        <div style={{ padding: '10px 12px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.06)', marginBottom: '12px', fontSize: '13px', fontWeight: 600, color: '#38bdf8' }}>
                          {detail.metric}
                        </div>

                        <p style={{ fontSize: '13px', lineHeight: 1.55, color: 'rgba(250, 247, 243, 0.75)' }}>
                          {detail.context}
                        </p>
                      </div>

                      <div style={{ fontSize: '11px', color: 'rgba(250,247,243,0.4)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px' }}>
                        Click card to flip back
                      </div>
                    </div>

                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>

      </div>
    </section>
  );
};
