import { useState } from 'react'
import { programItems as agenda } from '../data/eventData'

const TAG_COLORS = {
  Keynote:  { bg: '#dbeafe', color: '#1d4ed8' },
  Talk:     { bg: '#dcfce7', color: '#15803d' },
  Workshop: { bg: '#fef9c3', color: '#a16207' },
  Panel:    { bg: '#ede9fe', color: '#6d28d9' },
  Break:    { bg: '#f1f5f9', color: '#475569' },
}

const TAGS = ['All', ...Array.from(new Set(agenda.map(item => item.tag)))]

function setParam(key, value) {
  const params = new URLSearchParams(window.location.search)
  if (value) {
    params.set(key, value)
  } else {
    params.delete(key)
  }
  const qs = params.toString()
  history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname)
}

export default function Program() {
  const [active, setActive] = useState(() => {
    const tag = new URLSearchParams(window.location.search).get('tag')
    return TAGS.includes(tag) ? tag : 'All'
  })

  function selectTag(tag) {
    setActive(tag)
    setParam('tag', tag === 'All' ? '' : tag)
  }

  const filtered = active === 'All' ? agenda : agenda.filter(item => item.tag === active)

  return (
    <>
      <div className="program-filter">
        <div className="program-filter__bar">
          {TAGS.map(tag => (
            <button
              key={tag}
              className={`program-filter__btn${active === tag ? ' program-filter__btn--active' : ''}`}
              onClick={() => selectTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <span className="program-filter__count">
          Showing {filtered.length} session{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="program">
        {filtered.map((item, i) => {
          const tagStyle = TAG_COLORS[item.tag] ?? TAG_COLORS.Break
          return (
            <div key={item.title} className="program__item">
              <div className="program__time">{item.time}</div>
              <div className="program__connector">
                <span className="program__dot" />
                {i < filtered.length - 1 && <span className="program__line" />}
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
    </>
  )
}
