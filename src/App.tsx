/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './data/raiServiceData';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { OpenBaySection } from './components/OpenBaySection';
import { RedesignConceptSection } from './components/RedesignConceptSection';
import { BookingAndContactsSection } from './components/BookingAndContactsSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [lang, setLang] = useState<Language>('ru');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F4F4F6] flex flex-col selection:bg-[#D9232E] selection:text-white">
      <TopBar lang={lang} />

      <main className="flex-1">
        <HeroSection
          lang={lang}
          onLanguageChange={setLang}
          onExploreAuditClick={() => scrollToSection('redesign-concept')}
        />

        <ServicesSection lang={lang} />

        <OpenBaySection lang={lang} />

        <RedesignConceptSection lang={lang} />

        <BookingAndContactsSection lang={lang} />
      </main>

      <FooterSection lang={lang} />
    </div>
  );
}
