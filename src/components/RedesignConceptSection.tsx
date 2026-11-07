import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  Language,
  REDESIGN_AUDIT_POINTS,
  VERIFIED_BUSINESS_INFO,
} from '../data/raiServiceData';

interface RedesignConceptSectionProps {
  lang: Language;
}

export const RedesignConceptSection: React.FC<RedesignConceptSectionProps> = ({
  lang,
}) => {
  return (
    <section
      id="redesign-concept"
      className="scroll-mt-20 py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-[1360px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#A0A4B0] mb-3">
              <span>
                {lang === 'ru'
                  ? 'Арт-дирекшн и предпроектное исследование'
                  : 'Art Direction & Pre-Build Research Brief'}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {lang === 'ru'
                  ? 'Независимая концепция редизайна'
                  : 'Independent Redesign Concept'}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F4F6] tracking-tight headline-balance">
              {lang === 'ru'
                ? 'Аналитика текущего сайта raiservis.ru и архитектура новой дизайн-системы'
                : 'Audit of Legacy raiservis.ru & New Automotive Editorial System'}
            </h2>
          </div>

          <a
            href={VERIFIED_BUSINESS_INFO.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#A0A4B0] hover:text-[#F4F4F6] underline underline-offset-4 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span>
              {lang === 'ru'
                ? 'Сравнить с текущим сайтом raiservis.ru'
                : 'Compare with live raiservis.ru'}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 3-Column Comparison of Legacy Weaknesses vs Editorial Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {REDESIGN_AUDIT_POINTS.map((point) => (
            <div
              key={point.index}
              className="p-6 sm:p-7 rounded bg-[#121317] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#A0A4B0] mb-4">
                  <span className="font-mono-tech text-[#D9232E]">
                    {point.index}
                  </span>
                  <span>
                    {lang === 'ru' ? 'Аудит и решение' : 'Audit & Resolution'}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F4F4F6] mb-4">
                  {point.title[lang]}
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded bg-[#0A0A0C] border border-white/10">
                    <p className="text-xs text-[#A0A4B0] mb-1">
                      {lang === 'ru'
                        ? 'Проблема старой версии (raiservis.ru):'
                        : 'Legacy Website Weakness (raiservis.ru):'}
                    </p>
                    <p className="text-xs sm:text-sm text-[#A0A4B0] leading-relaxed">
                      {point.legacyIssue[lang]}
                    </p>
                  </div>

                  <div className="p-4 rounded bg-[#181A20] border border-white/10">
                    <p className="text-xs text-[#F4F4F6] font-medium mb-1">
                      {lang === 'ru'
                        ? 'Решение в редизайн-концепте:'
                        : 'Editorial Redesign Solution:'}
                    </p>
                    <p className="text-xs sm:text-sm text-[#F4F4F6] leading-relaxed">
                      {point.editorialSolution[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Design System Specification Strip: Typography, Palette, Anti-Slop Discipline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded bg-[#121317] border border-white/10">
            <p className="text-xs text-[#A0A4B0] mb-2">
              {lang === 'ru' ? 'Типографика (Формула 2+1)' : 'Typography (2+1 System)'}
            </p>
            <p className="font-display text-xl font-bold text-[#F4F4F6] mb-2">
              Barlow Condensed · Plus Jakarta Sans · JetBrains Mono
            </p>
            <p className="text-xs text-[#A0A4B0] leading-relaxed">
              {lang === 'ru'
                ? 'Акцентный инженерный гротеск для заголовков, высокочитаемый геометрический гротеск для технических описаний и моноширинный шрифт с табличными цифрами для телефонов и графиков.'
                : 'Condensed athletic display face for headlines, geometric body prose for technical clarity, and tabular monospace numerals for phone lines and operating schedules.'}
            </p>
          </div>

          <div className="p-6 rounded bg-[#121317] border border-white/10">
            <p className="text-xs text-[#A0A4B0] mb-2">
              {lang === 'ru'
                ? 'Цветовая пропорция 60–30–10'
                : '60–30–10 Color Architecture'}
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#F4F4F6]">
                <span className="w-4 h-4 rounded-sm bg-[#0A0A0C] border border-white/20 inline-block" />
                <span>#0A0A0C</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#F4F4F6]">
                <span className="w-4 h-4 rounded-sm bg-[#121317] border border-white/20 inline-block" />
                <span>#121317</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#F4F4F6]">
                <span className="w-4 h-4 rounded-sm bg-[#D9232E] inline-block" />
                <span>#D9232E</span>
              </div>
            </div>
            <p className="text-xs text-[#A0A4B0] leading-relaxed">
              {lang === 'ru'
                ? '60% глубокий обсидиан, 30% графитовые структурные поверхности с тонкими линиями 1px, 10% калиброванный красный акцент суппортов и задней оптики.'
                : '60% deep obsidian canvas, 30% dark graphite surfaces with 1px hairline dividers, and 10% calibrated brake-caliper crimson for primary interactive actions.'}
            </p>
          </div>

          <div className="p-6 rounded bg-[#121317] border border-white/10">
            <p className="text-xs text-[#A0A4B0] mb-2">
              {lang === 'ru'
                ? 'Достоверность данных (Strict Fact Policy)'
                : 'Strict Verified Data Policy'}
            </p>
            <p className="font-display text-xl font-bold text-[#F4F4F6] mb-2">
              {lang === 'ru'
                ? '0 вымышленных отзывов, цен и цифр'
                : 'Zero Fabricated Reviews, Prices or Stats'}
            </p>
            <p className="text-xs text-[#A0A4B0] leading-relaxed">
              {lang === 'ru'
                ? 'В проекте использованы исключительно подтвержденные контакты, адрес в Мытищах (ул. Карла Маркса, 12 стр. 2), график 09:00–19:00 и реальный перечень услуг «Рай-Сервис».'
                : 'Built strictly with verified RAI SERVICE contacts, Mytishchi address (Karl Marx St. 12 bldg. 2), 09:00–19:00 daily hours, and authentic service disciplines.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
