import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData();
    formData.append("access_key", "c208832a-c807-424c-93d2-afea9d6ac752");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject || `New message from ${form.name}`);
    formData.append("message", form.message);
    formData.append("from_name", "Amit Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contacts = [
    { Icon: Mail, label: 'Email', value: 'ramit5752@email.com', href: 'mailto:you@email.com' },
    { Icon: Phone, label: 'Phone', value: '+91 8700582093', href: 'tel:+91XXXXXXXXXX' },
    { Icon: MapPin, label: 'Location', value: 'India', href: '#' },
  ];

  return (
    <section
      id="contact"
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
          <span className="eyebrow">Get in Touch</span>
          <h2 className="h-section">
            Let's <span className="grad">Work Together</span>
          </h2>
          <p className="p-section" style={{ margin: '0 auto', textAlign: 'center' }}>
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'minmax(280px, 2fr) 3fr',
            gap: isMobile ? '24px' : '24px',
            alignItems: 'stretch',
          }}
        >
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {contacts.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="card card-hover"
                style={{
                  padding: isMobile ? '16px' : '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '12px' : '16px',
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <div
                  style={{
                    width: isMobile ? '40px' : '44px',
                    height: isMobile ? '40px' : '44px',
                    borderRadius: '12px',
                    background:
                      'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))',
                    border: '1px solid rgba(168,85,247,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#a855f7',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={isMobile ? 17 : 18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: '10px',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      fontWeight: 600,
                      marginBottom: '4px',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontWeight: 500,
                      fontSize: isMobile ? '13px' : '14px',
                      color: '#f3f4f6',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability */}
            <div
              className="card"
              style={{
                padding: isMobile ? '16px' : '20px',
                marginTop: isMobile ? '0' : 'auto',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
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
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: 600,
                    color: '#4ade80',
                  }}
                >
                  Available Now
                </span>
              </div>
              <p
                style={{
                  fontSize: isMobile ? '11.5px' : '12px',
                  color: '#9ca3af',
                  lineHeight: 1.7,
                }}
              >
                Open to freelance, full-time roles and collaborations. Response
                time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="card"
            style={{
              padding: isMobile ? '20px' : '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '14px' : '16px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: isMobile ? '14px' : '16px',
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                disabled={status === 'loading'}
                className="input"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                disabled={status === 'loading'}
                className="input"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              disabled={status === 'loading'}
              className="input"
            />

            <textarea
              rows={isMobile ? 4 : 5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              disabled={status === 'loading'}
              className="input"
              style={{ resize: 'none' }}
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'loading'}
              style={{
                width: isMobile ? '100%' : 'auto',
                alignSelf: isMobile ? 'stretch' : 'flex-end',
                marginTop: '4px',
                opacity: status === 'loading' ? 0.7 : 1,
                cursor: status === 'loading' ? 'wait' : 'pointer',
                background:
                  status === 'success'
                    ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                    : status === 'error'
                    ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                    : undefined,
              }}
            >
              {status === 'loading' && (
                <>
                  <span
                    style={{
                      width: '14px',
                      height: '14px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: 'white',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite',
                    }}
                  />
                  Sending...
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle2 size={16} /> Message Sent!
                </>
              )}
              {status === 'error' && (
                <>
                  <AlertCircle size={16} /> Failed. Try Again
                </>
              )}
              {status === 'idle' && (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </motion.form>
        </div>
      </div>
    </section>
  );
}