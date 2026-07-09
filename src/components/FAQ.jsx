import { useState } from 'react'

const faqs = [
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <dl className="faq">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i
        const panelId = `faq-panel-${i}`
        const btnId = `faq-btn-${i}`
        return (
          <div key={i} className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
            <dt>
              <button
                id={btnId}
                className="faq__question"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
              >
                <span>{item.question}</span>
                <span className="faq__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </dt>
            <dd
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="faq__answer"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
