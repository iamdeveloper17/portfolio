import { motion } from 'framer-motion';
import { Mail, Download, ArrowDown, Code2, Briefcase, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socials = [
    { Icon: Code2, href: 'https://github.com/iamdeveloper17', label: 'GitHub' },      // ← apna
    { Icon: Briefcase, href: 'https://www.linkedin.com/in/amit-kumar-9193b0216/?isSelfProfile=true', label: 'LinkedIn' },  // ← apna
    { Icon: Mail, href: 'mailto:ramit5752@gmail.com', label: 'Email' },               // ← apna
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: isMobile ? '110px' : '130px',
        paddingBottom: isMobile ? '60px' : '80px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.18), transparent 60%)',
        }}
      />
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '20%',
          left: isMobile ? '-20%' : '20%',
          width: isMobile ? '300px' : '400px',
          height: isMobile ? '300px' : '400px',
          background: '#9333ea',
          borderRadius: '50%',
          filter: 'blur(130px)',
          opacity: 0.22,
          pointerEvents: 'none',
        }}
      />
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          bottom: '20%',
          right: isMobile ? '-20%' : '20%',
          width: isMobile ? '300px' : '400px',
          height: isMobile ? '300px' : '400px',
          background: '#2563eb',
          borderRadius: '50%',
          filter: 'blur(130px)',
          opacity: 0.18,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="wrap"
        style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%' }}
      >
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: isMobile ? '7px 14px' : '9px 18px',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              marginBottom: isMobile ? '24px' : '32px',
            }}
          >
            <span
              style={{
                position: 'relative',
                display: 'flex',
                width: '8px',
                height: '8px',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: '#4ade80',
                  opacity: 0.75,
                  animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                }}
              />
              <span
                style={{
                  position: 'relative',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#4ade80',
                }}
              />
            </span>
            <span
              style={{
                fontSize: isMobile ? '12px' : '14px',
                color: '#d1d5db',
                whiteSpace: 'nowrap',
              }}
            >
              {isMobile ? 'Available for work' : 'Available for freelance work'}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: isMobile
                ? 'clamp(30px, 9vw, 42px)'
                : 'clamp(40px, 7vw, 76px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: isMobile ? '20px' : '28px',
              color: 'white',
            }}
          >
            Hi, I'm{' '}
            <span
              className="grad"
              style={{ display: 'inline-block' }}
            >
              Amit Kumar
            </span>
            {!isMobile && (
              <Sparkles
                className="text-purple-400"
                style={{
                  display: 'inline-block',
                  marginLeft: '12px',
                  verticalAlign: 'middle',
                  width: 'clamp(24px, 3.5vw, 40px)',
                  height: 'clamp(24px, 3.5vw, 40px)',
                }}
              />
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              fontSize: isMobile ? '14px' : '18px',
              color: '#9ca3af',
              lineHeight: 1.7,
              maxWidth: isMobile ? '100%' : '640px',
              margin: '0 auto',
              marginBottom: isMobile ? '32px' : '44px',
              paddingLeft: isMobile ? '4px' : '0',
              paddingRight: isMobile ? '4px' : '0',
            }}
          >
            <span style={{ color: '#a855f7', fontWeight: 600 }}>
  Full Stack Developer
</span>{' '}
specializing in{' '}
<span style={{ color: '#e5e7eb', fontWeight: 600 }}>Next.js 16</span>,{' '}
<span style={{ color: '#e5e7eb', fontWeight: 600 }}>Gemini AI</span>, and{' '}
<span style={{ color: '#e5e7eb', fontWeight: 600 }}>Node.js</span>.
I ship production-ready apps that solve real problems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              flexWrap: 'wrap',
              gap: isMobile ? '12px' : '14px',
              justifyContent: 'center',
              marginBottom: isMobile ? '36px' : '48px',
              maxWidth: isMobile ? '320px' : 'none',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              style={{
                width: isMobile ? '100%' : 'auto',
                padding: isMobile ? '13px 22px' : '14px 28px',
                fontSize: isMobile ? '14px' : '15px',
              }}
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-ghost"
              style={{
                width: isMobile ? '100%' : 'auto',
                padding: isMobile ? '13px 22px' : '14px 28px',
                fontSize: isMobile ? '14px' : '15px',
              }}
            >
              <Download size={isMobile ? 16 : 17} /> Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '10px' : '12px',
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
                  width: isMobile ? '42px' : '46px',
                  height: isMobile ? '42px' : '46px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: isMobile ? '12px' : '14px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#d1d5db',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#a855f7';
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
                  e.currentTarget.style.background = 'rgba(168,85,247,0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#d1d5db';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={isMobile ? 17 : 18} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!isMobile && (
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#6b7280',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#a855f7')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
          aria-label="Scroll down"
        >
          <span
            style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            Scroll
          </span>
          <ArrowDown size={16} />
        </motion.a>
      )}
    </section>
  );
}