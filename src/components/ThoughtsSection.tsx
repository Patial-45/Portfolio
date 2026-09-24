import React from 'react';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TextReveal, FadeInView } from './MotionReveal';
import { FramerButton } from './FramerButton';

export const ThoughtsSection: React.FC = () => {
  const tagColors: { [key: string]: { color: string; bg: string } } = {
    'AI Engineering': { color: '#059669', bg: 'rgba(5, 150, 105, 0.12)' },
    'System Design': { color: '#2563EB', bg: 'rgba(37, 99, 235, 0.12)' },
    'LLM Architectures': { color: '#D97706', bg: 'rgba(217, 119, 6, 0.12)' },
  };

  return (
    <section
      id="thoughts"
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative',
        borderTop: '2px solid rgba(10, 10, 10, 0.12)',
      }}
    >
      <div className="container-custom">
        
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: '48px',
            borderBottom: '2px solid rgba(10, 10, 10, 0.12)',
            paddingBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <TextReveal
              text="Thoughts"
              as="h2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#0A0A0A',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#D97706', backgroundColor: 'rgba(245, 158, 11, 0.12)', padding: '3px 10px', borderRadius: '6px' }}>
              [05 / Engineering Notes]
            </span>
          </div>

          <span style={{ fontSize: '13px', color: '#1A1A1A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Technical Insights
          </span>
        </div>

        {/* 3 Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
            marginBottom: '44px',
            maxWidth: '100%',
          }}
        >
          {PORTFOLIO_DATA.articles.map((article, idx) => {
            const tagStyle = tagColors[article.tag] || { color: '#2563EB', bg: 'rgba(37, 99, 235, 0.12)' };

            return (
              <FadeInView key={article.id} delay={idx * 0.1} yOffset={20}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    borderRadius: '24px',
                    border: '1px solid rgba(10, 10, 10, 0.12)',
                    overflow: 'hidden',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.06)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  className="thought-card"
                >
                  {/* Preview Image */}
                  <div
                    style={{
                      width: '100%',
                      aspectRatio: '16 / 9',
                      overflow: 'hidden',
                      position: 'relative',
                      borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                      backgroundColor: '#090D16',
                    }}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      className="thought-img"
                    />
                    
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: '#0A0A0A',
                        color: tagStyle.color,
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '4px 12px',
                        borderRadius: '999px',
                        border: `1px solid ${tagStyle.color}`,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                    >
                      ✦ {article.tag}
                    </span>
                  </div>

                  {/* Text Body */}
                  <div
                    style={{
                      padding: '28px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          fontSize: '12.5px',
                          color: '#4B5563',
                          fontWeight: 600,
                          marginBottom: '12px',
                        }}
                      >
                        <span>{article.date}</span>
                        <span>•</span>
                        <span style={{ color: '#D97706', fontWeight: 700 }}>{article.readTime}</span>
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '19px',
                          fontWeight: 800,
                          lineHeight: 1.35,
                          letterSpacing: '-0.02em',
                          color: '#0A0A0A',
                          marginBottom: '12px',
                        }}
                      >
                        {article.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '14.5px',
                          lineHeight: 1.6,
                          color: '#374151',
                          marginBottom: '20px',
                        }}
                      >
                        {article.excerpt}
                      </p>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        color: '#0A0A0A',
                        borderTop: '1px solid rgba(10, 10, 10, 0.08)',
                        paddingTop: '14px',
                      }}
                    >
                      <span>Read Engineering Note</span>
                      <ArrowUpRight size={15} color="#D97706" />
                    </div>
                  </div>
                </a>
              </FadeInView>
            );
          })}
        </div>

        {/* Explore All Banner Card */}
        <FadeInView delay={0.2} yOffset={24}>
          <div
            style={{
              backgroundColor: '#0A0A0A',
              color: '#FBF9F5',
              borderRadius: '24px',
              padding: '44px 50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              boxShadow: '0 20px 48px -10px rgba(0, 0, 0, 0.4)',
            }}
            className="explore-banner"
          >
            <div>
              <div style={{ color: '#F59E0B', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                ✦ Open Source Architecture
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                  color: '#FFFFFF',
                }}
              >
                See how I architect scalable systems with clarity and craft.
              </h3>
              <p style={{ color: 'rgba(251, 249, 245, 0.8)', fontSize: '15px', maxWidth: '650px' }}>
                Explore full open-source code repositories, PostgreSQL pgvector schemas, and algorithmic implementations on GitHub.
              </p>
            </div>

            <FramerButton
              text="View All Repositories"
              hoverText="Visit @Patial-45"
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="lg"
            />
          </div>
        </FadeInView>

      </div>

      <style>{`
        .thought-card:hover {
          transform: translateY(-5px);
          border-color: rgba(10, 10, 10, 0.3) !important;
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.12) !important;
        }
        .thought-card:hover .thought-img {
          transform: scale(1.04);
        }
        @media (max-width: 768px) {
          .explore-banner {
            padding: 30px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
