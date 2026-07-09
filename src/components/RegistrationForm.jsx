import { useState } from 'react'

const LS_KEY = 'eventRegistration'

const ROLES = ['', 'Software Engineer', 'Tech Lead', 'Engineering Manager', 'Architect', 'DevOps / SRE', 'Product Manager', 'Student', 'Other']

const EMPTY = {
  name: '',
  email: '',
  company: '',
  role: '',
  attendance: 'in-person',
  terms: false,
}

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Full name is required.'
  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!fields.company.trim()) errors.company = 'Company / organisation is required.'
  if (!fields.role) errors.role = 'Please select your role.'
  if (!fields.terms) errors.terms = 'You must agree to the terms to register.'
  return errors
}

function loadStored() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export default function RegistrationForm({ onRegister, onClear }) {
  const [fields, setFields] = useState(() => {
    const stored = loadStored()
    return stored ? { ...EMPTY, name: stored.name, email: stored.email } : EMPTY
  })
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(() => !!loadStored())

  const errors = validate(fields)
  const hasErrors = Object.keys(errors).length > 0

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setFields(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleBlur(e) {
    setTouched(prev => ({ ...prev, [e.target.name]: true }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTouched({ name: true, email: true, company: true, role: true, terms: true })
    if (hasErrors) return
    localStorage.setItem(LS_KEY, JSON.stringify({
      name: fields.name,
      email: fields.email,
      timestamp: Date.now(),
    }))
    setSubmitted(true)
    onRegister?.(fields.name)
  }

  function handleClear() {
    localStorage.removeItem(LS_KEY)
    setFields(EMPTY)
    setTouched({})
    setSubmitted(false)
    onClear?.()
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success__icon" aria-hidden="true">✓</div>
        <h3 className="form-success__title">You're registered!</h3>
        <p className="form-success__text">
          Thanks, <strong>{fields.name}</strong>. A confirmation has been sent to <strong>{fields.email}</strong>.
          We look forward to seeing you at <strong>EPAM GPO AI Upskilling Day 2026</strong> on <strong>September 20, 2026</strong>!
        </p>
        <button className="btn btn-primary" onClick={handleClear} style={{ marginTop: '1.5rem' }}>
          Clear registration
        </button>
      </div>
    )
  }

  function field(name) {
    return { name, value: fields[name], onChange: handleChange, onBlur: handleBlur }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__grid">

        <div className="form__group">
          <label className="form__label" htmlFor="f-name">
            Full name <span className="form__required">*</span>
          </label>
          <input
            id="f-name"
            type="text"
            className={`form__input${touched.name && errors.name ? ' form__input--error' : ''}`}
            placeholder="Jane Smith"
            autoComplete="name"
            {...field('name')}
          />
          {touched.name && errors.name && <span className="form__error">{errors.name}</span>}
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="f-email">
            Email <span className="form__required">*</span>
          </label>
          <input
            id="f-email"
            type="email"
            className={`form__input${touched.email && errors.email ? ' form__input--error' : ''}`}
            placeholder="jane@example.com"
            autoComplete="email"
            {...field('email')}
          />
          {touched.email && errors.email && <span className="form__error">{errors.email}</span>}
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="f-company">
            Company / Organisation <span className="form__required">*</span>
          </label>
          <input
            id="f-company"
            type="text"
            className={`form__input${touched.company && errors.company ? ' form__input--error' : ''}`}
            placeholder="Acme Corp"
            autoComplete="organization"
            {...field('company')}
          />
          {touched.company && errors.company && <span className="form__error">{errors.company}</span>}
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="f-role">
            Role <span className="form__required">*</span>
          </label>
          <select
            id="f-role"
            className={`form__input form__select${touched.role && errors.role ? ' form__input--error' : ''}`}
            {...field('role')}
          >
            {ROLES.map(r => (
              <option key={r} value={r} disabled={r === ''}>{r === '' ? 'Select your role…' : r}</option>
            ))}
          </select>
          {touched.role && errors.role && <span className="form__error">{errors.role}</span>}
        </div>

      </div>

      <fieldset className="form__fieldset">
        <legend className="form__label">Attendance type</legend>
        <div className="form__radio-group">
          {['in-person', 'online'].map(val => (
            <label key={val} className="form__radio-label">
              <input
                type="radio"
                name="attendance"
                value={val}
                checked={fields.attendance === val}
                onChange={handleChange}
                className="form__radio"
              />
              {val === 'in-person' ? 'In-person (Minsk)' : 'Online (hybrid stream)'}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form__group form__group--checkbox">
        <label className="form__checkbox-label">
          <input
            type="checkbox"
            name="terms"
            checked={fields.terms}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form__checkbox"
          />
          <span>
            I agree to the <a href="#faq" className="form__link">event terms</a> and consent to receiving event-related emails.
            <span className="form__required"> *</span>
          </span>
        </label>
        {touched.terms && errors.terms && <span className="form__error">{errors.terms}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary form__submit"
        disabled={Object.keys(touched).length > 0 && hasErrors}
      >
        Register Now
      </button>
    </form>
  )
}
