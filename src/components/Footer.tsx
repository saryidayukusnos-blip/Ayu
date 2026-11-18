export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8FAFC] py-12 text-[#0F172A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-bold tracking-tight text-[#0F172A]">
              Global Institute of Studies (GIS)
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              Pusat latihan kemahiran elektrik berorientasikan praktikal (80% amali bengkel, 20% teori) untuk
              melahirkan juruteknik, pendawai bertauliah, dan usahawan teknikal berumur 18 tahun ke atas.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pautan Pantas</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>
                <a href="#penyelesaian" className="hover:text-[#1E3A8A] transition-colors">
                  Kerisauan Ibu Bapa &amp; Penyelesaian
                </a>
              </li>
              <li>
                <a href="#struktur-kursus" className="hover:text-[#1E3A8A] transition-colors">
                  Struktur Kursus 80:20 &amp; Kerjaya
                </a>
              </li>
              <li>
                <a href="#pembiayaan" className="hover:text-[#1E3A8A] transition-colors">
                  5 Pilihan Skim Pembiayaan
                </a>
              </li>
              <li>
                <a href="#semak-kelayakan" className="hover:text-[#1E3A8A] transition-colors">
                  Borang Semakan Kelayakan
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Unit Kemasukan</p>
            <div className="mt-3 space-y-1.5 text-sm text-slate-700">
              <p>Isnin – Jumaat · 9:00 pagi – 5:30 petang</p>
              <p>Sabtu · 9:00 pagi – 1:00 tengah hari</p>
              <p className="pt-1 font-mono text-xs font-semibold text-[#1E3A8A] tabular-nums">
                WhatsApp: +60 12-345 6789
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Global Institute of Studies (GIS). Hak Cipta Terpelihara.</p>
          <p>Program Kemahiran Elektrik (18+) · Mod Pembelajaran Cerah &amp; Mesra Pengguna</p>
        </div>
      </div>
    </footer>
  );
}
