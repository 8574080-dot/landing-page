import { useState } from 'react'
import { useI18n } from '../i18n/I18nContext'
import { eventInfo } from '../data/eventData'

const LS_KEY = 'eventRegistration'

const ROLE_KEYS = [
  { value: '', key: 'form.role.select' },
  { value: 'Software Engineer', key: 'form.role.softwareEngineer' },
  { value: 'Tech Lead', key: 'form.role.techLead' },
  { value: 'Engineering Manager', key: 'form.role.engineeringManager' },
  { value: 'Architect', key: 'form.role.architect' },
  { value: 'DevOps / SRE', key: 'form.role.devops' },
  { value: 'Product Manager', key: 'form.role.productManager' },
  { value: 'Student', key: 'form.role.student' },
  { value: 'Other', key: 'form.role.other' },
]

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
  if (!fields.name.trim()) errors.name = 'form.error.name'
  if (!fields.email.trim()) {
    errors.email = 'form.error.email.required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'form.error.email.invalid'
  }
  if (!fields.company.trim()) errors.company = 'form.error.company'
  if (!fields.role) errors.role = 'form.error.role'
  if (!fields.terms) errors.terms = 'form.error.terms'
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
  const { lang, t } = useI18n()
  const info = eventInfo[lang]

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
        <h3 className="form-success__title">{t('form.success.title')}</h3>
        <p className="form-success__text">
          {t('form.success.thanks')}<strong>{fields.name}</strong>
          {t('form.success.sent')}<strong>{fields.email}</strong>
          {t('form.success.seeYou')}<strong>{info.title}</strong>
          {t('form.success.on')}<strong>{info.date}</strong>{t('form.success.end')}
        </p>
        <button className="btn btn-primary" onClick={handleClear} style={{ marginTop: '1.5rem' }}>
          {t('form.clear')}
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
            {t('form.name.label')} <span className="form__required">*</span>
          </label>
          <input
            id="f-name"
            type="text"
            className={`form__input${touched.name && errors.name ? ' form__input--error' : ''}`}
            placeholder={t('form.name.placeholder')}
            autoComplete="name"
            {...field('name')}
          />
          {touched.name && errors.name && <span className="form__error">{t(errors.name)}</span>}
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="f-email">
            {t('form.email.label')} <span className="form__required">*</span>
          </label>
          <input
            id="f-email"
            type="email"
            className={`form__input${touched.email && errors.email ? ' form__input--error' : ''}`}
            placeholder={t('form.email.placeholder')}
            autoComplete="email"
            {...field('email')}
          />
          {touched.email && errors.email && <span className="form__error">{t(errors.email)}</span>}
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="f-company">
            {t('form.company.label')} <span className="form__required">*</span>
          </label>
          <input
            id="f-company"
            type="text"
            className={`form__input${touched.company && errors.company ? ' form__input--error' : ''}`}
            placeholder={t('form.company.placeholder')}
            autoComplete="organization"
            {...field('company')}
          />
          {touched.company && errors.company && <span className="form__error">{t(errors.company)}</span>}
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="f-role">
            {t('form.role.label')} <span className="form__required">*</span>
          </label>
          <select
            id="f-role"
            className={`form__input form__select${touched.role && errors.role ? ' form__input--error' : ''}`}
            {...field('role')}
          >
            {ROLE_KEYS.map(r => (
              <option key={r.value} value={r.value} disabled={r.value === ''}>{t(r.key)}</option>
            ))}
          </select>
          {touched.role && errors.role && <span className="form__error">{t(errors.role)}</span>}
        </div>

      </div>

      <fieldset className="form__fieldset">
        <legend className="form__label">{t('form.attendance.label')}</legend>
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
              {val === 'in-person' ? t('form.attendance.inPerson') : t('form.attendance.online')}
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
            {t('form.terms.before')}
            <a href="#faq" className="form__link">{t('form.terms.link')}</a>
            {t('form.terms.after')}
            <span className="form__required"> *</span>
          </span>
        </label>
        {touched.terms && errors.terms && <span className="form__error">{t(errors.terms)}</span>}
      </div>

      <button
        type="submit"
        className="btn btn-primary form__submit"
        disabled={Object.keys(touched).length > 0 && hasErrors}
      >
        {t('form.submit')}
      </button>
    </form>
  )
}
