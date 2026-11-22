import { site, socialLinks, absoluteUrl } from '../data/site';
import type { Faq } from '../data/faqs';

const ids = {
  website: `${site.url}/#website`,
  organization: `${site.url}/#organization`,
  person: `${site.url}/#dilber-ogretmen`,
  webpage: (path: string) => `${site.url}${path}#webpage`,
};

const areaServed = [
  ...site.serviceAreas.map((name) => ({ '@type': 'City', name })),
  { '@type': 'AdministrativeArea', name: 'Adana' },
  { '@type': 'Country', name: 'Türkiye' },
];

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: site.url,
    name: site.brand,
    alternateName: site.legalName,
    description: site.description,
    inLanguage: 'tr-TR',
    publisher: { '@id': ids.organization },
  };
}

export function organizationSchema() {
  return {
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': ids.organization,
    name: site.legalName,
    alternateName: site.brand,
    url: site.url,
    description: site.description,
    telephone: site.phoneDisplay,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed,
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    knowsLanguage: ['tr-TR'],
    founder: { '@id': ids.person },
    employee: { '@id': ids.person },
    sameAs: socialLinks,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Matematik özel ders hizmetleri',
      itemListElement: [
        'LGS matematik özel ders',
        'TYT matematik özel ders',
        'AYT matematik özel ders',
        '5-12. sınıf matematik',
        'Online matematik özel ders',
        'Sınav koçluğu',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name,
          provider: { '@id': ids.organization },
        },
      })),
    },
  };
}

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: site.teacher,
    jobTitle: 'Matematik Öğretmeni',
    description:
      'Matematik bölümü mezunu, 10 yıllık deneyimle LGS, TYT-AYT ve 5-12. sınıf matematik dersi veren öğretmen.',
    worksFor: { '@id': ids.organization },
    knowsAbout: [
      'LGS matematik',
      'TYT matematik',
      'AYT matematik',
      'Okul matematiği',
      'Sınav koçluğu',
      'Matematik',
    ],
    areaServed,
    knowsLanguage: ['tr-TR'],
    sameAs: socialLinks,
  };
}

export function webpageSchema(path: string, title: string, description: string) {
  return {
    '@type': 'WebPage',
    '@id': ids.webpage(path),
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.organization },
    inLanguage: 'tr-TR',
  };
}

export function serviceSchema(options: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  area?: 'local' | 'online' | 'both';
}) {
  const area =
    options.area === 'online'
      ? [{ '@type': 'Country', name: 'Türkiye' }]
      : options.area === 'local'
        ? areaServed.filter((item) => item.name !== 'Türkiye')
        : areaServed;

  return {
    '@type': 'Service',
    '@id': `${site.url}${options.path}#service`,
    name: options.name,
    description: options.description,
    serviceType: options.serviceType ?? options.name,
    provider: { '@id': ids.organization },
    areaServed: area,
    url: absoluteUrl(options.path),
  };
}

export function courseSchema(options: {
  name: string;
  description: string;
  path: string;
  mode?: 'online' | 'onsite' | 'blended';
  educationalLevel?: string;
  teaches?: string[];
}) {
  const mode =
    options.mode === 'online'
      ? 'online'
      : options.mode === 'onsite'
        ? 'onsite'
        : 'blended';

  return {
    '@type': 'Course',
    '@id': `${site.url}${options.path}#course`,
    name: options.name,
    description: options.description,
    provider: { '@id': ids.organization },
    courseMode: mode,
    inLanguage: 'tr-TR',
    timeRequired: 'PT60M',
    educationalLevel: options.educationalLevel ?? '5-12. sınıf ve mezun',
    teaches: options.teaches ?? ['Matematik', 'LGS matematik', 'TYT matematik', 'AYT matematik'],
    url: absoluteUrl(options.path),
  };
}

export function faqSchema(faqs: Faq[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${site.url}${path}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  path: string;
  datePublished: Date;
  dateModified?: Date;
  category?: string;
  image?: string;
}) {
  return {
    '@type': 'Article',
    '@id': `${site.url}${options.path}#article`,
    headline: options.title,
    description: options.description,
    datePublished: options.datePublished.toISOString(),
    dateModified: (options.dateModified ?? options.datePublished).toISOString(),
    author: { '@id': ids.person },
    publisher: { '@id': ids.organization },
    mainEntityOfPage: { '@id': ids.webpage(options.path) },
    image: absoluteUrl(options.image ?? site.defaultOgImage),
    inLanguage: 'tr-TR',
    articleSection: options.category,
  };
}

export function baseSchemas() {
  return [websiteSchema(), organizationSchema(), personSchema()];
}

export const schemaIds = ids;
