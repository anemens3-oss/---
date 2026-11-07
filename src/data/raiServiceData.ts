import heroBay from '../assets/images/hero_automotive_bay_1794051848637.jpg';
import engineDetail from '../assets/images/engine_diagnostics_detail_1794051851219.jpg';
import wheelAlignment from '../assets/images/wheel_alignment_chassis_1794051851891.jpg';
import detailingStudio from '../assets/images/detailing_wash_studio_1794051853961.jpg';

export type Language = 'ru' | 'en';

export type ServiceCategory =
  | 'all'
  | 'mechanical'
  | 'diagnostics'
  | 'chassis'
  | 'body_wash';

export interface ServiceItem {
  id: string;
  index: string;
  category: Exclude<ServiceCategory, 'all'>;
  featured?: boolean;
  image?: string;
  title: {
    ru: string;
    en: string;
  };
  subtitle: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  operations: {
    ru: string[];
    en: string[];
  };
  bookingChannel: 'service_desk' | 'whatsapp_wash';
}

export interface AuditPoint {
  index: string;
  title: { ru: string; en: string };
  legacyIssue: { ru: string; en: string };
  editorialSolution: { ru: string; en: string };
}

export const VERIFIED_BUSINESS_INFO = {
  brandName: {
    ru: 'РАЙ СЕРВИС',
    en: 'RAI SERVICE',
  },
  officialUrl: 'https://raiservis.ru/',
  city: {
    ru: 'Московская область, г. Мытищи',
    en: 'Mytishchi, Moscow Region, Russia',
  },
  address: {
    ru: 'мкр. им. В.М. Колонцова, ул. Карла Маркса, 12 стр. 2',
    en: 'Karl Marx St., 12 bldg. 2 (V.M. Kolontsov Microdistrict)',
  },
  landmark: {
    ru: 'Ориентир — ул. Карла Маркса, 16',
    en: 'Landmark — Karl Marx St., 16',
  },
  hours: {
    ru: 'Ежедневно, 09:00 – 19:00',
    en: 'Daily, 09:00 – 19:00',
  },
  phones: {
    servicePrimary: '+7 (499) 508-02-20',
    servicePrimaryRaw: '+74995080220',
    serviceSecondary: '+7 (925) 506-23-15',
    serviceSecondaryRaw: '+79255062315',
    carWashWhatsapp: '+7 (903) 105-19-87',
    carWashWhatsappRaw: '79031051987',
  },
  corePolicy: {
    ru: 'Клиенты могут присутствовать в ремонтной зоне при проведении работ — полная прозрачность дефектовки и каждого этапа ремонта.',
    en: 'Clients are welcome inside the repair bay during service — complete mechanical transparency at every stage of inspection and repair.',
  },
  specialization: {
    ru: 'Мультибрендовый технический центр: обслуживание и ремонт европейских, азиатских и американских автомобилей с бензиновыми и дизельными двигателями.',
    en: 'Multi-brand technical center: servicing and repairing European, Asian, and American vehicles with petrol and diesel powertrains.',
  },
} as const;

export const IMAGE_ASSETS = {
  heroBay,
  engineDetail,
  wheelAlignment,
  detailingStudio,
} as const;

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'powertrain-overhaul',
    index: '01',
    category: 'mechanical',
    featured: true,
    image: IMAGE_ASSETS.engineDetail,
    title: {
      ru: '01. Ремонт двигателей и трансмиссии',
      en: '01. Powertrain & Transmission Overhaul',
    },
    subtitle: {
      ru: 'Бензиновые и дизельные ДВС · МКПП · АКПП',
      en: 'Petrol & Diesel Engines · Manual & Automatic Transmissions',
    },
    description: {
      ru: 'Инструментальная дефектовка, текущий и капитальный ремонт бензиновых и дизельных силовых агрегатов, а также обслуживание и восстановление механических и автоматических коробок передач.',
      en: 'Precision mechanical inspection, routine and complete overhaul of petrol and diesel engines, alongside servicing and rebuilding of manual and automatic transmissions.',
    },
    operations: {
      ru: [
        'Капитальный и локальный ремонт бензиновых и дизельных ДВС',
        'Ремонт и обслуживание МКПП и АКПП',
        'Замена приводов ГРМ, цепей, ремней и уплотнений',
        'Дефектовка агрегатов в присутствии владельца автомобиля',
      ],
      en: [
        'Complete and targeted overhaul of petrol and diesel engines',
        'Servicing and rebuilding of manual and automatic gearboxes',
        'Timing chains, belts, gaskets, and valvetrain service',
        'Direct component inspection with the vehicle owner in the bay',
      ],
    },
    bookingChannel: 'service_desk',
  },
  {
    id: 'diagnostics-electronics',
    index: '02',
    category: 'diagnostics',
    title: {
      ru: '02. Компьютерная диагностика и автоэлектрика',
      en: '02. Computer Diagnostics & Auto Electrics',
    },
    subtitle: {
      ru: 'Электронные блоки управления · Бортовые сети',
      en: 'Electronic Control Units · On-Board Electrical Systems',
    },
    description: {
      ru: 'Глубокое чтение параметров электронных систем управления, поиск скрытых неисправностей электропроводки, восстановление жгутов, датчиков и исполнительных механизмов.',
      en: 'In-depth telemetry reading across electronic control modules, fault tracing in wiring harnesses, and restoration of sensors and actuators.',
    },
    operations: {
      ru: [
        'Многоуровневая компьютерная диагностика электронных блоков',
        'Поиск утечек тока, коротких замыканий и обрывов цепи',
        'Проверка и ремонт генераторов, стартеров и систем зажигания',
      ],
      en: [
        'Multi-system computer diagnostics across vehicle ECUs',
        'Tracing parasitic draws, short circuits, and harness faults',
        'Testing and repair of alternators, starters, and ignition systems',
      ],
    },
    bookingChannel: 'service_desk',
  },
  {
    id: 'chip-tuning-ecu',
    index: '03',
    category: 'diagnostics',
    title: {
      ru: '03. Чип-тюнинг и программная калибровка ЭБУ',
      en: '03. Chip Tuning & ECU Calibration',
    },
    subtitle: {
      ru: 'Калибровка прошивок · Системы выпуска · DPF / EGR',
      en: 'Firmware Calibration · Exhaust Aftertreatment · DPF / EGR',
    },
    description: {
      ru: 'Программная настройка электронных блоков управления двигателем, корректное отключение сажевых фильтров, клапанов рециркуляции отработавших газов (EGR) и датчиков кислорода.',
      en: 'Software calibration of engine management units, including structured programming for diesel particulate filters (DPF), EGR valves, and oxygen (lambda) sensors.',
    },
    operations: {
      ru: [
        'Чип-тюнинг бензиновых и дизельных двигателей',
        'Программное отключение сажевых фильтров (DPF)',
        'Отключение клапана EGR и коррекция датчиков кислорода',
      ],
      en: [
        'ECU performance and response calibration for petrol and diesel engines',
        'Software deactivation of Diesel Particulate Filters (DPF)',
        'EGR valve programming and oxygen sensor calibration',
      ],
    },
    bookingChannel: 'service_desk',
  },
  {
    id: 'chassis-alignment',
    index: '04',
    category: 'chassis',
    featured: true,
    image: IMAGE_ASSETS.wheelAlignment,
    title: {
      ru: '04. Ходовая часть и 3D развал-схождение',
      en: '04. Suspension, Steering & 3D Wheel Alignment',
    },
    subtitle: {
      ru: 'Геометрия шасси · Подвеска · Рулевое управление',
      en: 'Chassis Geometry · Suspension · Steering Systems',
    },
    description: {
      ru: 'Слесарный ремонт элементов подвески, тормозной системы и рулевого управления с последующей точной регулировкой углов установки колес на стенде сход-развала.',
      en: 'Mechanical overhaul of suspension links, braking assemblies, and steering gear, followed by precision wheel alignment calibration.',
    },
    operations: {
      ru: [
        'Регулировка углов установки колес (развал-схождение)',
        'Замена рычагов, сайлентблоков, амортизаторов и ступичных узлов',
        'Обслуживание тормозных механизмов и рулевого управления',
      ],
      en: [
        'Precision front and rear axle wheel alignment (camber, caster, toe)',
        'Replacement of control arms, bushings, dampers, and wheel bearings',
        'Brake system servicing and steering rack maintenance',
      ],
    },
    bookingChannel: 'service_desk',
  },
  {
    id: 'scheduled-maintenance-parts',
    index: '05',
    category: 'mechanical',
    title: {
      ru: '05. Плановое ТО и заказ автозапчастей',
      en: '05. Scheduled Maintenance & Parts Supply',
    },
    subtitle: {
      ru: 'Регламентное обслуживание · Подбор комплектующих',
      en: 'Routine Factory Intervals · Verified Parts Sourcing',
    },
    description: {
      ru: 'Комплексное техническое обслуживание иномарок по техническому регламенту с прямым заказом оригинальных автозапчастей, качественных аналогов и расходных материалов.',
      en: 'Scheduled interval maintenance for foreign marques with direct sourcing of OEM components, vetted aftermarket parts, and technical fluids.',
    },
    operations: {
      ru: [
        'Замена моторного масла, трансмиссионных и технических жидкостей',
        'Замена масляных, воздушных, салонных и топливных фильтров',
        'Подбор и заказ автозапчастей и расходных материалов под VIN',
      ],
      en: [
        'Engine oil, transmission fluid, coolant, and brake fluid service',
        'Replacement of oil, air, cabin, and fuel filtration systems',
        'VIN-matched sourcing of replacement parts and consumables',
      ],
    },
    bookingChannel: 'service_desk',
  },
  {
    id: 'tire-service',
    index: '06',
    category: 'chassis',
    title: {
      ru: '06. Шиномонтаж и балансировка колес',
      en: '06. Tire Mounting & Wheel Balancing',
    },
    subtitle: {
      ru: 'Сезонная смена шин · Балансировка · Ремонт проколов',
      en: 'Seasonal Tire Changeover · Precision Balancing · Repair',
    },
    description: {
      ru: 'Аккуратный демонтаж и монтаж шин различных профилей, точная балансировка колесных дисков и устранение эксплуатационных повреждений протектора.',
      en: 'Careful mounting and dismounting of standard and low-profile tires, dynamic wheel balancing, and puncture restoration.',
    },
    operations: {
      ru: [
        'Сезонный шиномонтаж для легковых автомобилей и кроссоверов',
        'Точная балансировка колес и проверка состояния вентилей',
        'Ремонт проколов и герметизация бортов',
      ],
      en: [
        'Seasonal tire changeover for sedans, coupes, and SUVs',
        'Dynamic wheel balancing and valve inspection',
        'Tread puncture repair and bead sealing',
      ],
    },
    bookingChannel: 'service_desk',
  },
  {
    id: 'bodywork-repair',
    index: '07',
    category: 'body_wash',
    title: {
      ru: '07. Кузовной ремонт',
      en: '07. Bodywork & Collision Restoration',
    },
    subtitle: {
      ru: 'Кузовной цех · Восстановление элементов · Геометрия',
      en: 'Body Shop · Panel Restoration · Structural Alignment',
    },
    description: {
      ru: 'Выполнение кузовного ремонта любой сложности: от устранения локальных повреждений до восстановления кузовных деталей после дорожных происшествий.',
      en: 'Comprehensive bodywork restoration ranging from localized panel damage correction to post-collision structural repair.',
    },
    operations: {
      ru: [
        'Рихтовочные и арматурные работы по кузову',
        'Восстановление и замена поврежденных кузовных элементов',
        'Выставление заводских зазоров кузовных панелей',
      ],
      en: [
        'Panel beating, stripping, and structural fitting',
        'Repair and replacement of damaged exterior body panels',
        'Precision panel gap alignment and trim reassembly',
      ],
    },
    bookingChannel: 'service_desk',
  },
  {
    id: 'car-wash-detailing',
    index: '08',
    category: 'body_wash',
    featured: true,
    image: IMAGE_ASSETS.detailingStudio,
    title: {
      ru: '08. Автомойка и химчистка интерьера',
      en: '08. Car Wash & Interior Detailing Studio',
    },
    subtitle: {
      ru: 'Бережная мойка · Глубокая химчистка · Связь через WhatsApp',
      en: 'Delicate Exterior Wash · Deep Interior Cleaning · Direct WhatsApp',
    },
    description: {
      ru: 'Собственный моечный комплекс на территории техцентра. Комплексная мойка кузова, детальный уход за поверхностями и глубокая химчистка салона (связь и согласование времени через WhatsApp).',
      en: 'Dedicated wash and detailing bay on site. Comprehensive exterior wash, surface care, and deep interior chemical cleaning (direct communication via WhatsApp).',
    },
    operations: {
      ru: [
        'Комплексная бесконтактная и ручная мойка автомобиля',
        'Деликатная химчистка сидений, ковролина и элементов отделки',
        'Прямая связь с автомойкой через WhatsApp: +7 (903) 105-19-87',
      ],
      en: [
        'Comprehensive multi-stage exterior wash and drying',
        'Deep interior extraction and upholstery cleaning',
        'Direct communication via WhatsApp: +7 (903) 105-19-87',
      ],
    },
    bookingChannel: 'whatsapp_wash',
  },
];

export const REDESIGN_AUDIT_POINTS: AuditPoint[] = [
  {
    index: '01',
    title: {
      ru: 'Визуальная иерархия и первое впечатление',
      en: 'Visual Hierarchy & First Impression',
    },
    legacyIssue: {
      ru: 'Текущий сайт raiservis.ru построен на устаревшем шаблонном каркасе со стоковой графикой, разрозненными шрифтовыми кеглями и отсутствием единого композиционного фокуса.',
      en: 'The existing raiservis.ru website relies on a dated template layout with generic stock imagery, fragmented font sizes, and no dominant visual anchor.',
    },
    editorialSolution: {
      ru: 'Архитектурная автомобильная эстетика: глубокий графитовый фон (#0A0A0C), выверенная типографика Barlow Condensed + Plus Jakarta Sans и крупноформатная документальная фотография ремзоны.',
      en: 'Architectural automotive editorial direction: deep obsidian-graphite canvas (#0A0A0C), disciplined Barlow Condensed + Plus Jakarta Sans typography, and cinematic workshop photography.',
    },
  },
  {
    index: '02',
    title: {
      ru: 'Структура услуг и прямая связь без посредников',
      en: 'Service Taxonomy & Direct Phone Dispatch',
    },
    legacyIssue: {
      ru: 'Широкий спектр работ (от ремонта ДВС и чип-тюнинга до кузовного ремонта и автомойки) смешан в однородные списки без четкого разделения цехов и каналов связи.',
      en: 'A broad capability set (from engine overhauls and chip tuning to bodywork and car wash) is flattened into uniform lists without clear workshop categorization or direct contact routing.',
    },
    editorialSolution: {
      ru: 'Асимметричный каталог из 8 профильных направлений с мгновенной фильтрацией по цехам и прямой телефонной связью с техцентром (+7 499 508-02-20, +7 925 506-23-15) и WhatsApp-линией автомойки (+7 903 105-19-87) без форм онлайн-записи.',
      en: 'Asymmetric 8-discipline engineering catalog with instant workshop filtering and direct telephone contact (+7 499 508-02-20, +7 925 506-23-15) plus WhatsApp Car Wash line (+7 903 105-19-87) with zero unconfirmed web forms.',
    },
  },
  {
    index: '03',
    title: {
      ru: 'Главный фактор доверия — открытая ремзона',
      en: 'Core Trust Differentiator — Open Repair Bay',
    },
    legacyIssue: {
      ru: 'Ключевое преимущество «Рай-Сервис» — право клиента лично присутствовать в ремзоне у подъемника — теряется в массиве обычного текста.',
      en: 'RAI SERVICE’s strongest real-world differentiator—inviting owners directly into the repair bay during work—is buried in plain body text.',
    },
    editorialSolution: {
      ru: 'Принцип открытой ремзоны вынесен в отдельный редакционный манифест с пошаговым описанием регламента осмотра автомобиля вместе с мастером.',
      en: 'Elevated into a dedicated editorial feature ("The Open Repair Bay Protocol") detailing the 3-stage inspection workflow alongside the technician.',
    },
  },
];
