import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle2, ChevronRight, Code2, Server, Database, Brain, Cloud } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TextReveal, FadeInView } from './MotionReveal';
import { FramerButton } from './FramerButton';

export const ExperienceAndSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'certifications'>('experience');

  const skillCategories = [
    { title: 'Frontend Architecture', icon: Code2, color: '#2563EB', bg: 'rgba(37, 99, 235, 0.1)', items: PORTFOLIO_DATA.skills.frontend },
    { title: 'Backend & APIs', icon: Server, color: '#059669', bg: 'rgba(5, 150, 105, 0.1)', items: PORTFOLIO_DATA.skills.backend },
    { title: 'Databases & Vector Search', icon: Database, color: '#D97706', bg: 'rgba(217, 119, 6, 0.1)', items: PORTFOLIO_DATA.skills.databases },
    { title: 'AI & Machine Learning', icon: Brain, color: '#7C3AED', bg: 'rgba(124, 58, 237, 0.1)', items: PORTFOLIO_DATA.skills.ai_ml },
    { title: 'Cloud & DevOps', icon: Cloud, color: '#EA580C', bg: 'rgba(234, 88, 12, 0.1)', items: PORTFOLIO_DATA.skills.devops },
    { title: 'Languages & Core CS', icon: CheckCircle2, color: '#0A0A0A', bg: 'rgba(10, 10, 10, 0.08)', items: [...PORTFOLIO_DATA.skills.languages, ...PORTFOLIO_DATA.skills.core.slice(0, 2)] },
  ];

  return (
    <section
      id="experience"
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
            marginBottom: '44px',
            borderBottom: '2px solid rgba(10, 10, 10, 0.12)',
            paddingBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
            <TextReveal
              text="Experience & Skills"
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
              [03 / Career & Mastery]
            </span>
          </div>

          {/* Tab Switcher */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { id: 'experience', label: 'Work & Education' },
              { id: 'skills', label: 'Technical Stack' },
              { id: 'certifications', label: 'Certifications (6)' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    padding: '9px 20px',
                    borderRadius: '10px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive
                      ? '1px solid #0A0A0A'
                      : '1px solid rgba(10, 10, 10, 0.14)',
                    backgroundColor: isActive
                      ? '#0A0A0A'
                      : '#FFFFFF',
                    color: isActive
                      ? '#FAF7F3'
                      : '#2A2A2A',
                    boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Experience & Education */}
        {activeTab === 'experience' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '48px' }} className="exp-edu-grid">
            
            {/* Professional Experience */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#D97706',
                  marginBottom: '28px',
                }}
              >
                <Briefcase size={16} />
                <span>Production Experience</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {PORTFOLIO_DATA.experience.map((exp, idx) => (
                  <FadeInView key={idx} delay={idx * 0.1}>
                    <div
                      style={{
                        padding: '32px',
                        borderRadius: '20px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(10, 10, 10, 0.12)',
                        boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '21px', fontWeight: 800, color: '#0A0A0A' }}>
                          {exp.company}
                        </h3>
                        <span style={{ fontSize: '13px', fontWeight: 800, color: '#D97706', padding: '3px 10px', borderRadius: '6px', backgroundColor: 'rgba(245, 158, 11, 0.12)' }}>
                          {exp.period}
                        </span>
                      </div>

                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0A0A0A', marginBottom: '18px' }}>
                        {exp.role} • <span style={{ fontWeight: 500, color: '#6B7280' }}>{exp.location}</span>
                      </div>

                      <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx} style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#374151' }}>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>

            {/* Education & Recruiter Roles */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '12px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#2563EB',
                  marginBottom: '28px',
                }}
              >
                <GraduationCap size={16} />
                <span>Education</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <FadeInView key={idx} delay={idx * 0.1}>
                    <div
                      style={{
                        padding: '28px',
                        borderRadius: '20px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(10, 10, 10, 0.12)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0A0A0A' }}>
                          {edu.institution}
                        </h4>
                        <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#4B5563' }}>
                          {edu.period}
                        </span>
                      </div>

                      <div style={{ fontSize: '14.5px', color: '#1F2937', fontWeight: 600, marginBottom: '12px' }}>
                        {edu.degree}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13px' }}>
                        <span style={{ color: '#6B7280' }}>{edu.location}</span>
                        {edu.score && (
                          <span style={{
                            padding: '3px 12px',
                            borderRadius: '999px',
                            backgroundColor: 'rgba(16, 185, 129, 0.15)',
                            color: '#059669',
                            fontWeight: 800,
                            fontSize: '12.5px',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                          }}>
                            {edu.score}
                          </span>
                        )}
                      </div>
                    </div>
                  </FadeInView>
                ))}

                {/* Target Roles Card */}
                <FadeInView delay={0.25}>
                  <div
                    style={{
                      padding: '30px',
                      borderRadius: '20px',
                      backgroundColor: '#0A0A0A',
                      color: '#FAF7F3',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                    }}
                  >
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F59E0B', marginBottom: '8px', fontWeight: 800 }}>
                      ✦ Direct Hiring Overview
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, marginBottom: '16px', color: '#FFFFFF' }}>
                      Target Designations
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {PORTFOLIO_DATA.profile.targetDesignations.map(role => (
                        <span
                          key={role}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            fontSize: '12.5px',
                            fontWeight: 700,
                            color: '#FFFFFF',
                          }}
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInView>

              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Technical Skills Grid */}
        {activeTab === 'skills' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              maxWidth: '100%',
            }}
          >
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <FadeInView key={idx} delay={idx * 0.06}>
                  <div
                    style={{
                      padding: 'clamp(20px, 3vw, 28px)',
                      borderRadius: '20px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(10, 10, 10, 0.12)',
                      boxShadow: '0 8px 24px -4px rgba(0,0,0,0.04)',
                      minWidth: 0,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '10px',
                          backgroundColor: cat.bg,
                          color: cat.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0A0A0A' }}>
                        {cat.title}
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {cat.items.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '8px',
                            backgroundColor: '#F9FAFB',
                            border: '1px solid rgba(10, 10, 10, 0.1)',
                            fontSize: '12.5px',
                            fontWeight: 600,
                            color: '#111827',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        )}

        {/* Tab 3: Official Certifications */}
        {activeTab === 'certifications' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px',
              maxWidth: '100%',
            }}
          >
            {PORTFOLIO_DATA.certifications.map((cert, idx) => (
              <FadeInView key={idx} delay={idx * 0.07}>
                <div
                  style={{
                    padding: 'clamp(20px, 3vw, 26px)',
                    borderRadius: '20px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10, 10, 10, 0.12)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.03)',
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(245, 158, 11, 0.14)',
                      color: '#D97706',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                    }}
                  >
                    <Award size={22} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15.5px', fontWeight: 800, color: '#0A0A0A', marginBottom: '4px' }}>
                      {cert.title}
                    </h4>
                    <div style={{ fontSize: '12.5px', color: '#4B5563', fontWeight: 500 }}>
                      {cert.issuer} • <span style={{ color: '#D97706', fontWeight: 700 }}>{cert.year}</span>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        )}

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .exp-edu-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
