import React from 'react';
import { ArrowUpRight, ShieldCheck, PhoneCall, MessageSquare } from 'lucide-react';
import {
  IMAGE_ASSETS,
  Language,
  VERIFIED_BUSINESS_INFO,
} from '../data/raiServiceData';
import { buildCarWashWhatsAppUrl, buildTelHref } from '../utils/serviceLogic';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onExploreAuditClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onLanguageChange,
  onExploreAuditClick,
}) => {
  const whatsappUrl = buildCarWashWhatsAppUrl(lang);

  return (
    <section id="top" className="border-b border-white/10">
      {/* Editorial Concept Disclaimer & Language Bar */}
      <div className="bg-[#121317] border-b border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#A0A4B0]">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2">
            <span className="text-[#F4F4F6] font-medium">
              {lang === 'ru'
                ? 'Независимый концепт-проект редизайна (Independent Redesign Concept)'
                : 'Independent Redesign Concept — Not the official company website'}
            </span>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <span>
              {lang === 'ru'
                ? 'Только верифицированные данные «Рай-Сервис»'
                : 'Verified RAI SERVICE data only'}
            </span>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <a
              href={VERIFIED_BUSINESS_INFO.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4F4F6] underline underline-offset-4 hover:text-[#D9232E] transition-colors inline-flex items-center gap-1 whitespace-nowrap self-start sm:self-auto"
            >
              <span>raiservis.ru</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onExploreAuditClick}
              className="text-xs text-[#A0A4B0] hover:text-[#F4F4F6] underline underline-offset-4 transition-colors whitespace-nowrap cursor-pointer"
            >
              {lang === 'ru' ? 'Арт-дирекшн и разбор' : 'Art Direction & Audit'}
            </button>
            <div
              role="group"
              aria-label={lang === 'ru' ? 'Выбор языка' : 'Language selector'}
              className="flex items-center p-0.5 bg-[#0A0A0C] border border-white/10 rounded"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('ru')}
                aria-pressed={lang === 'ru'}
                className={`px-2.5 py-1 text-xs font-medium rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                  lang === 'ru'
                    ? 'bg-[#D9232E] text-white'
                    : 'text-[#A0A4B0] hover:text-white'
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                aria-pressed={lang === 'en'}
                className={`px-2.5 py-1 text-xs font-medium rounded-sm transition-colors whitespace-nowrap cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#D9232E] text-white'
                    : 'text-[#A0A4B0] hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main 2-Column Editorial Split */}
      <div className="max-w-[1360px] mx-auto px-6 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Editorial Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Unboxed Metadata Kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#A0A4B0] mb-5">
                <span>{VERIFIED_BUSINESS_INFO.city[lang]}</span>
                <span aria-hidden="true">·</span>
                <span>{VERIFIED_BUSINESS_INFO.address[lang]}</span>
              </div>

              <h1
                className="font-display font-bold text-[#F4F4F6] tracking-tight headline-balance leading-[1.04] mb-6"
                style={{ fontSize: 'clamp(2.35rem, 4.2vw, 3.75rem)' }}
              >
                {lang === 'ru'
                  ? 'Инженерный автосервис и детейлинг-мойка с открытым доступом в ремзону'
                  : 'Precision Multi-Brand Auto Service & Detailing Studio with Open Repair Bay Access'}
              </h1>

              <p className="text-base sm:text-lg text-[#A0A4B0] leading-relaxed max-w-[64ch] mb-8">
                {lang === 'ru'
                  ? 'Полный цикл слесарного и агрегатного ремонта бензиновых и дизельных автомобилей европейских, азиатских и американских марок. Компьютерная диагностика, чип-тюнинг, ремонт ДВС и трансмиссии, 3D сход-развал, кузовной цех и собственный моечный комплекс в Мытищах.'
                  : 'Full-cycle mechanical and aggregate repair for European, Asian, and American petrol and diesel vehicles in Mytishchi. Computer diagnostics, ECU calibration, engine and transmission overhaul, wheel alignment, bodywork, and dedicated studio car wash.'}
              </p>
            </div>

            <div className="space-y-5 pt-4 border-t border-white/10">
              {/* Open Repair Bay Guarantee Callout */}
              <div className="p-4 rounded bg-[#121317] border border-white/10 flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-[#D9232E] shrink-0 mt-0.5" />
                <p className="text-sm text-[#F4F4F6] leading-relaxed">
                  {VERIFIED_BUSINESS_INFO.corePolicy[lang]}
                </p>
              </div>

              {/* Direct Phone Coordination Notice */}
              <p className="text-xs sm:text-sm text-[#A0A4B0]">
                {lang === 'ru'
                  ? 'Чтобы согласовать время обслуживания и уточнить стоимость работ, свяжитесь с нами по телефону.'
                  : 'To coordinate your service time and confirm work estimates, please contact us directly by phone.'}
              </p>

              {/* Direct Phone Action Row */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw)}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-[#D9232E] hover:bg-[#E63540] rounded transition-colors duration-150 inline-flex items-center gap-2.5 whitespace-nowrap shrink-0"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>
                    {lang === 'ru' ? 'Позвонить в автосервис' : 'Call Auto Service'}
                  </span>
                </a>

                <a
                  href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.serviceSecondaryRaw)}
                  className="px-5 py-3.5 text-sm font-medium text-[#F4F4F6] bg-[#181A20] hover:bg-[#22252E] border border-white/10 rounded transition-colors duration-150 inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <PhoneCall className="w-4 h-4 text-[#D9232E]" />
                  <span className="font-mono-tech">
                    {VERIFIED_BUSINESS_INFO.phones.serviceSecondary}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic 16:9 / Stretch Automotive Photography */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[340px] lg:min-h-[480px] rounded overflow-hidden border border-white/10 flex-1">
              <ResilientImage
                src={IMAGE_ASSETS.heroBay}
                alt={
                  lang === 'ru'
                    ? 'Слесарный и диагностический пост автосервиса Рай-Сервис в Мытищах'
                    : 'RAI SERVICE diagnostic and hydraulic lift bay in Mytishchi'
                }
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              {/* Measured Contrast Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Bottom Editorial Caption over Scrim */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-[#A0A4B0] mb-1">
                    {lang === 'ru'
                      ? 'Производственный комплекс · Мытищи, ул. Карла Маркса, 12 стр. 2'
                      : 'Service Facility · Karl Marx St., 12 bldg. 2, Mytishchi'}
                  </p>
                  <p className="font-display text-xl text-white font-semibold tracking-tight">
                    {lang === 'ru'
                      ? 'Прямой диалог с мастером и доступ владельца к подъемнику'
                      : 'Direct Technician Dialogue & Owner Access to the Service Lift'}
                  </p>
                </div>
                <span className="font-mono-tech text-xs text-[#F4F4F6] shrink-0">
                  09:00 – 19:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Verified Operations Strip Below Hero */}
        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded bg-[#121317] border border-white/10">
            <p className="text-xs text-[#A0A4B0] mb-1.5">
              {lang === 'ru' ? '01. Адрес техцентра' : '01. Facility Location'}
            </p>
            <p className="text-sm font-semibold text-[#F4F4F6] mb-1">
              {VERIFIED_BUSINESS_INFO.address[lang]}
            </p>
            <p className="text-xs text-[#A0A4B0]">
              {VERIFIED_BUSINESS_INFO.landmark[lang]}
            </p>
          </div>

          <div className="p-5 rounded bg-[#121317] border border-white/10">
            <p className="text-xs text-[#A0A4B0] mb-1.5">
              {lang === 'ru' ? '02. Режим работы' : '02. Operating Hours'}
            </p>
            <p className="text-sm font-semibold text-[#F4F4F6] font-mono-tech mb-1">
              {VERIFIED_BUSINESS_INFO.hours[lang]}
            </p>
            <p className="text-xs text-[#A0A4B0]">
              {lang === 'ru'
                ? 'Слесарный цех, диагностика и автомойка'
                : 'Mechanical workshop, diagnostics & car wash'}
            </p>
          </div>

          <div className="p-5 rounded bg-[#121317] border border-white/10">
            <p className="text-xs text-[#A0A4B0] mb-1.5">
              {lang === 'ru' ? '03. Телефоны автосервиса' : '03. Auto Service Phones'}
            </p>
            <div className="space-y-0.5 font-mono-tech text-sm font-semibold text-[#F4F4F6]">
              <a
                href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw)}
                className="block hover:text-[#D9232E] transition-colors"
              >
                {VERIFIED_BUSINESS_INFO.phones.servicePrimary}
              </a>
              <a
                href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.serviceSecondaryRaw)}
                className="block hover:text-[#D9232E] transition-colors"
              >
                {VERIFIED_BUSINESS_INFO.phones.serviceSecondary}
              </a>
            </div>
          </div>

          <div className="p-5 rounded bg-[#121317] border border-white/10">
            <p className="text-xs text-[#A0A4B0] mb-1.5">
              {lang === 'ru'
                ? '04. Автомойка и химчистка'
                : '04. Car Wash & Detailing'}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#F4F4F6] font-mono-tech hover:text-[#D9232E] transition-colors inline-flex items-center gap-1.5 mb-1"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D9232E]" />
              <span>{VERIFIED_BUSINESS_INFO.phones.carWashWhatsapp}</span>
            </a>
            <p className="text-xs text-[#A0A4B0]">
              {lang === 'ru'
                ? 'Связь с автомойкой через WhatsApp'
                : 'Contact Car Wash via WhatsApp'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
