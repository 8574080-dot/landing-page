const speakers = [
  {
    name: 'Olena Kovalenko',
    role: 'Principal Engineer',
    company: 'EPAM Systems',
    bio: "Leads distributed systems architecture for EPAM's Central European delivery centres. 14 years building high-availability platforms.",
    topics: ['Microservices', 'Resilience', 'Cloud'],
    initials: 'OK',
    color: '#0a6ed1',
  },
  {
    name: 'Marcus Webb',
    role: 'VP of Engineering',
    company: 'FinScale Ltd.',
    bio: 'Scaled engineering teams from 8 to 200+ across four continents. Passionate about platform engineering and developer experience.',
    topics: ['Platform Eng', 'Leadership', 'DevEx'],
    initials: 'MW',
    color: '#6d28d9',
  },
  {
    name: 'Darya Savchenko',
    role: 'AI/ML Tech Lead',
    company: 'EPAM Systems',
    bio: 'Designs LLM-powered developer tooling and leads applied AI research initiatives across product teams.',
    topics: ['LLMs', 'MLOps', 'AI Tooling'],
    initials: 'DS',
    color: '#0e7490',
  },
  {
    name: 'Tomasz Wiśniewski',
    role: 'Senior SRE',
    company: 'CloudNative AG',
    bio: 'Specialises in Kubernetes reliability at scale. Maintains open-source tooling used by 3 000+ organisations.',
    topics: ['Kubernetes', 'SRE', 'Observability'],
    initials: 'TW',
    color: '#15803d',
  },
  {
    name: 'Priya Nair',
    role: 'Head of Security Engineering',
    company: 'Veribit',
    bio: 'Builds security-by-default cultures inside fast-moving engineering organisations. OWASP chapter lead.',
    topics: ['AppSec', 'DevSecOps', 'OWASP'],
    initials: 'PN',
    color: '#b45309',
  },
  {
    name: 'Ivan Marchenko',
    role: 'Staff Software Engineer',
    company: 'EPAM Systems',
    bio: 'Open-source contributor and conference speaker with a focus on event-driven architectures and Kafka ecosystems.',
    topics: ['Event-Driven', 'Kafka', 'Architecture'],
    initials: 'IM',
    color: '#be185d',
  },
]

export default function Speakers() {
  return (
    <div className="speakers">
      {speakers.map((s) => (
        <div key={s.name} className="speaker-card">
          <div
            className="speaker-card__avatar"
            style={{ background: s.color }}
            aria-hidden="true"
          >
            {s.initials}
          </div>
          <div className="speaker-card__body">
            <h3 className="speaker-card__name">{s.name}</h3>
            <p className="speaker-card__role">
              {s.role} &middot; {s.company}
            </p>
            <p className="speaker-card__bio">{s.bio}</p>
            <div className="speaker-card__topics">
              {s.topics.map((t) => (
                <span key={t} className="speaker-card__topic">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
