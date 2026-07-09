import { useState } from 'react'
import { faqs } from '../data/eventData'
import { useI18n } from '../i18n/I18nContext'

export default function FAQ() {
  const { lang } = useI18n()
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
        const { question, answer } = item[lang] || item.en
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
                <span>{question}</span>
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
              <p>{answer}</p>
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
