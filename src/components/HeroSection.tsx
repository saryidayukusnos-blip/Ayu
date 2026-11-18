import { ArrowRight, MessageCircle } from 'lucide-react';
import {
  FUNDING_SCHEMES,
  FundingId,
  HERO_STUDENT_IMAGE,
  buildWhatsAppUrl,
} from '../data/programData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onScrollToForm: () => void;
  onQuickSelectFunding: (fundingId: FundingId) => void;
}

const HERO_PROOFS = [
  {
    value: '80% : 20%',
    label: 'Latihan Amali Bengkel vs Teori',
    context: 'Kurikulum Berorientasikan Kemahiran',
  },
  {
    value: '18+ Tahun',
    label: 'Syarat Umur Minimum Kemasukan',
    context: 'Lepasan Sekolah & Belia',
  },
  {
    value: '5 Skim',
    label: 'Pilihan Pembiayaan Fleksibel',
    context: 'PTPTN · PTPK · KWSP · 0% · Tunai',
  },
  {
    value: '94%',
    label: 'Penempatan Kerja & Latihan Industri',
    context: 'Rekod Alumni GIS 2024–2025',
  },
];

export function HeroSection({ onScrollToForm, onQuickSelectFunding }: HeroSectionProps) {
  const consultationWhatsAppUrl = buildWhatsAppUrl(
    'Salam sejahtera Pegawai Kemasukan GIS. Saya ingin mendapatkan konsultasi mengenai Program Kemahiran Elektrik (18+) dan pilihan pembiayaan yang ditawarkan.'
  );

  return (
    <section className="bg-white pt-8 pb-0 sm:pt-12 lg:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-6 lg:py-2">
            <div>
              <div className="cinematic-reveal flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold tracking-wide text-[#1E3A8A] sm:text-sm">
                <span>Global Institute of Studies (GIS)</span>
                <span aria-hidden="true" className="text-slate-300">
                  ·
                </span>
                <span>Program Kemahiran Elektrik (18+)</span>
              </div>

              <h1
                className="cinematic-reveal cinematic-reveal-delay-1 font-display mt-4 font-extrabold tracking-tight text-[#0F172A] leading-[1.12]"
                style={{
                  fontSize: 'clamp(2.15rem, 3.8vw, 3.45rem)',
                  textWrap: 'balance',
                }}
              >
                Masa Depan Anak Terjamin Melalui Kemahiran Elektrik Sebenar
              </h1>

              <p className="cinematic-reveal cinematic-reveal-delay-2 mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Latihan vokasional <strong className="font-semibold text-[#0F172A]">80% praktikal bengkel</strong>{' '}
                dan <strong className="font-semibold text-[#0F172A]">20% teori</strong> untuk pelajar berumur 18 tahun
                ke atas. Dilengkapi bimbingan penuh permohonan pembiayaan serta bantuan penempatan kerja bersama
                industri.
              </p>

              <div className="cinematic-reveal cinematic-reveal-delay-2 mt-7">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Pilih Skim Pembiayaan Untuk Maklumat Lanjut
                </p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Pilihan skim pembiayaan GIS">
                  {FUNDING_SCHEMES.map((scheme) => (
                    <button
                      key={scheme.id}
                      type="button"
                      onClick={() => onQuickSelectFunding(scheme.id)}
                      className="inline-flex min-h-[40px] items-center rounded-lg border border-slate-200 bg-[#F8FAFC] px-3.5 py-2 text-xs font-semibold text-[#0F172A] whitespace-nowrap shrink-0 transition-all duration-150 hover:border-[#1E3A8A] hover:bg-white hover:text-[#1E3A8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] cursor-pointer sm:text-sm"
                    >
                      {scheme.shortLabel}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="cinematic-reveal cinematic-reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onScrollToForm}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#EA580C] px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 shadow-sm transition-colors duration-150 hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 cursor-pointer sm:text-base"
              >
                <span>Semak Kelayakan Sekarang</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>

              <a
                href={consultationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#1E3A8A]/25 bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#1E3A8A] hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2 sm:text-base"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[#EA580C]" aria-hidden="true" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[470px] rounded-2xl border border-slate-200 bg-[#F8FAFC] p-2 shadow-xl shadow-slate-900/5">
              <ResilientImage
                src={HERO_STUDENT_IMAGE}
                alt="Pelajar lelaki dan perempuan berbilang kaum di Global Institute of Studies berpakaian sopan memegang buku dan menggalas beg berjalan menuju ke kelas"
                fallbackTitle="Kampus Global Institute of Studies (GIS)"
                className="h-full w-full rounded-xl"
                imgClassName="ken-burns-motion object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-y border-slate-200 bg-[#F8FAFC] sm:mt-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {HERO_PROOFS.map((item) => (
            <div key={item.label} className="px-6 py-6 sm:py-7">
              <p className="font-display font-mono text-2xl font-bold tracking-tight text-[#1E3A8A] tabular-nums sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">{item.label}</p>
              <p className="mt-0.5 text-xs text-slate-600">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
