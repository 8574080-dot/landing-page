import { useState, useEffect } from 'react'
import { useI18n } from '../i18n/I18nContext'

const photos = [
  { id: 1011, captionKey: 'gallery.photo.1' },
  { id: 1015, captionKey: 'gallery.photo.2' },
  { id: 1016, captionKey: 'gallery.photo.3' },
  { id: 1018, captionKey: 'gallery.photo.4' },
  { id: 1019, captionKey: 'gallery.photo.5' },
  { id: 1020, captionKey: 'gallery.photo.6' },
  { id: 1035, captionKey: 'gallery.photo.7' },
  { id: 1040, captionKey: 'gallery.photo.8' },
  { id: 1043, captionKey: 'gallery.photo.9' },
  { id: 1044, captionKey: 'gallery.photo.10' },
  { id: 1047, captionKey: 'gallery.photo.11' },
  { id: 1050, captionKey: 'gallery.photo.12' },
]

function thumb(id)  { return `https://picsum.photos/id/${id}/400/300` }
function full(id)   { return `https://picsum.photos/id/${id}/1200/800` }

function Lightbox({ photos, index, onClose, onNav }) {
  const { t } = useI18n()
  const photo = photos[index]
  const caption = t(photo.captionKey)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onNav(-1)
      if (e.key === 'ArrowRight') onNav(+1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNav])

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={t('gallery.lightboxLabel')}>
      <div className="lightbox__content" onClick={e => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label={t('gallery.close')}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={() => onNav(-1)}
          aria-label={t('gallery.prev')}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <img
          className="lightbox__img"
          src={full(photo.id)}
          alt={caption}
          loading="eager"
        />

        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={() => onNav(+1)}
          aria-label={t('gallery.next')}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <div className="lightbox__footer">
          <span className="lightbox__caption">{caption}</span>
          <span className="lightbox__counter">{index + 1} / {photos.length}</span>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const { t } = useI18n()
  const [activeIndex, setActiveIndex] = useState(null)

  function open(i)  { setActiveIndex(i) }
  function close()  { setActiveIndex(null) }
  function nav(dir) {
    setActiveIndex(i => (i + dir + photos.length) % photos.length)
  }

  return (
    <>
      <div className="gallery">
        {photos.map((photo, i) => {
          const caption = t(photo.captionKey)
          return (
            <button
              key={photo.id}
              className="gallery__item"
              onClick={() => open(i)}
              aria-label={t('gallery.openPhoto', { caption })}
            >
              <img
                className="gallery__img"
                src={thumb(photo.id)}
                alt={caption}
                loading="lazy"
                width="400"
                height="300"
              />
              <span className="gallery__caption" aria-hidden="true">{caption}</span>
            </button>
          )
        })}
      </div>

      {activeIndex !== null && (
        <Lightbox
          photos={photos}
          index={activeIndex}
          onClose={close}
          onNav={nav}
        />
      )}
    </>
  )
}
