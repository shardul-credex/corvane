import { HERO } from '../data/content'
import HeroProduct from './HeroProduct'
import { YCombinator } from './HeroArt'

export default function Hero() {
  return (
    <section id="top" className="gutter grid grid-cols-1 gap-12 pt-20 pb-20 lg:grid-cols-2">
      <div className="flex min-w-0 flex-col justify-start gap-6">
        <div>
          <p className="font-mono text-[14px] leading-4 font-medium tracking-[2.24px] text-teal uppercase">
            {HERO.superheader}
          </p>
          <h1 className="mt-6 font-serif text-[40px] leading-[42px] font-normal tracking-[-1.6px] text-ink min-[768px]:text-[76px] min-[768px]:leading-[76px] min-[768px]:tracking-[-3.04px]">
            {HERO.headline[0]}
            <span className="accent">{HERO.headline[1]}</span>
            {HERO.headline[2]}
            <span className="accent">{HERO.headline[3]}</span>
          </h1>
          <p className="mt-6 w-full font-serif text-[18px] leading-[26px] text-secondary min-[768px]:text-[22px] min-[768px]:leading-8">
            {HERO.lede}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#join" className="btn btn-primary">
            Join
          </a>
          <a href="#research" className="btn btn-secondary">
            Explore research
          </a>
        </div>

        <div className="mt-10 flex h-14 w-fit items-center gap-4 border border-line bg-white px-4 py-3">
          <span className="text-[13px] leading-[13px] text-secondary">Backed by</span>
          <YCombinator className="h-8 w-[112px]" />
        </div>
      </div>

      <div className="flex min-w-0 flex-col gap-4">
        <HeroProduct />

        <div className="grid h-[73px] grid-cols-[1fr_auto] items-start gap-12 border-t border-line pt-[25px]">
          <div className="flex flex-col items-start gap-2">
            <span className="font-mono text-[14px] leading-4 font-medium tracking-[2.24px] text-teal uppercase">
              Live
            </span>
            <p className="flex items-center gap-3 text-[15px] leading-[15px] font-medium text-ink">
              MBS
              <i className="h-1 w-1 rounded-full bg-tertiary" />
              Rates
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <span className="font-mono text-[14px] leading-4 font-medium tracking-[2.24px] text-secondary uppercase">
              Coming next
            </span>
            <p className="flex items-center gap-3 text-[15px] leading-[15px] font-medium text-secondary">
              Municipal
              <i className="h-1 w-1 rounded-full bg-tertiary" />
              ABS
              <i className="h-1 w-1 rounded-full bg-tertiary" />
              Corporate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}