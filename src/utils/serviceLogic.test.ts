import test from 'node:test';
import assert from 'node:assert/strict';
import { SERVICE_ITEMS, VERIFIED_BUSINESS_INFO } from '../data/raiServiceData';
import {
  buildCarWashWhatsAppUrl,
  buildTelHref,
  filterServicesByCategory,
} from './serviceLogic';

test('filterServicesByCategory returns all 8 verified services when category is all', () => {
  const all = filterServicesByCategory(SERVICE_ITEMS, 'all');
  assert.equal(all.length, 8);
});

test('filterServicesByCategory filters by category and search query accurately', () => {
  const diagnostics = filterServicesByCategory(SERVICE_ITEMS, 'diagnostics');
  assert.equal(diagnostics.length, 2);
  assert.ok(diagnostics.some((s) => s.id === 'chip-tuning-ecu'));

  const dpfSearch = filterServicesByCategory(SERVICE_ITEMS, 'all', 'DPF');
  assert.equal(dpfSearch.length, 1);
  assert.equal(dpfSearch[0].id, 'chip-tuning-ecu');
});

test('buildTelHref formats verified phone numbers as valid tel: links', () => {
  assert.equal(
    buildTelHref(VERIFIED_BUSINESS_INFO.phones.servicePrimaryRaw),
    'tel:+74995080220'
  );
  assert.equal(
    buildTelHref(VERIFIED_BUSINESS_INFO.phones.serviceSecondaryRaw),
    'tel:+79255062315'
  );
});

test('buildCarWashWhatsAppUrl targets the verified WhatsApp number +7 (903) 105-19-87', () => {
  const url = buildCarWashWhatsAppUrl('ru');
  assert.ok(
    url.startsWith(
      `https://wa.me/${VERIFIED_BUSINESS_INFO.phones.carWashWhatsappRaw}?text=`
    )
  );
  assert.ok(decodeURIComponent(url).includes('Рай-Сервис'));
});
