import { useState } from 'react'
import { speakers } from '../data/eventData'

function matches(s, query) {
  const q = query.toLowerCase()
  return (
    s.name.toLowerCase().includes(q) ||
    s.role.toLowerCase().includes(q) ||
    s.company.toLowerCase().includes(q) ||
    s.topics.some(t => t.toLowerCase().includes(q))
  )
}

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

export default function Speakers() {
  const [query, setQuery] = useState(() =>
    new URLSearchParams(window.location.search).get('q') ?? ''
  )

  function updateQuery(value) {
    setQuery(value)
    setParam('q', value)
  }

  const filtered = query.trim() ? speakers.filter(s => matches(s, query)) : speakers

  return (
    <>
      <div className="speakers-search">
        <input
          type="search"
          className="speakers-search__input"
          placeholder="Search by name, company, role, or topic…"
          value={query}
          onChange={e => updateQuery(e.target.value)}
          aria-label="Search speakers"
        />
        <span className="speakers-search__count">
          Showing {filtered.length} of {speakers.length}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="speakers-empty">
          <p className="speakers-empty__text">
            No speakers match <strong>"{query}"</strong>.
          </p>
          <button
            className="btn btn-primary speakers-empty__clear"
            onClick={() => updateQuery('')}
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="speakers">
          {filtered.map((s) => (
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
      )}
    </>
  )
}
