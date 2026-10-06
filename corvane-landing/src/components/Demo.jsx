import { useState } from 'react'
import { DEMO_STEPS } from '../data/content'

const SCREENS = {
  research: {
    label: 'Research Reports',
    kicker: 'RESEARCH LIBRARY',
    title: 'Macro, housing & MBS',
    accent: 'Filter by theme, author, or date. Schedule any report to land in your inbox.',
    rows: [
      ['HOUSING', 'Existing home sales rebound as inventory clears', 'AUG 12'],
      ['FED', 'July CPI: a clean inline print', 'AUG 12'],
      ['MBS', 'Prepayment behavior after the refi wave', 'AUG 06'],
      ['RATES', 'Treasury quarterly refunding update', 'AUG 06'],
    ],
  },
  ask: {
    label: 'Ask Corvane',
    kicker: 'MARKET QUESTION',
    title: 'Why did OAS tighten today?',
    accent: 'Rates stability and renewed bank demand drove the move.',
    rows: [
      ['01', 'Rates repricing', '09:31'],
      ['02', 'Bank demand', '09:36'],
      ['03', 'Supply technicals', '09:40'],
    ],
  },
  mbs: {
    label: 'MBS Dashboard',
    kicker: 'AGENCY MBS',
    title: 'Pools & prepayments',
    accent: 'Pool-level CPR, cohorts, and net flows with the drivers behind borrower behavior.',
    rows: [
      ['FN 6.0 2021', 'CPR 9.8', '+57'],
      ['FN 5.5 2020', 'CPR 7.1', '+42'],
      ['G2 5.0 2022', 'CPR 6.4', '+38'],
      ['FN 4.5 2019', 'CPR 5.9', '+31'],
    ],
  },
  valuation: {
    label: 'Valuation & Scenario Analysis',
    kicker: 'VALUATION',
    title: 'FNCL 5.5 · scenario set',
    accent: 'Adjust prepayment and market assumptions, then compare how price and risk respond.',
    rows: [
      ['SLOW', 'PREPAY 4.2%', 'PX 101-04'],
      ['BASE', 'PREPAY 6.8%', 'PX 100-18'],
      ['FAST', 'PREPAY 11.4%', 'PX 99-26'],
    ],
  },
}

function ScreenMock({ screen }) {
  const data = SCREENS[screen]

  return (
    <div className="flex h-full w-full flex-col bg-white">
      <header className="flex items-center justify-between border-b border-line px-6 py-4">
        <div>
          <span className="block font-mono text-[10px] tracking-[1.8px] text-teal">{data.kicker}</span>
          <h4 className="mt-1.5 font-serif text-[22px] leading-6 tracking-[-0.22px] text-ink">
            {data.title}
          </h4>
        </div>
        <span className="rounded-[2px] bg-navy px-3 py-1.5 font-mono text-[10px] tracking-[1.8px] text-page">
          LIVE
        </span>
      </header>

      <div className="border-b border-line bg-subtle px-6 py-4">
        <p className="max-w-[440px] text-[13px] leading-5 text-secondary">{data.accent}</p>
      </div>

      <ul className="flex-1 divide-y divide-line/70">
        {data.rows.map(([a, b, c], i) => (
          <li
            key={a + b}
            className="grid grid-cols-[110px_1fr_70px] items-center gap-4 px-6 py-3.5"
            style={{ animation: `workflow-detail-enter .5s cubic-bezier(.22,1,.36,1) ${i * 70}ms both` }}
          >
            <span className="font-mono text-[10px] tracking-[1.8px] text-teal">{a}</span>
            <span className="text-[13px] text-ink">{b}</span>
            <span className="text-right font-mono text-[10px] tracking-[1.4px] text-secondary">{c}</span>
          </li>
        ))}
      </ul>

      <footer className="flex items-center gap-3 border-t border-line px-6 py-3">
        <span className="font-mono text-[10px] tracking-[1.8px] text-tertiary">
          {screen === 'research' ? 'SCHEDULE REPORTS' : 'OPEN IN CORVANE →'}
        </span>
      </footer>
    </div>
  )
}

export default function Demo() {
  const [active, setActive] = useState(DEMO_STEPS[0].id)

  return (
    <section className="gutter bg-page py-20" id="demo">
      <div className="frame flex flex-col">
        <div className="flex flex-col">
          <div className="eyebrow eyebrow-wide">
            <span className="w-[211px] shrink-0 whitespace-nowrap">See Corvane in action</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">
            Move from market research
            <br /> to <span className="accent">security valuation.</span>
          </h2>
          <p className="section-lede max-w-[760px]">
            Explore how Corvane supports research, analysis, market monitoring, and valuation across the
            fixed-income workflow.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-[411px_minmax(0,1fr)]">
          <div
            className="flex flex-col gap-3"
            role="tablist"
            aria-label="Corvane product demonstrations"
          >
            {DEMO_STEPS.map((step) => {
              const isActive = step.id === active
              return (
                <div
                  key={step.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  onClick={() => setActive(step.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActive(step.id)
                    }
                  }}
                  className={`demo-step cursor-pointer text-left ${
                    isActive
                      ? 'w-full border-x-0 border-y border-line bg-page py-8 pr-4 pl-0'
                      : 'w-full border border-line bg-subtle p-4'
                  }`}
                >
                  <span
                    className={`flex w-full flex-col items-start ${
                      isActive ? 'gap-4 border-l-2 border-teal py-1 pl-4' : 'gap-2'
                    }`}
                  >
                    <span className="flex items-center gap-3 text-teal">
                      <span className="font-mono text-[14px] leading-4 font-medium tracking-[2.24px]">
                        {step.number}
                      </span>
                      <strong className="text-[14px] leading-5 font-bold text-ink">{step.tab}</strong>
                    </span>

                    <span
                      className={`w-full font-serif ${
                        isActive
                          ? 'text-[28px] leading-8 tracking-[-0.68px] md:text-[34px] md:leading-9'
                          : 'text-[18px] leading-7 tracking-[-0.36px]'
                      } text-ink`}
                    >
                      {step.title[0]}
                      <span className="text-teal">{step.title[1]}</span>
                      {step.title[2]}
                    </span>

                    <span className="w-full text-[16px] leading-6 text-secondary">{step.copy}</span>
                  </span>
                </div>
              )
            })}
          </div>

          <div className="overflow-hidden rounded-[2px] border border-line bg-subtle p-6">
            <div
              key={active}
              className="aspect-[1954/1374] w-full overflow-hidden"
              style={{ animation: 'workflow-detail-enter .5s cubic-bezier(.22,1,.36,1) both' }}
            >
              <ScreenMock screen={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}