export const eventInfo = {
  title: 'EPAM GPO AI Upskilling Day 2026',
  date: 'September 20, 2026',
  location: 'EPAM Office, Minsk (Hybrid)',
  time: '10:00 – 15:30',
  description:
    'A practical internal event focused on adopting Generative AI in software delivery — from integrating AI tools into daily workflows to enforcing quality gates and navigating security and compliance requirements. Sessions combine real-world case studies, live demos, and team discussions to help you measure and grow the impact of AI in your projects.',
}

export const programItems = [
  {
    time: '10:00 – 10:15',
    title: 'Welcome & Agenda Overview',
    description: 'Opening remarks from the GPO leadership team. Goals for the day and housekeeping for hybrid participants.',
    tag: 'Break',
  },
  {
    time: '10:15 – 11:15',
    title: 'Keynote: GenAI in the SDLC — Where We Are Today',
    description: 'A frank look at which AI-assisted practices are delivering measurable value across EPAM delivery units and which remain hype. Includes live benchmark data from internal pilots.',
    tag: 'Keynote',
  },
  {
    time: '11:15 – 12:15',
    title: 'Workshop: Integrating AI Tools into Your Daily Workflow',
    description: 'Hands-on session covering prompt engineering for code review, test generation, and documentation. Bring a real task from your current project.',
    tag: 'Workshop',
  },
  {
    time: '12:15 – 13:00',
    title: 'Lunch Break',
    description: 'Catered lunch in the main area. Hybrid attendees free to take a break.',
    tag: 'Break',
  },
  {
    time: '13:00 – 15:00',
    title: 'Panel: Security, Compliance & Quality Gates for AI-Generated Code',
    description: 'Four practitioners discuss IP risk, SAST integration, acceptable-use policies, and how to set quality thresholds so AI output meets client standards — without slowing delivery.',
    tag: 'Panel',
  },
]

export const speakers = [
  {
    name: 'Alina Marchuk',
    role: 'Global Practice Lead, AI Engineering',
    company: 'EPAM Systems',
    bio: 'Drives EPAM\'s AI-assisted delivery programme across 30+ accounts. Former principal engineer with 12 years in enterprise software architecture.',
    topics: ['GenAI Adoption', 'SDLC', 'Strategy'],
    initials: 'AM',
    color: '#0a6ed1',
    linkedinUrl: 'https://linkedin.com/in/alina-marchuk',
    twitterUrl: 'https://twitter.com/alina_marchuk',
  },
  {
    name: 'Dmitry Volkov',
    role: 'Senior Security Architect',
    company: 'EPAM Systems',
    bio: 'Specialises in secure-by-design practices for AI-augmented pipelines. Leads the internal working group on acceptable-use policies for LLM-generated code.',
    topics: ['AppSec', 'Compliance', 'DevSecOps'],
    initials: 'DV',
    color: '#b45309',
    linkedinUrl: 'https://linkedin.com/in/dmitry-volkov',
    twitterUrl: 'https://twitter.com/dvolkov_sec',
  },
  {
    name: 'Katsiaryna Belaya',
    role: 'Engineering Excellence Coach',
    company: 'EPAM Systems',
    bio: 'Helps delivery teams define and measure quality gates for AI-assisted code. Background in test automation and continuous quality at scale.',
    topics: ['Quality Gates', 'Test Automation', 'Coaching'],
    initials: 'KB',
    color: '#15803d',
    linkedinUrl: 'https://linkedin.com/in/katsiaryna-belaya',
    twitterUrl: 'https://twitter.com/k_belaya',
  },
  {
    name: 'Pavel Tsishchanka',
    role: 'Staff Software Engineer',
    company: 'EPAM Systems',
    bio: 'Practitioner and internal speaker on prompt engineering and AI tooling integration. Runs the Minsk AI Guild and contributes to EPAM\'s internal LLM evaluation framework.',
    topics: ['Prompt Engineering', 'AI Tooling', 'LLMs'],
    initials: 'PT',
    color: '#6d28d9',
    linkedinUrl: 'https://linkedin.com/in/pavel-tsishchanka',
    twitterUrl: 'https://twitter.com/pavel_tsi',
  },
]

export const faqs = [
  {
    question: 'Who is this event intended for?',
    answer:
      'The Upskilling Day is open to all EPAM GPO employees — software engineers, QA engineers, tech leads, delivery managers, and architects. Both in-person attendance at the Minsk office and remote participation via the hybrid stream are supported.',
  },
  {
    question: 'Do I need to prepare anything before the workshop?',
    answer:
      'For the hands-on workshop session, bring a concrete task or user story from your current project that you would like to try with AI tooling. Access to an approved AI coding assistant (e.g. EPAM\'s internal instance) is required — check with your delivery manager if you are unsure whether access is set up.',
  },
  {
    question: 'Will the sessions be recorded?',
    answer:
      'The keynote and panel sessions will be recorded and made available on the internal knowledge portal within five business days. The workshop is not recorded to allow participants to share real project context freely.',
  },
  {
    question: 'How do I join the hybrid stream?',
    answer:
      'A Microsoft Teams link will be sent to all registered remote attendees 24 hours before the event. Make sure you register by September 17 to receive the link. In-person capacity at the Minsk office is limited to 60 seats — first-come, first-served.',
  },
  {
    question: 'Can I get CPD or training credit for attending?',
    answer:
      'Yes. Attendance at the full-day programme counts as 5 hours of structured learning under the EPAM internal training framework. Your HR Business Partner can record it in the learning management system upon request, using the event code GPO-AI-2026.',
  },
]
