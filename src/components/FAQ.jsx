import { useState } from 'react'
import { faqs } from '../data/eventData'

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
