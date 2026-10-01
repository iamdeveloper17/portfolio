import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Body scroll lock when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileOpen]);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: scrolled || mobileOpen ? '12px' : '18px',
        paddingBottom: scrolled || mobileOpen ? '12px' : '18px',
        background: scrolled || mobileOpen ? 'rgba(0,0,0,0.75)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled || mobileOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMobileOpen(false)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: isMobile ? '34px' : '38px',
              height: isMobile ? '34px' : '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px -6px rgba(168,85,247,0.6)',
              transition: 'all 0.3s ease',
            }}
          >
            <Terminal size={isMobile ? 15 : 17} color="white" />
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: isMobile ? '15px' : '17px',
              color: 'white',
            }}
          >
            Amit<span style={{ color: '#a855f7' }}>.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)',
              listStyle: 'none',
              margin: 0,
            }}
          >
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    display: 'block',
                    padding: '8px 18px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#d1d5db',
                    textDecoration: 'none',
                    borderRadius: '9999px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#d1d5db';
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ padding: '9px 20px', fontSize: '13px' }}
          >
            Hire Me
          </a>
        )}

        {/* Mobile toggle */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              padding: '8px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileOpen && (
        <div
          className="wrap"
          style={{
            marginTop: '12px',
            animation: 'slideDown 0.3s ease',
          }}
        >
          <div
            className="card"
            style={{
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '14px 16px',
                  borderRadius: '12px',
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary"
              style={{ marginTop: '8px', width: '100%' }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}

      {/* Slide-down animation */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}