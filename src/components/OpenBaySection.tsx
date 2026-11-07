import React, { useState } from 'react';
import { PhoneCall, Wrench, CheckCircle2 } from 'lucide-react';
import {
  IMAGE_ASSETS,
  Language,
  VERIFIED_BUSINESS_INFO,
} from '../data/raiServiceData';
import { buildTelHref } from '../utils/serviceLogic';
import { ResilientImage } from './ResilientImage';

interface OpenBaySectionProps {
  lang: Language;
}

export const OpenBaySection: React.FC<OpenBaySectionProps> = ({ lang }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const protocolStages = [
    {
      step: '01',
      title: {
        ru: '01. Осмотр на подъемнике вместе с мастером',
        en: '01. Direct Underbody Inspection at the Lift',
      },
      summary: {
        ru: 'Владелец автомобиля приглашается в ремонтную зону сразу после постановки машины на пост. Мастер наглядно демонстрирует состояние узлов подвески, течи, люфты или коды ошибок ЭБУ.',
        en: 'Vehicle owners are invited into the repair bay as soon as the car is positioned on the lift. The technician physically demonstrates worn components, fluid leaks, play, or live ECU fault telemetry.',
      },
      deliverable: {
        ru: 'Наглядное подтверждение каждой рекомендации без закрытых дверей.',
        en: 'Visual verification of every mechanical finding—no closed doors.',
      },
    },
    {
      step: '02',
      title: {
        ru: '02. Прозрачный подбор автозапчастей и расходников',
        en: '02. Transparent Parts & Consumables Selection',
      },
      summary: {
        ru: 'До начала слесарных или агрегатных работ согласовывается перечень необходимых запчастей и технических жидкостей. Доступен заказ комплектующих непосредственно через техцентр.',
        en: 'Before mechanical work begins, replacement parts and technical fluids are agreed upon directly with the owner. Parts ordering is handled in-house for foreign marques.',
      },
      deliverable: {
        ru: 'Только согласованные позиции и понятный регламент обслуживания.',
        en: 'Strictly approved parts and clear maintenance procedures.',
      },
    },
    {
      step: '03',
      title: {
        ru: '03. Контроль хода ремонта и итоговая проверка',
        en: '03. Live Repair Oversight & Final Handover',
      },
      summary: {
        ru: 'При ремонте ДВС, трансмиссии, регулировке сход-развала или чип-тюнинге клиент может лично наблюдать за соблюдением технологии в ремзоне на ул. Карла Маркса, 12 стр. 2.',
        en: 'During engine work, gearbox servicing, 3D wheel alignment, or ECU calibration, the owner can observe technical execution firsthand at Karl Marx St., 12 bldg. 2.',
      },
      deliverable: {
        ru: 'Честность и прозрачность, закрепленные как правило работы «Рай-Сервис».',
        en: 'Honesty and transparency established as RAI SERVICE’s core operating rule.',
      },
    },
  ];

  return (
    <section
      id="open-bay"
      className="scroll-mt-20 py-16 lg:py-24 bg-[#121317] border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Editorial Manifesto & Interactive Protocol Steps */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#A0A4B0] mb-3">
                <span>
                  {lang === 'ru'
                    ? 'Ключевой принцип работы · raiservis.ru'
                    : 'Core Operating Principle · raiservis.ru'}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  {lang === 'ru'
                    ? 'Прямой доступ владельца в цех'
                    : 'Direct Owner Access to the Workshop'}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight headline-balance mb-5">
                {lang === 'ru'
                  ? 'Открытая ремонтная зона: вы видите то же, что видит механик'
                  : 'The Open Repair Bay: You See Everything the Technician Sees'}
              </h2>

              <blockquote className="p-5 rounded bg-[#0A0A0C] border border-white/10 text-sm sm:text-base text-[#F4F4F6] leading-relaxed mb-8">
                «Клиенты могут присутствовать в ремзоне при проведении работ, что
                подтверждает честность и прозрачность при выполнении ремонта.»
                <footer className="mt-2 text-xs text-[#A0A4B0]">
                  —{' '}
                  {lang === 'ru'
                    ? 'Официальное правило техцентра «Рай-Сервис» (Мытищи)'
                    : 'Official policy of RAI SERVICE Technical Center (Mytishchi)'}
                </footer>
              </blockquote>

              {/* Interactive Stage Selector Buttons */}
              <div
                role="tablist"
                aria-label={
                  lang === 'ru'
                    ? 'Этапы работы в открытой ремзоне'
                    : 'Open repair bay workflow stages'
                }
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6"
              >
                {protocolStages.map((item, idx) => {
                  const isActive = activeStage === idx;
                  return (
                    <button
                      key={item.step}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveStage(idx)}
                      className={`p-3.5 text-left rounded border transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#181A20] border-[#D9232E] text-[#F4F4F6]'
                          : 'bg-[#0A0A0C] border-white/10 text-[#A0A4B0] hover:text-[#F4F4F6]'
                      }`}
                    >
                      <span className="font-mono-tech text-xs text-[#D9232E] block mb-1">
                        {lang === 'ru'
                          ? `Этап ${item.step}`
                          : `Stage ${item.step}`}
                      </span>
                      <span className="text-xs font-semibold line-clamp-1">
                        {item.title[lang].replace(/^\d+\.\s*/, '')}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Detail Box */}
              <div className="p-6 rounded bg-[#0A0A0C] border border-white/10 mb-8">
                <h3 className="font-display text-xl font-bold text-[#F4F4F6] mb-2">
                  {protocolStages[activeStage].title[lang]}
                </h3>
                <p className="text-sm text-[#A0A4B0] leading-relaxed mb-4">
                  {protocolStages[activeStage].summary[lang]}
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#F4F4F6]">
                  <CheckCircle2 className="w-4 h-4 text-[#D9232E] shrink-0" />
                  <span>{protocolStages[activeStage].deliverable[lang]}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="text-xs text-[#A0A4B0]">
                {lang === 'ru'
                  ? 'Мультибренд: европейские, азиатские и американские автомобили'
                  : 'Multi-brand: European, Asian, and American vehicles'}
              </div>
              <a
                href={buildTelHref(VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw)}
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#D9232E] hover:bg-[#E63540] rounded transition-colors inline-flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <PhoneCall className="w-4 h-4" />
                <span>
                  {lang === 'ru'
                    ? 'Позвонить в автосервис'
                    : 'Call Auto Service'}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Documentation Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded overflow-hidden border border-white/10 flex-1 min-h-[280px]">
              <ResilientImage
                src={IMAGE_ASSETS.engineDetail}
                alt={
                  lang === 'ru'
                    ? 'Инструментальная диагностика и ремонт двигателей в Рай-Сервис'
                    : 'Instrumental engine diagnostics and repair at RAI SERVICE'
                }
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-xs text-[#A0A4B0] mb-1">
                  {lang === 'ru'
                    ? 'Агрегатный участок · Бензиновые и дизельные моторы'
                    : 'Powertrain Bay · Petrol & Diesel Engines'}
                </p>
                <p className="font-display text-lg text-white font-semibold">
                  {lang === 'ru'
                    ? 'Дефектовка ДВС, МКПП и АКПП с личным контролем владельца'
                    : 'Engine, Manual & Automatic Gearbox Inspection with Owner Oversight'}
                </p>
              </div>
            </div>

            <div className="p-6 rounded bg-[#0A0A0C] border border-white/10">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs text-[#A0A4B0]">
                  {lang === 'ru'
                    ? 'Специализация техцентра'
                    : 'Workshop Specialization'}
                </span>
                <Wrench className="w-4 h-4 text-[#D9232E]" />
              </div>
              <p className="text-sm text-[#F4F4F6] leading-relaxed mb-3">
                {VERIFIED_BUSINESS_INFO.specialization[lang]}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#A0A4B0] font-mono-tech">
                <span>ДВС</span>
                <span aria-hidden="true">·</span>
                <span>МКПП / АКПП</span>
                <span aria-hidden="true">·</span>
                <span>3D Сход-развал</span>
                <span aria-hidden="true">·</span>
                <span>EGR / DPF / Чип-тюнинг</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
