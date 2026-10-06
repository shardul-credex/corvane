import { Landmark, Newspaper, TrendingUp, ChartNoAxesCombined, ArrowDown, RefreshCw, Pause } from 'lucide-react'
import { useRevealGroup } from '../hooks/useRevealGroup'

const STEPS = [
  { key: 'research', num: '01', title: 'Research', blurb: 'Understand what moved and why.', span: 2, delay: 0 },
  { key: 'screen', num: '02', title: 'Screen', blurb: 'Narrow the universe into opportunities.', span: 2, delay: 90 },
  { key: 'analyze', num: '03', title: 'Analyze', blurb: 'Compare collateral, behavior, and risk.', span: 2, delay: 180 },
  { key: 'value', num: '04', title: 'Value', blurb: 'Test pricing and cash-flow scenarios.', span: 3, delay: 270 },
  { key: 'report', num: '05', title: 'Report', blurb: 'Package the thesis for the investment committee.', span: 3, delay: 360 },
]

const SPANS = { 2: 'lg:col-span-2', 3: 'lg:col-span-3' }

const SIGNALS = [
  { Icon: Landmark, label: 'Fed & macro', tag: 'New', delay: 260 },
  { Icon: ChartNoAxesCombined, label: 'Supply & flows', tag: '+8%', delay: 440 },
  { Icon: Newspaper, label: 'Market context', tag: '12', delay: 620 },
]

const ANALYSIS_ROWS = [
  { head: true, cells: ['SECURITY', 'OAS', 'CPR', 'RISK'], delay: 240 },
  { cells: ['FN 5.5', '+42', '7.1', 'Low'], delay: 400 },
  { cells: ['FN 6.0', '+57', '9.8', 'Med'], delay: 560 },
  { cells: ['G2 5.5', '+38', '6.4', 'Low'], delay: 720 },
]

const ACTIONS = [
  { Icon: TrendingUp, label: 'Trade', delay: 480 },
  { Icon: RefreshCw, label: 'Rebalance', delay: 640 },
  { Icon: Pause, label: 'Hold', delay: 800 },
]

const STEP_VISUAL = {
  research: () => (
    <div className="flex flex-col justify-center" aria-label="Example research signals">
      {SIGNALS.map(({ Icon, label, tag, delay }) => (
        <div
          key={label}
          data-reveal
          data-reveal-delay={delay}
          style={{ animationDelay: `${delay}ms` }}
          className="detail-enter flex items-center gap-3 border-b border-mist/15 py-[9px] last:border-b-0"
        >
          <Icon className="h-[13px] w-[13px] text-teal-bright" strokeWidth={1.5} aria-hidden="true" />
          <span className="text-[11px] text-paper">{label}</span>
          <small className="ml-auto font-mono text-[8px] tracking-[1px] text-cyan">{tag}</small>
        </div>
      ))}
    </div>
  ),
  screen: () => (
    <div
      className="flex min-w-0 flex-col items-center justify-center gap-2"
      aria-label="4,862 securities narrowed to 27 matches"
    >
      <span
        data-reveal
        data-reveal-delay={260}
        className="detail-enter grid h-9 w-[118px] place-items-center bg-mist/12 font-serif text-[11px] leading-[14px] text-paper"
      >
        4,862 securities
      </span>
      <span
        data-reveal
        data-reveal-delay={470}
        className="detail-enter grid h-[52px] w-[98px] place-items-center bg-mist/12 text-center font-serif text-[11px] leading-[14px] text-paper"
      >
        Coupon ·<br />
        Vintage · OAS
      </span>
      <strong
        data-reveal
        data-reveal-delay={680}
        className="grid h-[52px] w-16 place-items-center bg-cyan font-serif text-[16px] leading-[15px] font-normal text-[#071c2e]"
        style={{ animationName: 'workflow-result-enter' }}
      >
        27
        <small className="text-[9px]">matches</small>
      </strong>
    </div>
  ),
  analyze: () => (
    <div className="flex min-w-0 flex-col justify-center" role="table" aria-label="Example security comparison">
      {ANALYSIS_ROWS.map(({ head, cells, delay }) => (
        <div
          key={cells.join('-')}
          data-reveal
          data-reveal-delay={delay}
          style={{ animationDelay: `${delay}ms` }}
          className={`detail-enter grid grid-cols-[1.35fr_0.65fr_0.65fr_0.65fr] gap-1.5 border-b border-mist/15 py-2.5 text-[11px] last:border-b-0 ${
            head
              ? 'font-mono text-[7px] tracking-[1.4px] text-[#647f8b] uppercase [&>span:first-child]:text-[#647f8b]'
              : 'text-paper [&>span:first-child]:text-[#13a0ad]'
          }`}
        >
          {cells.map((cell, j) => (
            <span key={j} className={head && j > 0 ? 'text-right' : ''}>
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  ),
  value: () => (
    <div className="relative min-w-0" aria-label="Projected cash flows under slow, base, and fast scenarios">
      <div className="grid grid-cols-3 gap-2.5">
        {['SLOW', 'BASE', 'FAST'].map((tab, i) => (
          <span
            key={tab}
            data-reveal
            data-reveal-delay={240 + i * 140}
            style={{ animationDelay: `${240 + i * 140}ms` }}
            className={`detail-enter border-b pb-2.5 text-center font-mono text-[7px] tracking-[1.6px] ${
              i === 1
                ? 'border-teal-bright text-teal-bright'
                : i === 2
                  ? 'border-paper text-[#617d87]'
                  : 'border-mist/35 text-[#617d87]'
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <svg viewBox="0 0 340 112" className="mt-2 h-[132px] w-full overflow-visible" role="img" aria-label="Three projected cash-flow curves">
        <path
          data-reveal
          d="M14 84 C75 53 126 44 180 45 C236 44 279 46 329 49"
          pathLength="1"
          style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: 'workflow-path-draw 1.1s cubic-bezier(.22,1,.36,1) .48s both' }}
          className="fill-none stroke-[#c4d4d8] [stroke-width:1.3px]"
        />
        <path
          data-reveal
          pathLength="1"
          d="M14 82 C69 38 122 28 176 33 C243 38 291 53 334 78"
          style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: 'workflow-path-draw 1.1s cubic-bezier(.22,1,.36,1) .62s both' }}
          className="fill-none stroke-[#0e9daa] [stroke-width:1.8px]"
        />
        <path
          data-reveal
          pathLength="1"
          d="M14 88 C80 74 136 66 191 65 C245 64 292 68 334 72"
          style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: 'workflow-path-draw 1.1s cubic-bezier(.22,1,.36,1) .76s both' }}
          className="fill-none stroke-[#58768a] [stroke-width:1.3px]"
        />
      </svg>

      <small className="absolute bottom-[5px] left-0 font-mono text-[7px] tracking-[1.4px] text-teal-bright">
        PROJECTED CASH FLOWS
      </small>
    </div>
  ),
  report: () => (
    <div
      className="relative min-w-0 border-l-[3px] border-cyan bg-mist/9 py-3.5 pr-4 pl-4"
      aria-label="Investment memo preview"
    >
      <strong
        data-reveal
        data-reveal-delay={240}
        className="detail-enter block font-serif text-[18px] font-normal text-page"
      >
        Investment memo
      </strong>
      <Newspaper
        data-reveal
        data-reveal-delay={380}
        className="detail-enter mt-3.5 h-[14px] w-[14px] text-cyan"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <i
        data-reveal
        data-reveal-delay={500}
        style={{ animationDelay: '500ms', transformOrigin: 0 }}
        className="detail-enter mt-2.5 block h-0.5 w-[92%] bg-[#e1e8e9]"
      />
      <i
        data-reveal
        data-reveal-delay={650}
        style={{ animationDelay: '650ms', transformOrigin: 0 }}
        className="detail-enter mt-[7px] block h-0.5 w-[78%] bg-[#8fa6ad]"
      />
      <div className="mt-4 grid grid-cols-[0.8fr_0.8fr_1fr_0.8fr] gap-2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            data-reveal
            data-reveal-delay={780 + i * 120}
            style={{ animationDelay: `${780 + i * 120}ms`, transformOrigin: 'bottom' }}
            className={`detail-enter h-7 ${i === 2 ? 'bg-cyan' : i % 2 ? 'bg-[#36546b]' : 'bg-[#2b4963]'}`}
          />
        ))}
      </div>
    </div>
  ),
}

function StepHeading({ num, title, blurb }) {
  return (
    <div className="min-w-0 border-r border-mist/15 pr-[18px]">
      <span className="font-mono text-[10px] leading-[15px] tracking-[1.8px] text-teal-bright">{num}</span>
      <h3 className="mt-3 font-serif text-[22px] leading-[24px] font-normal text-page">{title}</h3>
      <p className="mt-2 text-[13px] leading-[18px] text-mist">{blurb}</p>
    </div>
  )
}

export default function ConnectedWorkflow() {
  const ref = useRevealGroup()

  return (
    <section ref={ref} className="bg-deep pt-20 pb-20 text-page gutter" aria-labelledby="connected-workflow-title">
      <div className="flex w-full flex-col">
        <div className="flex flex-col">
          <div
            data-reveal
            data-reveal-delay={0}
            className="reveal flex h-4 items-center gap-6 font-mono text-[14px] leading-4 tracking-[2.24px] text-cyan uppercase"
          >
            <span>THE FIXED-INCOME WORKFLOW</span>
            <i className="h-px flex-1 bg-cyan/75" />
          </div>

          <h2
            id="connected-workflow-title"
            data-reveal
            data-reveal-delay={80}
            className="reveal mt-6 font-serif text-[36px] leading-9 font-normal tracking-[-1.44px] min-[768px]:text-[56px] min-[768px]:leading-[56px] min-[768px]:tracking-[-2.24px]"
          >
            From market question to
            <br />
            <span className="text-cyan">investment decision</span>.
          </h2>

          <p
            data-reveal
            data-reveal-delay={160}
            className="reveal mt-4 max-w-[760px] font-serif text-[18px] leading-6 text-mist"
          >
            A connected process where every output becomes the starting point for the next step.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:h-[552px] lg:grid-cols-6 lg:grid-rows-[224px_304px] lg:gap-x-4">
          {STEPS.map((step) => (
            <article
              key={step.key}
              data-reveal
              data-reveal-delay={step.delay}
              style={{ '--reveal-delay': `${step.delay}ms` }}
              className={`reveal reveal-slide relative grid min-w-0 grid-cols-1 gap-5 border border-cyan/24 bg-step p-6 md:grid-cols-[120px_minmax(0,1fr)] ${
                SPANS[step.span]
              }`}
            >
              <StepHeading num={step.num} title={step.title} blurb={step.blurb} />
              {STEP_VISUAL[step.key]()}

              {step.key !== 'analyze' && step.key !== 'report' && (
                <span
                  className="absolute top-1/2 right-[-17px] z-2 h-px w-[18px] bg-teal-bright after:absolute after:top-[-3px] after:right-0 after:h-1.5 after:w-1.5 after:rotate-45 after:border-r after:border-t after:border-teal-bright"
                  style={{ animation: 'workflow-connector-enter .56s cubic-bezier(.22,1,.36,1) .52s both', transformOrigin: 0 }}
                />
              )}
            </article>
          ))}
        </div>

        <div
          data-reveal
          data-reveal-delay={450}
          className="reveal relative mt-10 grid min-h-[141px] grid-cols-1 items-center gap-4 border-y border-cyan/45 bg-teal/15 p-6 md:grid-cols-[110px_1fr_270px] md:px-6 md:py-7"
        >
          <span className="self-end pb-[7px] font-mono text-[8px] text-cyan md:text-[8px]">OUTCOME</span>

          <div data-reveal data-reveal-delay={300} className="reveal text-center">
            <strong className="font-serif text-[22px] leading-[26px] font-normal text-page">
              Investment decision
            </strong>
            <p className="mt-2 font-serif text-[12px] leading-[17px] text-mist">
              Portfolio results and new market information feed the next
              <br className="hidden lg:block" /> research question.
            </p>
          </div>

          <div className="flex items-center justify-end gap-7">
            {ACTIONS.map(({ Icon, label, delay }) => (
              <span
                key={label}
                data-reveal
                data-reveal-delay={delay}
                className="detail-enter flex flex-col items-center gap-2 text-[12px] text-[#dce5e6]"
              >
                <Icon className="h-[15px] w-[15px] text-[#9bb0b7]" strokeWidth={1.5} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          <ArrowDown
            className="absolute -top-[37px] left-[58%] hidden h-[42px] w-4 text-teal-bright lg:block"
            strokeWidth={1}
            aria-hidden="true"
            style={{ animation: 'workflow-outcome-arrow-enter .72s cubic-bezier(.22,1,.36,1) .18s both' }}
          />
        </div>

        <div
          data-reveal
          data-reveal-delay={540}
          className="reveal reveal-fade flex h-[54px] items-end pb-1 text-[10px] text-[#56737f]"
          aria-hidden="true"
        >
          <i className="mb-1 mr-3.5 h-px flex-1 bg-[#5b8591]" style={{ animation: 'workflow-line-enter .9s cubic-bezier(.22,1,.36,1) .18s both', transformOrigin: 0 }} />
          <span style={{ animation: 'workflow-detail-enter .52s cubic-bezier(.22,1,.36,1) .62s both' }}>
            Portfolio results and new information feed the next research question
          </span>
          <RefreshCw className="ml-2.5 h-3 w-3 text-teal-bright" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  )
}