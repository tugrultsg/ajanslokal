# ajanslokal.com - Complete Development Brief
## Website Development Prompt for Google Antigravity

---

# 🎯 PROJECT OVERVIEW

**Project Name:** ajanslokal.com Website  
**Company:** ajanslokal - Digital Marketing Agency  
**Business Model:** White-label reseller of Synup platform services to Turkish SMBs  
**Website Type:** Modern SaaS landing page with contact form and live chat  
**Target Framework:** Next.js 14+ with TypeScript  
**Target Deployment:** Vercel  
**Language:** Turkish (all content)  
**Timeline:** Single build, ready for immediate deployment  

---

# 🎨 BRAND GUIDELINES

## Brand Identity

### Brand Personality
- **High Quality:** Enterprise-grade solutions at SMB prices
- **Trustworthy:** Rock-solid partner for Turkish businesses  
- **Energetic:** Modern, forward-thinking, fast-moving
- **Dynamic:** Constantly evolving, innovative, action-oriented
- **Approachable:** Professional but friendly, helpful not stuffy

### Brand Values
1. **Şeffaflık (Transparency):** Clear pricing, honest communication
2. **Sonuç Odaklılık (Results-Driven):** Measurable outcomes matter
3. **Yenilikçilik (Innovation):** AI-powered, modern solutions
4. **Yerellik (Local Focus):** Built for Turkish businesses
5. **Erişilebilirlik (Accessibility):** Premium features, affordable pricing

## Visual Identity

### Color Palette

**Primary Colors:**
```css
--primary-blue: #0066FF;        /* Electric Blue - Main brand */
--deep-navy: #0A1F44;           /* Headlines, authority */
```

**Secondary/Accent Colors:**
```css
--vibrant-coral: #FF6B6B;       /* CTAs, highlights, energy */
--bright-cyan: #00D9FF;         /* Hover states, dynamic accents */
--fresh-green: #10B981;         /* Success, growth, positive */
```

**Neutral Palette:**
```css
--pure-white: #FFFFFF;          /* Backgrounds, cards */
--light-gray: #F8FAFC;          /* Alternate backgrounds */
--medium-gray: #64748B;         /* Secondary text */
--dark-slate: #1E293B;          /* Body text */
--border-gray: #E2E8F0;         /* Borders, dividers */
```

**Gradients:**
```css
--hero-gradient: linear-gradient(135deg, #0066FF 0%, #00D9FF 100%);
--cta-gradient: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
--success-gradient: linear-gradient(135deg, #10B981 0%, #34D399 100%);
```

### Typography

**Primary Font Family:** Plus Jakarta Sans (Google Fonts)  
**Fallback:** Inter, system-ui, sans-serif

**Font Weights:**
- Regular: 400
- Medium: 500
- Semi Bold: 600
- Bold: 700
- Extra Bold: 800

**Type Scale:**
```css
/* Desktop */
--text-hero: 56px / 3.5rem;     /* line-height: 1.2 */
--text-h1: 48px / 3rem;         /* line-height: 1.2 */
--text-h2: 40px / 2.5rem;       /* line-height: 1.2 */
--text-h3: 32px / 2rem;         /* line-height: 1.3 */
--text-h4: 24px / 1.5rem;       /* line-height: 1.4 */
--text-large: 18px / 1.125rem;  /* line-height: 1.6 */
--text-body: 16px / 1rem;       /* line-height: 1.6 */
--text-small: 14px / 0.875rem;  /* line-height: 1.5 */

/* Mobile Adjustments */
--text-hero-mobile: 36px / 2.25rem;
--text-h1-mobile: 32px / 2rem;
--text-h2-mobile: 28px / 1.75rem;
```

### Logo Specifications

**Logo Type:** Wordmark  
**Text:** "ajanslokal" (all lowercase)  
**Font:** Plus Jakarta Sans Extra Bold (800)  
**Primary Color:** Electric Blue (#0066FF)  
**Alternative:** Deep Navy (#0A1F44)  

**Optional Icon Element:**
- Location pin merged with upward trending arrow
- Represents: Local presence + Growth
- Style: Minimalist, geometric line art

### Design Principles

#### 1. Clean & Spacious
- Generous white space (80-120px section padding)
- Maximum content width: 1280px
- Grid-based layout (12-column)
- Don't crowd elements - let them breathe

#### 2. Bold & Confident  
- Large, impactful headlines (56px hero)
- High-contrast CTAs (Coral on white, white on blue)
- Strong declarative statements
- Numbers and metrics prominently displayed

#### 3. Modern & Tech-Forward
- Subtle gradients for depth
- Smooth animations (300-400ms)
- Glass-morphism effects (optional, use sparingly)
- 8-12px border radius (sharp but not harsh)
- Card elevation with shadows

#### 4. Data-Driven Trust
- Display metrics and statistics
- Real dashboard mockups/screenshots
- Before/after comparisons
- Customer logos and testimonials
- Trust badges prominently placed

#### 5. Dynamic Motion
- Hover effects on all interactive elements
- Scroll-triggered animations (fade-in, slide-up)
- Micro-interactions on buttons and cards
- Smooth transitions between states
- Parallax effects (subtle)

### UI Components Specifications

#### Buttons

**Primary CTA:**
```css
background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%);
color: #FFFFFF;
font-weight: 600;
padding: 16px 32px;
border-radius: 8px;
font-size: 16px;
box-shadow: 0 4px 14px rgba(255, 107, 107, 0.3);
transition: all 300ms ease;

hover: {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
}
```

**Secondary Button:**
```css
background: transparent;
border: 2px solid #0066FF;
color: #0066FF;
font-weight: 600;
padding: 14px 30px;
border-radius: 8px;

hover: {
  background: #0066FF;
  color: #FFFFFF;
}
```

**Ghost Button:**
```css
background: transparent;
color: #64748B;
font-weight: 500;
padding: 12px 24px;

hover: {
  color: #0066FF;
}
```

#### Cards

```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
border-radius: 12px;
padding: 32px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
transition: all 300ms ease;

hover: {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #0066FF;
}
```

#### Input Fields

```css
border: 2px solid #E2E8F0;
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
color: #1E293B;
transition: all 200ms ease;

focus: {
  border-color: #0066FF;
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
  outline: none;
}

error: {
  border-color: #FF6B6B;
}
```

### Iconography

**Style:** Outline/Line icons  
**Library:** Lucide React (recommended) or Heroicons  
**Variant:** Outline  
**Standard Size:** 24px  
**Feature Icons:** 32px  
**Hero Icons:** 48-64px  
**Stroke Width:** 2px  
**Color:** Context-dependent (Blue for features, Coral for actions, Green for success)

### Animation Guidelines

```css
/* Fade In on Scroll */
@keyframes fadeInUp {
  from: {
    opacity: 0;
    transform: translateY(20px);
  }
  to: {
    opacity: 1;
    transform: translateY(0);
  }
}
duration: 600ms;
easing: cubic-bezier(0.4, 0, 0.2, 1);

/* Button Hover */
transition: all 200ms ease;
hover: {
  transform: translateY(-2px);
}

/* Card Hover */
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
hover: {
  transform: translateY(-4px);
}

/* Page Transitions */
duration: 400ms;
easing: ease-in-out;
```

### Photography/Imagery Style

**Use:**
- Authentic Turkish business photos (restaurants, retail, offices)
- Modern, well-lit spaces
- Real people (diverse, professional)
- Local landmarks (Istanbul, Ankara) for localization

**Avoid:**
- Generic stock photos
- Overly posed corporate shots
- American/European-looking businesses
- Low quality or dated imagery

**Treatment:**
- Slight blue color grade for consistency
- High contrast, vibrant colors
- Professional but not sterile

**Illustrations (Optional):**
- Modern, geometric style
- Gradient fills (brand colors)
- Isometric or flat design
- Dashboard/interface mockups

---

# 📋 WEBSITE STRUCTURE & CONTENT

## Site Map

```
Home (Single Page Application)
├─ Hero Section
├─ Trust Badges
├─ Core Services (6 services)
├─ How It Works (4 steps)
├─ Why Choose Us
├─ Pricing (3 tiers)
├─ Testimonials
├─ FAQ
├─ Contact Form
└─ Footer

Blog (Dynamic Routes)
├─ /blog (Blog listing page)
│   ├─ Featured post
│   ├─ Recent posts grid
│   ├─ Categories sidebar
│   └─ Pagination
├─ /blog/[slug] (Individual blog post)
│   ├─ Article content
│   ├─ Table of contents
│   ├─ Related posts
│   ├─ Author box
│   └─ CTA section
└─ /blog/kategori/[category] (Category pages)
    └─ Filtered posts by category
```

## Navigation Menu

**Desktop Navigation:**
```
Logo [Left]
- Ana Sayfa
- Hizmetlerimiz (Dropdown/Scroll)
- Blog (Link to /blog)
- Çözümler (Scroll)
- Fiyatlandırma (Scroll)
- Hakkımızda (Scroll)
- İletişim (Scroll)
[Demo Talep Et] (CTA Button - Coral)
```

**Mobile Navigation:**
- Hamburger menu (right side)
- Full-screen overlay menu
- Same links as desktop
- Prominent CTA button

## Section-by-Section Content

### 1. Hero Section

**Layout:** Full-width, minimum 90vh, centered content

**Headline (H1):**
```
Türkiye'nin Yerel İşletmelerine Özel 
Dijital Pazarlama Çözümleri
```

**Subheadline:**
```
Google Business, Facebook, Instagram ve 60+ dijital platformda 
işletmenizin görünürlüğünü artırın. Müşteri yorumlarınızı yönetin. 
Yapay zeka ile Türkçe içerik üretin. Tek platformdan tüm dijital 
varlığınızı kontrol edin.
```

**CTA Buttons:**
- Primary: "Ücretsiz Demo Talep Et" → Scroll to contact form
- Secondary: "Hizmetleri Keşfet" → Scroll to services

**Hero Visual:**
- Dashboard mockup showing multi-platform management
- Floating platform icons (Google, Facebook, Instagram, etc.)
- Stats/metrics overlay showing growth
- Gradient background (Hero Gradient)

**Trust Elements (below fold):**
```
"5000+ Dijital Ajansın Güvendiği Platform"
"Google, Facebook, Instagram ve 60+ Platform Entegrasyonu"
"Yapay Zeka Destekli Türkçe İçerik Üretimi"
```

---

### 2. Trust Badges Section

**Background:** Light Gray (#F8FAFC)  
**Padding:** 60px vertical

**Content:**
```
Entegre Olduğumuz Platformlar
```

**Platform Logos (Display as icons/badges):**
Row 1:
- Google Business Profile
- Facebook
- Instagram
- Google Maps
- LinkedIn

Row 2:
- Twitter/X
- HubSpot
- Stripe
- Waze
- +55 More

**Secondary Trust Stats:**
```
[Icon: CheckCircle] 60+ Platform Entegrasyonu
[Icon: Zap] Yapay Zeka Destekli Otomasyon
[Icon: Shield] 7/24 Türkçe Müşteri Desteği
[Icon: TrendingUp] Ölçülebilir Sonuçlar
```

---

### 3. Core Services Section

**Background:** White  
**Layout:** 3-column grid (2 rows)  
**Card Style:** Hover effect with shadow increase

**Section Headline:**
```
Tek Platformda Tüm Dijital Pazarlama İhtiyaçlarınız
```

**Section Subheadline:**
```
İşletmenizi büyütmek için ihtiyacınız olan tüm araçlar, 
tek bir kullanıcı dostu platformda.
```

#### Service 1: Yerel Listeleme Yönetimi
**Icon:** MapPin (Lucide)  
**Color:** Electric Blue

**Headline:** Yerel Listeleme Yönetimi

**Description:**
```
İşletme bilgilerinizi Google Business Profile, Facebook, Instagram, 
Apple Maps ve 60+ dijital platformda otomatik olarak senkronize edin. 
Adres, telefon, çalışma saatleri değişikliklerini tek tıkla tüm 
platformlarda güncelleyin.
```

**Key Features (Bullet List):**
- Google Business Profile, Facebook, Instagram ve 60+ platformda merkezi yönetim
- Apple Maps, Waze dahil harita uygulamalarında görünürlük
- Gerçek zamanlı senkronizasyon ve otomatik güncelleme
- Çoklu lokasyon yönetimi (franchise işletmeler için ideal)
- Listing doğruluk takibi ve uyarılar
- Share of Voice optimizasyonu

---

#### Service 2: İtibar Yönetimi
**Icon:** Star (Lucide)  
**Color:** Fresh Green

**Headline:** İtibar Yönetimi

**Description:**
```
Müşteri yorumlarınızı tek panelden yönetin. Yapay zeka destekli 
otomatik Türkçe yanıtlarla pozitif bir marka imajı oluşturun. 
Negatif yorumları fırsata çevirin.
```

**Key Features:**
- Google, Facebook ve tüm platformlardan yorumları tek yerde görün
- Yapay zeka ile otomatik Türkçe yanıt önerileri
- Yorum kampanyaları ile müşterilerinizden daha fazla pozitif yorum
- SMS ve e-posta ile otomatik yorum toplama sistemi
- Sentiment analizi ve detaylı raporlama
- Negatif yorum erken uyarı sistemi

---

#### Service 3: Sosyal Medya Yönetimi
**Icon:** Share2 (Lucide)  
**Color:** Vibrant Coral

**Headline:** Sosyal Medya Yönetimi

**Description:**
```
Facebook, Instagram ve Google Posts'u tek platformdan planlayın ve 
yayınlayın. Yapay zeka ile Türkçe içerik fikirleri alın ve marka 
imajınızı güçlendirin.
```

**Key Features:**
- Çoklu platform içerik planlama (Facebook, Instagram, Google)
- AI destekli Türkçe içerik önerileri ve otomatik oluşturma
- Görsel editör ve hazır şablon kütüphanesi
- İçerik takvimi ve takım onay sistemi
- Performans raporları ve engagement analizi
- Özel günler ve kampanyalar için hatırlatıcılar

---

#### Service 4: Yerel SEO Hizmetleri
**Icon:** TrendingUp (Lucide)  
**Color:** Electric Blue

**Headline:** Yerel SEO Hizmetleri

**Description:**
```
Google aramalarında işletmenizi öne çıkarın. 'Yakınımdaki' 
aramalarda müşterileriniz sizi bulsun. Detaylı raporlarla 
gelişiminizi takip edin.
```

**Key Features:**
- Google anahtar kelime sıralama takibi
- Yerel arama görünürlüğü raporları (90 güne kadar veri)
- Rakip analizi ve benchmark karşılaştırmaları
- Aylık SEO performans raporları
- Google Business Profile optimizasyonu
- Search insights ve detaylı analitik

---

#### Service 5: Müşteri İlişkileri Yönetimi (CRM)
**Icon:** Users (Lucide)  
**Color:** Bright Cyan

**Headline:** Müşteri İlişkileri Yönetimi

**Description:**
```
Potansiyel müşterilerinizi takip edin, randevuları yönetin, 
teklifleri gönderin. Tüm müşteri bilgilerinizi tek bir yerde 
saklayın ve satış sürecinizi hızlandırın.
```

**Key Features:**
- Satış pipeline yönetimi ve fırsat takibi
- Randevu ve toplantı takvimi entegrasyonu
- Teklif ve sözleşme oluşturma araçları
- Müşteri iletişim geçmişi ve notlar
- Görev ve aktivite takibi

---

#### Service 6: Faturalama ve E-imza
**Icon:** FileText (Lucide)  
**Color:** Fresh Green

**Headline:** Faturalama ve E-imza

**Description:**
```
Faturalarınızı otomatikleştirin, online tahsilat yapın. E-imza 
ile sözleşmeleri hızlıca tamamlayın. Finansal süreçlerinizi 
dijitalleştirin.
```

**Key Features:**
- Otomatik tekrarlayan fatura oluşturma
- Online ödeme entegrasyonu (Stripe, PayPal)
- E-imza ile dijital sözleşme yönetimi
- Fatura geçmişi ve detaylı raporlama
- Tahsilat hatırlatıcıları ve takip sistemi

---

### 4. How It Works Section

**Background:** Gradient (Hero Gradient) with overlay  
**Text Color:** White  
**Layout:** 4-column horizontal timeline

**Section Headline:**
```
Nasıl Çalışır?
```

**Section Subheadline:**
```
4 basit adımda dijital varlığınızı güçlendirin
```

**Step 1:**
```
[Icon: Upload Cloud - Size 48px]
İşletme Bilgilerinizi Ekleyin
Platform, mevcut dijital varlığınızı otomatik tespit eder
```

**Step 2:**
```
[Icon: Edit - Size 48px]
Bilgilerinizi Güncelleyin ve Optimize Edin
Eksik bilgileri tamamlayın, görselleri yükleyin, içeriği zenginleştirin
```

**Step 3:**
```
[Icon: Send - Size 48px]
Tüm Platformlarda Yayınlayın
Tek tıkla 60+ platforma bilgilerinizi otomatik gönderin
```

**Step 4:**
```
[Icon: BarChart - Size 48px]
Performansınızı Takip Edin
Detaylı raporlarla gelişiminizi izleyin, stratejinizi optimize edin
```

---

### 5. Why Choose Us Section

**Background:** White  
**Layout:** 3-column grid (2 rows)

**Section Headline:**
```
Neden ajanslokal?
```

**Section Subheadline:**
```
Türk işletmelerinin dijital başarısı için özel olarak tasarlanmış çözümler
```

**Feature 1:**
```
[Icon: MapPin]
Türkiye'ye Özel Çözüm
Google odaklı, Türk pazarına uygun optimizasyonlar. 
Türkçe içerik üretimi ve yerel SEO stratejileri.
```

**Feature 2:**
```
[Icon: Sparkles]
Yapay Zeka Destekli
Türkçe içerik üretimi, yorum yanıtlama ve sosyal medya 
paylaşımları için akıllı otomasyon.
```

**Feature 3:**
```
[Icon: Layers]
Hepsi Bir Arada
5+ ayrı aracın yerine tek platform. Listing, yorum, sosyal 
medya, SEO ve CRM tek yerden.
```

**Feature 4:**
```
[Icon: Headphones]
7/24 Destek
Türkçe müşteri desteği ve eğitim. Her zaman yanınızdayız.
```

**Feature 5:**
```
[Icon: Zap]
Kolay Kullanım
Teknik bilgi gerektirmez. Kullanıcı dostu arayüz ile 
dakikalar içinde başlayın.
```

**Feature 6:**
```
[Icon: PiggyBank]
Uygun Fiyat
Kurumsal özellikler, KOBİ fiyatları. Abonelik planlarımız 
her bütçeye uygun.
```

---

### 6. Pricing Section

**Background:** Light Gray (#F8FAFC)  
**Layout:** 3-column pricing cards

**Section Headline:**
```
Size Uygun Paketi Seçin
```

**Section Subheadline:**
```
İşletmenizin ihtiyaçlarına göre esnek paketler. 
Taahhütsüz, istediğiniz zaman iptal edebilirsiniz.
```

#### Pricing Card 1: Başlangıç

```
[Card Background: White]
[Border: 1px solid #E2E8F0]

Plan Adı: Başlangıç
Fiyat: ₺[PRICE]/ay
Alt Yazı: Küçük işletmeler için

Özellikler:
✓ 1 lokasyon
✓ Temel listeleme yönetimi
✓ Yorum yönetimi
✓ Aylık performans raporları
✓ E-posta desteği
✓ Temel analitik

CTA: "Hemen Başla"
```

#### Pricing Card 2: Profesyonel (POPULAR)

```
[Card Background: White]
[Border: 2px solid #0066FF]
[Badge: "En Popüler" - Coral background]
[Shadow: Enhanced on hover]

Plan Adı: Profesyonel
Fiyat: ₺[PRICE]/ay
Alt Yazı: Büyüyen işletmeler için

Özellikler:
✓ 3 lokasyona kadar
✓ Tüm listeleme özellikleri
✓ Sosyal medya yönetimi
✓ Yerel SEO takibi
✓ AI destekli içerik ve yanıtlar
✓ Öncelikli destek
✓ Detaylı analitik ve raporlar
✓ CRM modülü

CTA: "Demo Talep Et" (Gradient button)
```

#### Pricing Card 3: Kurumsal

```
[Card Background: White]
[Border: 1px solid #E2E8F0]

Plan Adı: Kurumsal
Fiyat: Özel Fiyat
Alt Yazı: Büyük işletmeler ve franchise'lar için

Özellikler:
✓ Sınırsız lokasyon
✓ Tüm profesyonel özellikler
✓ Özel CRM konfigürasyonu
✓ API erişimi
✓ Özel eğitim ve onboarding
✓ Özel hesap yöneticisi
✓ SLA garantisi
✓ Beyaz etiket (white label) seçeneği

CTA: "İletişime Geç"
```

**Bottom Note:**
```
Tüm planlar 14 gün ücretsiz deneme içerir. 
Kredi kartı bilgisi gerekmez.
```

---

### 7. Testimonials Section

**Background:** White  
**Layout:** 3-column carousel (auto-rotating)

**Section Headline:**
```
Müşterilerimiz Ne Diyor?
```

**Section Subheadline:**
```
Türkiye'nin farklı sektörlerinden işletmelerin başarı hikayeleri
```

#### Testimonial 1:
```
[Avatar: Illustrated or placeholder]
Quote: "ajanslokal sayesinde Google'da 'yakınımdaki restoran' 
aramalarında ilk 3'e girdik. Online sipariş taleplerinde %40 
artış yaşadık. Platformun Türkçe desteği ve kullanım kolaylığı 
mükemmel."

Name: Mehmet Yılmaz
Title: Sahip
Company: Bella Vista Restaurant, İstanbul
```

#### Testimonial 2:
```
[Avatar: Illustrated or placeholder]
Quote: "5 şubemizin tüm dijital varlığını tek platformdan yönetmek 
inanılmaz vakit kazandırıyor. AI destekli yorum yanıtları sayesinde 
müşteri memnuniyetimiz %25 arttı."

Name: Ayşe Demir
Title: Pazarlama Müdürü
Company: FitZone Spor Salonları, Ankara
```

#### Testimonial 3:
```
[Avatar: Illustrated or placeholder]
Quote: "Önceden 3 farklı araç kullanıyorduk, şimdi her şey tek 
yerde. Sosyal medya içerik üretimi için harcadığımız süre yarıya 
indi. ROI'miz aylık %35 arttı."

Name: Can Özkan
Title: Genel Müdür
Company: TeknoServis, İzmir
```

**Navigation:**
- Dots indicator below testimonials
- Auto-rotate every 5 seconds
- Manual navigation on click

---

### 8. FAQ Section

**Background:** Light Gray (#F8FAFC)  
**Layout:** Accordion style (single column, max-width 800px)

**Section Headline:**
```
Sıkça Sorulan Sorular
```

#### FAQ Items:

**Q1: ajanslokal nedir?**
```
A: ajanslokal, Türk KOBİ'lerinin dijital varlıklarını tek 
platformdan yönetmelerini sağlayan kapsamlı bir dijital pazarlama 
çözümüdür. Google Business Profile, sosyal medya, yorum yönetimi, 
SEO ve CRM araçlarını tek çatı altında topluyoruz.
```

**Q2: Hangi platformları destekliyorsunuz?**
```
A: Google Business Profile, Google Maps, Facebook, Instagram, 
LinkedIn, Twitter/X başta olmak üzere 60+ dijital platform ve 
dizini destekliyoruz. Ayrıca Apple Maps, Waze gibi harita 
uygulamalarında da görünürlük sağlıyoruz.
```

**Q3: Kurulum ne kadar sürer?**
```
A: Temel kurulum 15-30 dakika sürer. Platformumuz mevcut dijital 
varlığınızı otomatik tespit eder ve eksik bilgileri tamamlamanız 
için size rehberlik eder. Demo sonrası aynı gün kullanmaya 
başlayabilirsiniz.
```

**Q4: Teknik bilgiye ihtiyaç var mı?**
```
A: Hayır. Platformumuz kullanıcı dostu arayüzü ile teknik bilgi 
gerektirmez. Temel bilgisayar kullanımı yeterlidir. Ayrıca 
başlangıç eğitimi ve sürekli destek sağlıyoruz.
```

**Q5: Destek hizmeti nasıl çalışıyor?**
```
A: Türkçe müşteri destek ekibimiz e-posta, telefon ve canlı chat 
ile haftanın 7 günü size yardımcı olur. Profesyonel ve Kurumsal 
planlarda öncelikli destek sağlıyoruz.
```

**Q6: İstediğim zaman iptal edebilir miyim?**
```
A: Evet, tüm planlarımız taahhütsüzdür. İstediğiniz zaman iptal 
edebilir, aboneliğinizi yükseltebilir veya düşürebilirsiniz. 
İptal durumunda verilerinizi size teslim ederiz.
```

**Q7: Eğitim sağlıyor musunuz?**
```
A: Evet, tüm yeni müşterilerimize ücretsiz başlangıç eğitimi 
sağlıyoruz. Ayrıca video kütüphanemiz, dokümantasyonumuz ve 
webinar'larımız ile sürekli eğitim desteği veriyoruz.
```

**Q8: Yapay zeka içerik üretimi nasıl çalışıyor?**
```
A: Platformumuz, işletmeniz hakkında öğrendiklerini kullanarak 
Türkçe sosyal medya içeriği, yorum yanıtları ve Google Posts 
önerileri oluşturur. Siz bu önerileri onaylar veya düzenlersiniz.
```

**Q9: Verilerim güvende mi?**
```
A: Evet, tüm verileriniz şifreli olarak saklanır ve KVKK 
uyumlu şekilde işlenir. Verilerinizi asla üçüncü şahıslarla 
paylaşmayız.
```

**Q10: Birden fazla lokasyonum var, nasıl yönetirim?**
```
A: Profesyonel ve Kurumsal planlarımızda çoklu lokasyon 
yönetimi bulunur. Tüm lokasyonlarınızı tek panelden yönetebilir, 
toplu güncelleme yapabilir ve lokasyon bazında raporlar 
alabilirsiniz.
```

---

### 9. Contact Section

**Background:** White  
**Layout:** 2-column (Form left, Info right)

**Section Headline:**
```
Hadi Başlayalım!
```

**Section Subheadline:**
```
İşletmenizin dijital görünürlüğünü artırmak için bugün 
ücretsiz demo talep edin. 14 gün ücretsiz deneme ile 
risk almadan başlayın.
```

#### Contact Form (Left Column)

**Form Fields:**

```html
1. Ad Soyad * (Full Name)
   Input type: text
   Placeholder: "Adınız Soyadınız"
   Required: Yes
   
2. E-posta * (Email)
   Input type: email
   Placeholder: "ornek@email.com"
   Required: Yes
   Validation: Email format
   
3. Telefon * (Phone)
   Input type: tel
   Placeholder: "0(5XX) XXX XX XX"
   Required: Yes
   Pattern: Turkish phone format
   
4. Şirket Adı (Company Name)
   Input type: text
   Placeholder: "Şirketinizin adı"
   Required: No
   
5. İşletme Türü (Business Type)
   Select dropdown:
   - Seçiniz...
   - Restoran / Kafe
   - Perakende / Mağaza
   - Hizmet Sağlayıcı
   - Sağlık / Güzellik
   - Gayrimenkul
   - Otomotiv
   - Eğitim
   - Diğer
   
6. Mesajınız (Message)
   Textarea
   Placeholder: "Bize nasıl yardımcı olabiliriz?"
   Rows: 4
   Required: No
   
7. Checkbox
   Label: "KVKK aydınlatma metnini okudum, kabul ediyorum."
   Required: Yes
   Link: Opens modal with KVKK text

[Submit Button: "Ücretsiz Demo Talep Et"]
- Full width
- Primary gradient style
- Loading state on submit
```

**Form Success State:**
```
[Icon: CheckCircle - Green]
Teşekkürler! Talebiniz alındı.
Ekibimiz en kısa sürede sizinle iletişime geçecek.
```

#### Contact Info (Right Column)

```
İletişim Bilgileri

[Icon: Mail]
E-posta
info@ajanslokal.com

[Icon: Phone]
Telefon
+90 (XXX) XXX XX XX

[Icon: MapPin]
Adres
[İstanbul veya Ankara Adresi]
Türkiye

[Icon: Clock]
Çalışma Saatleri
Pazartesi - Cuma: 09:00 - 18:00
Cumartesi: 10:00 - 15:00
```

**Social Media Links:**
```
Bizi Takip Edin
[LinkedIn Icon] [Twitter Icon] [Instagram Icon] [Facebook Icon]
```

---

### 10. Footer

**Background:** Deep Navy (#0A1F44)  
**Text Color:** Light Gray / White  
**Layout:** 4-column grid

#### Column 1: Hizmetler
```
- Yerel Listeleme
- İtibar Yönetimi
- Sosyal Medya
- Yerel SEO
- CRM
- Faturalama
```

#### Column 2: Şirket
```
- Hakkımızda
- Blog
- Kariyer
- Basın Kiti
- İletişim
```

#### Column 3: Kaynaklar
```
- Blog Ana Sayfa
- Google Business Rehberi
- Yerel SEO İpuçları
- Sosyal Medya Stratejileri
- İşletme Kılavuzları
```

#### Column 4: Yasal
```
- Gizlilik Politikası
- Kullanım Şartları
- KVKK Aydınlatma Metni
- Çerez Politikası
```

#### Column 5: İletişim
```
ajanslokal
[Address Line 1]
[Address Line 2]
İstanbul, Türkiye

E-posta: info@ajanslokal.com
Tel: +90 (XXX) XXX XX XX

[Social Media Icons]
```

#### Bottom Bar
```
© 2024 ajanslokal. Tüm hakları saklıdır.

[Right aligned links:]
Gizlilik | Şartlar | Çerezler | RSS
```

---

### 11. Blog Section (Automated Content System)

**Blog Architecture:** Designed for AI-powered content generation and easy automation

#### Blog Listing Page (`/blog`)

**Layout:** Clean, scannable, optimized for SEO

**Hero Section:**
```
Background: Light gradient (Hero Gradient - subtle)
Headline: "Dijital Pazarlama Rehberi"
Subheadline: "Google SEO, sosyal medya, yorum yönetimi ve yerel işletmeler 
için dijital pazarlama stratejileri"
```

**Featured Post:**
```
[Large Card - Full Width]
- Featured image (16:9 ratio)
- Category badge
- Headline (H2)
- Excerpt (2 lines)
- Author & Date
- Read time estimate
- "Devamını Oku" CTA
```

**Recent Posts Grid:**
```
[3-column grid on desktop, 1-column on mobile]

Each Card:
- Thumbnail image (16:9 ratio, 600x338px)
- Category badge (colored by category)
- Headline (H3, 2-line truncate)
- Excerpt (3-line truncate)
- Meta: Author, Date, Read time
- "Oku" link

Posts per page: 12
Pagination: Load more button or numbered pages
```

**Sidebar (Desktop Only):**
```
1. Kategoriler (Categories)
   - Google Business Profile (X)
   - Yerel SEO (X)
   - Sosyal Medya (X)
   - İtibar Yönetimi (X)
   - Dijital Pazarlama (X)
   - İşletme İpuçları (X)

2. Popüler Yazılar (Popular Posts)
   - Top 5 by views
   - Thumbnail + title

3. E-bülten Kayıt (Newsletter)
   - Email input
   - "Abone Ol" button

4. CTA Card
   - "Ücretsiz Demo"
   - Mini form or button
```

---

#### Individual Blog Post Page (`/blog/[slug]`)

**Layout:** Single column, max-width 800px, optimized for reading

**Header:**
```
- Breadcrumb: Ana Sayfa > Blog > [Kategori] > [Başlık]
- Category badge
- H1 Headline
- Meta info: Author name, Date, Read time
- Featured image (full width, 1200x630px)
- Social share buttons (WhatsApp, Facebook, Twitter, LinkedIn, Copy link)
```

**Article Body:**
```
Typography:
- Font size: 18px (highly readable)
- Line height: 1.8
- Max width: 680px for optimal reading
- H2 sections with anchor links
- Generous spacing between paragraphs

Content Structure (for AI generation):
1. Introduction (2-3 paragraphs)
2. Table of Contents (auto-generated from H2s)
3. Main content sections (3-5 H2 sections)
4. Key takeaways box (highlighted)
5. Conclusion with CTA
```

**Table of Contents (Auto-generated):**
```
[Sticky sidebar on desktop, collapsible on mobile]
"Bu Yazıda:"
- H2 section 1
- H2 section 2
- H2 section 3
- etc.

Active section highlighted as user scrolls
```

**Content Enhancements:**
```
- Info boxes (blue background)
- Warning boxes (orange background)  
- Success tips (green background)
- Quote blocks (styled)
- Code blocks (if technical)
- Numbered lists
- Bullet lists
- Images with captions
- Embedded videos (YouTube)
```

**End of Article:**
```
1. Key Takeaways Box
   [Icon: CheckCircle]
   "Önemli Noktalar:"
   - Bullet point 1
   - Bullet point 2
   - Bullet point 3

2. Author Box
   [Photo/Avatar] 
   "Yazar Hakkında"
   Name: ajanslokal Ekibi
   Bio: Brief description
   Social links

3. CTA Section
   "İşletmenizi Büyütmeye Hazır mısınız?"
   Description
   [Demo Talep Et Button]

4. Related Posts
   "İlginizi Çekebilir"
   [3 related posts - same category or tags]
```

---

#### Category Pages (`/blog/kategori/[category]`)

**Same layout as main blog listing, but:**
- Filtered by category
- Category-specific headline
- Breadcrumb navigation
- Category description (SEO optimized)

---

### Blog Content Strategy (For Automation)

#### Content Categories & Topics

**1. Google Business Profile**
Topics for AI generation:
- "Google Business Profile Nasıl Optimize Edilir?"
- "Google Haritalar'da Üst Sıralara Çıkmanın 10 Yolu"
- "Google İşletme Profilinizde Yapmamanız Gereken 7 Hata"
- "Google Posts ile Müşteri Çekme Stratejileri"
- "Google Business Profile İstatistikleri Nasıl Okunur?"

**2. Yerel SEO**
- "Yerel SEO Nedir? 2024 Rehberi"
- "Yakınımdaki Aramalarda Nasıl Çıkarsınız?"
- "Yerel SEO İçin En İyi Anahtar Kelime Stratejileri"
- "Google Yerel Paket Sıralamasında İlk 3'e Girme"
- "NAP Tutarlılığı: İşletmeniz için Neden Kritik?"

**3. Sosyal Medya Yönetimi**
- "KOBİ'ler İçin Instagram Stratejisi"
- "Facebook İşletme Sayfası Optimizasyonu"
- "Sosyal Medyada Ne Zaman Paylaşım Yapmalı?"
- "AI ile Sosyal Medya İçeriği Üretme"
- "Engagement Artırmanın 15 Kanıtlanmış Yolu"

**4. İtibar Yönetimi**
- "Negatif Yorumlara Nasıl Yanıt Verilir?"
- "Müşterilerden Daha Fazla Yorum Almanın 12 Yolu"
- "Online İtibarınız Satışlarınızı Nasıl Etkiler?"
- "Yorum Yönetimi için AI Kullanımı"
- "5 Yıldızlı İşletme Olmanın Sırları"

**5. Dijital Pazarlama**
- "2024'te KOBİ'ler İçin Dijital Pazarlama Trendleri"
- "Dijital Pazarlama Bütçenizi Nasıl Belirlersiniz?"
- "Organik vs Ücretli Pazarlama: Hangisi Daha İyi?"
- "ROI Hesaplama: Dijital Pazarlama Başarınızı Ölçün"

**6. İşletme İpuçları**
- "Restoran Sahipleri İçin Dijital Pazarlama"
- "E-Ticaret İşletmeleri İçin SEO Stratejileri"
- "Franchise İşletmelerinde Çoklu Lokasyon Yönetimi"
- "Küçük İşletmeler İçin Ücretsiz Pazarlama Araçları"

---

### Blog Automation System Architecture

#### Content Generation Workflow

**Recommended Stack for Automation:**

**Option 1: MDX Files + GitHub Actions (Simple)**
```
1. AI generates content (Claude, GPT-4)
2. Save as MDX file in /content/blog/
3. Commit to GitHub
4. Vercel auto-deploys
5. New post live

Pros: Simple, version controlled, free
Cons: Manual process
```

**Option 2: Headless CMS (Recommended for scale)**
```
Use: Contentful, Sanity, or Strapi

Workflow:
1. AI generates content via API
2. Posts to CMS via API
3. Webhook triggers Vercel rebuild
4. Post automatically live

Pros: Full automation, scheduling, preview
Cons: Small monthly cost (~$9-29/mo for Contentful)
```

**Option 3: Notion as CMS (Best for you)**
```
Use: Notion + react-notion-x or notion-to-md

Workflow:
1. AI writes directly to Notion database
2. Notion database syncs to site
3. Changes auto-deploy
4. Easy manual editing in Notion

Pros: 
- Familiar interface
- Easy to edit/approve
- Free
- Team collaboration
- Visual preview
Cons: Some setup required
```

#### Blog Post Template (For AI Generation)

**Markdown Structure:**
```markdown
---
title: "Blog Post Title in Turkish"
slug: "seo-friendly-url-slug"
description: "Meta description 150-160 characters"
category: "google-business-profile"
tags: ["yerel-seo", "google", "işletme"]
author: "ajanslokal Ekibi"
date: "2024-01-15"
featured_image: "/images/blog/post-slug.jpg"
featured: false
read_time: 8
---

## Giriş

[2-3 paragraphs introducing the topic and why it matters]

## İçindekiler

- [Section 1](#section-1)
- [Section 2](#section-2)
- [Section 3](#section-3)

## Section 1 Headline

[Content for section 1 - 300-400 words]

### Subsection if needed

[Additional details]

> **Pro İpucu:** [Highlighted tip box]

## Section 2 Headline

[Content for section 2]

**Önemli:**
- Bullet point 1
- Bullet point 2
- Bullet point 3

## Section 3 Headline

[Content for section 3]

![Alt text for image](/images/blog/inline-image.jpg)
*Image caption*

## Önemli Noktalar

- Key takeaway 1
- Key takeaway 2
- Key takeaway 3

## Sonuç

[Conclusion paragraph with CTA]

---

**İşletmenizi dijital dünyada büyütmeye hazır mısınız?** 
[Demo talep edin](#contact) ve ücretsiz denemeye başlayın.
```

#### SEO Optimization (Built into Template)

**On-Page SEO Checklist (Automated):**
```javascript
✓ Title tag: 50-60 characters, keyword in first 5 words
✓ Meta description: 150-160 characters, includes CTA
✓ H1: One per page, exact match or variant of title
✓ H2-H6: Proper hierarchy, keyword variations
✓ Image alt text: Descriptive, includes keywords
✓ Internal links: 3-5 to other blog posts or pages
✓ External links: 2-3 to authoritative sources
✓ URL slug: Short, keyword-rich, hyphens
✓ Word count: 1200-2000 words (optimal)
✓ Keyword density: 1-2% (natural)
✓ Schema markup: Article structured data
✓ Read time calculation: Auto-generated
```

**Schema Markup (Auto-generated):**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "description": "Meta description",
  "image": "Featured image URL",
  "author": {
    "@type": "Organization",
    "name": "ajanslokal"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ajanslokal",
    "logo": {
      "@type": "ImageObject",
      "url": "Logo URL"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15"
}
```

---

### AI Content Generation Prompts

**Master Prompt Template for Blog Posts:**

```
You are a Turkish digital marketing expert writing for small business owners.

Topic: [TOPIC]
Category: [CATEGORY]
Target Keywords: [KEYWORDS]
Word Count: 1500 words

Article Requirements:
1. Write in Turkish (professional but friendly tone)
2. Target audience: Turkish SMB owners, non-technical
3. Structure:
   - Engaging introduction (hook + problem + promise)
   - 4-5 main sections with H2 headings
   - Actionable tips and examples
   - Pro tips in highlighted boxes
   - Real Turkish business examples
   - Conclusion with clear next steps
4. SEO:
   - Primary keyword in first paragraph
   - Keyword variations in H2s
   - Natural keyword density
   - Include LSI keywords
5. Style:
   - Use "siz" form (formal you)
   - Short paragraphs (3-4 lines)
   - Bullet points for lists
   - Include 2-3 statistics or data points
   - Conversational but authoritative
6. CTA: End with demo request

Format: Return as Markdown with frontmatter
```

**Example AI Prompts by Category:**

**For Google Business Profile:**
```
Write a 1500-word Turkish blog post:
Title: "Google Business Profile Optimizasyonu: 2024 Tam Rehberi"
Cover: Why GBP matters, optimization steps, common mistakes, 
success metrics, tools to use
Include: Turkish business examples, statistics, screenshots 
descriptions, actionable checklist
```

**For Local SEO:**
```
Write a 1500-word Turkish blog post:
Title: "'Yakınımdaki' Aramalarda İlk Sırada Çıkmanın 10 Yolu"
Cover: Local search importance, ranking factors, NAP consistency, 
reviews impact, content strategy
Include: Case study of Turkish restaurant, step-by-step guide
```

**For Reviews:**
```
Write a 1500-word Turkish blog post:
Title: "Negatif Yorumlara Profesyonel Yanıt Verme Sanatı"
Cover: Why responses matter, response templates, tone guidelines, 
turning critics to advocates
Include: Good vs bad response examples, psychology insights
```

---

### Image Strategy for Blog

**Featured Images:**
- Size: 1200x630px (Facebook OG optimal)
- Format: WebP with JPG fallback
- Sources for automation:
  - Unsplash API (free, high quality)
  - Pexels API (free)
  - Canva templates (automate with Canva API)
  - AI-generated (DALL-E, Midjourney for unique images)

**Template System:**
```
Create Canva templates with:
- Brand colors
- Logo watermark
- Text overlay with blog title
- Category color coding

Automation:
- Use Canva API to auto-generate
- Or use Bannerbear/Placid for programmatic images
- Alt text auto-generated from title
```

**Inline Images:**
- Screenshots (tools, dashboards)
- Infographics (can be templated)
- Step-by-step visuals
- Before/after comparisons

---

### Blog Performance & Analytics

**Track These Metrics:**
```
- Page views per post
- Time on page
- Scroll depth
- Bounce rate
- Social shares
- Comments (if enabled)
- CTA click-through rate
- Traffic sources (organic, social, direct)
- Keyword rankings
```

**Auto-Optimization:**
```
- A/B test headlines (first month)
- Update meta descriptions based on CTR
- Refresh old posts with new info
- Add internal links from new posts to old
- Identify top performers and create similar content
```

---

### Content Calendar Automation

**Publishing Frequency:** 3-4 posts per week (Tue, Thu, Sat, Sun)

**Weekly Content Mix:**
```
Tuesday: Educational/How-to (Yerel SEO, Google Business)
Thursday: Case Study/Success Story
Saturday: Quick Tips/Listicle
Sunday: Industry News/Trends
```

**Automation Setup:**
```
1. AI generates 12 posts at once (month's worth)
2. Posts saved to Notion with publish dates
3. GitHub Action or Zapier checks Notion daily
4. Auto-publishes scheduled posts
5. Auto-shares to social media (Buffer/Hootsuite)
6. Email digest sent to subscribers (weekly)
```

**Tools Stack:**
```
- Content Generation: Claude API or GPT-4
- Content Storage: Notion database
- Image Generation: Canva API or Unsplash
- Scheduling: Notion properties + cron job
- Deployment: Vercel webhook
- Social Sharing: Buffer or Hootsuite
- Email: SendGrid or Mailchimp
- Analytics: Google Analytics 4
```

---

### Blog Monetization & Lead Generation

**CTA Placements:**
```
1. Top banner: "İşletmenizi büyütmeye hazır mısınız?" [Demo]
2. Mid-article: Inline CTA after key section
3. End of article: Full CTA box with form
4. Sidebar: Sticky demo request widget
5. Exit intent: Popup with offer (use sparingly)
```

**Lead Magnets (Optional):**
```
- "Yerel SEO Kontrol Listesi" PDF
- "Google Business Profile Şablonu"
- "30 Günlük Sosyal Medya İçerik Takvimi"
- "Yorum Yanıt Şablonları"

Delivery: Email in exchange for signup
```

---

### Blog Launch Checklist

**Pre-Launch:**
- [ ] Blog template designed and coded
- [ ] 10 initial posts written and published
- [ ] SEO optimization confirmed
- [ ] Social sharing working
- [ ] Related posts algorithm working
- [ ] Search functionality (optional)
- [ ] RSS feed generated
- [ ] Sitemap includes blog posts
- [ ] Analytics tracking blog section

**Post-Launch Automation:**
- [ ] AI content generation pipeline setup
- [ ] Notion or CMS configured
- [ ] Auto-publishing scheduled
- [ ] Social media auto-sharing active
- [ ] Email newsletter automation
- [ ] Performance monitoring dashboard

---

# 🛠️ TECHNICAL SPECIFICATIONS

## Framework & Tools

**Core Stack:**
```
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod (validation)
- Lucide React (icons)
- Framer Motion (animations)
```

**Recommended Libraries:**
```
- next-themes (dark mode support - optional)
- react-intersection-observer (scroll animations)
- swiper (testimonial carousel)
- react-hot-toast (notifications)
- @next/mdx (MDX support for blog)
- next-mdx-remote (if using remote MDX)
- gray-matter (frontmatter parsing)
- reading-time (auto-calculate read time)
- rehype-highlight (code syntax highlighting)
- rehype-slug (auto-generate heading IDs)
- rehype-autolink-headings (clickable headings)
- remark-gfm (GitHub flavored markdown)
- feed (RSS feed generation)
```

**For Notion CMS Integration (Optional):**
```
- @notionhq/client (Official Notion API)
- notion-to-md (Convert Notion to Markdown)
- react-notion-x (Render Notion pages)
```

## File Structure

```
ajanslokal/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── blog/
│   │   ├── page.tsx (Blog listing)
│   │   ├── [slug]/
│   │   │   └── page.tsx (Individual post)
│   │   └── kategori/
│   │       └── [category]/
│   │           └── page.tsx (Category page)
│   └── components/
│       ├── Hero.tsx
│       ├── TrustBadges.tsx
│       ├── Services.tsx
│       ├── HowItWorks.tsx
│       ├── WhyChooseUs.tsx
│       ├── Pricing.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       ├── blog/
│       │   ├── BlogCard.tsx
│       │   ├── BlogHeader.tsx
│       │   ├── BlogSidebar.tsx
│       │   ├── TableOfContents.tsx
│       │   ├── RelatedPosts.tsx
│       │   ├── AuthorBox.tsx
│       │   └── ShareButtons.tsx
│       └── ui/
│           ├── Button.tsx
│           ├── Card.tsx
│           ├── Input.tsx
│           └── ...
├── content/
│   └── blog/
│       ├── google-business-profile-optimizasyonu.mdx
│       ├── yerel-seo-rehberi.mdx
│       └── ... (MDX blog posts)
├── public/
│   ├── logo.svg
│   ├── images/
│   │   ├── blog/
│   │   │   ├── featured/
│   │   │   └── inline/
│   │   └── og/
│   └── icons/
├── lib/
│   ├── utils.ts
│   ├── validations.ts
│   ├── blog.ts (Blog utilities)
│   ├── mdx.ts (MDX processing)
│   └── notion.ts (If using Notion CMS - optional)
├── types/
│   └── blog.ts (Blog post types)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Performance Requirements

**Core Web Vitals Targets:**
```
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- Performance Score: 90+
```

**Optimization Strategies:**
```
- Image optimization (Next.js Image component)
- Lazy loading for below-fold content
- Code splitting
- Font optimization (next/font)
- Minification and compression
```

## SEO Requirements

**Homepage Meta Tags (Turkish):**
```html
<title>ajanslokal - Türkiye'nin Yerel İşletmelerine Dijital Pazarlama Çözümleri</title>
<meta name="description" content="Google, Facebook, Instagram ve 60+ platformda işletmenizin görünürlüğünü artırın. Yapay zeka destekli yorum yönetimi, sosyal medya ve SEO hizmetleri." />
<meta name="keywords" content="dijital pazarlama, yerel seo, google business, sosyal medya yönetimi, yorum yönetimi, işletme listesi" />
```

**Blog Meta Tags (Per Post):**
```html
<title>[Post Title] | ajanslokal Blog</title>
<meta name="description" content="[Post excerpt - 150-160 chars]" />
<meta name="keywords" content="[post tags]" />
<link rel="canonical" href="https://ajanslokal.com/blog/[slug]" />
```

**Open Graph:**
```html
<!-- Homepage -->
<meta property="og:title" content="ajanslokal - Dijital Pazarlama Çözümleri" />
<meta property="og:description" content="Türk işletmeleri için yapay zeka destekli dijital pazarlama platformu" />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://ajanslokal.com" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="tr_TR" />

<!-- Blog Post -->
<meta property="og:title" content="[Post Title]" />
<meta property="og:description" content="[Post excerpt]" />
<meta property="og:image" content="[Featured image URL]" />
<meta property="og:url" content="https://ajanslokal.com/blog/[slug]" />
<meta property="og:type" content="article" />
<meta property="article:published_time" content="[ISO date]" />
<meta property="article:author" content="ajanslokal" />
<meta property="article:section" content="[Category]" />
<meta property="article:tag" content="[Tags]" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Post Title]" />
<meta name="twitter:description" content="[Post excerpt]" />
<meta name="twitter:image" content="[Featured image URL]" />
```

**Structured Data:**
```json
<!-- Organization -->
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ajanslokal",
  "url": "https://ajanslokal.com",
  "logo": "https://ajanslokal.com/logo.png",
  "description": "Türk işletmeleri için dijital pazarlama çözümleri",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TR"
  }
}

<!-- Blog Posting -->
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Post Title]",
  "description": "[Post excerpt]",
  "image": "[Featured image URL]",
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "author": {
    "@type": "Organization",
    "name": "ajanslokal"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ajanslokal",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ajanslokal.com/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://ajanslokal.com/blog/[slug]"
  }
}

<!-- Breadcrumb -->
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Ana Sayfa",
    "item": "https://ajanslokal.com"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://ajanslokal.com/blog"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "[Category]",
    "item": "https://ajanslokal.com/blog/kategori/[category]"
  },{
    "@type": "ListItem",
    "position": 4,
    "name": "[Post Title]"
  }]
}
```

**Sitemap Configuration:**
```xml
<!-- Include in sitemap.xml -->
- All blog posts with priority 0.7
- Blog category pages with priority 0.6
- Main blog page with priority 0.8
- Update frequency: weekly for active posts
- Include lastmod date from post frontmatter
```

**RSS Feed:**
```xml
<!-- Generate at /blog/rss.xml -->
- Include last 50 posts
- Full content or excerpt (choose based on strategy)
- Proper encoding for Turkish characters
- Auto-update on new posts
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

**Mobile Considerations:**
- Touch-friendly buttons (min 44px)
- Readable font sizes (min 16px)
- Optimized images for mobile
- Hamburger menu
- Stack sections vertically

## Accessibility (WCAG 2.1 AA)

**Requirements:**
```
- Semantic HTML5
- Proper heading hierarchy (H1 → H6)
- Alt text for all images
- Keyboard navigation support
- Focus indicators visible
- Color contrast ratios: 4.5:1 (text), 3:1 (UI)
- ARIA labels where needed
- Skip to content link
- Form labels and error messages
```

## Live Chat Integration

**Recommended:** Tawk.to (free, Turkish support)

**Installation:**
```html
<!-- Add before </body> -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/[YOUR_PROPERTY_ID]';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

**Configuration:**
- Position: Bottom right
- Color: Match brand (Electric Blue)
- Greeting: "Merhaba! Size nasıl yardımcı olabiliriz?"
- Offline message: "Şu anda çevrimdışıyız. Mesaj bırakın, size dönelim."

## Analytics Setup

**Google Analytics 4:**
```javascript
// Add to layout.tsx
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**Event Tracking:**
- Button clicks (CTA tracking)
- Form submissions
- Scroll depth
- Outbound links

## Form Handling

**Validation with Zod:**
```typescript
import { z } from 'zod'

const contactSchema = z.object({
  fullName: z.string().min(2, 'En az 2 karakter'),
  email: z.string().email('Geçerli bir e-posta girin'),
  phone: z.string().regex(/^0[0-9]{10}$/, 'Geçerli bir telefon numarası girin'),
  company: z.string().optional(),
  businessType: z.string().optional(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Lütfen KVKK metnini kabul edin')
})
```

**Submission Options:**
1. **Formspree** (recommended for MVP)
2. **EmailJS**
3. **Custom API route** (Next.js API)
4. **Google Forms** (with custom styling)

## Deployment

**Platform:** Vercel (recommended)

**Steps:**
1. Connect GitHub repository
2. Vercel auto-detects Next.js
3. Add environment variables (if any)
4. Deploy
5. Add custom domain (ajanslokal.com)

**Environment Variables:**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_TAWK_PROPERTY_ID=xxxxx
FORM_SUBMISSION_ENDPOINT=https://...
```

---

# 📝 CONTENT GUIDELINES

## Tone of Voice

**Brand Voice Characteristics:**
- **Güvenilir (Trustworthy):** Professional, fact-based, transparent
- **Yardımsever (Helpful):** Educational, supportive, solution-oriented
- **Enerjik (Energetic):** Active verbs, dynamic language, forward-moving
- **Açık (Clear):** Simple language, no jargon, easy to understand
- **Samimi (Friendly):** Warm but professional, approachable

**Writing Style:**
- Use active voice
- Short sentences (15-20 words)
- Short paragraphs (3-4 lines)
- Bullet points for features
- Numbers and data where possible
- Avoid technical jargon
- Use "siz" form (formal but friendly)
- Turkish business examples

**Words to Use:**
- Güçlendirmek (empower)
- Büyütmek (grow)
- Optimize etmek (optimize)
- Görünürlük (visibility)
- Başarı (success)
- Sonuç (results)
- Kolay (easy)
- Hızlı (fast)
- Güvenilir (reliable)

**Words to Avoid:**
- Karmaşık (complicated)
- Zor (difficult)
- Problem (problem - use "zorluk" or "fırsat")
- Ucuz (cheap - use "uygun fiyatlı")
- Technical English words unless necessary

## Call-to-Action Language

**Primary CTAs:**
- "Ücretsiz Demo Talep Et" (preferred)
- "Hemen Başla"
- "14 Gün Ücretsiz Dene"
- "Demo İzle"

**Secondary CTAs:**
- "Daha Fazla Bilgi"
- "Hizmetleri Keşfet"
- "Fiyatları Görüntüle"
- "Bize Ulaşın"

**Button Copy Best Practices:**
- Action-oriented verbs
- Clear benefit
- Sense of urgency (optional)
- 2-4 words maximum

---

# 🤖 BLOG AUTOMATION CODE EXAMPLES

## MDX Configuration (next.config.js)

```javascript
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require('remark-gfm'),
    ],
    rehypePlugins: [
      require('rehype-slug'),
      require('rehype-autolink-headings'),
      require('rehype-highlight'),
    ],
  },
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
})
```

## Blog Post Type Definition (types/blog.ts)

```typescript
export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  author: string
  date: string
  featured_image: string
  featured: boolean
  read_time: number
  content: string
}

export interface BlogCategory {
  name: string
  slug: string
  description: string
  count: number
  color: string
}
```

## Blog Utilities (lib/blog.ts)

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug,
        content,
        ...data,
        read_time: Math.ceil(readingTime(content).minutes),
      } as BlogPost
    })

  return allPostsData.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data,
    read_time: Math.ceil(readingTime(content).minutes),
  } as BlogPost
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category)
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(slug)
  if (!currentPost) return []
  
  return getAllPosts()
    .filter(post => 
      post.slug !== slug && 
      post.category === currentPost.category
    )
    .slice(0, limit)
}

export function getCategories(): BlogCategory[] {
  const posts = getAllPosts()
  const categories = new Map<string, number>()
  
  posts.forEach(post => {
    const count = categories.get(post.category) || 0
    categories.set(post.category, count + 1)
  })
  
  return Array.from(categories.entries()).map(([slug, count]) => ({
    name: getCategoryName(slug),
    slug,
    description: getCategoryDescription(slug),
    count,
    color: getCategoryColor(slug),
  }))
}

function getCategoryName(slug: string): string {
  const names: Record<string, string> = {
    'google-business-profile': 'Google Business Profile',
    'yerel-seo': 'Yerel SEO',
    'sosyal-medya': 'Sosyal Medya',
    'itibar-yonetimi': 'İtibar Yönetimi',
    'dijital-pazarlama': 'Dijital Pazarlama',
    'isletme-ipuclari': 'İşletme İpuçları',
  }
  return names[slug] || slug
}

function getCategoryDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'google-business-profile': 'Google Business Profile optimizasyonu ve yönetimi',
    'yerel-seo': 'Yerel arama motoru optimizasyonu stratejileri',
    'sosyal-medya': 'Sosyal medya pazarlama ve içerik stratejileri',
    'itibar-yonetimi': 'Online itibar ve yorum yönetimi',
    'dijital-pazarlama': 'Dijital pazarlama stratejileri ve trendler',
    'isletme-ipuclari': 'İşletme büyütme ve yönetim ipuçları',
  }
  return descriptions[slug] || ''
}

function getCategoryColor(slug: string): string {
  const colors: Record<string, string> = {
    'google-business-profile': '#0066FF',
    'yerel-seo': '#10B981',
    'sosyal-medya': '#FF6B6B',
    'itibar-yonetimi': '#F59E0B',
    'dijital-pazarlama': '#8B5CF6',
    'isletme-ipuclari': '#00D9FF',
  }
  return colors[slug] || '#64748B'
}
```

## AI Content Generation Script (scripts/generate-post.js)

```javascript
// Node.js script to generate blog posts using Claude API
const Anthropic = require('@anthropic-ai/sdk')
const fs = require('fs')
const path = require('path')

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

async function generateBlogPost(topic, category, keywords) {
  const prompt = `You are a Turkish digital marketing expert writing for small business owners.

Topic: ${topic}
Category: ${category}
Target Keywords: ${keywords.join(', ')}
Word Count: 1500 words

Article Requirements:
1. Write in Turkish (professional but friendly tone, use "siz" form)
2. Target audience: Turkish SMB owners, non-technical
3. Structure:
   - Engaging introduction (hook + problem + promise)
   - 4-5 main sections with H2 headings
   - Actionable tips and examples
   - Pro tips in highlighted boxes
   - Real Turkish business examples (restaurants, shops, etc.)
   - Conclusion with clear next steps
4. SEO:
   - Primary keyword in first paragraph
   - Keyword variations in H2s
   - Natural keyword density (1-2%)
   - Include LSI keywords
5. Style:
   - Short paragraphs (3-4 lines)
   - Bullet points for lists
   - Include 2-3 statistics or data points
   - Conversational but authoritative
6. CTA: End with demo request

Format: Return ONLY the markdown content with frontmatter in this exact format:

---
title: "Article Title Here"
slug: "url-friendly-slug"
description: "Meta description 150-160 characters"
category: "${category}"
tags: ["tag1", "tag2", "tag3"]
author: "ajanslokal Ekibi"
date: "${new Date().toISOString().split('T')[0]}"
featured_image: "/images/blog/${category}/placeholder.jpg"
featured: false
---

[Article content here]

Do not include any text before or after the markdown. Start directly with the frontmatter.`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 4000,
    messages: [{
      role: 'user',
      content: prompt
    }]
  })

  return message.content[0].text
}

async function saveBlogPost(content, filename) {
  const postsDir = path.join(process.cwd(), 'content', 'blog')
  
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true })
  }
  
  const filepath = path.join(postsDir, `${filename}.mdx`)
  fs.writeFileSync(filepath, content, 'utf8')
  
  console.log(`✅ Blog post saved: ${filepath}`)
}

// Example usage
async function main() {
  const posts = [
    {
      topic: 'Google Business Profile Optimizasyonu: 2024 Tam Rehberi',
      category: 'google-business-profile',
      keywords: ['google business profile', 'google işletme profili', 'yerel seo', 'google haritalar'],
      filename: 'google-business-profile-optimizasyonu-2024'
    },
    {
      topic: 'Yakınımdaki Aramalarda İlk Sırada Çıkmanın 10 Yolu',
      category: 'yerel-seo',
      keywords: ['yakınımdaki', 'yerel seo', 'yerel arama', 'google maps seo'],
      filename: 'yakinımdaki-aramalarda-ilk-sirada-cikma'
    },
    // Add more posts here
  ]

  for (const post of posts) {
    console.log(`\n📝 Generating: ${post.topic}`)
    const content = await generateBlogPost(post.topic, post.category, post.keywords)
    await saveBlogPost(content, post.filename)
    
    // Wait 2 seconds between requests to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  
  console.log('\n🎉 All posts generated successfully!')
}

main().catch(console.error)
```

## Notion CMS Integration (lib/notion.ts)

```typescript
// Optional: If using Notion as CMS
import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const n2m = new NotionToMarkdown({ notionClient: notion })

const DATABASE_ID = process.env.NOTION_DATABASE_ID!

export async function getPublishedPosts() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published'
      }
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending'
      }
    ]
  })

  return response.results
}

export async function getPageContent(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId)
  const mdString = n2m.toMarkdownString(mdblocks)
  return mdString.parent
}

export async function getPostBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug
      }
    }
  })

  if (response.results.length === 0) {
    return null
  }

  const page = response.results[0]
  const content = await getPageContent(page.id)

  return {
    ...parseNotionPage(page),
    content
  }
}

function parseNotionPage(page: any): BlogPost {
  return {
    slug: page.properties.Slug.rich_text[0]?.plain_text || '',
    title: page.properties.Title.title[0]?.plain_text || '',
    description: page.properties.Description.rich_text[0]?.plain_text || '',
    category: page.properties.Category.select?.name || '',
    tags: page.properties.Tags.multi_select.map((tag: any) => tag.name),
    author: page.properties.Author.rich_text[0]?.plain_text || 'ajanslokal Ekibi',
    date: page.properties.Date.date?.start || '',
    featured_image: page.properties['Featured Image'].files[0]?.file?.url || '',
    featured: page.properties.Featured.checkbox || false,
    read_time: 0, // Calculate after getting content
    content: ''
  }
}
```

## Automated Publishing GitHub Action (.github/workflows/publish-blog.yml)

```yaml
name: Auto Publish Blog Posts

on:
  schedule:
    # Run daily at 9 AM Turkish time (6 AM UTC)
    - cron: '0 6 * * *'
  workflow_dispatch: # Allow manual trigger

jobs:
  publish:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Check for scheduled posts
        run: node scripts/check-scheduled-posts.js
        env:
          NOTION_API_KEY: ${{ secrets.NOTION_API_KEY }}
          NOTION_DATABASE_ID: ${{ secrets.NOTION_DATABASE_ID }}
      
      - name: Commit new posts
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add content/blog/
          git diff --quiet && git diff --staged --quiet || git commit -m "Auto-publish scheduled blog posts"
      
      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
      
      # Vercel will automatically deploy after push
```

## RSS Feed Generation (app/blog/rss.xml/route.ts)

```typescript
import { getAllPosts } from '@/lib/blog'
import RSS from 'rss'

export async function GET() {
  const posts = getAllPosts()
  
  const feed = new RSS({
    title: 'ajanslokal Blog',
    description: 'Dijital pazarlama, yerel SEO ve işletme büyütme stratejileri',
    site_url: 'https://ajanslokal.com',
    feed_url: 'https://ajanslokal.com/blog/rss.xml',
    language: 'tr',
    pubDate: new Date(),
    copyright: `© ${new Date().getFullYear()} ajanslokal`,
  })

  posts.forEach(post => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://ajanslokal.com/blog/${post.slug}`,
      date: post.date,
      categories: [post.category, ...post.tags],
      author: post.author,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
```

## Sitemap Generation for Blog (app/sitemap.ts)

```typescript
import { getAllPosts, getCategories } from '@/lib/blog'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const categories = getCategories()
  
  const blogPosts = posts.map(post => ({
    url: `https://ajanslokal.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  const categoryPages = categories.map(category => ({
    url: `https://ajanslokal.com/blog/kategori/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: 'https://ajanslokal.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://ajanslokal.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...blogPosts,
    ...categoryPages,
  ]
}
```

---

# ✅ FINAL CHECKLIST

## Before Launch:

### Content
- [ ] All Turkish text proofread
- [ ] No lorem ipsum placeholders
- [ ] Contact information added
- [ ] Social media links working
- [ ] All CTAs functional
- [ ] Legal pages ready (KVKK, Privacy, Terms)
- [ ] 10+ initial blog posts published
- [ ] Blog categories configured
- [ ] Author bio written

### Design
- [ ] Brand colors applied consistently
- [ ] Typography hierarchy correct
- [ ] All images optimized
- [ ] Icons consistent style
- [ ] Mobile responsive tested
- [ ] Animations smooth (not jarring)
- [ ] Blog layout responsive
- [ ] Featured images for all posts

### Technical
- [ ] SEO meta tags complete (homepage + blog)
- [ ] Open Graph tags added (all pages)
- [ ] Favicon added
- [ ] Google Analytics installed
- [ ] Live chat integrated
- [ ] Form submission tested
- [ ] SSL certificate active
- [ ] Core Web Vitals passing
- [ ] Accessibility tested (WAVE/axe)
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] RSS feed working
- [ ] Sitemap includes blog posts
- [ ] Structured data for blog posts
- [ ] MDX rendering correctly
- [ ] Related posts algorithm working

### Blog Automation
- [ ] Content generation script tested
- [ ] Notion CMS connected (if using)
- [ ] Auto-publishing workflow configured
- [ ] Image sourcing automated
- [ ] Social sharing auto-configured
- [ ] Email newsletter integration (optional)

### Performance
- [ ] Lighthouse score 90+
- [ ] Images lazy loaded
- [ ] Fonts optimized
- [ ] Code minified
- [ ] Load time < 2s (homepage)
- [ ] Load time < 3s (blog posts)
- [ ] Blog images WebP format

### Legal
- [ ] KVKK compliant
- [ ] Cookie consent (if needed)
- [ ] Privacy policy
- [ ] Terms of service
- [ ] Contact information accurate
- [ ] Copyright notices on blog

---

# 🎯 SUCCESS METRICS

**Homepage Metrics:**
- Page load time
- Bounce rate
- Demo request conversion rate
- Form completion rate
- Time on page
- Scroll depth
- CTA click-through rate
- Mobile vs desktop traffic
- Traffic sources

**Blog Metrics:**
- Posts published per week
- Organic traffic to blog
- Average time on blog posts
- Bounce rate (target: <50%)
- Social shares per post
- Comments/engagement
- Email subscribers from blog
- Blog-to-demo conversion rate
- Top performing posts
- Top performing categories
- Internal link click-through
- Featured snippet appearances
- Keyword rankings (track top 20)

**Target Goals:**
- **Homepage:** 3%+ conversion rate (demo requests)
- **Homepage:** < 40% bounce rate
- **Homepage:** 2+ minutes average session
- **Homepage:** 70%+ scroll depth
- **Blog:** 500+ monthly visitors (Month 3)
- **Blog:** 2,000+ monthly visitors (Month 6)
- **Blog:** 1%+ blog-to-demo conversion
- **Blog:** 3+ minutes average read time
- **Blog:** 5+ organic keywords ranking top 10 (Month 6)

---

# 📞 NEXT STEPS AFTER DEVELOPMENT

1. **Domain Setup:** Point ajanslokal.com to Vercel
2. **Email Setup:** Configure info@ajanslokal.com
3. **Analytics:** Add GA4 and set up goals (including blog events)
4. **Live Chat:** Configure Tawk.to with Turkish greeting
5. **Form Testing:** Test all form submissions
6. **SEO:** Submit sitemap to Google Search Console
7. **Social Media:** Create and link social profiles
8. **Monitoring:** Set up uptime monitoring (UptimeRobot)
9. **Backup:** Configure automated backups
10. **Blog Automation:** Set up content generation pipeline
11. **Content Calendar:** Plan first month of blog posts
12. **AI Integration:** Configure Claude API for content generation
13. **Image Pipeline:** Set up Unsplash/Canva automation
14. **Newsletter:** Set up email list (Mailchimp/SendGrid)
15. **Launch:** Soft launch → gather feedback → official launch

## Blog-Specific Setup

1. **Generate Initial Content:**
   - Run AI script to generate 10-15 posts
   - Review and edit for brand voice
   - Add featured images
   - Schedule publishing

2. **Notion CMS Setup (Optional):**
   - Create Notion database with template
   - Configure API integration
   - Set up auto-sync workflow
   - Train team on Notion usage

3. **Automation Pipeline:**
   - Set up GitHub Actions for auto-publishing
   - Configure Zapier/Make for social sharing
   - Set up RSS to email automation
   - Test end-to-end workflow

4. **Content Strategy:**
   - Document content pillars
   - Create editorial calendar
   - Set up keyword tracking
   - Plan content upgrades/lead magnets

5. **Promotion:**
   - Share initial posts on social media
   - Submit to Turkish marketing communities
   - Reach out to industry contacts
   - Set up Google News submission

---

# 🚀 DEPLOYMENT INSTRUCTIONS

## Vercel Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com
   - "Import Project"
   - Select your GitHub repo
   - Click "Deploy"

3. **Add Custom Domain**
   - Project Settings → Domains
   - Add "ajanslokal.com"
   - Configure DNS (provided by Vercel)

4. **Configure Environment Variables**
   - Settings → Environment Variables
   - Add any API keys or secrets

---

# 📋 ADDITIONAL NOTES

## Future Enhancements (Phase 2+)

**Blog Enhancements:**
- Comment system (Disqus or custom)
- Author profiles (if multiple authors)
- Guest posting system
- Content upgrades/lead magnets
- Advanced search with filters
- Reading progress bar
- Estimated reading time
- Print-friendly version
- Audio version (text-to-speech)
- Translations (English, Kurdish)

**Interactive Tools:**
- ROI calculator
- SEO score checker
- Review sentiment analyzer
- Free business listing scan
- Social media audit tool

**Customer Portal:**
- Login/registration
- Dashboard preview
- Trial account access
- Client testimonial submission

**Multi-language:**
- English version (for international expansion)
- Kurdish (if targeting Southeast Turkey)

**Advanced Features:**
- Webinars/events page
- Case studies section
- Partner directory
- Knowledge base
- Video content library

## Brand Evolution

**As You Grow:**
- Develop brand guidelines document
- Create brand asset library
- Establish content calendar
- Build design system
- Document voice & tone

---

# 🎨 DESIGN INSPIRATION

**Reference Sites (for style, not content):**
- Stripe.com (clean, modern SaaS)
- Linear.app (bold, energetic)
- Notion.so (friendly, powerful)
- Webflow.com (design-forward)
- Intercom.com (clear messaging)

**Turkish Market References:**
- Getir.com (local, energetic)
- Trendyol.com (trustworthy, vibrant)
- Iyzico.com (modern fintech)

---

**END OF BRIEF**

This document contains everything needed to build ajanslokal.com.
Pass this entire document to Google Antigravity or any AI development tool.

Good luck with your launch! 🚀
