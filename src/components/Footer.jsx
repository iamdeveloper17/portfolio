import { Mail, Heart, Code2, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

const socials = [
  { Icon: Code2, href: 'https://github.com/iamdeveloper17', label: 'GitHub' },      // ← apna
  { Icon: Briefcase, href: 'https://www.linkedin.com/in/amit-kumar-9193b0216/?isSelfProfile=true', label: 'LinkedIn' },  // ← apna
  { Icon: Mail, href: 'mailto:ramit5752@gmail.com', label: 'Email' },               // ← apna
];

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      <div
        className="wrap"
        style={{
          paddingTop: isMobile ? '40px' : '56px',
          paddingBottom: isMobile ? '32px' : '40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '32px' : '40px',
            alignItems: 'flex-start',
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: isMobile ? '20px' : '22px',
                fontWeight: 700,
                marginBottom: '10px',
              }}
            >
              Amit<span style={{ color: '#a855f7' }}>.dev</span>
            </h3>
            <p
              style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#9ca3af',
                lineHeight: 1.7,
                maxWidth: isMobile ? '280px' : '260px',
                margin: isMobile ? '0 auto' : 0,
              }}
            >
              Building AI-powered products with Next.js, React, and Node.js.
            </p>
          </div>

          {/* Quick Links */}
          <div
            style={{
              justifySelf: isMobile ? 'center' : 'center',
            }}
          >
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#6b7280',
                marginBottom: '16px',
              }}
            >
              Quick Links
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, auto)',
                gap: '10px 32px',
                justifyContent: 'center',
              }}
            >
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: isMobile ? '13px' : '14px',
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a855f7')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div
            style={{
              justifySelf: isMobile ? 'center' : 'end',
            }}
          >
            <h4
              style={{
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#6b7280',
                marginBottom: '16px',
              }}
            >
              Connect
            </h4>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
              }}
            >
              {socials.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: isMobile ? '40px' : '42px',
                    height: isMobile ? '40px' : '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#9ca3af',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#a855f7';
                    e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
                    e.currentTarget.style.background = 'rgba(168,85,247,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#9ca3af';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <Icon size={isMobile ? 16 : 17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: isMobile ? '32px' : '48px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            fontSize: isMobile ? '12px' : '13px',
            color: '#6b7280',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Made with{' '}
            <Heart size={12} style={{ color: '#ec4899', fill: '#ec4899' }} /> by
            Amit Kumar
          </span>
          <span>© 2026 All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}