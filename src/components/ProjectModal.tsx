import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Database, Server, Code2, ArrowUpRight, Image as ImageIcon, Layout, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { ResumeMatcherGraphic, ExecutiveSearchGraphic, FreelanceMarketplaceGraphic, AutomationToolingGraphic } from './ProjectGraphics';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [modalTab, setModalTab] = useState<'snapshot' | 'architecture'>('snapshot');

  if (!project) return null;

  const renderGraphic = () => {
    switch (project.id) {
      case 'ai-resume-builder':
        return <ResumeMatcherGraphic />;
      case 'executive-search':
        return <ExecutiveSearchGraphic />;
      case 'online-freelance':
        return <FreelanceMarketplaceGraphic />;
      case 'automation-tooling':
        return <AutomationToolingGraphic />;
      default:
        return (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        );
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(17, 17, 17, 0.8)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(10px, 2.5vw, 24px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '880px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.35)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--token-bg)',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--token-accent)' }}>
              Project Deep Dive
            </span>
            <span style={{ color: 'rgba(0,0,0,0.3)' }}>•</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--token-dark)' }}>
              {project.title}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                backgroundColor: 'var(--token-dark)',
                color: 'var(--token-bg)',
                textDecoration: 'none',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              <GithubIcon size={14} />
              <span>GitHub Repo</span>
              <ArrowUpRight size={13} />
            </a>

            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div style={{ overflowY: 'auto', padding: 'clamp(18px, 4vw, 32px)' }}>
          
          {/* View Mode Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '14px',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setModalTab('snapshot')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '8px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: modalTab === 'snapshot' ? '1px solid #0A0A0A' : '1px solid rgba(0,0,0,0.12)',
                  backgroundColor: modalTab === 'snapshot' ? '#0A0A0A' : '#FFFFFF',
                  color: modalTab === 'snapshot' ? '#FAF7F3' : '#333333',
                  transition: 'all 0.2s ease',
                }}
              >
                <Layout size={14} color={modalTab === 'snapshot' ? '#F59E0B' : '#666'} />
                <span>Working Interface Snapshot</span>
              </button>

              {['ai-resume-builder', 'executive-search', 'online-freelance', 'automation-tooling'].includes(project.id) && (
                <button
                  onClick={() => setModalTab('architecture')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: modalTab === 'architecture' ? '1px solid #0A0A0A' : '1px solid rgba(0,0,0,0.12)',
                    backgroundColor: modalTab === 'architecture' ? '#0A0A0A' : '#FFFFFF',
                    color: modalTab === 'architecture' ? '#FAF7F3' : '#333333',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Cpu size={14} color={modalTab === 'architecture' ? '#F59E0B' : '#666'} />
                  <span>Architecture & Data Flow</span>
                </button>
              )}
            </div>

            <a
              href={project.snapshotUrl || project.image}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#2563EB',
                textDecoration: 'none',
              }}
            >
              <span>Open Full Image</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Visual Showcase Box */}
          <div
            style={{
              width: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '28px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.14)',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              backgroundColor: '#090D16',
            }}
          >
            {modalTab === 'snapshot' ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Browser Bar */}
                <div
                  style={{
                    height: '34px',
                    backgroundColor: '#0D1117',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    <span style={{ fontSize: '11px', color: '#94A3B8', fontFamily: 'monospace', marginLeft: '6px' }}>
                      {project.id === 'ai-resume-builder' ? 'https://ats-matcher.sahilpatial.dev' :
                       project.id === 'executive-search' ? 'https://decorporate.ai/talent-vector' :
                       project.id === 'online-freelance' ? 'https://vectrawork.market/dashboard' :
                       project.id === 'automation-tooling' ? 'chrome-extension://talentscout-pro' :
                       'https://quite-hours.local/app'}
                    </span>
                  </div>
                  <span style={{ fontSize: '10.5px', color: '#10B981', fontWeight: 700 }}>
                    ● Production UI
                  </span>
                </div>

                {/* High Resolution Snapshot View */}
                <div style={{ width: '100%', height: 'clamp(280px, 45vw, 440px)', backgroundColor: '#090D16', position: 'relative' }}>
                  <img
                    src={project.snapshotUrl || project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      objectPosition: 'center center',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Snapshot Caption */}
                {project.snapshotCaption && (
                  <div
                    style={{
                      padding: '10px 16px',
                      backgroundColor: '#0D1117',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px',
                      color: '#CBD5E1',
                    }}
                  >
                    <Sparkles size={14} color="#F59E0B" />
                    <span><strong>Interface Feature:</strong> {project.snapshotCaption}</span>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ height: 'clamp(260px, 35vw, 320px)' }}>
                {renderGraphic()}
              </div>
            )}
          </div>

          {/* Title & Tagline */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '26px',
              fontWeight: 800,
              color: 'var(--token-dark)',
              marginBottom: '6px',
            }}
          >
            {project.title}
          </h2>

          <div style={{ fontSize: '14px', color: 'var(--token-accent)', fontWeight: 600, marginBottom: '20px' }}>
            {project.tagline}
          </div>

          <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(17, 17, 17, 0.8)', marginBottom: '28px' }}>
            {project.description}
          </p>

          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.03)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                }}
              >
                <div style={{ fontSize: '11px', color: 'var(--token-text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Impact Metric #{idx + 1}
                </div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--token-dark)' }}>
                  {m}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Architecture & Implementation Details */}
          <div style={{ marginBottom: '28px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--token-dark)', marginBottom: '14px' }}>
              Architecture & Engineering Highlights
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.bullets.map((bullet, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.6, color: 'rgba(17, 17, 17, 0.85)' }}>
                  <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--token-text-muted)', marginBottom: '10px' }}>
              Technologies & Frameworks Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--token-bg)',
                    border: '1px solid rgba(0, 0, 0, 0.09)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--token-dark)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
