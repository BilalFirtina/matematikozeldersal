# Adana Matematik Özel Ders

`matematikozeldersal.com` için Astro tabanlı, statik, mobil-first SEO/GEO sitesi.

- **Marka:** Adana Matematik Özel Ders
- **Resmi ad / GBP adı:** Adana Matematik Özel Ders - Dilber Öğretmen
- **Öğretmen:** Dilber Öğretmen
- **Hizmet:** Adana'da yüz yüze; Türkiye geneli online LGS, TYT-AYT ve 5-12. sınıf matematik özel dersi
- **Site üzerinden satış/fiyat yok.** CTA'lar WhatsApp, telefon ve bilgi formuna yönlendirir.

## Hızlı başlangıç

```bash
npm install
npm run dev
```

Geliştirme: `http://localhost:4321`

Üretim derlemesi:

```bash
npm run build
npm run preview
```

`dist/` klasörü Cloudflare Pages'e yüklenir.

## Dosya yapısı

```text
src/
  components/        Header, Footer, SEO, form, FAQ, CTA vb.
  content/blog/      Markdown blog yazıları
  content.config.ts  Blog içerik şeması
  data/site.ts       Marka, telefon, e-posta, sosyal medya, fotoğraf
  data/programs.ts   Program kartları ve sınıf listesi
  data/faqs.ts       Sayfa bazlı SSS ve SSS grupları
  data/districts.ts  Seyhan, Çukurova, Yüreğir, Sarıçam içerikleri
  layouts/           BaseLayout, LegalLayout
  lib/schema.ts      JSON-LD schema üretimi
  pages/             Tüm sayfalar, dinamik rotalar, robots.txt ve llms.txt
  styles/global.css  Tasarım sistemi
public/              favicon, OG görseli, header/redirect, images
```

`robots.txt` ve `llms.txt`, `src/pages/` içindeki endpoint'lerden üretilir; domain değişince `site.url` ile birlikte güncellenir.

## İçerik güncelleme

### Site bilgileri

`src/data/site.ts` içindeki alanları güncelleyin:

- `email`: domain e-postası (`info@matematikozeldersal.com`)
- `photo`: örn. `/images/dilber-ogretmen.jpg` (dosyayı `public/images/` içine koyun)
- `instagram`, `youtube`, `linkedin`: tam profil URL'leri
- `googleReviewsUrl`: Google İşletme Profili'nin doğrudan yorum/Maps linki
- `hours`: net çalışma saatleri veya “Randevu ile”
- `formEndpoint`: Google Apps Script / form servisi URL'si (boşsa form WhatsApp'a yönlendirir)
- `ga4Id`, `clarityId`: ölçümleme kimlikleri (boşsa hiçbir analytics yüklenmez)

### Blog yazısı ekleme

`src/content/blog/` içine `.md` dosyası ekleyin:

```md
---
title: "Başlık"
description: "Meta açıklama"
pubDate: 2026-11-22
category: "LGS"
readingTime: "7 dk"
draft: false
---

İçerik...
```

Yeni yazı otomatik olarak `/blog` sayfasında ve RSS'te görünür.

### Fotoğraf ekleme

1. Fotoğrafı `public/images/` içine koyun (tercihen kare portre, 800×800 px, WebP/JPG).
2. `src/data/site.ts` içinde `photo: '/images/dosya.jpg'` yapın.
3. Ana sayfa ve Hakkımda sayfasındaki monogram otomatik olarak fotoğrafa döner.

Fotoğraf yoksa tasarım monogramla çalışır. Stok fotoğraf kullanmayın; gerçek fotoğraf güven için daha iyidir.

## Cloudflare Pages yayını

1. GitHub'da repo oluşturun ve bu projeyi push edin.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Environment variables:
   - `PUBLIC_SITE_URL=https://matematikozeldersal.com`
   - `PUBLIC_GA4_ID` (varsa)
   - `PUBLIC_CLARITY_ID` (varsa)
   - `PUBLIC_FORM_ENDPOINT` (varsa)
6. Custom domain: `matematikozeldersal.com` ve `www.matematikozeldersal.com`.
7. Cloudflare Redirect Rule ile `www` → apex 301 yönlendirmesi kurun.
8. SSL/TLS modu: Full (strict).
9. `_headers` ve `_redirects` dosyaları `public/` içinden otomatik kopyalanır.

> Preview (`*.pages.dev`) adreslerini arama motorlarına göndermeyin. İndeksleme için yalnızca özel domaini kullanın.

### E-posta

Cloudflare Email Routing ile `info@matematikozeldersal.com` adresini Gmail'e yönlendirin. Gmail'de “Send mail as” ayarıyla aynı adresten yanıt verin.

### Form

Form, varsayılan olarak bilgileri WhatsApp mesajına dönüştürür. Google Sheets'e kayıt istiyorsanız:

1. Google Apps Script web app oluşturun.
2. POST edilen `{ name, phone, grade, goal, note }` verisini Sheet'e yazın.
3. URL'yi `PUBLIC_FORM_ENDPOINT` olarak ekleyin.

Formda KVKK onayı zorunludur; honeypot alanı vardır.

## SEO / GEO kontrol listesi

- [ ] `PUBLIC_SITE_URL` doğru.
- [ ] Title/meta/canonical her sayfada mevcut.
- [ ] `sitemap-index.xml` ve `robots.txt` yayında.
- [ ] `llms.txt` yayında.
- [ ] Google Search Console: domain doğrulama + sitemap.
- [ ] Bing Webmaster Tools: GSC import + sitemap + IndexNow.
- [ ] Yandex Webmaster: doğrulama + sitemap + bölge Adana.
- [ ] GBP: ad, kategori, hizmetler, saatler, fotoğraflar, gönderiler, yorumlar.
- [ ] GBP site linki: `/adana-matematik-ozel-ders?utm_source=google&utm_medium=gbp&utm_campaign=profil`
- [ ] Yandex Business: mevcut kaydı sahiplen/düzelt; ev adresi gizliliği.
- [ ] Bing Places ve Apple Business Connect.
- [ ] İlk 20-30 Google yorumu için WhatsApp/QR takibi.
- [ ] GA4 + Consent Mode, Clarity; dönüşüm event'leri.
- [ ] Aylık AI görünürlük kontrolü (ChatGPT, Gemini, Perplexity, Copilot).

## Yapılacaklar / yer tutucular

- [ ] Domaini satın al ve Cloudflare'a bağla.
- [ ] `info@matematikozeldersal.com` e-postasını kur.
- [ ] Instagram profil URL'sini `site.ts`ye ekle (görünen adda soyisim varsa “Dilber Öğretmen” yap).
- [ ] Gerçek fotoğraf(lar)ı `public/images/` içine ekle ve `site.photo`yu güncelle.
- [ ] Google yorumlarının doğrudan linkini `site.googleReviewsUrl`ye koy.
- [ ] Net çalışma saatlerini `site.hours`a yaz.
- [ ] GBP'de ev adresini gizle, hizmet alanlarını 4 ilçe olarak ayarla.
- [ ] Yandex kaydını sahiplen; olmuyorsa destek talebi aç.
- [ ] İlk 6 blog yazısını tamamla (şu an 4 var).
- [ ] KVKK/gizlilik/çerez/ders koşullarını hukuk danışmanına kontrol ettir.
- [ ] `public/og-default.png` görselini marka fotoğrafıyla güncelle (isteğe bağlı).

## İçerik kuralları

- Fiyat, “başarı garantisi”, “%100 memnuniyet”, “en iyi” gibi ifadeler kullanmayın.
- Diploma/sertifika görseli ve kurum adı yayınlamayın.
- Öğrenci adı, okulu, fotoğrafı için yazılı izin olmadan paylaşım yapmayın.
- Tam ev adresini sitede yayınlamayın; randevu sonrası paylaşın.
- Yorumları Google'a bırakın; sitede uydurma yorum kullanmayın.
- Online derslerde kayıt ancak karşılıklı onayla alınır.

## Ölçümleme event'leri

Form gönderimi, WhatsApp ve telefon tıklamaları GA4'te event olarak izlenebilir. `site.ts` içine GA4 kimliği eklendiğinde çerez bandı görünür ve yalnızca “Kabul et” sonrası ölçümleme yüklenir.

Önerilen event'ler:

- `whatsapp_click`
- `phone_click`
- `form_submit`
- `map_click`
- `review_click`
- `pricing_view`
- `faq_open`

## Not

Bu proje bilgilendirme amaçlı bir site iskeletidir. KVKK, ticari mevzuat, MEB/özel ders mevzuatı ve vergi konularında nihai metinleri bir uzmana kontrol ettirin.
