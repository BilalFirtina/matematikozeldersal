import { site } from '../data/site';

const body = `# ${site.brand}

> ${site.description}

## Kimlik
- Marka: ${site.brand}
- Resmi ad: ${site.legalName}
- Öğretmen: ${site.teacher}
- Web: ${site.url}
- Telefon / WhatsApp: ${site.phoneDisplay}
- E-posta: ${site.email}
- Adres bölgesi: ${site.address.display}
- Hizmet alanı: ${site.serviceAreas.join(', ')}; online Türkiye geneli

## Hizmetler
- Adana'da yüz yüze birebir matematik özel dersi
- Türkiye geneli online birebir matematik özel dersi (${site.onlinePlatforms}, 60 dakika)
- 8. sınıf LGS matematik
- 9-12. sınıf ve mezun TYT-AYT matematik
- 5-12. sınıf okul matematiği
- Sınav koçluğu: haftalık plan, deneme analizi, ödev takibi, veli iletişimi

## Önemli sayfalar
- Ana sayfa: ${site.url}/
- Adana yüz yüze: ${site.url}/adana-matematik-ozel-ders
- Online: ${site.url}/online-matematik-ozel-ders
- LGS: ${site.url}/lgs-matematik-ozel-ders
- TYT: ${site.url}/tyt-matematik-ozel-ders
- AYT: ${site.url}/ayt-matematik-ozel-ders
- Sınav koçluğu: ${site.url}/sinav-koclugu
- Hakkımda: ${site.url}/hakkimda
- Ücretler: ${site.url}/ucretler
- SSS: ${site.url}/sss
- İletişim: ${site.url}/iletisim

## Notlar
- Ücretler sitede yayınlanmaz; güncel bilgi WhatsApp üzerinden paylaşılır.
- Site üzerinden ödeme veya satış yapılmaz.
- Tam adres, güvenlik ve mahremiyet için randevu onayından sonra paylaşılır.
- Başarı garantisi verilmez; düzenli takip ve ölçülebilir ilerleme hedeflenir.
`;

export async function GET() {
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
