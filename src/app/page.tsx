import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { PhasesSection } from '@/components/home/PhasesSection';
import { CurriculumSection } from '@/components/home/CurriculumSection';
import { CaseStudySection } from '@/components/home/CaseStudySection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <PhasesSection />
      <CurriculumSection />
      <CaseStudySection />
      <FAQSection />
      <CTASection />
    </>
  );
}
