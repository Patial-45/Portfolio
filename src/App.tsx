import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechTicker } from './components/TechTicker';
import { BioAndAvatar } from './components/BioAndAvatar';
import { QuoteSection } from './components/QuoteSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceAndSkills } from './components/ExperienceAndSkills';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ThoughtsSection } from './components/ThoughtsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--token-bg)' }}>
      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <Hero />

      {/* Tech Ticker Marquee */}
      <TechTicker />

      {/* Bio & Sticky 3D Avatar */}
      <BioAndAvatar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Editorial Philosophy Quote */}
      <QuoteSection />

      {/* Services Section with Expandable Rows */}
      <ServicesSection />

      {/* Featured Projects with Live Visual Graphics & Deep Dive Modal */}
      <ProjectsSection />

      {/* Experience, Education, Skills & Certifications */}
      <ExperienceAndSkills />

      {/* Testimonials with 3D Card Flips */}
      <TestimonialsSection />

      {/* Thoughts / Engineering Notes */}
      <ThoughtsSection />

      {/* Interactive Contact Form with Confetti */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Complete Verified Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;
