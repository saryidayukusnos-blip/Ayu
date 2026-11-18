import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/programData';

export function FloatingWhatsAppButton() {
  const quickUrl = buildWhatsAppUrl(
    'Salam sejahtera GIS, saya ingin bertanya tentang kemasukan Program Kemahiran Elektrik (18+) dan pilihan pembiayaan.'
  );

  return (
    <a
      href={quickUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi pantas WhatsApp Pegawai Kemasukan GIS"
      className="fixed right-4 bottom-4 z-50 inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-[#1E3A8A]/15 bg-[#1E3A8A] px-5 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 shadow-lg shadow-slate-900/15 transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-5 w-5 shrink-0 text-[#FBBF24]" aria-hidden="true" />
      <span>WhatsApp GIS</span>
    </a>
  );
}
