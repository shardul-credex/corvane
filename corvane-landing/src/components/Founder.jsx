import { FOUNDER } from '../data/content'
import { CompanyMark, FounderPortrait } from './FounderArt'
import { LinkedInIcon, XIcon } from './SocialIcons'

export default function Founder() {
  return (
    <section id="founder" className="relative isolate bg-page py-20 gutter">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-20 left-20 rounded-[2px] bg-subtle"
      />

      <div className="relative z-1 mx-auto w-full max-w-[1280px]">
        <div className="eyebrow eyebrow-wide px-0 md:px-[120px]">
          <span className="w-[110px] shrink-0 whitespace-nowrap">Built by</span>
          <span className="rule" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[302px_minmax(0,1fr)] md:px-[120px]">
          <div className="w-full max-w-[302px]">
            <div className="relative h-[302px] w-[302px] max-w-full overflow-hidden rounded-[2px] bg-subtle opacity-90">
              <FounderPortrait className="absolute inset-0 h-full w-full" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-ink/10"
                style={{ mixBlendMode: 'hard-light' }}
              />
            </div>

            <div className="mt-3 flex h-10 items-center gap-4">
              <a
                href="https://www.linkedin.com/in/"
                aria-label={`${FOUNDER.name} on LinkedIn`}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center border border-line bg-page text-ink transition-colors hover:bg-subtle"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/"
                aria-label={`${FOUNDER.name} on X`}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center border border-line bg-page text-ink transition-colors hover:bg-subtle"
              >
                <XIcon className="h-[22px] w-[22px]" />
              </a>
              <a href="#about" className="btn btn-sm ml-0">
                Read more →
              </a>
            </div>
          </div>

          <div className="flex flex-col border-l-2 border-teal pl-6">
            <h2 className="w-full max-w-[700px] font-serif text-[34px] leading-9 font-normal tracking-[-0.68px] text-ink">
              {FOUNDER.name}
            </h2>
            <span className="mt-2 block font-mono text-[10px] leading-[15px] tracking-[1.8px] text-secondary uppercase">
              {FOUNDER.role}
            </span>

            <p className="mt-6 w-full max-w-[628px] font-serif text-[18px] leading-6 text-ink">
              {FOUNDER.bio}
            </p>

            <div className="mt-10 w-full max-w-[628px]">
              <span className="block font-mono text-[10px] leading-[15px] tracking-[1.8px] text-secondary uppercase">
                Previously
              </span>
              <div className="mt-2 flex w-full max-w-[628px] flex-wrap items-end justify-between gap-x-6 gap-y-2">
                {FOUNDER.previously.map((company) => (
                  <div
                    key={company.label}
                    className="flex min-h-14 items-center gap-3 py-4 font-mono text-[10px] leading-[15px] tracking-[1.8px] text-ink"
                  >
                    <CompanyMark mark={company.mark} />
                    {company.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}