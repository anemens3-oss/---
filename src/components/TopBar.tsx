import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Language, VERIFIED_BUSINESS_INFO } from '../data/raiServiceData';
import { buildTelHref } from '../utils/serviceLogic';

interface TopBarProps {
  lang: Language;
}

export const TopBar: React.FC<TopBarProps> = ({ lang }) => {
  const navItems =
    lang === 'ru'
      ? [
          { href: '#services', label: 'Услуги' },
          { href: '#open-bay', label: 'Ремзона' },
          { href: '#redesign-concept', label: 'Концепция' },
          { href: '#contacts', label: 'Контакты' },
        ]
      : [
          { href: '#services', label: 'Services' },
          { href: '#open-bay', label: 'Open Bay' },
          { href: '#redesign-concept', label: 'Concept' },
          { href: '#contacts', label: 'Contacts' },
        ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0C]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-3 sm:gap-8 px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F4F4F6] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9232E]"
        >
          {VERIFIED_BUSINESS_INFO.brandName[lang]}
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label={lang === 'ru' ? 'Основная навигация' : 'Primary navigation'}
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A0A4B0]"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#F4F4F6] underline-offset-8 hover:underline transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9232E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (Direct tel: call) */}
        <div className="flex items-center shrink-0">
          <a
            href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw)}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#D9232E] hover:bg-[#E63540] rounded transition-colors duration-150 inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <PhoneCall className="w-3.5 h-3.5 hidden sm:inline-block shrink-0" />
            <span>
              {lang === 'ru' ? 'Позвонить в автосервис' : 'Call Auto Service'}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
