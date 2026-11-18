import { ArrowRight, Check, FileText } from 'lucide-react';
import { FUNDING_SCHEMES, FundingId } from '../data/programData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FundingTabsSectionProps {
  activeFundingId: FundingId;
  onChangeFundingTab: (id: FundingId) => void;
  onApplyWithFunding: (schemeFormValue: string) => void;
}

export function FundingTabsSection({
  activeFundingId,
  onChangeFundingTab,
  onApplyWithFunding,
}: FundingTabsSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const activeScheme =
    FUNDING_SCHEMES.find((scheme) => scheme.id === activeFundingId) ?? FUNDING_SCHEMES[0];

  return (
    <section
      id="pembiayaan"
      ref={ref}
      className={`scroll-reveal bg-white py-16 sm:py-24 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#EA580C]">
            Penyelesaian Kewangan Untuk Ibu Bapa &amp; Pelajar
          </p>
          <h2
            className="font-display mt-2 font-bold tracking-tight text-[#0F172A]"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
          >
            Bandingkan 5 Skim Pembiayaan Pengajian Yang Tersedia Di GIS
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Pilih mana-mana tab skim di bawah untuk melihat liputan yuran, syarat kelayakan, dan dokumen ringkas yang
            diperlukan.
          </p>
        </div>

        {/* Interactive Segmented Tab Bar */}
        <div className="mt-8 overflow-x-auto pb-2">
          <div
            role="tablist"
            aria-label="Pilihan skim pembiayaan"
            className="inline-flex min-w-full sm:min-w-0 items-center gap-1.5 rounded-xl border border-slate-200 bg-[#F8FAFC] p-1.5"
          >
            {FUNDING_SCHEMES.map((scheme) => {
              const isSelected = scheme.id === activeScheme.id;
              return (
                <button
                  key={scheme.id}
                  role="tab"
                  type="button"
                  id={`tab-${scheme.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${scheme.id}`}
                  onClick={() => onChangeFundingTab(scheme.id)}
                  className={`min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] cursor-pointer ${
                    isSelected
                      ? 'bg-[#1E3A8A] text-white shadow-sm'
                      : 'text-slate-600 hover:bg-white hover:text-[#0F172A]'
                  }`}
                >
                  {scheme.shortLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Scheme Details Panel */}
        <div
          role="tabpanel"
          id={`panel-${activeScheme.id}`}
          aria-labelledby={`tab-${activeScheme.id}`}
          className="mt-6 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1E3A8A]">
                  Maklumat Terperinci Skim
                </p>
                <h3 className="font-display mt-2 text-2xl font-bold text-[#0F172A]">
                  {activeScheme.fullTitle}
                </h3>
                <p className="mt-2 text-base text-slate-600">{activeScheme.subtitle}</p>

                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
                    Liputan &amp; Kelebihan Utama
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#0F172A] sm:text-base">
                    {activeScheme.coverageSummary}
                  </p>
                  <p className="mt-3 border-t border-slate-100 pt-3 text-sm text-slate-600">
                    <strong className="font-semibold text-[#0F172A]">Terma Bayaran:</strong>{' '}
                    {activeScheme.paymentTerms}
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => onApplyWithFunding(activeScheme.formOptionValue)}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#EA580C] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 shadow-sm transition-colors duration-150 hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 cursor-pointer sm:text-base"
                >
                  <span>Pilih {activeScheme.shortLabel} &amp; Semak Kelayakan</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
                <p className="mt-2 text-xs text-slate-500">
                  Skim ini akan dipilih secara automatik di dalam borang semakan kelayakan di bawah.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-5">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h4 className="font-display text-sm font-bold text-[#0F172A]">Syarat Asas Kelayakan</h4>
                <ul className="mt-3 space-y-2.5">
                  {activeScheme.eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#1E3A8A]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <h4 className="font-display text-sm font-bold text-[#0F172A]">Dokumen Sediaan Awal</h4>
                <ul className="mt-3 space-y-2.5">
                  {activeScheme.documentsNeeded.map((doc) => (
                    <li key={doc} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <FileText
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#EA580C]"
                        aria-hidden="true"
                      />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
