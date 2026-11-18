import { FormEvent, useEffect, useState } from 'react';
import { AlertCircle, Check, CheckCircle2, Copy, MessageCircle, Send } from 'lucide-react';
import {
  FUNDING_SCHEMES,
  MALAYSIA_STATES,
  buildWhatsAppUrl,
} from '../data/programData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface EligibilityFormSectionProps {
  selectedFundingOption: string;
  onFundingOptionChange: (value: string) => void;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  applicantStatus?: string;
  fundingOption?: string;
  state?: string;
}

export function EligibilityFormSection({
  selectedFundingOption,
  onFundingOptionChange,
}: EligibilityFormSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [applicantStatus, setApplicantStatus] = useState('Ibu Bapa / Penjaga');
  const [stateName, setStateName] = useState('Selangor');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync scroll focus if user changed scheme via FundingTabsSection
  useEffect(() => {
    if (selectedFundingOption && errors.fundingOption) {
      setErrors((prev) => ({ ...prev, fundingOption: undefined }));
    }
  }, [selectedFundingOption, errors.fundingOption]);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    const trimmedName = fullName.trim();
    const cleanedPhone = phone.replace(/[\s-]/g, '');

    if (trimmedName.length < 3) {
      newErrors.fullName = 'Sila masukkan nama penuh sekurang-kurangnya 3 aksara.';
    }

    if (!/^(\+?60|0)1[0-9]{8,9}$/.test(cleanedPhone)) {
      newErrors.phone = 'Masukkan nombor telefon bimbit Malaysia yang sah (contoh: 012-3456789).';
    }

    if (!applicantStatus) {
      newErrors.applicantStatus = 'Sila pilih status pemohon.';
    }

    if (!selectedFundingOption) {
      newErrors.fundingOption = 'Sila pilih pilihan pembiayaan.';
    }

    if (!stateName) {
      newErrors.state = 'Sila pilih negeri tempat tinggal.';
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const message = [
      'SEMAKAN KELAYAKAN PROGRAM KEMAHIRAN ELEKTRIK (18+) — GIS',
      '--------------------------------------------------',
      `Nama Penuh: ${fullName.trim()}`,
      `No. Telefon / WhatsApp: ${phone.trim()}`,
      `Status Pemohon: ${applicantStatus}`,
      `Pilihan Pembiayaan: ${selectedFundingOption}`,
      `Negeri: ${stateName}`,
      '--------------------------------------------------',
      'Mohon pegawai kemasukan GIS hubungi saya untuk semakan kelayakan dan tarikh pengambilan sesi baharu. Terima kasih.',
    ].join('\n');

    setSubmittedMessage(message);
    setCopied(false);

    // Launch WhatsApp cleanly via anchor link element without window.open
    const waUrl = buildWhatsAppUrl(message);
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyMessage = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const whatsappDirectUrl = submittedMessage ? buildWhatsAppUrl(submittedMessage) : '#';

  return (
    <section
      id="semak-kelayakan"
      ref={ref}
      className={`scroll-reveal border-t border-slate-200 bg-white py-16 sm:py-24 ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-[#EA580C]">Pendaftaran &amp; Semakan Pantas</p>
            <h2
              className="font-display mt-2 font-bold tracking-tight text-[#0F172A]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', textWrap: 'balance' }}
            >
              Semak Kelayakan Masuk &amp; Pilihan Pembiayaan Secara Percuma
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Lengkapkan maklumat ringkas di sebelah. Sistem akan menjana mesej rasmi terus ke WhatsApp Pegawai
              Kemasukan Global Institute of Studies (GIS) untuk maklum balas segera.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
              <p className="font-display text-sm font-bold text-[#0F172A]">
                Apa Yang Berlaku Selepas Hantar?
              </p>
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#1E3A8A] tabular-nums">01.</span>
                  <span>Pegawai kemasukan menyemak kelayakan umur (18+) dan skim pembiayaan pilihan anda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#1E3A8A] tabular-nums">02.</span>
                  <span>Senarai semak dokumen PTPTN, PTPK, KWSP atau Ansuran 0% dihantar terus ke WhatsApp anda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono font-bold text-[#1E3A8A] tabular-nums">03.</span>
                  <span>Jemputan sesi konsultasi atau lawatan bengkel kampus disediakan tanpa sebarang bayaran.</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-[#0F172A]">
                  Nama Penuh (Ibu Bapa atau Pelajar) <span className="text-[#EA580C]">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                  }}
                  placeholder="Contoh: Ahmad Razak bin Ismail"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={`mt-1.5 block min-h-[44px] w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                    errors.fullName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]/20'
                  }`}
                />
                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                  >
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#0F172A]">
                    No. Telefon / WhatsApp <span className="text-[#EA580C]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder="Contoh: 012-3456789"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`mt-1.5 block min-h-[44px] w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-300 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]/20'
                    }`}
                  />
                  {errors.phone && (
                    <p
                      id="phone-error"
                      className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="stateName" className="block text-sm font-semibold text-[#0F172A]">
                    Negeri <span className="text-[#EA580C]">*</span>
                  </label>
                  <select
                    id="stateName"
                    name="stateName"
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                  >
                    {MALAYSIA_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <span className="block text-sm font-semibold text-[#0F172A]">
                  Status Pemohon <span className="text-[#EA580C]">*</span>
                </span>
                <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {['Ibu Bapa / Penjaga', 'Pelajar (18+ Tahun)'].map((status) => {
                    const checked = applicantStatus === status;
                    return (
                      <label
                        key={status}
                        className={`flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
                          checked
                            ? 'border-[#1E3A8A] bg-white text-[#1E3A8A] ring-1 ring-[#1E3A8A]'
                            : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="applicantStatus"
                          value={status}
                          checked={checked}
                          onChange={(e) => setApplicantStatus(e.target.value)}
                          className="h-4 w-4 accent-[#1E3A8A]"
                        />
                        <span>{status}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="fundingOption" className="block text-sm font-semibold text-[#0F172A]">
                  Pilihan Skim Pembiayaan <span className="text-[#EA580C]">*</span>
                </label>
                <select
                  id="fundingOption"
                  name="fundingOption"
                  value={selectedFundingOption}
                  onChange={(e) => onFundingOptionChange(e.target.value)}
                  className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-[#0F172A] focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                >
                  {FUNDING_SCHEMES.map((scheme) => (
                    <option key={scheme.id} value={scheme.formOptionValue}>
                      {scheme.formOptionValue} — {scheme.shortLabel}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#EA580C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-[#D97706] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 cursor-pointer sm:text-base"
              >
                <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Hantar Semakan Kelayakan ke WhatsApp</span>
              </button>
            </form>

            {submittedMessage && (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 rounded-xl border border-[#1E3A8A]/25 bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E3A8A]" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-sm font-bold text-[#0F172A]">
                      Mesej Semakan Kelayakan Telah Dijana
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Jika aplikasi WhatsApp tidak terbuka secara automatik, tekan butang di bawah untuk menghantar
                      maklumat anda terus kepada pegawai kemasukan GIS.
                    </p>

                    <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-[#F8FAFC] p-3 font-mono text-xs text-slate-700">
                      {submittedMessage}
                    </pre>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#1E3A8A] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#0F172A] sm:text-sm"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>Buka WhatsApp Sekarang</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0F172A] whitespace-nowrap shrink-0 transition-colors hover:bg-slate-50 cursor-pointer sm:text-sm"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 shrink-0 text-[#1E3A8A]" aria-hidden="true" />
                            <span>Mesej Disalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
                            <span>Salin Mesej</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
