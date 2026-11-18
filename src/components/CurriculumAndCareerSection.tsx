import { Briefcase, Wrench } from 'lucide-react';
import {
  CAREER_PATHS,
  COURSE_MODULES,
  MOTOR_AUTOMATION_IMAGE,
  WORKSHOP_PRACTICAL_IMAGE,
} from '../data/programData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ResilientImage } from './ResilientImage';

export function CurriculumAndCareerSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="struktur-kursus"
      ref={ref}
      className={`scroll-reveal border-y border-slate-200 bg-[#F8FAFC] py-16 sm:py-24 ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#EA580C]">
              Struktur Latihan Vokasional Berimpak Tinggi
            </p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-[#0F172A]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
            >
              Pendekatan Pembelajaran 80% Praktikal Bengkel &amp; 20% Teori
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-slate-600">
              Pelajar membina kemahiran tangan sebenar menggunakan peralatan ujian, papan agihan 3-fasa, dan panel
              kawalan motor industri setiap minggu.
            </p>
          </div>
        </div>

        {/* 80:20 Visual Breakdown Panel */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h3 className="font-display text-lg font-bold text-[#0F172A]">
                Agihan Masa Pengajian Mingguan
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Direka untuk pelajar berumur 18+ yang lebih cepat menguasai ilmu melalui amali berbanding hafalan buku.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm font-semibold">
              <span className="font-mono text-[#1E3A8A] tabular-nums">80% Amali Bengkel</span>
              <span aria-hidden="true" className="text-slate-300">
                /
              </span>
              <span className="font-mono text-[#D97706] tabular-nums">20% Teori &amp; Akta</span>
            </div>
          </div>

          <div
            className="mt-5 flex h-11 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
            role="img"
            aria-label="Nisbah pembelajaran 80 peratus praktikal dan amali bengkel berbanding 20 peratus teori"
          >
            <div
              className="flex items-center justify-between bg-[#1E3A8A] px-4 text-xs font-semibold text-white sm:text-sm"
              style={{ width: '80%' }}
            >
              <span className="truncate">80% Praktikal &amp; Amali Bengkel</span>
              <span className="hidden font-mono tabular-nums sm:inline">4 Hari / Minggu</span>
            </div>
            <div
              className="flex items-center justify-center bg-[#FBBF24] px-2 text-xs font-bold text-[#0F172A] sm:text-sm"
              style={{ width: '20%' }}
            >
              <span className="truncate">20% Teori</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-[#1E3A8A]" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-[#0F172A]">80% Latihan Amali &amp; Pengujian Sebenar</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Pelajar memotong konduit, menarik kabel, memasang litar papan agihan, menyelenggara motor 3-fasa, dan
                  melakukan ujian penebatan secara individu dan berkumpulan.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-[#EA580C]" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-[#0F172A]">20% Teori Kejuruteraan &amp; Akta Keselamatan</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Menekankan tafsiran lukisan skematik, pengiraan beban elektrik asas, pematuhan Suruhanjaya Tenaga, dan
                  prosedur kerja selamat di tapak.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Photographic Workshop Showcase + 4 Core Modules */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <ResilientImage
                src={WORKSHOP_PRACTICAL_IMAGE}
                alt="Pengajar bertauliah membimbing pelajar berbilang kaum memeriksa papan agihan tiga fasa di bengkel GIS"
                fallbackTitle="Bengkel Pendawaian 3-Fasa GIS"
                className="aspect-[4/3] w-full"
              />
              <div className="p-4 sm:p-5">
                <p className="text-xs font-semibold text-[#1E3A8A]">Bengkel Pendawaian Industri</p>
                <p className="mt-1 text-sm text-slate-600">
                  Bimbingan berfokus nisbah kecil bersama pengajar berpengalaman lapangan.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <ResilientImage
                src={MOTOR_AUTOMATION_IMAGE}
                alt="Pelajar kemahiran elektrik melakukan pengujian panel kawalan motor menggunakan multimeter digital"
                fallbackTitle="Makmal Kawalan Motor & Automasi GIS"
                className="aspect-[4/3] w-full"
              />
              <div className="p-4 sm:p-5">
                <p className="text-xs font-semibold text-[#EA580C]">Makmal Kawalan Motor &amp; Pengujian</p>
                <p className="mt-1 text-sm text-slate-600">
                  Penguasaan instrumen diagnostik sebenar seperti multimeter, clamp meter dan penguji penebatan.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
            <div>
              <h3 className="font-display text-xl font-bold text-[#0F172A]">
                4 Modul Teras Program Kemahiran Elektrik
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                Disusun secara berperingkat daripada asas pendawaian rumah hingga sistem kawalan automasi industri.
              </p>

              <div className="mt-6 divide-y divide-slate-200">
                {COURSE_MODULES.map((mod) => (
                  <div key={mod.code} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm font-bold text-[#EA580C] tabular-nums">
                        {mod.code}.
                      </span>
                      <h4 className="font-display text-base font-bold text-[#0F172A] sm:text-lg">
                        {mod.title}
                      </h4>
                    </div>
                    <p className="mt-2 pl-7 text-sm leading-relaxed text-slate-600">
                      {mod.practicalFocus}
                    </p>
                    <p className="mt-1.5 pl-7 text-xs font-medium text-[#1E3A8A]">
                      Peralatan Bengkel: {mod.toolsCovered}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Latihan Industri Berstruktur
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-700">
                Setiap pelatih ditempatkan di syarikat kejuruteraan, kilang pembuatan, atau kontraktor berdaftar bagi
                membina keyakinan kerja sebelum menamatkan pengajian.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Career Prospects */}
        <div className="mt-14">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-[#1E3A8A]">Prospek Kerjaya Selepas Tamat Pengajian</p>
              <h3 className="font-display mt-1 text-2xl font-bold tracking-tight text-[#0F172A]">
                4 Laluan Kerjaya Bernilai Tinggi Dalam Sektor Elektrik
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Anggaran pendapatan pasaran Malaysia bergantung kepada pengalaman &amp; tauliah.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_PATHS.map((career, idx) => (
              <div
                key={career.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display mt-2 text-base font-bold text-[#0F172A]">
                    {career.title}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-[#1E3A8A]">{career.sector}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{career.progression}</p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-xs text-slate-500">Anggaran Pendapatan</p>
                  <p className="font-mono mt-0.5 text-sm font-bold text-[#EA580C] tabular-nums">
                    {career.salaryRange}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
