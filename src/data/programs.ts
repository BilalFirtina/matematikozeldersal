export type Program = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  bullets: string[];
};

export const programs: Program[] = [
  {
    slug: '/lgs-matematik-ozel-ders',
    title: 'LGS Matematik',
    eyebrow: '8. sınıf',
    summary:
      'Yeni nesil soru mantığı, konu eksik haritası ve deneme takibiyle LGS matematiğinde planlı ilerleme.',
    bullets: [
      'Seviye tespiti ve eksik konu haritası',
      'Yeni nesil soru çözme rutini',
      'Deneme analizi ve hedef net takibi',
    ],
  },
  {
    slug: '/tyt-matematik-ozel-ders',
    title: 'TYT Matematik',
    eyebrow: '9-12. sınıf ve mezun',
    summary:
      'Temel eksikleri kapatıp soru tipi, hız ve zaman yönetimini birlikte geliştiren TYT programı.',
    bullets: [
      'Temel matematik eksiklerini kapatma',
      'Soru tipi ve pratik çözüm stratejisi',
      'Haftalık plan ve deneme takibi',
    ],
  },
  {
    slug: '/ayt-matematik-ozel-ders',
    title: 'AYT Matematik',
    eyebrow: '11-12. sınıf ve mezun',
    summary:
      'İleri konular, uzun soru çözümü ve hedef bölüme göre planlanan AYT matematik hazırlığı.',
    bullets: [
      'İleri konularda kavramsal derinlik',
      'Uzun ve çok adımlı soru stratejisi',
      'Hedef bölüme göre konu önceliği',
    ],
  },
  {
    slug: '/okul-matematigi-ozel-ders',
    title: 'Okul Matematiği',
    eyebrow: '5-12. sınıf',
    summary:
      'Okul müfredatına paralel, yazılı sınavlara ve temel eksik kapatmaya odaklanan birebir destek.',
    bullets: [
      'Okul takvimine uygun plan',
      'Yazılı sınav hazırlığı',
      'Temel eksikleri kapatma',
    ],
  },
  {
    slug: '/online-matematik-ozel-ders',
    title: 'Online Matematik',
    eyebrow: 'Türkiye geneli',
    summary:
      'Google Meet veya Zoom üzerinden 60 dakikalık birebir ders; ekran paylaşımı ve düzenli takip.',
    bullets: [
      'Türkiye’nin her yerinden birebir ders',
      '60 dakika, ekran paylaşımı ve soru çözümü',
      'WhatsApp ile ödev ve süreç takibi',
    ],
  },
  {
    slug: '/sinav-koclugu',
    title: 'Sınav Koçluğu',
    eyebrow: 'LGS ve YKS',
    summary:
      'Haftalık plan, deneme analizi, motivasyon ve veli iletişimini birlikte yürüten takip programı.',
    bullets: [
      'Haftalık çalışma planı',
      'Deneme sonrası analiz',
      'Veli ile düzenli iletişim',
    ],
  },
];

export const levels = [
  '5. sınıf',
  '6. sınıf',
  '7. sınıf',
  '8. sınıf (LGS)',
  '9. sınıf',
  '10. sınıf',
  '11. sınıf',
  '12. sınıf (TYT/AYT)',
  'Mezun (TYT/AYT)',
];
