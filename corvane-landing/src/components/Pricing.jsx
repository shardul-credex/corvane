import { PRICING_PLANS } from '../data/content'

export default function Pricing() {
  return (
    <section id="pricing" className="gutter bg-page py-20">
      <div className="flex w-full flex-col">
        <div className="mx-auto flex w-full max-w-[840px] flex-col items-center text-center">
          <div className="eyebrow eyebrow-wide eyebrow-centered">
            <span className="rule" />
            <span className="whitespace-nowrap">Choose your level of access</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">
            Start with research.
            <br />
            Expand into <span className="accent">specialist analytics.</span>
          </h2>
          <p className="section-lede mx-auto mt-4 max-w-[620px]">
            Receive selected macro research for free, create interactive research on demand, or access the
            complete research, analytics, and valuation platform for agency MBS.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col border-r border-b border-l border-line first:md:border-l-0 ${
                plan.featured ? 'border-t-2 border-t-teal-deep bg-subtle' : 'border-t-2 border-t-line'
              }`}
            >
              <div className="flex h-full flex-col p-6">
                <div>
                  <span className="block font-mono text-[10px] leading-[15px] tracking-[1.8px] text-teal uppercase">
                    {plan.number}
                  </span>
                  <h3 className="mt-2 font-serif text-[22px] leading-6 font-normal tracking-[-0.22px] text-ink">
                    {plan.name}
                  </h3>
                </div>

                <div className="mt-6 flex flex-col items-start gap-1 border-b border-line pb-[25px]">
                  <strong className="font-mono text-[30px] leading-[30px] font-medium text-ink">
                    {plan.price}
                  </strong>
                  <span className="font-mono text-[10px] leading-[15px] tracking-[1.8px] text-secondary">
                    {plan.priceNote}
                  </span>
                </div>

                {plan.trial && <p className="mt-4 font-caption text-[12px] text-teal">{plan.trial}</p>}

                <p className="mt-6 text-[14px] leading-5 font-bold text-ink">{plan.summary}</p>

                {plan.features.length > 0 && (
                  <ul className="mt-6 list-none p-0">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.title}
                        className="grid grid-cols-[6px_minmax(0,1fr)] items-start gap-3 border-b border-line py-3 text-[16px] leading-6 text-ink last:border-b-0"
                      >
                        <i className="mt-[7px] block h-1.5 w-1.5 bg-teal-deep" aria-hidden="true" />
                        <div className="min-w-0">
                          <strong className="block font-bold">{feature.title}</strong>
                          {feature.note && (
                            <span className="mt-1 block text-[14px] leading-5 text-secondary">
                              {feature.note}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-6">
                  {plan.footnote && (
                    <p className="border-t border-line pt-[17px] text-[13px] leading-[18px] text-secondary">
                      {plan.footnote}
                    </p>
                  )}
                  <a
                    href={plan.featured ? '#contact' : '#join'}
                    className={`btn mt-5 w-full ${plan.featured ? 'btn-primary' : ''}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-center font-serif text-[18px] leading-6 text-ink">
          <span>Trade munis, ABS, or corporates?</span>
          <a href="#early-access" className="btn btn-secondary">
            Join early access →
          </a>
        </div>
      </div>
    </section>
  )
}