import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FramerButtonProps {
  text: string;
  hoverText?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
}

export const FramerButton: React.FC<FramerButtonProps> = ({
  text,
  hoverText,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  style = {},
  target,
  rel,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isDark = variant === 'primary' || variant === 'dark';

  const basePadding = size === 'sm' ? '8px 16px' : size === 'lg' ? '15px 26px' : '11px 20px';
  const fontSize = size === 'sm' ? '13px' : size === 'lg' ? '16px' : '14px';
  const arrowCircleSize = size === 'sm' ? '22px' : size === 'lg' ? '28px' : '24px';
  const arrowIconSize = size === 'sm' ? 13 : size === 'lg' ? 16 : 14;

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: basePadding,
    borderRadius: '10px',
    fontSize,
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    border: isDark ? '1px solid rgba(0, 0, 0, 0.9)' : '1px solid rgba(0, 0, 0, 0.12)',
    backgroundColor: isDark ? '#111111' : '#ffffff',
    color: isDark ? '#FAF7F3' : '#111111',
    boxShadow: isHovered
      ? isDark
        ? '0 8px 24px -4px rgba(0, 0, 0, 0.3)'
        : '0 8px 24px -4px rgba(0, 0, 0, 0.1)'
      : '0 2px 6px rgba(0, 0, 0, 0.04)',
    ...style,
  };

  const content = (
    <>
      {/* Optional leading icon */}
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}

      {/* Rolling Text Wrapper */}
      <div
        style={{
          display: 'inline-block',
          height: '1.3em',
          overflow: 'hidden',
          position: 'relative',
          lineHeight: '1.3em',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            transform: isHovered ? 'translateY(-50%)' : 'translateY(0%)',
            transition: 'transform 0.35s cubic-bezier(0.2, 1, 0.3, 1)',
          }}
        >
          <span>{text}</span>
          <span>{hoverText || text}</span>
        </div>
      </div>

      {/* Framer Arrow Box with dual flying arrows */}
      <div
        style={{
          width: arrowCircleSize,
          height: arrowCircleSize,
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {/* Animated fill circle */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            backgroundColor: isDark ? '#ffffff' : '#111111',
            transform: isHovered ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Arrow 1: leaves to top right on hover */}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isHovered ? 'translate(18px, -18px)' : 'translate(0, 0)',
            transition: 'transform 0.35s cubic-bezier(0.2, 1, 0.3, 1)',
            color: isHovered ? (isDark ? '#111111' : '#FAF7F3') : isDark ? '#FAF7F3' : '#111111',
          }}
        >
          <ArrowUpRight size={arrowIconSize} />
        </div>

        {/* Arrow 2: enters from bottom left on hover */}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isHovered ? 'translate(0, 0)' : 'translate(-18px, 18px)',
            transition: 'transform 0.35s cubic-bezier(0.2, 1, 0.3, 1)',
            color: isDark ? '#111111' : '#FAF7F3',
          }}
        >
          <ArrowUpRight size={arrowIconSize} />
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};
