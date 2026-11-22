import type { Faq } from './faqs';

export type District = {
  slug: string;
  name: string;
  title: string;
  h1: string;
  description: string;
  lead: string;
  intro: string[];
  neighborhoods: string[];
  logistics: string[];
  focus: string[];
  faqs: Faq[];
};

export const districts: District[] = [
  {
    slug: 'seyhan-matematik-ozel-ders',
    name: 'Seyhan',
    title: 'Seyhan Matematik Özel Ders | Dilber Öğretmen',
    h1: "Seyhan'da Matematik Özel Ders",
    description:
      "Seyhan'da yüz yüze birebir matematik özel dersi. LGS, TYT-AYT ve 5-12. sınıf; Tellidere çevresindeki ders alanı veya öğrencinin evinde. Dilber Öğretmen, 10 yıl deneyim.",
    lead:
      "Seyhan'ın merkezinde, Tellidere çevresindeki ders alanında veya öğrencinin evinde yüz yüze matematik özel dersi.",
    intro: [
      "Seyhan, Adana'nın merkez ilçelerinden biri. Tellidere, Mithatpaşa, Reşatbey ve çevresindeki öğrenciler için yüz yüze birebir matematik dersi planlıyorum. Dersler 60 dakika ve tek öğrenciyle yapılıyor.",
      "Amacım yalnızca konu anlatmak değil; öğrencinin hangi konuda tıkandığını görmek, çalışma düzenini kurmak ve sınavda kullanabileceği bir soru çözme rutini kazandırmak. Bu yüzden ilk adımda seviye tespiti yapıyoruz.",
      "Ders yeri olarak iki seçenek var: Seyhan/Tellidere çevresindeki ders alanı veya öğrencinin evi. Tam adres, randevu onayından sonra paylaşılıyor; öğrencinin evinde derste velinin bulunmasını önemsiyorum.",
    ],
    neighborhoods: ['Tellidere', 'Mithatpaşa', 'Reşatbey', 'Kurtuluş ve çevresi'],
    logistics: [
      'Dersler 60 dakika, birebir.',
      'Seyhan/Tellidere çevresindeki ders alanı veya öğrencinin evi.',
      'Tam adres randevu onayından sonra paylaşılır.',
      'Öğrencinin evinde derste velinin bulunması tercih edilir.',
    ],
    focus: [
      '8. sınıf LGS matematik',
      '9-12. sınıf TYT-AYT matematik',
      '5-7. sınıf okul matematiği ve yazılı hazırlığı',
      'Sınav koçluğu ve düzenli takip',
    ],
    faqs: [
      {
        q: "Seyhan'ın her mahallesine geliyor musunuz?",
        a: 'Seyhan merkez ve yakın çevresinde ders planlıyorum. Ulaşım süresi ve saat uygunluğu görüşmede netleşiyor.',
      },
      {
        q: 'Dersler Seyhan’da nerede yapılıyor?',
        a: 'Tellidere çevresindeki ders alanında veya öğrencinin evinde. Tam adres, randevu onayından sonra paylaşılıyor.',
      },
      {
        q: 'Seyhan’da online ders de alabilir miyim?',
        a: 'Evet. Yüz yüze plan uymuyorsa Google Meet veya Zoom üzerinden online ders alabilirsiniz.',
      },
      {
        q: 'Ücretler ne kadar?',
        a: 'Ücretler sitede yayınlanmıyor. Sınıf, hedef ve ders sıklığına göre güncel bilgi WhatsApp’tan paylaşılıyor.',
      },
    ],
  },
  {
    slug: 'cukurova-matematik-ozel-ders',
    name: 'Çukurova',
    title: 'Çukurova Matematik Özel Ders | Dilber Öğretmen',
    h1: "Çukurova'da Matematik Özel Ders",
    description:
      "Çukurova'da yüz yüze birebir matematik özel dersi. LGS, TYT-AYT ve 5-12. sınıf; Toros, Güzelyalı, Mahfesığmaz çevresi ve öğrencinin evinde. Dilber Öğretmen.",
    lead:
      "Çukurova'da Toros, Güzelyalı ve Mahfesığmaz çevresindeki öğrenciler için yüz yüze birebir matematik dersi.",
    intro: [
      "Çukurova, Adana'nın merkez ilçelerinden biri ve yoğun okul takvimine sahip ailelerin yaşadığı bir bölge. Toros, Güzelyalı, Mahfesığmaz ve çevresindeki öğrencilerle yüz yüze matematik dersi yapıyorum.",
      "Çukurova'da dersler genellikle öğrencinin evinde planlanıyor. Velinin evde bulunması, ders düzeninin korunması ve öğrencinin kendini güvende hissetmesi açısından önemli. Alternatif olarak Seyhan/Tellidere çevresindeki ders alanı da kullanılabilir.",
      "LGS ve TYT-AYT dönemindeki öğrenciler için okul takvimi, deneme tarihleri ve hedef netlere göre haftalık plan hazırlıyorum. Ders dışında ödev takibi WhatsApp üzerinden yürüyor.",
    ],
    neighborhoods: ['Toros', 'Güzelyalı', 'Mahfesığmaz', 'Yurt ve çevresi'],
    logistics: [
      'Dersler 60 dakika, birebir.',
      'Öğrencinin evi veya Seyhan/Tellidere çevresindeki ders alanı.',
      'Tam adres randevu onayından sonra paylaşılır.',
      'Veliler ders öncesi ve sonrası kısa bilgilendirme alır.',
    ],
    focus: [
      '8. sınıf LGS matematik',
      '9-12. sınıf TYT-AYT matematik',
      '5-7. sınıf okul matematiği',
      'Deneme analizi ve haftalık plan',
    ],
    faqs: [
      {
        q: 'Çukurova’da dersler nerede yapılıyor?',
        a: 'Öğrencinin evinde veya Seyhan/Tellidere çevresindeki ders alanında. Uygun seçenek görüşmede netleşiyor.',
      },
      {
        q: 'Çukurova’nın hangi mahallelerine geliyorsunuz?',
        a: 'Toros, Güzelyalı, Mahfesığmaz ve yakın çevresi öncelikli. Ulaşım süresi görüşmede kontrol ediliyor.',
      },
      {
        q: 'LGS için haftada kaç ders uygun?',
        a: 'Öğrencinin seviyesine ve okul programına göre haftada 1 veya 2 ders planlanabiliyor.',
      },
      {
        q: 'Online ders seçeneği var mı?',
        a: 'Evet. Çukurova’da yüz yüze plan uymazsa online ders alabilirsiniz.',
      },
    ],
  },
  {
    slug: 'yuregir-matematik-ozel-ders',
    name: 'Yüreğir',
    title: 'Yüreğir Matematik Özel Ders | Dilber Öğretmen',
    h1: "Yüreğir'de Matematik Özel Ders",
    description:
      "Yüreğir'de yüz yüze birebir matematik özel dersi. LGS, TYT-AYT ve 5-12. sınıf; öğrencinin evinde veya Seyhan/Tellidere çevresinde. Dilber Öğretmen.",
    lead:
      "Yüreğir'de öğrencinin evinde veya Seyhan/Tellidere çevresindeki ders alanında yüz yüze birebir matematik dersi.",
    intro: [
      "Yüreğir, Seyhan Nehri'nin doğusunda yer alan büyük ilçelerden biri. Yüreğir merkez, Sinanpaşa ve Kışla çevresindeki öğrenciler için yüz yüze matematik dersi planlıyorum.",
      "Yüreğir'den Seyhan/Tellidere çevresine ulaşım mümkün; ancak ders programını öğrencinin okul saatine ve ailenin günlük düzenine göre kuruyoruz. Öğrencinin evinde ders de seçenekler arasında.",
      "Özellikle 8. sınıf LGS ve 11-12. sınıf TYT-AYT döneminde düzenli takip önemli. Haftalık plan, ödev kontrolü ve deneme analiziyle ilerlemeyi görünür hale getiriyoruz.",
    ],
    neighborhoods: ['Yüreğir merkez', 'Sinanpaşa', 'Kışla', 'Seyhan Nehri doğu yakası'],
    logistics: [
      'Dersler 60 dakika, birebir.',
      'Öğrencinin evi veya Seyhan/Tellidere çevresindeki ders alanı.',
      'Ulaşım süresi ve ders saati görüşmede netleşir.',
      'Tam adres randevu onayından sonra paylaşılır.',
    ],
    focus: [
      '8. sınıf LGS matematik',
      '9-12. sınıf TYT-AYT matematik',
      '5-7. sınıf okul matematiği',
      'Sınav koçluğu ve ödev takibi',
    ],
    faqs: [
      {
        q: 'Yüreğir’e yüz yüze ders için geliyor musunuz?',
        a: 'Yüreğir merkez ve yakın çevresinde planlama yapıyorum. Ulaşım süresi ve saat uygunluğu görüşmede netleşiyor.',
      },
      {
        q: 'Dersler nerede yapılıyor?',
        a: 'Öğrencinin evinde veya Seyhan/Tellidere çevresindeki ders alanında. Tam adres randevu sonrası paylaşılıyor.',
      },
      {
        q: 'Yüreğir’den online ders alabilir miyim?',
        a: 'Evet. Google Meet veya Zoom üzerinden online ders alabilirsiniz.',
      },
      {
        q: 'Ücret bilgisi nereden alınır?',
        a: 'Güncel ücret bilgisi WhatsApp üzerinden, sınıf ve ders sıklığına göre paylaşılıyor.',
      },
    ],
  },
  {
    slug: 'saricam-matematik-ozel-ders',
    name: 'Sarıçam',
    title: 'Sarıçam Matematik Özel Ders | Dilber Öğretmen',
    h1: "Sarıçam'da Matematik Özel Ders",
    description:
      "Sarıçam'da yüz yüze birebir matematik özel dersi. LGS, TYT-AYT ve 5-12. sınıf; öğrencinin evinde veya Seyhan/Tellidere çevresinde. Dilber Öğretmen.",
    lead:
      "Sarıçam'da öğrencinin evinde veya Seyhan/Tellidere çevresindeki ders alanında yüz yüze birebir matematik dersi.",
    intro: [
      "Sarıçam, Adana'nın kuzeydoğusunda yer alan ve hızla büyüyen ilçelerden biri. Sarıçam merkez, Buruk ve çevresindeki öğrenciler için yüz yüze matematik dersi planlıyorum.",
      "Sarıçam'dan merkeze ulaşımı dikkate alarak ders saatlerini birlikte planlıyoruz. Öğrencinin evinde ders, ailenin günlük düzeni için daha pratik olabilir; alternatif olarak Seyhan/Tellidere çevresindeki ders alanı kullanılabilir.",
      "LGS ve YKS hazırlığında düzenli ders kadar, ders dışındaki ödev ve tekrar takibi de belirleyici. Bu yüzden her dersin sonunda kısa bir ödev planı paylaşıyorum.",
    ],
    neighborhoods: ['Sarıçam merkez', 'Buruk', 'Esentepe ve çevresi'],
    logistics: [
      'Dersler 60 dakika, birebir.',
      'Öğrencinin evi veya Seyhan/Tellidere çevresindeki ders alanı.',
      'Ders saati, ulaşım süresine göre planlanır.',
      'Tam adres randevu onayından sonra paylaşılır.',
    ],
    focus: [
      '8. sınıf LGS matematik',
      '9-12. sınıf TYT-AYT matematik',
      '5-7. sınıf okul matematiği',
      'Haftalık plan ve ödev takibi',
    ],
    faqs: [
      {
        q: 'Sarıçam’a yüz yüze ders için geliyor musunuz?',
        a: 'Sarıçam merkez ve yakın çevresinde planlama yapıyorum. Ulaşım süresi görüşmede netleşiyor.',
      },
      {
        q: 'Dersler nerede yapılıyor?',
        a: 'Öğrencinin evinde veya Seyhan/Tellidere çevresindeki ders alanında. Tam adres randevu sonrası paylaşılıyor.',
      },
      {
        q: 'Sarıçam’dan online ders alabilir miyim?',
        a: 'Evet. Google Meet veya Zoom üzerinden online ders alabilirsiniz.',
      },
      {
        q: 'Hangi sınıflara ders veriyorsunuz?',
        a: '5-12. sınıf matematik, LGS, TYT ve AYT hazırlığı. Sınav koçluğu da ayrıca planlanabilir.',
      },
    ],
  },
];

export function getDistrict(slug: string) {
  return districts.find((district) => district.slug === slug);
}
