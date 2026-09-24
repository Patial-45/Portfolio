import React, { useState } from 'react';
import { ArrowUpRight, Code2, Layers, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { FramerButton } from './FramerButton';
import { TextReveal, FadeInView } from './MotionReveal';
import { ResumeMatcherGraphic, ExecutiveSearchGraphic, FreelanceMarketplaceGraphic, AutomationToolingGraphic } from './ProjectGraphics';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'automation'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  const renderProjectGraphic = (project: Project) => {
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
    <section
      id="projects"
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
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px',
            borderBottom: '2px solid rgba(10, 10, 10, 0.12)',
            paddingBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <TextReveal
              text="Featured Projects"
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
              [02 / Systems & Architecture]
            </span>
          </div>

          <FramerButton
            text="View All Work"
            hoverText="Explore GitHub"
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            variant="primary"
          />
        </div>

        {/* Filter Pills with High Contrast */}
        <FadeInView delay={0.1}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '48px',
            }}
          >
            {[
              { id: 'all', label: 'All Projects', count: '5' },
              { id: 'ai', label: 'AI & Vector Systems', count: '1' },
              { id: 'fullstack', label: 'Full-Stack Web Apps', count: '2' },
              { id: 'automation', label: 'Automation & Tooling', count: '2' },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    border: isActive
                      ? '1px solid #0A0A0A'
                      : '1px solid rgba(10, 10, 10, 0.14)',
                    backgroundColor: isActive
                      ? '#0A0A0A'
                      : '#FFFFFF',
                    color: isActive
                      ? '#FAF7F3'
                      : '#2A2A2A',
                    boxShadow: isActive ? '0 4px 14px rgba(0,0,0,0.18)' : '0 2px 4px rgba(0,0,0,0.02)',
                  }}
                >
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      padding: '1px 6px',
                      borderRadius: '999px',
                      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.06)',
                      color: isActive ? '#F59E0B' : '#666666',
                      fontWeight: 800,
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeInView>

        {/* 2-Column Projects Grid with High Contrast Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '36px',
          }}
          className="projects-grid"
        >
          {filteredProjects.map((project, idx) => (
            <FadeInView key={project.id} delay={idx * 0.1} yOffset={24}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '24px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(10, 10, 10, 0.12)',
                  padding: '20px',
                  boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                }}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual Graphics Preview Window */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '305px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    backgroundColor: '#090D16',
                    border: '1px solid rgba(10, 10, 10, 0.15)',
                    marginBottom: '20px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    boxSizing: 'border-box',
                  }}
                  className="project-image-wrap"
                >
                  {renderProjectGraphic(project)}

                  {/* Badge Overlay */}
                  {project.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: '#0A0A0A',
                        color: '#F59E0B',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '4px 12px',
                        borderRadius: '999px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(245, 158, 11, 0.4)',
                        zIndex: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      }}
                    >
                      ✦ {project.badge}
                    </div>
                  )}

                  {/* Click to Inspect Overlay on Hover */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(10, 10, 10, 0.65)',
                      opacity: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: 700,
                      backdropFilter: 'blur(4px)',
                      transition: 'opacity 0.25s ease',
                      zIndex: 3,
                    }}
                    className="project-hover-overlay"
                  >
                    <Eye size={17} color="#38BDF8" />
                    <span>Click to Inspect Architecture</span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div style={{ padding: '0 4px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.35rem, 2vw, 1.65rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        color: '#0A0A0A',
                        marginBottom: '6px',
                      }}
                    >
                      {project.title}
                    </h3>

                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 700,
                        color: '#D97706',
                        marginBottom: '12px',
                      }}
                    >
                      {project.tagline}
                    </div>

                    <p
                      style={{
                        fontSize: '14.5px',
                        lineHeight: 1.6,
                        color: '#374151',
                        marginBottom: '18px',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Live Metrics Row with High Contrast Colors */}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '18px',
                      }}
                    >
                      {project.metrics.map((metric, mIdx) => (
                        <span
                          key={metric}
                          style={{
                            padding: '4px 10px',
                            borderRadius: '6px',
                            backgroundColor: mIdx === 0 ? 'rgba(5, 150, 105, 0.1)' : mIdx === 1 ? 'rgba(2, 132, 199, 0.1)' : 'rgba(217, 119, 6, 0.1)',
                            fontSize: '12px',
                            fontWeight: 700,
                            color: mIdx === 0 ? '#059669' : mIdx === 1 ? '#0284C7' : '#D97706',
                            border: '1px solid rgba(0, 0, 0, 0.06)',
                          }}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer: Tech Tags & GitHub Button */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(10, 10, 10, 0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: 'calc(100% - 95px)', minWidth: 0 }}>
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: '11.5px',
                            color: '#1F2937',
                            backgroundColor: '#F3F4F6',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                          }}
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#0A0A0A',
                        textDecoration: 'none',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        backgroundColor: '#F3F4F6',
                        transition: 'all 0.2s ease',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#0A0A0A';
                        e.currentTarget.style.color = '#FAF7F3';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#F3F4F6';
                        e.currentTarget.style.color = '#0A0A0A';
                      }}
                    >
                      <GithubIcon size={14} />
                      <span>Code</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>

                </div>
              </div>
            </FadeInView>
          ))}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        @media (max-width: 980px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 640px) {
          .project-image-wrap {
            height: 280px !important;
          }
        }
        .project-card:hover .project-hover-overlay {
          opacity: 1 !important;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.12) !important;
          border-color: rgba(10, 10, 10, 0.3) !important;
        }
      `}</style>
    </section>
  );
};
