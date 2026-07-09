export const eventInfo = {
  title: 'Engineering the Future Together',
  date: 'September 20, 2026',
  location: 'Kyiv, Ukraine',
  time: '10:00 – 18:00',
  description:
    'Join industry leaders, engineers, and innovators for a full day of talks, workshops, and networking.',
}

export const programItems = [
  {
    time: '10:00 – 10:30',
    title: 'Registration & Coffee',
    description: 'Pick up your badge, grab a coffee, and meet fellow attendees.',
    tag: 'Break',
  },
  {
    time: '10:30 – 11:15',
    title: 'Opening Keynote: Engineering at Scale',
    description: 'How EPAM ships software across 50+ countries — patterns, pitfalls, and lessons learned.',
    tag: 'Keynote',
  },
  {
    time: '11:15 – 12:00',
    title: 'Designing Resilient Microservices',
    description: 'Practical strategies for fault isolation, circuit-breaking, and graceful degradation in distributed systems.',
    tag: 'Talk',
  },
  {
    time: '12:00 – 13:00',
    title: 'Lunch Break',
    description: 'Catered lunch and open networking in the main hall.',
    tag: 'Break',
  },
  {
    time: '13:00 – 13:45',
    title: 'AI-Assisted Development: Real-World Workflows',
    description: 'A deep-dive into integrating LLMs into everyday engineering tasks without losing control of your codebase.',
    tag: 'Talk',
  },
  {
    time: '13:45 – 14:30',
    title: 'Platform Engineering & Internal Developer Portals',
    description: 'Building golden paths that developers actually want to use — tooling, templates, and cultural buy-in.',
    tag: 'Talk',
  },
  {
    time: '14:30 – 15:00',
    title: 'Coffee Break',
    description: 'Short break with light snacks.',
    tag: 'Break',
  },
  {
    time: '15:00 – 16:30',
    title: 'Workshop: Hands-On with Kubernetes',
    description: 'Guided lab — deploy, scale, and debug a multi-service app on a live cluster. Bring your laptop.',
    tag: 'Workshop',
  },
  {
    time: '16:30 – 17:15',
    title: 'Panel: The Future of Software Delivery',
    description: 'Four senior engineers debate CI/CD evolution, DevOps culture, and what "done" looks like in 2030.',
    tag: 'Panel',
  },
  {
    time: '17:15 – 18:00',
    title: 'Closing & Networking',
    description: 'Wrap-up remarks followed by drinks and informal networking.',
    tag: 'Break',
  },
]

export const speakers = [
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

export const faqs = [
  {
    question: 'Who should attend this conference?',
    answer:
      'The event is aimed at software engineers, architects, tech leads, and engineering managers at all experience levels. Whether you are early in your career or a seasoned practitioner, the programme includes sessions suited to every level.',
  },
  {
    question: 'Is the event free to attend?',
    answer:
      'General attendance is free for registered participants. Some workshop seats are limited and allocated on a first-come, first-served basis. Register early to secure your preferred sessions.',
  },
  {
    question: 'Will sessions be recorded and shared afterwards?',
    answer:
      'Yes. All keynotes and talks will be recorded and published on our website within two weeks of the event. Workshop recordings are shared exclusively with registered attendees.',
  },
  {
    question: 'How do I get to the venue?',
    answer:
      'The venue is located in central Kyiv and is accessible by metro (Olimpiiska station, 5-minute walk) and multiple bus routes. A detailed directions page with a map will be sent to all registered attendees one week before the event.',
  },
  {
    question: 'Can I propose a talk or workshop?',
    answer:
      'The CFP (Call for Proposals) for 2026 has now closed. If you would like to speak at a future edition, subscribe to our newsletter and we will notify you when the next CFP opens.',
  },
  {
    question: 'What is the cancellation or transfer policy?',
    answer:
      'Registrations can be transferred to a colleague at any time by contacting us at events@epam.com. If you simply cannot attend, please cancel your registration so your spot can go to someone on the waitlist.',
  },
]
