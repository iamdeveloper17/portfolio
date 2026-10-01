import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/projects';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setIsTablet(w >= 768 && w < 1024);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const getGridColumns = () => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  return (
    <section
      id="projects"
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
          <span className="eyebrow">My Work</span>
          <h2 className="h-section">
            Featured <span className="grad">Projects</span>
          </h2>
          <p className="p-section" style={{ margin: '0 auto', textAlign: 'center' }}>
            A selection of projects I've built — from idea to deployment.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: getGridColumns(),
            gap: isMobile ? '20px' : '24px',
          }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card card-hover"
              style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16 / 10',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)',
                  }}
                />
              </div>

              <div
                style={{
                  padding: isMobile ? '20px' : '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? '16px' : '17px',
                    fontWeight: 700,
                    marginBottom: '8px',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: isMobile ? '12.5px' : '13px',
                    color: '#9ca3af',
                    lineHeight: 1.65,
                    marginBottom: '16px',
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '18px',
                  }}
                >
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 9px',
                        background: 'rgba(168,85,247,0.1)',
                        border: '1px solid rgba(168,85,247,0.2)',
                        color: '#c4b5fd',
                        borderRadius: '6px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    paddingTop: '16px',
                    marginTop: 'auto',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: isMobile ? '12px' : '13px',
                      fontWeight: 600,
                      color: '#a855f7',
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink size={13} /> Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: isMobile ? '12px' : '13px',
                      color: '#9ca3af',
                      textDecoration: 'none',
                    }}
                  >
                    <Code2 size={13} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}