import { RESEARCH_POSTS } from '../data/content'

export default function Research() {
  return (
    <section id="research" className="gutter bg-page pt-20 pb-20">
      <div className="frame flex flex-col">
        <div className="flex flex-col">
          <div className="eyebrow eyebrow-wide">
            <span className="w-[200px] shrink-0 whitespace-nowrap">Latest research</span>
            <span className="rule" />
          </div>
          <h2 className="section-title">
            Latest from <span className="accent">Corvane Research</span>
          </h2>
          <p className="section-lede max-w-[760px]">
            Read selected macro research from Corvane, or subscribe to receive new reports directly by email.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 border-t-2 border-teal-deep md:grid-cols-3">
          {RESEARCH_POSTS.map((post) => (
            <article
              key={post.title.join('')}
              className="group flex flex-col border-b border-line md:border-r md:last:border-r-0"
            >
              <div className="flex h-full min-h-[337px] flex-col gap-4 p-6">
                <div className="flex w-full min-w-0 flex-col gap-3 border-b border-line pb-6">
                  <span className="font-mono text-[10px] leading-[15px] tracking-[1.8px] whitespace-nowrap text-teal uppercase">
                    {post.tag}
                  </span>
                  <h3 className="m-0 font-serif text-[22px] leading-6 font-normal tracking-[-0.22px] text-ink">
                    {post.title.map((line) => (
                      <span key={line} className="block whitespace-nowrap">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <time
                    dateTime={post.date}
                    className="block font-mono text-[10px] leading-[15px] tracking-[1.8px] whitespace-nowrap text-secondary"
                  >
                    {post.dateLabel}
                  </time>
                </div>

                <p className="min-h-[96px] font-serif text-[18px] leading-6 text-secondary">{post.excerpt}</p>

                <a
                  href="#research"
                  aria-label={`Read ${post.title.join(' ')}`}
                  className="mt-auto inline-flex w-fit min-h-[34px] items-center border-b border-transparent py-2 text-[13px] leading-[18px] font-bold text-teal transition-colors hover:border-teal-deep"
                >
                  Read →
                </a>
              </div>
            </article>
          ))}
        </div>

        <a href="#research" className="btn btn-primary mt-10 w-fit">
          View all research →
        </a>
      </div>
    </section>
  )
}