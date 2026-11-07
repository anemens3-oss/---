import {
  ServiceCategory,
  ServiceItem,
  VERIFIED_BUSINESS_INFO,
} from '../data/raiServiceData';

export function filterServicesByCategory(
  items: ServiceItem[],
  category: ServiceCategory,
  searchQuery = ''
): ServiceItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    const searchableText = [
      item.title.ru,
      item.title.en,
      item.subtitle.ru,
      item.subtitle.en,
      item.description.ru,
      item.description.en,
      ...item.operations.ru,
      ...item.operations.en,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function buildTelHref(rawPhone: string): string {
  const cleaned = rawPhone.replace(/[^\d+]/g, '');
  return `tel:${cleaned}`;
}

export function buildCarWashWhatsAppUrl(lang: 'ru' | 'en' = 'ru'): string {
  const message =
    lang === 'ru'
      ? 'Здравствуйте, Рай-Сервис! Хочу уточнить свободное время на автомойку / химчистку.'
      : 'Hello RAI SERVICE! I would like to check availability for the car wash / detailing studio.';

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${VERIFIED_BUSINESS_INFO.phones.carWashWhatsappRaw}?text=${encoded}`;
}
