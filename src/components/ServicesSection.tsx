import React, { useState } from 'react';
import { ChevronDown, Check, Layers, Cpu, Database, Wrench } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TextReveal, FadeInView } from './MotionReveal';
import { FramerButton } from './FramerButton';

export const ServicesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(PORTFOLIO_DATA.services[0].id);

  const serviceColors = [
    { icon: Layers, color: '#2563EB', bg: 'rgba(37, 99, 235, 0.12)' },
    { icon: Cpu, color: '#059669', bg: 'rgba(5, 150, 105, 0.12)' },
    { icon: Database, color: '#D97706', bg: 'rgba(217, 119, 6, 0.12)' },
    { icon: Wrench, color: '#E11D48', bg: 'rgba(225, 29, 72, 0.12)' },
  ];

  return (
    <section
      id="services"
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative',
      }}
    >
      <div className="container-custom">
        
        {/* Section Header */}
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
              text="Services"
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
              [01 / What I Build]
            </span>
          </div>

          <span style={{ fontSize: '13px', color: '#1A1A1A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Production Capabilities
          </span>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PORTFOLIO_DATA.services.map((service, idx) => {
            const isExpanded = expandedId === service.id;
            const meta = serviceColors[idx % serviceColors.length];
            const Icon = meta.icon;

            return (
              <FadeInView key={service.id} delay={idx * 0.08} yOffset={16}>
                <div
                  style={{
                    borderBottom: '1px solid rgba(10, 10, 10, 0.12)',
                    transition: 'all 0.25s ease',
                    backgroundColor: isExpanded ? '#FFFFFF' : 'transparent',
                    borderRadius: isExpanded ? '16px' : '0',
                    boxShadow: isExpanded ? '0 10px 30px -5px rgba(0, 0, 0, 0.06)' : 'none',
                    margin: isExpanded ? '8px 0' : '0',
                  }}
                >
                  {/* Clickable Row Header */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : service.id)}
                    style={{
                      padding: '30px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      userSelect: 'none',
                      gap: '24px',
                    }}
                    className="service-row"
                  >
                    {/* Left: Index & Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '15px',
                          color: isExpanded ? meta.color : '#666666',
                          fontWeight: 800,
                          minWidth: '24px',
                        }}
                      >
                        0{idx + 1}
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '10px',
                            backgroundColor: isExpanded ? meta.color : meta.bg,
                            color: isExpanded ? '#FFFFFF' : meta.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.25s ease',
                            boxShadow: isExpanded ? `0 4px 14px ${meta.bg}` : 'none',
                          }}
                        >
                          <Icon size={20} />
                        </div>

                        <h3
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(1.3rem, 2.2vw, 1.85rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            color: '#0A0A0A',
                          }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Tag Pills & Chevron */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '8px',
                        }}
                        className="service-tags-wrap"
                      >
                        {service.tags.map((tag, tagIdx) => (
                          <React.Fragment key={tag}>
                            <span
                              style={{
                                fontSize: '13px',
                                color: '#2B2B2B',
                                fontWeight: 600,
                              }}
                            >
                              {tag}
                            </span>
                            {tagIdx < service.tags.length - 1 && (
                              <span style={{ color: meta.color, fontSize: '12px', fontWeight: 800 }}>•</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: isExpanded ? `2px solid ${meta.color}` : '1px solid rgba(10, 10, 10, 0.16)',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease, border-color 0.3s ease',
                          backgroundColor: isExpanded ? meta.bg : 'transparent',
                          flexShrink: 0,
                        }}
                      >
                        <ChevronDown size={15} color={isExpanded ? meta.color : '#0A0A0A'} />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details Body */}
                  {isExpanded && (
                    <div
                      style={{
                        padding: '0 20px 36px 82px',
                        display: 'grid',
                        gridTemplateColumns: 'minmax(280px, 1fr) 1.4fr',
                        gap: '32px',
                        animation: 'fadeIn 0.3s ease-out',
                      }}
                      className="service-expanded-grid"
                    >
                      <div>
                        <p
                          style={{
                            fontSize: '15.5px',
                            lineHeight: 1.65,
                            color: '#2A2A2A',
                            marginBottom: '24px',
                            fontWeight: 500,
                          }}
                        >
                          {service.description}
                        </p>

                        <FramerButton
                          text={`Inquire About ${service.title.split(' ')[0]}`}
                          hoverText="Schedule a Call"
                          href="#contact"
                          variant="secondary"
                          size="sm"
                        />
                      </div>

                      <div>
                        <div
                          style={{
                            fontSize: '12px',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: meta.color,
                            marginBottom: '14px',
                          }}
                        >
                          Key Deliverables & Standards
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
                          {service.deliverables.map((item) => (
                            <div
                              key={item}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '8px',
                                fontSize: '13.5px',
                                color: '#0A0A0A',
                                fontWeight: 500,
                                padding: '10px 14px',
                                borderRadius: '8px',
                                backgroundColor: '#FBF9F5',
                                border: '1px solid rgba(10, 10, 10, 0.08)',
                              }}
                            >
                              <Check size={15} color={meta.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </FadeInView>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .service-tags-wrap {
            display: none !important;
          }
          .service-expanded-grid {
            grid-template-columns: 1fr !important;
            padding-left: 20px !important;
            gap: 24px !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
