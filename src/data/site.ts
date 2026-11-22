export const site = {
  url: (import.meta.env.PUBLIC_SITE_URL || 'https://matematikozeldersal.com').replace(/\/$/, ''),
  brand: 'Adana Matematik Özel Ders',
  legalName: 'Adana Matematik Özel Ders - Dilber Öğretmen',
  teacher: 'Dilber Öğretmen',
  tagline: 'Birebir, planlı, ölçülebilir matematik.',
  description:
    "Adana'da Seyhan, Çukurova, Yüreğir ve Sarıçam'da yüz yüze; Türkiye geneli online LGS, TYT-AYT ve okul matematiği özel dersi. Dilber Öğretmen, 10 yıllık deneyim.",
  phoneDisplay: '0542 480 42 54',
  phoneHref: 'tel:+905424804254',
  whatsapp: '905424804254',
  whatsappText: 'Merhaba, Adana matematik özel ders hakkında bilgi almak istiyorum.',
  email: 'info@matematikozeldersal.com',
  address: {
    locality: 'Seyhan',
    region: 'Adana',
    country: 'TR',
    display: 'Seyhan / Tellidere, Adana',
  },
  serviceAreas: ['Seyhan', 'Çukurova', 'Yüreğir', 'Sarıçam'],
  onlinePlatforms: 'Google Meet veya Zoom',
  lessonDuration: '60 dakika',
  experience: '10 yıl',
  hours: 'Randevu ile',
  priceNote:
    "Ücretler sitede yayınlanmaz. Sınıf düzeyi, ders sıklığı, yüz yüze/online seçimi ve paket süresine göre güncel bilgi WhatsApp'tan paylaşılır.",
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Tellidere%2C%20Seyhan%2C%20Adana',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=Adana%20Matematik%20%C3%96zel%20Ders%20-%20Dilber%20%C3%96%C4%9Fretmen',
  photo: '',
  photoAlt: 'Dilber Öğretmen, matematik öğretmeni',
  instagram: '',
  youtube: '',
  linkedin: '',
  ga4Id: import.meta.env.PUBLIC_GA4_ID || '',
  clarityId: import.meta.env.PUBLIC_CLARITY_ID || '',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  defaultOgImage: '/og-default.png',
  nav: [
    { href: '/adana-matematik-ozel-ders', label: 'Adana' },
    { href: '/online-matematik-ozel-ders', label: 'Online' },
    { href: '/lgs-matematik-ozel-ders', label: 'LGS' },
    { href: '/tyt-matematik-ozel-ders', label: 'TYT' },
    { href: '/ayt-matematik-ozel-ders', label: 'AYT' },
    { href: '/sinav-koclugu', label: 'Koçluk' },
    { href: '/hakkimda', label: 'Hakkımda' },
    { href: '/blog', label: 'Blog' },
    { href: '/iletisim', label: 'İletişim' },
  ],
};

export const socialLinks = [site.instagram, site.youtube, site.linkedin, site.googleReviewsUrl].filter(
  Boolean,
);

export function waLink(message = site.whatsappText) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = '/') {
  return new URL(path, `${site.url}/`).href;
}
