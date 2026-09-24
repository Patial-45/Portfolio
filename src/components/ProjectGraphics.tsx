import React from 'react';
import { Sparkles, Terminal, Database, Search, ArrowRight, ShieldCheck, Cpu, Code2, Layers, Zap, CheckCircle2 } from 'lucide-react';

export const ResumeMatcherGraphic: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#090D16',
        color: '#E2E8F0',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px 18px',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          paddingBottom: '10px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 8px #10B981', flexShrink: 0 }} />
          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
            ATS Engine v2.4 • Groq & GPT-4
          </span>
        </div>
        <span
          style={{
            fontSize: '10.5px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '6px',
            backgroundColor: 'rgba(56, 189, 248, 0.16)',
            color: '#38BDF8',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          Scraper Daemon: Active
        </span>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
          gap: '12px',
          margin: '10px 0',
          alignItems: 'center',
          minWidth: 0,
        }}
      >
        {/* Score Radial Box with Vibrant Green Accent */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '12px 14px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minWidth: 0,
          }}
        >
          <div style={{ fontSize: '10.5px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>
            JD Match Compatibility
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '34px', fontWeight: 800, color: '#10B981', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
              92%
            </span>
            <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#10B981', padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              ✓ High Match
            </span>
          </div>

          {/* Progress Bars */}
          <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#CBD5E1', marginBottom: '2px', fontWeight: 600 }}>
                <span>Keyword Density</span>
                <span style={{ color: '#F59E0B' }}>94%</span>
              </div>
              <div style={{ height: '4px', borderRadius: '999px', backgroundColor: '#1E293B', overflow: 'hidden' }}>
                <div style={{ width: '94%', height: '100%', backgroundColor: '#F59E0B' }} />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#CBD5E1', marginBottom: '2px', fontWeight: 600 }}>
                <span>Vector Semantic Similarity</span>
                <span style={{ color: '#38BDF8' }}>96%</span>
              </div>
              <div style={{ height: '4px', borderRadius: '999px', backgroundColor: '#1E293B', overflow: 'hidden' }}>
                <div style={{ width: '96%', height: '100%', backgroundColor: '#38BDF8' }} />
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations & Live Pipeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
          <div
            style={{
              padding: '10px 12px',
              borderRadius: '10px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              fontSize: '11px',
              minWidth: 0,
            }}
          >
            <div style={{ color: '#38BDF8', fontWeight: 700, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={12} color="#38BDF8" style={{ flexShrink: 0 }} /> AI Realtime Optimization
            </div>
            <div style={{ color: '#E2E8F0', fontSize: '10.5px', lineHeight: 1.35 }}>
              Verified: pgvector, BullMQ & sub-200ms REST benchmarks detected.
            </div>
          </div>

          <div
            style={{
              padding: '10px 12px',
              borderRadius: '10px',
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              fontSize: '11px',
              minWidth: 0,
            }}
          >
            <div style={{ color: '#F59E0B', fontWeight: 700, marginBottom: '2px' }}>Live Scraper Daemon</div>
            <div style={{ color: '#FDE68A', fontWeight: 600, fontSize: '10.5px' }}>
              500+ daily listings scraped (LinkedIn / Indeed)
            </div>
          </div>
        </div>

      </div>

      {/* Footer Tags */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#94A3B8',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '10px',
          flexWrap: 'wrap',
          gap: '6px',
        }}
      >
        <span style={{ color: '#FFFFFF', fontWeight: 600 }}>TypeScript • React 19 • Python</span>
        <span style={{ color: '#10B981', fontWeight: 700 }}>⚡ 70% job search time saved</span>
      </div>
    </div>
  );
};

export const ExecutiveSearchGraphic: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#070C18',
        color: '#E2E8F0',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px 18px',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        boxSizing: 'border-box',
      }}
    >
      {/* Search Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          paddingBottom: '10px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <Database size={14} color="#38BDF8" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
            De Corporate • PostgreSQL (pgvector)
          </span>
        </div>
        <span
          style={{
            fontSize: '10.5px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '4px',
            backgroundColor: 'rgba(245, 158, 11, 0.18)',
            color: '#F59E0B',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          Redis / BullMQ Live
        </span>
      </div>

      {/* Search Query Bar */}
      <div style={{ margin: '8px 0', minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '10px',
            backgroundColor: '#0F172A',
            border: '1px solid #1E293B',
            fontSize: '11.5px',
            minWidth: 0,
          }}
        >
          <Search size={13} color="#38BDF8" style={{ flexShrink: 0 }} />
          <span
            style={{
              color: '#FFFFFF',
              fontWeight: 600,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              flexGrow: 1,
            }}
          >
            Query: "Senior AI Engineer (React 19 + pgvector + BullMQ)"
          </span>
          <span
            style={{
              flexShrink: 0,
              fontSize: '10.5px',
              color: '#10B981',
              fontWeight: 700,
              padding: '2px 6px',
              borderRadius: '4px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
            }}
          >
            24ms
          </span>
        </div>
      </div>

      {/* Result Card with Vector Cosine Score */}
      <div
        style={{
          padding: '12px 14px',
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          minWidth: 0,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap', gap: '6px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#FFFFFF' }}>
            Top Candidate Match #1
          </span>
          <span style={{ fontSize: '11px', color: '#38BDF8', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(56, 189, 248, 0.15)' }}>
            Cosine: 0.948 (pgvector)
          </span>
        </div>
        <div style={{ fontSize: '11px', color: '#94A3B8', lineHeight: 1.35 }}>
          Explainable AI: pgvector embeddings, BM25 rank 14.8, 10-person pilot lead.
        </div>
      </div>

      {/* Telemetry Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '8px',
          marginTop: '8px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '10px',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: '9.5px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Companies</div>
          <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#38BDF8', whiteSpace: 'nowrap' }}>1,000+</div>
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: '9.5px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Contacts</div>
          <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#F59E0B', whiteSpace: 'nowrap' }}>20,000+</div>
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: '9.5px', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Daily Matches</div>
          <div style={{ fontSize: '13.5px', fontWeight: 800, color: '#10B981', whiteSpace: 'nowrap' }}>180+ Active</div>
        </div>
      </div>
    </div>
  );
};

export const FreelanceMarketplaceGraphic: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0B1120',
        color: '#E2E8F0',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px 18px',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          paddingBottom: '10px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <Zap size={14} color="#38BDF8" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
            VectraWork • Production Marketplace
          </span>
        </div>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '4px',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            color: '#A5B4FC',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            whiteSpace: 'nowrap',
          }}
        >
          JWT + RBAC Auth
        </span>
      </div>

      {/* Live Bidding & Escrow Card */}
      <div style={{ margin: '8px 0', display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
        <div
          style={{
            padding: '10px 14px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            minWidth: 0,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
            <span style={{ fontWeight: 700, color: '#FFFFFF' }}>Cloud Platform Optimization</span>
            <span style={{ color: '#22C55E', fontWeight: 800 }}>$4,200 (Escrow)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#94A3B8' }}>
            <span>6 Specialist Bids Submitted</span>
            <span style={{ color: '#38BDF8', fontWeight: 600 }}>Milestone Active</span>
          </div>
        </div>

        {/* API Response Benchmark */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px', minWidth: 0 }}>
          <div
            style={{
              padding: '8px 12px',
              borderRadius: '10px',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              minWidth: 0,
            }}
          >
            <div style={{ fontSize: '9.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>REST Latency</div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#38BDF8', whiteSpace: 'nowrap' }}>186ms avg</div>
          </div>
          <div
            style={{
              padding: '8px 12px',
              borderRadius: '10px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.25)',
              minWidth: 0,
            }}
          >
            <div style={{ fontSize: '9.5px', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>Page Load</div>
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#22C55E', whiteSpace: 'nowrap' }}>-35% with Redux</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#94A3B8',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '10px',
          flexWrap: 'wrap',
          gap: '6px',
        }}
      >
        <span style={{ color: '#FFFFFF', fontWeight: 600 }}>MERN Stack • Compound Indexes</span>
        <span style={{ color: '#38BDF8', fontWeight: 700 }}>100+ Active Users</span>
      </div>
    </div>
  );
};

export const AutomationToolingGraphic: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#121214',
        color: '#F5F5F5',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px 18px',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
          paddingBottom: '10px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <Terminal size={14} color="#F43F5E" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
            TalentScout Pro • Chrome Extension
          </span>
        </div>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '4px',
            backgroundColor: 'rgba(244, 63, 94, 0.2)',
            color: '#FB7185',
            border: '1px solid rgba(244, 63, 94, 0.35)',
            whiteSpace: 'nowrap',
          }}
        >
          Adopted: 40-Person Team
        </span>
      </div>

      {/* Extension Mock Popup */}
      <div
        style={{
          margin: '8px 0',
          padding: '12px 14px',
          borderRadius: '12px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(244, 63, 94, 0.25)',
          minWidth: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
          <span style={{ fontSize: '10.5px', color: '#A3A3A3', textTransform: 'uppercase', fontWeight: 700 }}>Profile Extractor</span>
          <span style={{ fontSize: '10px', color: '#10B981', fontWeight: 700, padding: '2px 6px', borderRadius: '4px', backgroundColor: 'rgba(16, 185, 129, 0.18)' }}>
            1-Click Sync
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '11px', minWidth: 0 }}>
          <div style={{ color: '#FFFFFF', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            Target: Executive Talent Profile (LinkedIn)
          </div>
          <div style={{ color: '#D4D4D8' }}>Email Discovery: verified • Work history parsed</div>
          <div style={{ color: '#FB7185', fontWeight: 700, fontSize: '10.5px' }}>✓ Direct Push to De Corporate DB</div>
        </div>
      </div>

      {/* Team Throughput */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#A3A3A3',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '10px',
          flexWrap: 'wrap',
          gap: '6px',
        }}
      >
        <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Python • BeautifulSoup • Selenium</span>
        <span style={{ color: '#10B981', fontWeight: 700 }}>⚡ 70% manual time eliminated</span>
      </div>
    </div>
  );
};
