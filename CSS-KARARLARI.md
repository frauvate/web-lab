# CSS Kararları

Bu doküman, modern CSS web tasarım prensipleri (Flexbox & CSS Grid), CSS değişkenleri (Design Tokens) ve mobile-first (responsive) tasarım gereksinimleri kullanılarak "Esma Yıldırım - Kişisel Portföy" projesi kapsamında alınan teknik kararların incelenmesini hedefler (LAB-3).

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?** 
  640px günümüzde yatay çevrilen büyük telefonları ve tabletlerin dikey formatlarını yakalayabilmek için mantıklı bir başlangıç noktasıdır. 1024px ise dizüstü bilgisayarlar ve yatay tutulan geniş tabletlerin sınırını temsil eder.
- **İçeriğim bu noktalarda nasıl değişiyor?** 
  En dar ekranda (640px altı) içerikler dikey (column) yığılır, navigasyon merkezlenerek alt alta dizilir. 640px'i aştığımızda navigasyon esnek bir şekilde (row) hizalanır, `.about-content` sol hizalayarak fotoğrafı yan tarafa alır. 1024px üzerinde ise formlar ve grid içerikler maksimum genişlikle (1200px) sınırlandırılarak ekranda daha bütüncül bir orana çekilir.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?** 
  Header içerisinde logonun (veya ismin) sol tarafa, menü linklerinin de esnek bir şekilde kendi içinde aralıklı olarak durması gerekiyordu. Tek boyutlu (satır bazlı okunan) navigasyon dağılımları için `justify-content` ile `flex-wrap` imkanları sağlayan Flexbox en doğru çözümdür.
- **Proje kartları için neden Grid seçtim?**
  Proje kartlarının kutu formunda tekrarlanması ve yan yana kendi alanlarını (satır-sütun matrisi) kaplaması gerekiyordu. Eşit yükseklik, boşluk oranları (`gap`) ve aynı anda iki boyutu dengeleme ihtiyacından dolayı CSS Grid tercih ettim.
- **`auto-fit` mi `auto-fill` mi kullandım, neden?**
  `repeat(auto-fit, minmax(280px, 1fr))` yapısını kullanarak `auto-fit` tercih ettim. Çünkü boş kalan (olmayan) sütunları esneterek mevcut kartların ekran genişliğini tamamlamasını istedim; böylelikle büyük ekranlarda kartlar ekranı çok daha dengeli ve doldurarak yayılıyor.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?**
  Mevcut portfolyo renklerine sadık kalarak, `dark-theme` (koyu tema) yapısını temel alan bir palet oluşturdum `--color-bg: #121212`, `--color-surface: #1F2937`. Aksan rengi olarak mavinin bir tonu (`--color-primary: #1E3A8A`) tercih edilerek profesyonel ama dikkat çekici bir stil yakalandı. 
- **Spacing skalasını nasıl belirledim?**
  Aralıkların sistemli ve tahmin edilebilir olması adına REM birimlerinde (4px tabanlı modüler aritmetik ile) `--space-xs`'den `--space-3xl`'a kadar geometrik büyüyen oranlar kullandım (örn: 0.25rem, 0.5rem, 1rem, 2rem).
- **Fluid typography için clamp değerlerini nasıl ayarladım?** 
  Yazıların erişilebilirliği için minimum sınır değerlerini `rem` olarak sabit tutup, ara büyüme hesaplarını viewport genişliği oranına ve temel sabite (`1rem + 1vw` gibi) bağladım. Maksimum sınırı yine `rem` vererek yazının ekran sınırlarını esnetip taşırmasını engelledim.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?** 
  Base CSS olarak (hiçbir `@media` block kullanmadan) en küçük mobil telefon görünümünü kodladım; dolayısıyla flex column eksenlerini standart varsayılan hale getirdim. Ardından `@media (min-width: ...)` bloklarıyla sadece daha büyük ekranlara ihtiyaç duyulan "yana geçme" ve "sınır koyma" (max-width) CSS özelliklerini Override olarak ekledim.
- **Hangi elemanlar breakpointlerde değişiyor?**
  - **Navigasyon ve Header:** Mobilde ortalanıp dikey liste görünürken, 640px'e geçince tek satıra yayılır.
  - **Hakkımda:** Fotoğraf üste atılıp hizalanırken, tablette sola hizalanıp içeriğin yanına geçer.
  - **Projeler:** Mobilde 1 kolon olarak listelenirken auto-fit sayesinde masaüstünde 3 sütunlu ızgaralara geçer.
- **Görsel boyutları nasıl yönettim?**
  Her görsele temel olarak `max-width: 100%` ve `height: auto` verdim. Bunun yetersiz olduğu kart resimlerinde veya yuvarlak profil fotolarında (örn: Proje kartları `height: 200px`) en boy oranlarını bozmamak adına `object-fit: cover` ve `aspect-ratio` tanımlamaları ile kırpma yönetimini tarayıcılara bıraktım.

---

## 5. Lab4 — Tailwind CSS v4 Kararları

- **Neden Tailwind CSS v4 seçtim?**
  Utility-first yaklaşımı, hızlı prototipleme ve bileşen bazlı geliştirme için ideal. v4'ün `@import "tailwindcss"` sözdizimi ve `@theme` ile özel değişken tanımlama özelliği, CSS-in-JS olmadan güçlü tema yönetimi sağlıyor.

- **Dark mode'u nasıl implemente ettim?**
  `class` stratejisi tercih edildi: `document.documentElement.classList.add('dark')` ile HTML root'una `dark` class'ı ekleniyor. Böylece tüm `dark:` prefixli Tailwind utility'leri devreye giriyor. Tercih `localStorage`'da saklanarak sayfa yenilenmesinde tutuldu.

- **`@theme` ile özel tema nasıl çalışıyor?**
  Tailwind v4'te `@theme` bloğu, CSS custom property'leri (`--color-primary`, `--font-sans` vb.) doğrudan Tailwind utility'lerine bağlıyor. Bu sayede `text-primary`, `bg-primary` gibi kısayollar tek yerden yönetilebiliyor.

- **Responsive için `sm:`, `md:`, `lg:` prefixler:**
  Mobile-first mantığıyla temel stiller prefix'siz yazıldı; büyük ekranlar için prefix'li override'lar eklendi (örn: `grid sm:grid-cols-2 lg:grid-cols-3`). Bu strateji Lab3'teki `@media (min-width: ...)` mantığının Tailwind karşılığıdır.
