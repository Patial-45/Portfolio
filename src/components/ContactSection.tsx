import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { TextReveal, FadeInView } from './MotionReveal';
import { FramerButton } from './FramerButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Full Stack Developer',
    message: '',
  });
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 110,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#0A0A0A', '#10B981', '#38BDF8', '#E11D48']
        });
      } catch (err) {
        // fallback
      }
    }, 700);
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative',
        borderTop: '2px solid rgba(10, 10, 10, 0.12)',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Heading & Contact Info */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#D97706',
                padding: '4px 12px',
                borderRadius: '999px',
                backgroundColor: 'rgba(245, 158, 11, 0.12)',
                marginBottom: '18px',
              }}
            >
              <span>✦</span>
              <span>Connect & Hire</span>
            </div>

            <TextReveal
              text="Let’s talk."
              as="h2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: '#0A0A0A',
                marginBottom: '20px',
              }}
            />

            <FadeInView delay={0.15}>
              <p
                style={{
                  fontSize: '17px',
                  lineHeight: 1.65,
                  color: '#2A2A2A',
                  marginBottom: '36px',
                  maxWidth: '460px',
                  fontWeight: 500,
                }}
              >
                I am actively interviewing and open to full-time roles as a{' '}
                <strong style={{ color: '#0A0A0A', borderBottom: '2px solid #F59E0B' }}>Full Stack Developer</strong>,{' '}
                <strong style={{ color: '#0A0A0A', borderBottom: '2px solid #0284C7' }}>Software Engineer</strong>, or{' '}
                <strong style={{ color: '#0A0A0A', borderBottom: '2px solid #059669' }}>Software Developer</strong>.
              </p>
            </FadeInView>

            {/* Direct Cards */}
            <FadeInView delay={0.25}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
                
                {/* Email Card with Copy button */}
                {/* Email Card with Copy button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10, 10, 10, 0.12)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    flexWrap: 'wrap',
                    gap: '12px',
                    maxWidth: '100%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flexWrap: 'wrap' }}>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(2, 132, 199, 0.12)',
                        color: '#0284C7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>
                        Direct Email
                      </div>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                        style={{
                          fontSize: 'clamp(13.5px, 3.5vw, 15.5px)',
                          fontWeight: 800,
                          color: '#0A0A0A',
                          textDecoration: 'none',
                          wordBreak: 'break-all',
                        }}
                      >
                        {PORTFOLIO_DATA.profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: isCopied ? '1px solid #059669' : '1px solid rgba(10, 10, 10, 0.14)',
                      backgroundColor: isCopied ? '#059669' : '#0A0A0A',
                      color: '#FAF7F3',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      flexShrink: 0,
                    }}
                  >
                    {isCopied ? <Check size={13} /> : <Copy size={13} />}
                    <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Phone & Location Info */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '12px',
                    maxWidth: '100%',
                  }}
                >
                  <div
                    style={{
                      padding: '16px',
                      borderRadius: '16px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(10, 10, 10, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(5, 150, 105, 0.12)',
                        color: '#059669',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={16} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700 }}>Phone</div>
                      <a href={`tel:${PORTFOLIO_DATA.profile.phone}`} style={{ fontSize: '13.5px', fontWeight: 700, color: '#0A0A0A', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                        {PORTFOLIO_DATA.profile.phone}
                      </a>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: '16px',
                      borderRadius: '16px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(10, 10, 10, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(217, 119, 6, 0.12)',
                        color: '#D97706',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={16} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '11px', color: '#6B7280', textTransform: 'uppercase', fontWeight: 700 }}>Location</div>
                      <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0A0A0A', whiteSpace: 'nowrap' }}>
                        {PORTFOLIO_DATA.profile.location}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </FadeInView>

            {/* Social Buttons */}
            <FadeInView delay={0.35}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <FramerButton
                  text="GitHub"
                  hoverText="View @Patial-45"
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  icon={<GithubIcon size={15} />}
                />

                <FramerButton
                  text="LinkedIn"
                  hoverText="Connect on LinkedIn"
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  icon={<LinkedinIcon size={15} />}
                />
              </div>
            </FadeInView>

          </div>

          {/* Right Column: High Contrast Contact Card */}
          <FadeInView delay={0.2} yOffset={24}>
            <div
              style={{
                padding: '40px',
                borderRadius: '24px',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10, 10, 10, 0.14)',
                boxShadow: '0 20px 48px -12px rgba(10, 10, 10, 0.08)',
              }}
              className="contact-card-box"
            >
              {isSubmitted ? (
                <div
                  style={{
                    padding: '40px 20px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <Check size={36} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 800, color: '#0A0A0A' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: '15px', color: '#374151', maxWidth: '360px', lineHeight: 1.6 }}>
                    Thank you for reaching out, {formData.name}. I will review your note and respond back at {formData.email} promptly!
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', roleInterest: 'Full Stack Developer', message: '' });
                    }}
                    style={{
                      marginTop: '12px',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      border: '1px solid #0A0A0A',
                      backgroundColor: '#0A0A0A',
                      color: '#FAF7F3',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 700,
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#0A0A0A',
                        marginBottom: '8px',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(10, 10, 10, 0.16)',
                        fontSize: '15px',
                        backgroundColor: '#FBF9F5',
                        color: '#0A0A0A',
                        outline: 'none',
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#0A0A0A';
                        e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(10, 10, 10, 0.16)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#0A0A0A',
                        marginBottom: '8px',
                      }}
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(10, 10, 10, 0.16)',
                        fontSize: '15px',
                        backgroundColor: '#FBF9F5',
                        color: '#0A0A0A',
                        outline: 'none',
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#0A0A0A';
                        e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(10, 10, 10, 0.16)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#0A0A0A',
                        marginBottom: '8px',
                      }}
                    >
                      Target Role / Opportunity Focus
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(10, 10, 10, 0.16)',
                        fontSize: '14.5px',
                        backgroundColor: '#FBF9F5',
                        color: '#0A0A0A',
                        outline: 'none',
                        fontFamily: 'inherit',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      <option value="Full Stack Developer">Full Stack Developer Role</option>
                      <option value="Software Engineer">Software Engineer Role</option>
                      <option value="Software Developer">Software Developer Role</option>
                      <option value="AI / LLM Systems">AI & Vector Systems Collaboration</option>
                      <option value="Freelance / Consulting">Freelance or Consulting Project</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '12px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#0A0A0A',
                        marginBottom: '8px',
                      }}
                    >
                      Your Project / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the role, team, or project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '10px',
                        border: '1.5px solid rgba(10, 10, 10, 0.16)',
                        fontSize: '15px',
                        backgroundColor: '#FBF9F5',
                        color: '#0A0A0A',
                        outline: 'none',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        fontWeight: 500,
                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#0A0A0A';
                        e.target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(10, 10, 10, 0.16)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <FramerButton
                    text={isSubmitting ? 'Sending Message...' : 'Submit Message'}
                    hoverText="Send to Sahil"
                    onClick={() => {}}
                    variant="primary"
                    size="lg"
                  />

                </form>
              )}
            </div>
          </FadeInView>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-card-box {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
