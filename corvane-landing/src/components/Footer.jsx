import { BRAND, DOMAIN, FOOTER_COLUMNS } from '../data/content'
import { FooterMark } from './Logo'
import { LinkedInIcon, XIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-page gutter pt-20 pb-20">
      <div className="flex w-full max-w-[1300px] flex-col">
        <div className="grid h-auto grid-cols-1 gap-10 md:grid-cols-[minmax(0,3fr)_repeat(3,minmax(0,0.75fr))] md:gap-x-6 md:gap-y-10">
          <div className="flex w-full max-w-[288px] flex-col items-start">
            <FooterMark className="block h-12 w-12" />
            <p className="mt-0 w-full font-serif text-[18px] leading-6 text-mist">
              Fixed-income research, analysis and valuation in one workflow.
            </p>
            <div className="mt-0 flex gap-2">
              <a
                href="https://www.linkedin.com/company/corvane"
                aria-label={`${BRAND} on LinkedIn`}
                target="_blank"
                rel="noreferrer"
                className="grid h-[34px] w-[34px] place-items-center border border-mist/30 text-mist transition-colors hover:text-page"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
              <span
                aria-label={`${BRAND} on X — profile coming soon`}
                role="img"
                className="grid h-[34px] w-[34px] cursor-default place-items-center border border-mist/30 text-mist opacity-50"
              >
                <XIcon className="h-[17px] w-[17px]" />
              </span>
            </div>
            <a
              className="mt-3 text-[13px] leading-[18px] text-page transition-colors hover:text-cyan"
              href={`mailto:hello@${DOMAIN}`}
            >
              hello@{DOMAIN}
            </a>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.label} className="flex flex-col items-start">
              <span className="font-mono text-[10px] leading-[15px] tracking-[1.8px] text-cyan">
                {col.label}
              </span>
              {col.links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`whitespace-nowrap text-[13px] leading-[13px] text-page transition-colors hover:text-white ${
                    i === 0 ? 'mt-4' : 'mt-6'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="mt-12 flex h-[63px] items-end justify-between border-t border-mist/20 font-mono text-[11px] leading-[14px] tracking-[0.88px] text-tertiary">
          <span>
            © 2026 {BRAND}
          </span>
          <span className="hidden sm:block">Institutional fixed-income research &amp; analytics</span>
        </div>
      </div>
    </footer>
  )
}