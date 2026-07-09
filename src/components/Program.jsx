const agenda = [
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

const TAG_COLORS = {
  Keynote:  { bg: '#dbeafe', color: '#1d4ed8' },
  Talk:     { bg: '#dcfce7', color: '#15803d' },
  Workshop: { bg: '#fef9c3', color: '#a16207' },
  Panel:    { bg: '#ede9fe', color: '#6d28d9' },
  Break:    { bg: '#f1f5f9', color: '#475569' },
}

export default function Program() {
  return (
    <div className="program">
      {agenda.map((item, i) => {
        const tagStyle = TAG_COLORS[item.tag] ?? TAG_COLORS.Break
        return (
          <div key={i} className="program__item">
            <div className="program__time">{item.time}</div>
            <div className="program__connector">
              <span className="program__dot" />
              {i < agenda.length - 1 && <span className="program__line" />}
            </div>
            <div className="program__card">
              <div className="program__card-header">
                <h3 className="program__card-title">{item.title}</h3>
                <span
                  className="program__tag"
                  style={{ background: tagStyle.bg, color: tagStyle.color }}
                >
                  {item.tag}
                </span>
              </div>
              <p className="program__card-desc">{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
