import React from 'react';

export const TechTicker: React.FC = () => {
  const items = [
    { label: 'FULL STACK DEVELOPER', color: '#F59E0B' },
    { label: 'SOFTWARE ENGINEER', color: '#38BDF8' },
    { label: 'REACT 19', color: '#61DAFB' },
    { label: 'TYPESCRIPT', color: '#3178C6' },
    { label: 'NODE.JS', color: '#5FA04E' },
    { label: 'POSTGRESQL (PGVECTOR)', color: '#336791' },
    { label: 'OPENAI GPT-4', color: '#10A37F' },
    { label: 'GROQ (LLAMA 3.1)', color: '#F43F5E' },
    { label: 'REDIS / BULLMQ', color: '#DC2626' },
    { label: 'ELASTICSEARCH', color: '#005571' },
    { label: 'DOCKER', color: '#2496ED' },
    { label: 'AWS & GCP', color: '#FF9900' },
    { label: 'SUB-200MS REST APIS', color: '#10B981' },
    { label: 'SEMANTIC VECTOR SEARCH', color: '#8B5CF6' },
  ];

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '2px solid #0A0A0A',
        borderBottom: '2px solid #0A0A0A',
        padding: '16px 0',
        backgroundColor: '#0A0A0A',
        color: '#FBF9F5',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: '36px',
          animation: 'tickerScroll 26s linear infinite',
        }}
        className="ticker-track"
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '36px',
              fontFamily: 'var(--font-heading)',
              fontSize: '13.5px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#FBF9F5',
            }}
          >
            <span>{item.label}</span>
            <span style={{ color: item.color, fontSize: '13px', filter: 'drop-shadow(0 0 4px currentColor)' }}>✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes tickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
