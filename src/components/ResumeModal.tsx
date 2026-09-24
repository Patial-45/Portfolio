import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Award, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(17, 17, 17, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--token-bg)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontWeight: 700, fontSize: '15px' }}>Curriculum Vitae</span>
            <span style={{ fontSize: '12px', color: 'var(--token-text-muted)' }}>• Sahil Patial</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Content */}
        <div
          style={{
            padding: 'clamp(20px, 4vw, 36px)',
            overflowY: 'auto',
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--token-dark)',
          }}
        >
          {/* Resume Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid rgba(0, 0, 0, 0.8)', paddingBottom: '16px', marginBottom: '24px' }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '6px' }}>
              SAHIL PATIAL
            </h1>
            <div style={{ fontSize: '13px', color: '#444', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <span>+91-7876369379</span>
              <span>•</span>
              <span>Chandigarh, India</span>
              <span>•</span>
              <a href="mailto:patial2001@gmail.com" style={{ color: '#111' }}>patial2001@gmail.com</a>
              <span>•</span>
              <a href="https://linkedin.com/in/sahil-patial45" target="_blank" rel="noreferrer" style={{ color: '#111' }}>linkedin.com/in/sahil-patial45</a>
              <span>•</span>
              <a href="https://github.com/Patial-45" target="_blank" rel="noreferrer" style={{ color: '#111' }}>github.com/Patial-45</a>
            </div>
            <p style={{ marginTop: '12px', fontSize: '13.5px', color: '#333', maxWidth: '700px', margin: '12px auto 0 auto' }}>
              Full-stack software engineer with production experience building AI-integrated systems (React, Node.js, PostgreSQL) and independent projects applying LLMs to real-world matching problems. Pursuing MCA in AI/ML at Chandigarh University.
            </p>
          </div>

          {/* Section: Experience */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #111', paddingBottom: '4px', marginBottom: '12px' }}>
              EXPERIENCE
            </h2>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '14px' }}>
                <span>De Corporate Consulting Pvt. Ltd.</span>
                <span>Sep 2025 – Present</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontSize: '13px', marginBottom: '8px' }}>
                <span>Senior Operations Associate & Full Stack Lead</span>
                <span>Chandigarh, India</span>
              </div>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px' }}>
                <li>Architected and built an AI-powered client-job matching platform end-to-end using React, TypeScript, Node.js/Express, PostgreSQL with pgvector, Elasticsearch, and Redis/BullMQ, combining semantic (vector) search with a custom explainable scoring engine to rank and justify client-job matches.</li>
                <li>Built the company’s core database from scratch to 1,000+ verified companies and 20,000+ verified corporate contacts across BFSI, GCCs, Tech/SaaS, Healthcare, VC/PE, and more, alongside a client database of 1,000+ (300+ concurrently active).</li>
                <li>Leading a 10-person pilot of the matching platform ahead of full production rollout, surfacing 180+ job matches daily across the team, including 80+ senior-level roles personally sourced and vetted daily.</li>
                <li>Built and shipped internal automation tooling (Chrome extension for LinkedIn/job data scraping, email-scraping tool, AI-agent-based job search workflows) adopted across a 30–40 person operations team to increase throughput.</li>
                <li>Lead a 3-person database team: designed their training process, review all work daily before merging, and manage task distribution and skill development; also serve as technical mentor and job-search advisor.</li>
              </ul>
            </div>
          </div>

          {/* Section: Projects */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #111', paddingBottom: '4px', marginBottom: '12px' }}>
              PROJECTS
            </h2>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '14px' }}>
                <span>AI-Powered Resume Scoring & Job Matching Platform</span>
                <a href="https://github.com/Patial-45/AI_Based_Resume_Builder" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'underline' }}>GitHub Repo</a>
              </div>
              <div style={{ fontStyle: 'italic', fontSize: '13px', color: '#555', marginBottom: '4px' }}>
                TypeScript, MERN Stack, Python, OpenAI API, Groq (Llama 3.1)
              </div>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px' }}>
                <li>Redesigning and extending a resume-JD matching system that uses the OpenAI API to score compatibility with 92% accuracy; currently rebuilding the UI and expanding ATS optimization features and real-time resume builder.</li>
                <li>Built an automated job-scraping pipeline (BeautifulSoup + Selenium) pulling 500+ targeted listings daily, cutting job search time by 70%.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '14px' }}>
                <span>Online Freelance Marketplace (VectraWork)</span>
                <a href="https://github.com/Patial-45/Online-Freelance-Platform" target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'underline' }}>GitHub Repo</a>
              </div>
              <div style={{ fontStyle: 'italic', fontSize: '13px', color: '#555', marginBottom: '4px' }}>
                MERN Stack, JWT Auth, Redux Toolkit, RESTful API, MongoDB
              </div>
              <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px' }}>
                <li>Built a production-style marketplace with user registration, project posting, multi-user bidding, and secure payments; JWT + RBAC authentication securing 100+ users.</li>
                <li>Architected Node.js/Express REST APIs (200ms avg response) and optimized the React frontend with Redux, code splitting, and lazy loading, cutting page load by 35%; used MongoDB compound indexing for efficient search/pagination.</li>
              </ul>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #111', paddingBottom: '4px', marginBottom: '12px' }}>
              TECHNICAL SKILLS
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px' }}>
              <div><strong>Languages:</strong> JavaScript (ES6+), TypeScript, Python, Java, C/C++</div>
              <div><strong>Frontend:</strong> React 19, Redux, TanStack Query, React Hook Form, Vite, Material UI, HTML5, CSS3, Tailwind CSS</div>
              <div><strong>Backend:</strong> Node.js, Express.js, REST APIs, Prisma ORM, JWT Auth, OAuth, BullMQ, Zod</div>
              <div><strong>Databases:</strong> PostgreSQL (pgvector), MongoDB, MySQL, Redis, Elasticsearch</div>
              <div><strong>AI/ML:</strong> OpenAI API, Google Gemini API, Semantic Search & Vector Embeddings, Prompt Engineering, Groq</div>
              <div><strong>Cloud & DevOps:</strong> AWS, GCP, Docker, Nginx, Git, CI/CD</div>
              <div><strong>Core CS:</strong> OOP, DBMS, Operating Systems, Computer Networks, System Design</div>
              <div><strong>DSA:</strong> Java problem-solving: trees, graphs, dynamic programming, recursion, complexity analysis</div>
            </div>
          </div>

          {/* Section: Education */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #111', paddingBottom: '4px', marginBottom: '12px' }}>
              EDUCATION
            </h2>

            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '14px' }}>
                <span>Chandigarh University</span>
                <span>Jan 2026 – Present</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontSize: '13px' }}>
                <span>Master of Computer Applications – Artificial Intelligence & Machine Learning (CGPA: 9.0)</span>
                <span>Mohali, Punjab</span>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '14px' }}>
                <span>Chandigarh University</span>
                <span>Sep 2022 – Jun 2025</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontStyle: 'italic', fontSize: '13px' }}>
                <span>Bachelor of Computer Applications</span>
                <span>Mohali, Punjab</span>
              </div>
            </div>
          </div>

          {/* Section: Certifications */}
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #111', paddingBottom: '4px', marginBottom: '12px' }}>
              CERTIFICATIONS
            </h2>
            <p style={{ fontSize: '13px' }}>
              Oracle Cloud Infrastructure 2025 Certified Generative AI Professional • Oracle Data Science Professional • Oracle DevOps Professional • Prompt Design in Vertex AI (Google Cloud) • McKinsey Forward Program • React JS (Infosys Springboard)
            </p>
          </div>

          {/* Extra-Curricular */}
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #111', paddingBottom: '4px', marginBottom: '8px' }}>
              EXTRA-CURRICULAR & HACKATHONS
            </h2>
            <div style={{ fontSize: '13px' }}>
              <strong>Re-Imagine — National-Level Web Development Hackathon</strong> (Sheryians Coding School, Sep 2024): Competed nationally as part of a 3-member team, designing and deploying 2 full-stack web applications (React, Node.js, MongoDB) across 2 elimination rounds within a 36-hour sprint.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
