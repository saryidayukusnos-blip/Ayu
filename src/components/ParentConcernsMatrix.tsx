import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { PARENT_CONCERNS } from '../data/programData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function ParentConcernsMatrix() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="penyelesaian"
      ref={ref}
      className={`scroll-reveal bg-white py-16 sm:py-24 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#EA580C]">
            Perspektif Ibu Bapa &amp; Penjaga
          </p>
          <h2
            className="font-display mt-2 font-bold tracking-tight text-[#0F172A]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
          >
            Menjawab 4 Kerisauan Utama Keluarga Dengan Penyelesaian Konkrit
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Kami memahami keputusan memilih haluan selepas umur 18 tahun melibatkan pertimbangan kewangan, keyakinan
            kerjaya, dan keselamatan pembelajaran anak anda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PARENT_CONCERNS.map((item) => (
            <article
              key={item.index}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-colors duration-150 hover:border-[#1E3A8A]/40"
            >
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <span className="font-mono text-xs font-semibold text-slate-500 tabular-nums">
                    {item.index}. Perbandingan Penyelesaian
                  </span>
                  <span className="text-xs font-semibold text-[#1E3A8A]">Jaminan GIS</span>
                </div>

                <div className="mt-5">
                  <div className="flex items-start gap-3">
                    <HelpCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Kerisauan Ibu Bapa
                      </p>
                      <h3 className="font-display mt-1 text-lg font-bold text-[#0F172A]">
                        {item.concernTitle}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {item.concernDetail}
                      </p>
                    </div>
                  </div>

                  <div className="my-5 border-t border-slate-100" />

                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#1E3A8A]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
                        Penyelesaian GIS
                      </p>
                      <h4 className="font-display mt-1 text-base font-bold text-[#1E3A8A]">
                        {item.solutionTitle}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {item.solutionDetail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {item.actionLabel && item.targetSection && (
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={item.targetSection}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#1E3A8A] transition-colors hover:text-[#EA580C]"
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
