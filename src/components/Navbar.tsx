import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onSelectEligibility: () => void;
}

const NAV_LINKS = [
  { label: 'Penyelesaian', href: '#penyelesaian' },
  { label: 'Struktur 80:20', href: '#struktur-kursus' },
  { label: 'Pembiayaan', href: '#pembiayaan' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Soalan Lazim', href: '#soalan-lazim' },
];

export function Navbar({ onSelectEligibility }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-2 text-center text-xs font-medium text-slate-700 sm:text-sm">
        <span>
          Pengambilan Sesi Baharu Program Kemahiran Elektrik (18+) Kini Dibuka —{' '}
          <a
            href="#semak-kelayakan"
            className="font-semibold text-[#1E3A8A] underline decoration-[#F59E0B] decoration-2 underline-offset-2 hover:text-[#EA580C] transition-colors"
          >
            Tempat Bengkel Amali Terhad
          </a>
        </span>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#"
            className="font-display text-base font-bold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2 rounded"
          >
            Global Institute of Studies
          </a>

          <nav
            aria-label="Navigasi utama"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#1E3A8A] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#F59E0B] after:transition-all after:duration-150 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onSelectEligibility}
              className="hidden sm:inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 cursor-pointer"
            >
              Semak Kelayakan
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
              className="inline-flex lg:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0F172A] transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden"
          >
            <nav aria-label="Navigasi mudah alih" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#F8FAFC] hover:text-[#1E3A8A]"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectEligibility();
                }}
                className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#EA580C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#D97706] cursor-pointer"
              >
                Semak Kelayakan
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
