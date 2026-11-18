import { useState } from 'react';
import { ChevronDown, Quote } from 'lucide-react';
import { FAQ_ITEMS, TESTIMONIALS } from '../data/programData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function TestimonialsAndFaqSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="testimoni"
      ref={ref}
      className={`scroll-reveal border-t border-slate-200 bg-[#F8FAFC] py-16 sm:py-24 ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#EA580C]">Bukti Kejayaan Keluarga &amp; Alumni</p>
          <h2
            className="font-display mt-2 font-bold tracking-tight text-[#0F172A]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
          >
            Keyakinan Ibu Bapa &amp; Alumni Yang Telah Berkerjaya
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-[#1E3A8A]">{item.category}</span>
                  <span>{item.location}</span>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                  <strong className="font-semibold text-slate-700">Situasi Awal:</strong> {item.beforeState}
                </p>

                <div className="mt-4 flex items-start gap-2.5">
                  <Quote className="mt-1 h-4 w-4 shrink-0 text-[#F59E0B]" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-[#0F172A]">{item.outcomeQuote}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-display text-sm font-bold text-[#0F172A]">{item.name}</p>
                <p className="mt-0.5 text-xs text-slate-600">{item.role}</p>
              </div>
            </article>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div id="soalan-lazim" className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#1E3A8A]">Soalan Lazim (FAQ)</p>
            <h3
              className="font-display mt-2 font-bold tracking-tight text-[#0F172A]"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)', textWrap: 'balance' }}
            >
              Jawapan Jelas Mengenai Kemasukan, Asrama &amp; Pinjaman
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Masih mempunyai persoalan khusus tentang kelayakan anak atau prosedur permohonan? Lihat jawapan teras di
              sebelah atau terus berhubung dengan pegawai kemasukan melalui WhatsApp.
            </p>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 bg-white transition-colors"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-content`}
                    onClick={() => toggleFaq(faq.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#0F172A] hover:text-[#1E3A8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-inset rounded-xl cursor-pointer sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#1E3A8A]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`${faq.id}-content`}
                      className="border-t border-slate-100 px-5 pt-3 pb-5 text-sm leading-relaxed text-slate-600"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
