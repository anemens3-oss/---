import React, { useState } from 'react';
import { PhoneCall, MessageSquare, Search, ArrowUpRight } from 'lucide-react';
import {
  Language,
  SERVICE_ITEMS,
  ServiceCategory,
  VERIFIED_BUSINESS_INFO,
} from '../data/raiServiceData';
import {
  buildCarWashWhatsAppUrl,
  buildTelHref,
  filterServicesByCategory,
} from '../utils/serviceLogic';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ServiceCategory; label: { ru: string; en: string } }[] = [
    {
      id: 'all',
      label: { ru: 'Все направления (8)', en: 'All Disciplines (8)' },
    },
    {
      id: 'mechanical',
      label: { ru: 'ДВС, КПП и плановое ТО', en: 'Powertrain & Maintenance' },
    },
    {
      id: 'diagnostics',
      label: { ru: 'Диагностика и чип-тюнинг', en: 'Diagnostics & ECU Tuning' },
    },
    {
      id: 'chassis',
      label: { ru: 'Ходовая, сход-развал и шины', en: 'Chassis, Alignment & Tires' },
    },
    {
      id: 'body_wash',
      label: { ru: 'Кузовной цех и Автомойка', en: 'Body Shop & Car Wash' },
    },
  ];

  const filteredServices = filterServicesByCategory(
    SERVICE_ITEMS,
    activeCategory,
    searchQuery
  );

  const whatsappUrl = buildCarWashWhatsAppUrl(lang);

  return (
    <section id="services" className="scroll-mt-20 py-16 lg:py-24 border-b border-white/10">
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#A0A4B0] mb-3">
              <span>
                {lang === 'ru'
                  ? 'Производственные цеха «Рай-Сервис»'
                  : 'RAI SERVICE Engineering Divisions'}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {lang === 'ru'
                  ? 'Европейские, азиатские и американские марки'
                  : 'European, Asian & American Marques'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight headline-balance">
              {lang === 'ru'
                ? 'Технический регламент и направления работ'
                : 'Technical Capabilities & Service Disciplines'}
            </h2>
          </div>

          <p className="text-sm text-[#A0A4B0] max-w-[52ch]">
            {lang === 'ru'
              ? 'Чтобы согласовать время обслуживания и уточнить стоимость работ, свяжитесь с нами по телефону.'
              : 'To coordinate your service time and confirm work estimates, please contact us directly by phone.'}
          </p>
        </div>

        {/* Interactive Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Interactive Segmented Category Filter */}
          <div
            role="group"
            aria-label={
              lang === 'ru'
                ? 'Фильтр направлений автосервиса'
                : 'Filter service disciplines'
            }
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#121317] border border-white/10 rounded"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#D9232E] text-white'
                      : 'text-[#A0A4B0] hover:text-[#F4F4F6] hover:bg-white/5'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <label htmlFor="service-search" className="sr-only">
              {lang === 'ru' ? 'Поиск по услугам' : 'Search services'}
            </label>
            <Search className="w-4 h-4 text-[#A0A4B0] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="service-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ru'
                  ? 'Поиск: ДВС, АКПП, EGR, сход-развал, мойка...'
                  : 'Search: engine, gearbox, EGR, alignment, wash...'
              }
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#121317] border border-white/10 rounded text-[#F4F4F6] placeholder-[#6C707E] focus:outline-none focus:border-[#D9232E] transition-colors"
            />
          </div>
        </div>

        {/* Empty State if search matches nothing */}
        {filteredServices.length === 0 ? (
          <div className="p-12 rounded bg-[#121317] border border-white/10 text-center">
            <p className="font-display text-xl text-[#F4F4F6] mb-2">
              {lang === 'ru'
                ? 'По вашему запросу направление не найдено'
                : 'No matching service discipline found'}
            </p>
            <p className="text-sm text-[#A0A4B0] mb-6">
              {lang === 'ru'
                ? 'Сбросьте фильтр или свяжитесь с мастером-приемщиком по телефону +7 (499) 508-02-20 для консультации.'
                : 'Reset the filter or call our service advisor at +7 (499) 508-02-20 for direct consultation.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#D9232E] hover:bg-[#E63540] rounded transition-colors cursor-pointer"
            >
              {lang === 'ru' ? 'Показать все услуги' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          /* Asymmetric Bento Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {filteredServices.map((service) => {
              let colSpanClass = 'lg:col-span-6';
              if (activeCategory === 'all' && !searchQuery.trim()) {
                if (
                  service.id === 'powertrain-overhaul' ||
                  service.id === 'chassis-alignment'
                ) {
                  colSpanClass = 'lg:col-span-7';
                } else if (
                  service.id === 'diagnostics-electronics' ||
                  service.id === 'chip-tuning-ecu'
                ) {
                  colSpanClass = 'lg:col-span-5';
                } else if (
                  service.id === 'scheduled-maintenance-parts' ||
                  service.id === 'tire-service' ||
                  service.id === 'bodywork-repair'
                ) {
                  colSpanClass = 'lg:col-span-4';
                } else if (service.id === 'car-wash-detailing') {
                  colSpanClass = 'lg:col-span-12';
                }
              }

              return (
                <article
                  key={service.id}
                  className={`${colSpanClass} rounded bg-[#121317] border border-white/10 hover:border-white/25 transition-colors duration-150 flex flex-col justify-between overflow-hidden`}
                >
                  <div>
                    {service.image && (
                      <div className="relative h-56 sm:h-64 w-full border-b border-white/10">
                        <ResilientImage
                          src={service.image}
                          alt={service.title[lang]}
                          containerClassName="w-full h-full"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-black/25 to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-xs text-[#F4F4F6]">
                          <span>{service.subtitle[lang]}</span>
                          <span className="font-mono-tech text-[#A0A4B0]">
                            {service.bookingChannel === 'whatsapp_wash'
                              ? 'WhatsApp · +7 (903) 105-19-87'
                              : '+7 (499) 508-02-20'}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-6 sm:p-8">
                      {!service.image && (
                        <div className="flex items-center justify-between gap-4 text-xs text-[#A0A4B0] mb-3">
                          <span>{service.subtitle[lang]}</span>
                          <span className="font-mono-tech shrink-0">
                            {service.bookingChannel === 'whatsapp_wash'
                              ? 'WhatsApp'
                              : '+7 (499) 508-02-20'}
                          </span>
                        </div>
                      )}

                      <h3 className="font-display text-2xl font-bold text-[#F4F4F6] tracking-tight mb-3 headline-balance">
                        {service.title[lang]}
                      </h3>

                      <p className="text-sm text-[#A0A4B0] leading-relaxed mb-6">
                        {service.description[lang]}
                      </p>

                      {/* Clean Technical Scope List */}
                      <ul className="space-y-2 border-t border-white/10 pt-4">
                        {service.operations[lang].map((op) => (
                          <li
                            key={op}
                            className="text-xs sm:text-sm text-[#F4F4F6] flex items-start gap-2.5"
                          >
                            <span
                              aria-hidden="true"
                              className="text-[#D9232E] font-mono-tech select-none"
                            >
                              /
                            </span>
                            <span>{op}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Action: Direct Phone or Verified WhatsApp */}
                  <div className="px-6 sm:px-8 py-4 bg-[#181A20]/70 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#A0A4B0]">
                      {service.bookingChannel === 'whatsapp_wash'
                        ? lang === 'ru'
                          ? 'Прямая связь с автомойкой в WhatsApp'
                          : 'Direct WhatsApp Car Wash contact'
                        : lang === 'ru'
                        ? 'Согласование времени и стоимости по телефону'
                        : 'Coordinate time & estimate by phone'}
                    </span>

                    {service.bookingChannel === 'whatsapp_wash' ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs font-semibold rounded bg-[#D9232E] hover:bg-[#E63540] text-white transition-colors duration-150 inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>
                          {lang === 'ru'
                            ? 'Написать в WhatsApp'
                            : 'Contact via WhatsApp'}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <a
                        href={buildTelHref(
                          VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw
                        )}
                        className="px-4 py-2 text-xs font-semibold rounded bg-[#121317] hover:bg-[#D9232E] text-[#F4F4F6] hover:text-white border border-white/15 hover:border-[#D9232E] transition-colors duration-150 inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-[#D9232E] group-hover:text-white" />
                        <span>
                          {lang === 'ru'
                            ? 'Позвонить в автосервис'
                            : 'Call Auto Service'}
                        </span>
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
