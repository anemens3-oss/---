import React from 'react';
import {
  PhoneCall,
  MessageSquare,
  MapPin,
  Clock,
  ArrowUpRight,
  Navigation,
  Info,
} from 'lucide-react';
import { Language, VERIFIED_BUSINESS_INFO } from '../data/raiServiceData';
import { buildCarWashWhatsAppUrl, buildTelHref } from '../utils/serviceLogic';

interface BookingAndContactsSectionProps {
  lang: Language;
}

export const BookingAndContactsSection: React.FC<
  BookingAndContactsSectionProps
> = ({ lang }) => {
  const whatsappUrl = buildCarWashWhatsAppUrl(lang);
  const yandexRouteUrl =
    'https://yandex.ru/maps/?text=Мытищи,+улица+Карла+Маркса,+12с2';

  return (
    <section
      id="contacts"
      className="scroll-mt-20 py-16 lg:py-24 bg-[#121317] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#A0A4B0] mb-3">
              <span>
                {lang === 'ru'
                  ? 'Прямая связь с техцентром «Рай-Сервис»'
                  : 'Direct Communication with RAI SERVICE'}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono-tech">
                {VERIFIED_BUSINESS_INFO.hours[lang]}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight headline-balance">
              {lang === 'ru'
                ? 'Контакты, телефоны цехов и схема проезда'
                : 'Contacts, Workshop Lines & Directions'}
            </h2>
          </div>

          <a
            href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw)}
            className="px-6 py-3.5 text-sm font-semibold text-white bg-[#D9232E] hover:bg-[#E63540] rounded transition-colors duration-150 inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <PhoneCall className="w-4 h-4" />
            <span>
              {lang === 'ru' ? 'Позвонить в автосервис' : 'Call Auto Service'}
            </span>
          </a>
        </div>

        {/* Mandatory Information Notice Box */}
        <div className="mb-10 p-5 sm:p-6 rounded bg-[#0A0A0C] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <Info className="w-5 h-5 text-[#D9232E] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base font-medium text-[#F4F4F6] leading-relaxed">
              {lang === 'ru'
                ? 'Чтобы согласовать время обслуживания и уточнить стоимость работ, свяжитесь с нами по телефону.'
                : 'To coordinate your service time and confirm work estimates, please contact us directly by phone.'}
            </p>
          </div>
          <span className="font-mono-tech text-xs text-[#A0A4B0] whitespace-nowrap shrink-0">
            {VERIFIED_BUSINESS_INFO.hours[lang]}
          </span>
        </div>

        {/* Main 12-Column Contact & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Direct Phone Lines & Car Wash WhatsApp Channel */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Auto Service Telephone Dispatch Card */}
            <div className="p-6 sm:p-8 rounded bg-[#0A0A0C] border border-white/10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-[#A0A4B0] mb-3">
                  <span>
                    {lang === 'ru'
                      ? 'Слесарный цех · Диагностика · Чип-тюнинг · 3D сход-развал · Кузовной ремонт'
                      : 'Mechanical Workshop · Diagnostics · ECU Calibration · 3D Alignment · Body Shop'}
                  </span>
                  <PhoneCall className="w-4 h-4 text-[#D9232E] shrink-0" />
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F4F6] mb-3">
                  {lang === 'ru'
                    ? 'Телефоны автосервиса и подбора запчастей'
                    : 'Auto Service & Parts Telephone Lines'}
                </h3>

                <p className="text-sm text-[#A0A4B0] leading-relaxed mb-6">
                  {lang === 'ru'
                    ? 'Прямой разговор с мастером-приемщиком: консультация по симптомам неисправности, проверка наличия свободного подъемника и подбор запчастей.'
                    : 'Speak directly with our service advisor to discuss symptoms, check immediate lift availability, and source replacement parts.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <a
                    href={buildTelHref(
                      VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw
                    )}
                    className="p-5 rounded bg-[#121317] hover:bg-[#181A20] border border-white/10 hover:border-[#D9232E] transition-colors group block"
                  >
                    <span className="block text-xs text-[#A0A4B0] mb-1">
                      {lang === 'ru'
                        ? 'Основной городской номер'
                        : 'Primary Landline'}
                    </span>
                    <span className="font-mono-tech text-xl font-bold text-[#F4F4F6] group-hover:text-[#D9232E] transition-colors block">
                      {VERIFIED_BUSINESS_INFO.phones.servicePrimary}
                    </span>
                  </a>

                  <a
                    href={buildTelHref(
                      VERIFIED_BUSINESS_INFO.phones.serviceSecondaryRaw
                    )}
                    className="p-5 rounded bg-[#121317] hover:bg-[#181A20] border border-white/10 hover:border-[#D9232E] transition-colors group block"
                  >
                    <span className="block text-xs text-[#A0A4B0] mb-1">
                      {lang === 'ru'
                        ? 'Мобильный номер техцентра'
                        : 'Workshop Mobile Line'}
                    </span>
                    <span className="font-mono-tech text-xl font-bold text-[#F4F4F6] group-hover:text-[#D9232E] transition-colors block">
                      {VERIFIED_BUSINESS_INFO.phones.serviceSecondary}
                    </span>
                  </a>
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={buildTelHref(
                    VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw
                  )}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#D9232E] hover:bg-[#E63540] rounded transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>
                    {lang === 'ru'
                      ? 'Позвонить в автосервис'
                      : 'Call Auto Service'}
                  </span>
                </a>

                <span className="text-xs text-[#A0A4B0]">
                  {lang === 'ru'
                    ? 'Присутствие клиента в ремзоне приветствуется'
                    : 'Client presence in the repair bay is welcome'}
                </span>
              </div>
            </div>

            {/* Verified Car Wash WhatsApp Card */}
            <div className="p-6 sm:p-8 rounded bg-[#0A0A0C] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2 max-w-[54ch]">
                <div className="flex items-center gap-2 text-xs text-[#A0A4B0]">
                  <span>
                    {lang === 'ru'
                      ? 'Отдельная линия автомойки и химчистки'
                      : 'Dedicated Car Wash & Detailing Line'}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tech text-[#F4F4F6]">WhatsApp</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#F4F4F6]">
                  {lang === 'ru'
                    ? 'Автомойка и химчистка салона'
                    : 'Car Wash & Interior Detailing'}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A4B0] leading-relaxed">
                  {lang === 'ru'
                    ? 'По официальному регламенту «Рай-Сервис» связь с автомойкой и согласование времени мойки или химчистки осуществляется через мессенджер WhatsApp по подтвержденному номеру:'
                    : 'Per official RAI SERVICE procedure, Car Wash and Interior Detailing inquiries are handled directly via WhatsApp at the verified number:'}{' '}
                  <span className="font-mono-tech text-[#F4F4F6] font-semibold">
                    {VERIFIED_BUSINESS_INFO.phones.carWashWhatsapp}
                  </span>
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-[#F4F4F6] bg-[#181A20] hover:bg-[#D9232E] hover:text-white border border-white/15 hover:border-[#D9232E] rounded transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0 self-start sm:self-center"
              >
                <MessageSquare className="w-4 h-4 text-[#D9232E] group-hover:text-white" />
                <span>
                  {lang === 'ru'
                    ? 'Написать в WhatsApp автомойки'
                    : 'Message Car Wash on WhatsApp'}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Verified Mytishchi Address, Schedule & Route Card */}
          <div className="lg:col-span-5 flex">
            <div className="p-6 sm:p-8 rounded bg-[#0A0A0C] border border-white/10 w-full flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-[#A0A4B0] mb-1">
                    {lang === 'ru'
                      ? 'Координаты техцентра и автомойки'
                      : 'Technical Center & Car Wash Coordinates'}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F4F6]">
                    {VERIFIED_BUSINESS_INFO.brandName[lang]} — Мытищи
                  </h3>
                </div>

                <div className="space-y-5 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#D9232E] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A0A4B0] mb-0.5">
                        {lang === 'ru' ? 'Точный адрес:' : 'Verified Address:'}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-[#F4F4F6]">
                        {VERIFIED_BUSINESS_INFO.city[lang]},{' '}
                        {VERIFIED_BUSINESS_INFO.address[lang]}
                      </p>
                      <p className="text-xs text-[#A0A4B0] mt-1">
                        {VERIFIED_BUSINESS_INFO.landmark[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#D9232E] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A0A4B0] mb-0.5">
                        {lang === 'ru' ? 'Часы работы:' : 'Working Hours:'}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-[#F4F4F6] font-mono-tech">
                        {VERIFIED_BUSINESS_INFO.hours[lang]}
                      </p>
                      <p className="text-xs text-[#A0A4B0] mt-0.5">
                        {lang === 'ru'
                          ? 'Без выходных (слесарный цех, диагностика, автомойка)'
                          : 'Open 7 days a week (workshop, diagnostics, car wash)'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Access Route Details */}
                <div className="p-5 rounded bg-[#121317] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#A0A4B0]">
                    <span>
                      {lang === 'ru'
                        ? 'Ориентиры для въезда'
                        : 'Arrival Landmarks'}
                    </span>
                    <span className="font-mono-tech">мкр. им. В.М. Колонцова</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F4F4F6] leading-relaxed">
                    {lang === 'ru'
                      ? 'Въезд со стороны улицы Карла Маркса (дом 12, строение 2; ориентир по навигатору — ул. Карла Маркса, 16). Удобный подъезд с Ярославского шоссе и со стороны станции Мытищи.'
                      : 'Entrance from Karl Marx Street (12 bldg. 2; navigation landmark — Karl Marx St., 16). Convenient access from Yaroslavskoye Highway and Mytishchi station.'}
                  </p>
                </div>
              </div>

              {/* Direct Route Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={yandexRouteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#F4F4F6] bg-[#181A20] hover:bg-[#22252E] border border-white/15 rounded transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-[#D9232E]" />
                  <span>
                    {lang === 'ru'
                      ? 'Построить маршрут в Яндекс.Картах'
                      : 'Open Route in Yandex Maps'}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#A0A4B0]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
