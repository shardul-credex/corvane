import { useFitCanvas } from '../hooks/useFitCanvas'
import {
  ChartEndpoint,
  LiveDot,
  NavDot,
  OasTrend,
  PulseRing,
  StatusDot,
  TypingIndicator,
} from './HeroArt'

const RAIL_ITEMS = ['Dashboard', 'Research', 'Screen', 'Valuation', 'Reports']

const KPIS = [
  { key: '1', label: 'CPR 3M', value: '10.8%', delta: '-3.1%' },
  { key: '2', label: 'OAS', value: '93bps', delta: '-5bp' },
  { key: '3', label: 'OAD', value: '4.42y', delta: '+0.53y' },
]

const WATCHLIST = [
  { name: 'FNCL 5.0', px: '99-08', oas: '+37', chg: '+0.04' },
  { name: 'FNCL 5.5', px: '101-02', oas: '+41', chg: '+0.07', selected: true },
  { name: 'G2SF 5.0', px: '98-29', oas: '+45', chg: '-0.02' },
]

const GRID_LABELS = ['52', '48', '44', '40']

const EVIDENCE = [
  { key: '1', idx: '01', src: 'FED', note: 'Rates repricing', time: '09:31' },
  { key: '2', idx: '02', src: 'FLOW', note: 'Bank demand', time: '09:36' },
  { key: '3', idx: '03', src: 'MBS', note: 'Supply technicals', time: '09:40' },
]

const ANSWER_POINTS = [
  ['01', 'Rates repricing'],
  ['02', 'Bank demand'],
  ['03', 'Supply technicals'],
]

function Rail() {
  return (
    <aside className="absolute top-[-1px] left-[-1px] h-[449px] w-[90px] bg-navy text-page">
      <div className="absolute top-[14px] left-[14px] h-4 w-4">
        <svg viewBox="0 0 32 32" fill="none">
          <path d="M2.5 28 L14.4 3.4 L26.3 28" stroke="#5fa9b2" strokeWidth="3" />
          <path d="M8.9 28 L14.4 17.6 L19.9 28" stroke="#f5f9f9" strokeWidth="3" />
        </svg>
      </div>

      <span className="absolute top-[59px] left-[18px] font-mono text-[7px] leading-[9px] font-medium tracking-[0.56px] text-mist">
        WORKSPACE
      </span>

      <nav className="absolute top-[81px] left-[10px] w-[70px]">
        {RAIL_ITEMS.map((item, i) => (
          <div
            key={item}
            className={`relative flex h-[32px] items-start text-[9px] leading-[11px] text-mist ${
              i === 0 ? 'mb-[7px] h-[25px] rounded-[1px] bg-page/8 font-bold text-page' : ''
            }`}
          >
            <NavDot active={i === 0} className="mt-[7px] ml-[9px] h-[5px] w-[5px] shrink-0" />
            <span className="mt-[5px]">{item}</span>
          </div>
        ))}
      </nav>

      <div className="absolute top-[251px] left-[10px] h-px w-[70px] bg-mist/28" />

      <div className="absolute top-[267px] left-[18px]">
        <span className="font-mono text-[7px] leading-[9px] tracking-[0.56px] text-mist">PORTFOLIO</span>
        <strong className="mt-[9px] block text-[9px] leading-[11px] font-bold text-page">Agency MBS</strong>
        <small className="mt-[6px] block font-mono text-[7px] leading-[9px] tracking-[0.28px] text-cyan">
          $2.8B · LIVE
        </small>
      </div>

      <div className="absolute top-[414px] left-[18px] flex items-center gap-1.5 text-[9px] leading-[11px] font-bold">
        <StatusDot className="h-[7px] w-[7px]" />
        <strong className="font-bold">AH</strong>
      </div>
    </aside>
  )
}

function Topbar() {
  return (
    <header className="absolute top-0 left-0 h-[42px] w-[476px] border-b border-line bg-white font-mono text-[8px] leading-[10px] font-medium">
      <span className="absolute top-[14px] left-4 text-secondary">WORKSPACE / AGENCY MBS</span>
      <div className="absolute top-[14px] left-[354px] flex items-center gap-[5px] text-teal">
        <LiveDot className="h-[6px] w-[6px]" />
        <strong className="font-medium">MARKET LIVE</strong>
      </div>
      <time className="absolute top-[14px] left-[433px] font-normal text-secondary">09:42 ET</time>
    </header>
  )
}

function DashboardPanel() {
  return (
    <section className="absolute top-[42px] left-0 h-[407px] w-[332px] bg-page">
      <span className="absolute top-[14px] left-4 font-mono text-[8px] leading-[10px] font-medium text-teal">
        DASHBOARD
      </span>
      <h2 className="absolute top-[31px] left-4 font-serif text-[22px] leading-[26px] font-normal tracking-[-0.44px] text-ink">
        Agency MBS
      </h2>
      <time className="absolute top-[37px] left-[230px] font-mono text-[8px] leading-[10px] text-secondary">
        UPDATED 09:42 ET
      </time>

      <div className="absolute top-[70px] left-4 flex gap-2">
        {KPIS.map((kpi) => (
          <div
            key={kpi.key}
            className={`anim-kpi-${kpi.key} relative h-[54px] w-[94px] border border-line bg-white opacity-0`}
          >
            <span className="absolute top-[6px] left-[7px] font-mono text-[7px] leading-[9px] font-medium text-secondary">
              {kpi.label}
            </span>
            <strong className="absolute top-[20px] left-[7px] font-serif text-[17px] leading-[19px] font-normal">
              {kpi.value}
            </strong>
            <small className="absolute top-[26px] right-[7px] font-mono text-[8px] leading-[10px] font-medium text-teal">
              {kpi.delta}
            </small>
          </div>
        ))}
      </div>

      <div className="absolute top-[136px] left-4 h-[139px] w-[300px] overflow-hidden border border-line bg-white">
        <span className="absolute top-2 left-[9px] font-mono text-[8px] leading-[10px] font-medium text-secondary">
          CURRENT COUPON OAS
        </span>
        <strong className="absolute top-[7px] right-[9px] font-mono text-[11px] leading-[13px] font-medium">
          42 bp
        </strong>

        <div className="absolute top-[29px] left-[9px] h-[92px] w-[280px]">
          {GRID_LABELS.map((label, i) => (
            <span
              key={label}
              className={`relative block h-[25px] w-[280px] border-t border-line font-mono text-[7px] leading-[9px] text-mist ${
                i === 3 ? 'h-[17px]' : ''
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        <OasTrend className="absolute top-[33px] left-[29px] h-[92px] w-[254px]" />
        <span className="anim-scan absolute top-[29px] left-[40px] h-[98px] w-[2px] bg-teal opacity-12" />
        <ChartEndpoint className="anim-endpoint absolute top-[30px] left-[277px] h-[7px] w-[7px]" />
      </div>

      <div className="absolute top-[287px] left-4 h-[104px] w-[300px] border border-line bg-white">
        <span className="absolute top-[7px] left-[9px] font-mono text-[8px] leading-[10px] font-medium text-secondary">
          WATCHLIST
        </span>
        <span className="absolute top-[7px] right-[9px] font-mono text-[7px] leading-[9px] font-medium text-teal">
          3 SECURITIES
        </span>

        <div className="absolute top-[24px] left-0 w-[298px] border-t border-line pt-[6px]">
          {WATCHLIST.map((row) => (
            <div
              key={row.name}
              className={`ml-[5px] grid h-[23px] w-[288px] grid-cols-[110px_68px_59px_1fr] items-center px-[5px] font-mono text-[8px] leading-[10px] ${
                row.selected ? 'anim-row-selected bg-subtle opacity-35' : ''
              }`}
            >
              <strong className="text-[9px] leading-[11px] font-bold">{row.name}</strong>
              <span>{row.px}</span>
              <span>{row.oas}</span>
              <span className="text-teal">{row.chg}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ChatPanel() {
  return (
    <aside className="absolute top-[42px] left-[332px] h-[407px] w-[144px] border-l border-line bg-white">
      <span className="absolute top-[13px] left-[14px] font-mono text-[8px] leading-[10px] font-medium text-teal">
        CORVANE AI
      </span>
      <LiveDot className="absolute top-[14px] left-[118px] h-[7px] w-[7px]" />
      <h3 className="absolute top-[31px] left-[14px] font-serif text-[16px] leading-[19px] font-normal">
        Research desk
      </h3>
      <div className="absolute top-[57px] left-[14px] h-px w-[116px] bg-line" />

      <div className="absolute top-[70px] left-[26px] min-h-[49px] w-[104px] bg-subtle px-2 py-[7px] text-[9px] leading-3">
        Why did current coupon OAS tighten today?
      </div>

      <TypingIndicator className="anim-typing absolute top-[130px] left-[14px] h-[22px] w-[52px] opacity-0" />

      <div className="anim-answer absolute top-[162px] left-[14px] h-[131px] w-[116px] border border-line bg-page px-[7px] py-[7px] opacity-0">
        <span className="block font-mono text-[7px] leading-[9px] font-medium text-teal">
          CORVANE SYNTHESIS
        </span>
        <p className="mt-2 w-[100px] text-[9px] leading-3">
          Today's tightening reflects a combination of rates stability and stronger bank demand.
        </p>
        <div className="mt-[7px] h-px w-[100px] bg-line" />
        <ol className="mt-1.5 list-none p-0">
          {ANSWER_POINTS.map(([idx, label]) => (
            <li key={idx} className="flex h-4 items-center text-[8px] leading-[10px]">
              <b className="w-[19px] font-mono text-[7px] leading-[9px] font-medium text-teal">{idx}</b>
              <span>{label}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="absolute top-[355px] left-[14px] h-[38px] w-[116px] border border-line bg-white">
        <span className="absolute top-[11px] left-[9px] text-[9px] leading-[11px] text-secondary">
          Ask Corvane...
        </span>
        <b className="absolute top-[6px] right-[3px] grid h-6 w-6 place-items-center bg-navy text-[12px] font-normal text-page">
          →
        </b>
      </div>
    </aside>
  )
}

function ResearchOverlay() {
  return (
    <div
      className="anim-research absolute top-[91px] left-[149px] h-[260px] w-[218px] rounded-[2px] border border-ink bg-white opacity-0 shadow-[0_12px_24px_rgba(12,40,64,0.16)]"
      style={{ boxShadow: '0 12px 24px rgba(12,40,64,0.16)' }}
    >
      <header className="absolute top-[-1px] left-[-1px] h-[43px] w-[218px] bg-navy text-page">
        <span className="absolute top-[10px] left-3 font-mono text-[7px] leading-[9px] font-medium text-cyan">
          RESEARCH NOTE
        </span>
        <strong className="absolute top-[22px] left-3 text-[10px] leading-[12px] font-bold">
          Why OAS tightened today
        </strong>
        <PulseRing className="absolute top-[17px] left-[194px] h-[7px] w-[7px]" />
      </header>

      <div className="absolute top-[54px] left-[11px] h-[54px] w-[194px] bg-subtle px-2 py-[7px]">
        <span className="font-mono text-[7px] leading-[9px] font-medium text-teal">SYNTHESIS</span>
        <p className="mt-1.5 text-[9px] leading-3">
          Rates stability and renewed bank demand drove the move.
        </p>
      </div>

      <span className="absolute top-[120px] left-[11px] font-mono text-[7px] leading-[9px] text-secondary">
        SUPPORTING EVIDENCE
      </span>

      <div className="absolute top-[139px] left-[11px] w-[194px]">
        {EVIDENCE.map((item, i) => (
          <div
            key={item.key}
            className={`anim-evidence-${item.key} grid h-[26px] w-[194px] grid-cols-[27px_38px_1fr_29px] items-center border border-line border-b-0 px-[6px] text-[8px] leading-[10px] opacity-0 ${
              i === EVIDENCE.length - 1 ? 'border-b' : ''
            }`}
          >
            <b className="font-mono text-[7px] leading-[9px] font-medium text-teal">{item.idx}</b>
            <strong className="text-[8px] font-bold">{item.src}</strong>
            <span>{item.note}</span>
            <time className="text-right text-secondary">{item.time}</time>
          </div>
        ))}
      </div>

      <span className="absolute top-[236px] right-[11px] font-mono text-[7px] leading-[9px] font-medium text-teal">
        OPEN FULL RESEARCH →
      </span>
    </div>
  )
}

function LiveWorkflowBar() {
  return (
    <div className="anim-live absolute top-[409px] left-[17px] flex h-6 w-[184px] items-center rounded-[12px] bg-navy text-page opacity-65">
      <PulseRing className="ml-2.5 h-[6px] w-[6px]" />
      <span className="ml-1.5 font-mono text-[7px] leading-[9px] font-medium">
        LIVE WORKFLOW · RESEARCH TO DECISION
      </span>
    </div>
  )
}

export default function HeroProduct() {
  const { outerRef, scale } = useFitCanvas(616)

  return (
    <div ref={outerRef} className="relative w-full" style={{ height: 499 * scale }}>
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width: 616, height: 499, transform: `scale(${scale})` }}
      >
        <div
          className="absolute inset-0 overflow-hidden rounded-[2px] border border-line bg-subtle text-ink"
          role="img"
          aria-label="Animated Corvane fixed-income dashboard, research, and AI workspace"
        >
          <div className="absolute top-6 left-6 h-[449px] w-[566px] overflow-hidden border border-line bg-white">
            <Rail />
            <div className="absolute top-[-1px] left-[89px] h-[449px] w-[476px] overflow-hidden bg-page">
              <Topbar />
              <DashboardPanel />
              <ChatPanel />
              <ResearchOverlay />
              <LiveWorkflowBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}