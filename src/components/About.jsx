import { motion } from 'framer-motion';
import {
  Code2,
  Palette,
  Rocket,
  Coffee,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Briefcase,
  MapPin,
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

const skills = [
  // Core Languages
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript',

  // Frontend Frameworks
  'React 19', 'Next.js 16', 'Redux Toolkit',

  // Styling & Animation
  'Tailwind CSS', 'Framer Motion', 'GSAP',

  // Backend
  'Node.js', 'Express', 'REST APIs', 'Socket.io',

  // Database
  'MongoDB', 'PostgreSQL', 'Mongoose', 'Prisma',

  // AI & Payments
  'Gemini AI', 'OpenAI API', 'Stripe', 'Razorpay',

  // Tools & DevOps
  'Git', 'GitHub', 'VS Code', 'Postman',
  'Docker', 'AWS', 'Vercel', 'Netlify',
];

  const highlights = [
    { Icon: Code2, title: 'Clean Code', desc: 'Maintainable & scalable code' },
    { Icon: Palette, title: 'UI/UX Focus', desc: 'Pixel-perfect designs' },
    { Icon: Rocket, title: 'Fast Delivery', desc: 'Performance-optimized apps' },
    { Icon: Coffee, title: 'Always Learning', desc: 'Latest tech, always' },
  ];

  const points = [
    'Full-stack development with Next.js 16, React 19, Node.js',
    'AI integration — Gemini API, OpenAI, streaming responses',
    'Real-time features — Socket.io, WebSockets, live updates',
    'Database design — MongoDB, PostgreSQL, optimized queries',
    'Payment integration — Razorpay, Stripe subscriptions',
    'Cloud deployment — Vercel, AWS, CI/CD pipelines',
  ];

  const stats = [
    { Icon: Briefcase, value: '2+', label: 'Years Coding' },
    { Icon: Rocket, value: '10+', label: 'Projects Built' },
    { Icon: Users, value: '5+', label: 'Happy Clients' },
    { Icon: TrendingUp, value: '100%', label: 'On-Time Delivery' },
  ];

  return (
    <section
      id="about"
      style={{
        paddingTop: isMobile ? '68px' : '100px',
        paddingBottom: isMobile ? '68px' : '100px',
        position: 'relative',
      }}
    >
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '44px' : '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span className="eyebrow">About Me</span>
          <h2 className="h-section">
            Know Me <span className="grad">Better</span>
          </h2>
          <p className="p-section" style={{ margin: '0 auto', textAlign: 'center' }}>
           Full Stack Developer specializing in AI-powered SaaS platforms, 
real-time applications, and production-ready web products.
          </p>
        </motion.div>

        {/* 2-col Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 1fr',
            gap: isMobile ? '40px' : '48px',
            alignItems: 'start',
          }}
        >
          {/* ═══════ LEFT: Text Content ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontSize: isMobile ? '22px' : '28px',
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: isMobile ? '18px' : '24px',
              }}
            >
              Full Stack Developer building{' '}
              <span className="grad">AI-powered web apps</span>{' '}
              that ship to production
            </h3>

            <p
              style={{
                color: '#9ca3af',
                marginBottom: '16px',
                lineHeight: 1.75,
                fontSize: isMobile ? '14px' : '15px',
              }}
            >
              I'm <strong style={{ color: '#e5e7eb' }}>Amit Kumar</strong> — a
              Full Stack Developer specializing in{' '}
              <strong style={{ color: '#e5e7eb' }}>Next.js, React, and Node.js</strong>.
              I build end-to-end products: from AI-integrated SaaS platforms to
              real-time applications and client-facing business websites.
            </p>
            <p
              style={{
                color: '#9ca3af',
                marginBottom: isMobile ? '24px' : '32px',
                lineHeight: 1.75,
                fontSize: isMobile ? '14px' : '15px',
              }}
            >
              My recent work includes an AI-powered SaaS platform built with
              Next.js 16 and Gemini AI, a real-time customer support system
              with Socket.io and Razorpay, and a production client website
              for MMA Tradex LLP.
            </p>

            {/* Points */}
            <ul
              style={{
                listStyle: 'none',
                marginBottom: isMobile ? '28px' : '36px',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '12px 20px',
                padding: 0,
              }}
            >
              {points.map((point) => (
                <li
                  key={point}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: isMobile ? '12.5px' : '13px',
                    color: '#d1d5db',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2
                    size={isMobile ? 14 : 15}
                    style={{ color: '#a855f7', marginTop: '2px', flexShrink: 0 }}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
  {skills.map((skill) => (
    <span
      key={skill}
      style={{
        position: 'relative',
        padding: isMobile ? '6px 12px' : '7px 14px',
        fontSize: isMobile ? '10.5px' : '11.5px',
        fontWeight: 500,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#d1d5db',
        borderRadius: '9999px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        // Move up + glow + scale
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
        e.currentTarget.style.background =
          'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.15))';
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)';
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.boxShadow =
          '0 8px 20px -6px rgba(168,85,247,0.5), 0 0 0 1px rgba(168,85,247,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.color = '#d1d5db';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Shine effect on hover */}
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          transition: 'left 0.6s ease',
          pointerEvents: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.left = '100%';
        }}
      />
      {skill}
    </span>
  ))}
</div>
          </motion.div>

          {/* ═══════ RIGHT: Bento Grid ═══════ */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '14px' : '16px',
            }}
          >
            {/* Stats Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: isMobile ? '12px' : '14px',
              }}
            >
              {stats.map(({ Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card card-hover"
                  style={{
                    padding: isMobile ? '16px' : '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#a855f7',
                    }}
                  >
                    <Icon size={isMobile ? 14 : 16} />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? '22px' : '26px',
                      fontWeight: 800,
                      lineHeight: 1,
                      background:
                        'linear-gradient(135deg, #a855f7, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? '11px' : '12px',
                      color: '#9ca3af',
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently Building */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card"
              style={{
                padding: isMobile ? '18px' : '22px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '120px',
                  height: '120px',
                  background:
                    'radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px',
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
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#4ade80',
                  }}
                >
                  Currently Building
                </span>
              </div>
              <h4
                style={{
                  fontSize: isMobile ? '15px' : '16px',
                  fontWeight: 700,
                  marginBottom: '6px',
                  lineHeight: 1.4,
                }}
              >
                AI Code Generator SaaS
              </h4>
              <p
                style={{
                  fontSize: isMobile ? '12px' : '12.5px',
                  color: '#9ca3af',
                  lineHeight: 1.6,
                  marginBottom: '12px',
                }}
              >
                Converting natural language prompts into production-ready React
                + Tailwind components using Next.js 16 & Gemini AI.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                {['Next.js 16', 'Gemini AI', 'GSAP'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      padding: '3px 8px',
                      background: 'rgba(74,222,128,0.1)',
                      border: '1px solid rgba(74,222,128,0.25)',
                      color: '#86efac',
                      borderRadius: '5px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Highlights — compact 2x2 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: isMobile ? '12px' : '14px',
              }}
            >
              {highlights.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
                  className="card card-hover"
                  style={{ padding: isMobile ? '16px' : '18px' }}
                >
                  <div
                    style={{
                      width: isMobile ? '34px' : '38px',
                      height: isMobile ? '34px' : '38px',
                      borderRadius: '10px',
                      background:
                        'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))',
                      border: '1px solid rgba(168,85,247,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: isMobile ? '10px' : '12px',
                    }}
                  >
                    <Icon style={{ color: '#a855f7' }} size={isMobile ? 16 : 18} />
                  </div>
                  <h4
                    style={{
                      fontWeight: 700,
                      fontSize: isMobile ? '12.5px' : '13.5px',
                      marginBottom: '4px',
                    }}
                  >
                    {title}
                  </h4>
                  <p
                    style={{
                      fontSize: isMobile ? '10.5px' : '11.5px',
                      color: '#9ca3af',
                      lineHeight: 1.5,
                    }}
                  >
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="card"
              style={{
                padding: isMobile ? '16px' : '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background:
                  'linear-gradient(135deg, rgba(168,85,247,0.08), rgba(236,72,153,0.05))',
                border: '1px solid rgba(168,85,247,0.2)',
              }}
            >
              <div
                style={{
                  width: isMobile ? '42px' : '48px',
                  height: isMobile ? '42px' : '48px',
                  borderRadius: '12px',
                  background:
                    'linear-gradient(135deg, #a855f7, #ec4899)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 20px -6px rgba(168,85,247,0.5)',
                }}
              >
                <Zap size={isMobile ? 20 : 22} color="white" fill="white" />
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: isMobile ? '13px' : '14px',
                    marginBottom: '3px',
                  }}
                >
                  Available for Work
                </div>
                <div
                  style={{
                    fontSize: isMobile ? '11px' : '12px',
                    color: '#9ca3af',
                    lineHeight: 1.4,
                  }}
                >
                  Full-time roles & freelance projects
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}