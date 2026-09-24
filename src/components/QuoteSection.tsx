import React from 'react';
import { TextReveal, FadeInView } from './MotionReveal';

export const QuoteSection: React.FC = () => {
  return (
    <section
      style={{
        paddingTop: '100px',
        paddingBottom: '100px',
        borderTop: '2px solid rgba(10, 10, 10, 0.1)',
        borderBottom: '2px solid rgba(10, 10, 10, 0.1)',
        position: 'relative',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: '1100px' }}>
          
          <FadeInView delay={0.05}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#D97706',
                padding: '4px 12px',
                borderRadius: '999px',
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                marginBottom: '28px',
              }}
            >
              <span>✦</span>
              <span>Core Engineering Philosophy</span>
            </div>
          </FadeInView>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.55rem, 3.8vw, 3.2rem)',
              fontWeight: 500,
              lineHeight: 1.38,
              letterSpacing: '-0.025em',
              color: '#1A1A1A',
            }}
          >
            <span>From architecture to production. </span>
            <span style={{ color: '#0A0A0A', fontWeight: 800, borderBottom: '3px solid #F59E0B' }}>
              Clean, scalable full-stack applications and AI systems
            </span>{' '}
            <span>built to move fast, stay resilient, and perform in real-world use — driven by </span>
            <span style={{ color: '#E11D48', fontWeight: 800 }}>clarity</span>
            <span>, structured data schemas, and intentional systems engineering.</span>
          </h2>

        </div>
      </div>
    </section>
  );
};
