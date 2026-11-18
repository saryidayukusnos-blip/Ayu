import { useState } from 'react';
import { CurriculumAndCareerSection } from './components/CurriculumAndCareerSection';
import { EligibilityFormSection } from './components/EligibilityFormSection';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { Footer } from './components/Footer';
import { FundingTabsSection } from './components/FundingTabsSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ParentConcernsMatrix } from './components/ParentConcernsMatrix';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { FUNDING_SCHEMES, FundingId } from './data/programData';

export default function App() {
  const [activeFundingId, setActiveFundingId] = useState<FundingId>('ptptn');
  const [selectedFundingOption, setSelectedFundingOption] = useState<string>(
    FUNDING_SCHEMES[0].formOptionValue
  );

  const scrollToElement = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleQuickSelectFunding = (fundingId: FundingId) => {
    setActiveFundingId(fundingId);
    const matched = FUNDING_SCHEMES.find((s) => s.id === fundingId);
    if (matched) {
      setSelectedFundingOption(matched.formOptionValue);
    }
    scrollToElement('pembiayaan');
  };

  const handleApplyWithFunding = (schemeFormValue: string) => {
    setSelectedFundingOption(schemeFormValue);
    scrollToElement('semak-kelayakan');
  };

  const handleFormFundingChange = (value: string) => {
    setSelectedFundingOption(value);
    const matched = FUNDING_SCHEMES.find((s) => s.formOptionValue === value);
    if (matched) {
      setActiveFundingId(matched.id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <Navbar onSelectEligibility={() => scrollToElement('semak-kelayakan')} />

      <main>
        <HeroSection
          onScrollToForm={() => scrollToElement('semak-kelayakan')}
          onQuickSelectFunding={handleQuickSelectFunding}
        />

        <ParentConcernsMatrix />

        <CurriculumAndCareerSection />

        <FundingTabsSection
          activeFundingId={activeFundingId}
          onChangeFundingTab={setActiveFundingId}
          onApplyWithFunding={handleApplyWithFunding}
        />

        <TestimonialsAndFaqSection />

        <EligibilityFormSection
          selectedFundingOption={selectedFundingOption}
          onFundingOptionChange={handleFormFundingChange}
        />
      </main>

      <Footer />

      <FloatingWhatsAppButton />
    </div>
  );
}
