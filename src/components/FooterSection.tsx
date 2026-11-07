import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Language, VERIFIED_BUSINESS_INFO } from '../data/raiServiceData';
import { buildCarWashWhatsAppUrl, buildTelHref } from '../utils/serviceLogic';

interface FooterSectionProps {
  lang: Language;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ lang }) => {
  const whatsappUrl = buildCarWashWhatsAppUrl(lang);

  return (
    <footer className="bg-[#0A0A0C] text-[#A0A4B0] py-12 lg:py-16">
      <div className="max-w-[1360px] mx-auto px-6 space-y-10">
        {/* Prominent Independent Redesign Concept Disclaimer Banner */}
        <div
          role="note"
          aria-label={
            lang === 'ru'
              ? 'Дисклеймер независимого концепта редизайна'
              : 'Independent redesign concept disclaimer'
          }
          className="p-6 rounded bg-[#121317] border border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
        >
          <div className="space-y-1.5 max-w-[82ch]">
            <p className="text-xs font-semibold text-[#F4F4F6]">
              {lang === 'ru'
                ? 'УВЕДОМЛЕНИЕ О СТАТУСЕ ПРОЕКТА · INDEPENDENT REDESIGN CONCEPT'
                : 'PROJECT STATUS NOTICE · INDEPENDENT REDESIGN CONCEPT'}
            </p>
            <p className="text-xs sm:text-sm text-[#A0A4B0] leading-relaxed">
              {lang === 'ru'
                ? 'Данный веб-сайт является независимой авторской концепцией редизайна (Independent Redesign Concept), созданной в демонстрационных целях, и НЕ является официальным сайтом компании «Рай-Сервис». Вся представленная контактная и справочная информация соответствует открытым данным официального ресурса компании.'
                : 'This website is an independent editorial redesign concept created for design and engineering demonstration purposes and is NOT the official website of RAI SERVICE. All business details, phone numbers, and service descriptions strictly reflect verified public information without fabricated reviews, prices, or statistics.'}
            </p>
          </div>

          <a
            href={VERIFIED_BUSINESS_INFO.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-xs font-semibold text-[#F4F4F6] bg-[#181A20] hover:bg-[#22252E] border border-white/15 rounded transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 self-start lg:self-center"
          >
            <span>
              {lang === 'ru'
                ? 'Официальный сайт: raiservis.ru'
                : 'Official Website: raiservis.ru'}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D9232E]" />
          </a>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-white/10">
          <div className="md:col-span-5 space-y-2">
            <p className="font-display text-2xl font-bold text-[#F4F4F6] tracking-tight">
              {VERIFIED_BUSINESS_INFO.brandName[lang]}
            </p>
            <p className="text-xs text-[#A0A4B0] max-w-[44ch] leading-relaxed">
              {lang === 'ru'
                ? 'Мультибрендовый автосервис и автомойка в Мытищах. Слесарный и агрегатный ремонт, компьютерная диагностика, чип-тюнинг, 3D сход-развал, кузовной ремонт и детейлинг-мойка.'
                : 'Multi-brand auto service and car wash in Mytishchi. Powertrain overhaul, computer diagnostics, ECU calibration, 3D wheel alignment, bodywork, and detailing studio.'}
            </p>
          </div>

          <div className="md:col-span-4 space-y-1.5 text-xs">
            <p className="text-[#F4F4F6] font-semibold mb-2">
              {lang === 'ru' ? 'Адрес и режим работы' : 'Location & Schedule'}
            </p>
            <p>{VERIFIED_BUSINESS_INFO.city[lang]}</p>
            <p>{VERIFIED_BUSINESS_INFO.address[lang]}</p>
            <p className="font-mono-tech text-[#F4F4F6] pt-1">
              {VERIFIED_BUSINESS_INFO.hours[lang]}
            </p>
          </div>

          <div className="md:col-span-3 space-y-1.5 text-xs">
            <p className="text-[#F4F4F6] font-semibold mb-2">
              {lang === 'ru' ? 'Прямая связь' : 'Direct Lines'}
            </p>
            <a
              href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw)}
              className="block font-mono-tech text-[#F4F4F6] hover:text-[#D9232E] transition-colors"
            >
              {VERIFIED_BUSINESS_INFO.phones.servicePrimary}
            </a>
            <a
              href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.serviceSecondaryRaw)}
              className="block font-mono-tech text-[#F4F4F6] hover:text-[#D9232E] transition-colors"
            >
              {VERIFIED_BUSINESS_INFO.phones.serviceSecondary}
            </a>
            <p className="pt-1">
              WhatsApp ({lang === 'ru' ? 'Автомойка' : 'Car Wash'}):{' '}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-[#F4F4F6] hover:text-[#D9232E] transition-colors underline underline-offset-4"
              >
                {VERIFIED_BUSINESS_INFO.phones.carWashWhatsapp}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Navigation Mirror */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6C707E]">
          <p>
            {lang === 'ru'
              ? 'РАЙ СЕРВИС (Мытищи) — Концепт редизайна. Все верифицированные права принадлежат их законным владельцам.'
              : 'RAI SERVICE (Mytishchi) — Independent Redesign Concept. Verified business facts only.'}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#services" className="hover:text-[#F4F4F6] transition-colors">
              {lang === 'ru' ? 'Услуги' : 'Services'}
            </a>
            <a href="#open-bay" className="hover:text-[#F4F4F6] transition-colors">
              {lang === 'ru' ? 'Открытая ремзона' : 'Open Bay'}
            </a>
            <a
              href="#redesign-concept"
              className="hover:text-[#F4F4F6] transition-colors"
            >
              {lang === 'ru' ? 'Концепция редизайна' : 'Redesign Audit'}
            </a>
            <a href="#contacts" className="hover:text-[#F4F4F6] transition-colors">
              {lang === 'ru' ? 'Контакты' : 'Contacts'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
