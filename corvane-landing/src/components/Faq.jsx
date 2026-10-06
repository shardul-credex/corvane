import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FAQS } from '../data/content'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="gutter bg-page py-20">
      <div className="flex w-full flex-col">
        <div className="flex flex-col">
          <div className="eyebrow eyebrow-wide">
            <span className="w-[120px] shrink-0 whitespace-nowrap">Questions</span>
            <span className="rule" />
          </div>
          <h2 className="section-title w-full max-w-[840px]">Frequently asked</h2>
        </div>

        <div className="mt-12 w-full border-t-2 border-teal-deep">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group relative grid w-full grid-cols-[56px_minmax(0,1fr)] items-center text-left"
                  >
                    <span className="w-8 font-mono text-[10px] leading-[15px] tracking-[1.8px] text-teal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="py-6 font-serif text-[20px] leading-6 tracking-[-0.22px] text-ink md:text-[22px]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 right-0 block h-4 w-4 -translate-y-1/2"
                    >
                      <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-teal-deep" />
                      <span className="absolute top-1/2 left-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-teal-deep transition-opacity duration-200 group-aria-expanded:opacity-0" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="w-full max-w-[680px] min-h-[96px] pb-6 pl-14 text-left font-serif text-[18px] leading-6 text-secondary">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}