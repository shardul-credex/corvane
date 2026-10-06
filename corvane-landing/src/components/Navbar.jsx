import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content'
import { Wordmark } from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page">
      <div className="flex h-[68px] items-center justify-between gutter">
        <div className="flex items-center">
          <a aria-label={`${'Corvane'} home`} href="#top" className="block w-[111px]">
            <Wordmark className="block h-auto w-[111px]" />
          </a>

          <nav aria-label="Primary navigation" className="ml-12 hidden md:block">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="text-[13px] leading-[13px] text-ink transition-colors hover:text-teal"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#signin" className="btn btn-sm border-line">
            Sign in
          </a>
          <a href="#join" className="btn btn-sm btn-primary ml-2">
            Sign up
          </a>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-200 ${open ? 'translate-y-[3px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-200 ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-line bg-page transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? 'max-h-[420px] border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          borderTopWidth: open ? 1 : 0,
          transitionProperty: 'max-height, opacity, border-color',
        }}
      >
        <ul className="flex flex-col gutter py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-serif text-[22px] leading-6 text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4 flex gap-2">
            <a href="#signin" onClick={() => setOpen(false)} className="btn btn-sm flex-1">
              Sign in
            </a>
            <a href="#join" onClick={() => setOpen(false)} className="btn btn-sm btn-primary flex-1">
              Sign up
            </a>
          </li>
        </ul>
      </div>

      <span
        className={`pointer-events-none absolute inset-x-0 top-[67px] h-px bg-ink/8 transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </header>
  )
}
