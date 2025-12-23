// Migration script to seed initial blog content to Sanity
// Run with: node --experimental-specifier-resolution=node scripts/seed-sanity.mjs

import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'iiylx5q1',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
});

// Categories to create
const categories = [
    {
        _type: 'category',
        _id: 'category-google-business-profile',
        name: 'Google Business Profile',
        slug: { current: 'google-business-profile' },
        description: 'Google Business Profile optimizasyonu ve yönetimi hakkında rehberler',
        color: '#0066FF',
    },
    {
        _type: 'category',
        _id: 'category-yerel-seo',
        name: 'Yerel SEO',
        slug: { current: 'yerel-seo' },
        description: 'Yerel arama motoru optimizasyonu stratejileri ve ipuçları',
        color: '#10B981',
    },
    {
        _type: 'category',
        _id: 'category-sosyal-medya',
        name: 'Sosyal Medya',
        slug: { current: 'sosyal-medya' },
        description: 'Sosyal medya pazarlama ve içerik stratejileri',
        color: '#FF6B6B',
    },
    {
        _type: 'category',
        _id: 'category-itibar-yonetimi',
        name: 'İtibar Yönetimi',
        slug: { current: 'itibar-yonetimi' },
        description: 'Online itibar ve yorum yönetimi rehberleri',
        color: '#F59E0B',
    },
    {
        _type: 'category',
        _id: 'category-dijital-pazarlama',
        name: 'Dijital Pazarlama',
        slug: { current: 'dijital-pazarlama' },
        description: 'Dijital pazarlama stratejileri ve trendler',
        color: '#8B5CF6',
    },
];

// Posts to create
const posts = [
    {
        _type: 'post',
        title: 'Google Business Profile Optimizasyonu: 2024 Tam Rehberi',
        slug: { current: 'google-business-profile-optimizasyonu-2024' },
        description: "Google Business Profile'ınızı optimize ederek yerel aramalarda öne çıkın. Adım adım rehberimizle işletmenizin görünürlüğünü artırın.",
        category: { _type: 'reference', _ref: 'category-google-business-profile' },
        tags: ['google-business', 'yerel-seo', 'optimizasyon'],
        author: 'ajanslokal Ekibi',
        publishedAt: '2024-12-15T10:00:00Z',
        featured: true,
        readTime: 8,
        content: `## Giriş

Google Business Profile (GBP), yerel işletmeler için en önemli dijital varlıklardan biridir. Doğru optimize edildiğinde, "yakınımdaki" aramalarında üst sıralarda çıkmanızı sağlar.

## Neden Google Business Profile Önemli?

Tüketicilerin %46'sı yerel bilgi aramak için Google'ı kullanıyor. İşletmenizin GBP profili optimize edilmemişse, potansiyel müşterilerinizi rakiplerinize kaptırıyor olabilirsiniz.

## Adım 1: Temel Bilgileri Tamamlayın

İşletme adı, adres, telefon numarası ve web sitesi bilgilerinizin eksiksiz ve tutarlı olduğundan emin olun. Bu bilgiler NAP (Name, Address, Phone) tutarlılığı olarak bilinir.

## Adım 2: Kategorileri Doğru Seçin

Ana kategorinizi dikkatli seçin ve ek kategorilerle destekleyin. Örneğin, bir restoran "Restoran" ana kategorisi altında "Pizza Restoranı", "İtalyan Restoranı" gibi ek kategoriler ekleyebilir.

## Adım 3: Görselleri Güncelleyin

Yüksek kaliteli fotoğraflar ekleyin. Dış cephe, iç mekan, ürünler ve ekip fotoğrafları müşterilerin güvenini artırır.

## Önemli Noktalar

- NAP tutarlılığını koruyun
- Haftalık Google Posts paylaşın
- Yorumlara hızlı yanıt verin
- Fotoğrafları düzenli güncelleyin

## Sonuç

Google Business Profile optimizasyonu sürekli bir süreçtir. Düzenli güncellemeler ve etkileşim, yerel aramalarındaki sıralamanızı önemli ölçüde iyileştirir.

**İşletmenizi dijital dünyada büyütmeye hazır mısınız?** Demo talep edin ve ajanslokal ile başlayın.`,
    },
    {
        _type: 'post',
        title: 'Yerel SEO Nedir? 2024 Tam Rehberi',
        slug: { current: 'yerel-seo-nedir-2024-rehberi' },
        description: 'Yerel SEO nedir, nasıl çalışır? İşletmenizi yerel aramalarda öne çıkarmak için bilmeniz gereken her şey bu rehberde.',
        category: { _type: 'reference', _ref: 'category-yerel-seo' },
        tags: ['yerel-seo', 'seo', 'dijital-pazarlama'],
        author: 'ajanslokal Ekibi',
        publishedAt: '2024-12-10T10:00:00Z',
        featured: false,
        readTime: 10,
        content: `## Giriş

Yerel SEO, işletmenizin belirli bir coğrafi bölgede arama sonuçlarında görünürlüğünü artırmaya odaklanan bir dijital pazarlama stratejisidir.

## Yerel SEO Neden Önemli?

- Mobil aramaların %30'u konum ile ilgili
- "Yakınımdaki" aramalar son 5 yılda 5 kat arttı
- Yerel aramaların %78'i 24 saat içinde bir satın almaya yol açıyor

## Yerel SEO'nun Temel Unsurları

### 1. Google Business Profile
İşletmenizin Google'daki dijital vitrini.

### 2. Yerel Listeler
Yandex, Apple Maps, Facebook ve diğer platformlardaki varlığınız.

### 3. Yorum Yönetimi
Müşteri yorumları ve puanlamaların yönetimi.

### 4. Yerel Anahtar Kelimeler
"İstanbul restoran" gibi lokasyon bazlı aramalar.

## Sonuç

Yerel SEO, küçük ve orta ölçekli işletmeler için en etkili dijital pazarlama stratejilerinden biridir.`,
    },
    {
        _type: 'post',
        title: 'KOBİ\'ler İçin Sosyal Medya İçerik Stratejisi',
        slug: { current: 'sosyal-medya-icerik-stratejisi' },
        description: 'Küçük işletmeniz için etkili bir sosyal medya içerik stratejisi oluşturun. Pratik ipuçları ve örneklerle dolu rehber.',
        category: { _type: 'reference', _ref: 'category-sosyal-medya' },
        tags: ['sosyal-medya', 'içerik-stratejisi', 'kobi'],
        author: 'ajanslokal Ekibi',
        publishedAt: '2024-12-05T10:00:00Z',
        featured: false,
        readTime: 7,
        content: `## Giriş

Sosyal medya, küçük işletmeler için müşterilerle doğrudan bağlantı kurmanın en etkili yollarından biridir.

## Hangi Platformları Kullanmalısınız?

Her platform farklı bir kitleye hitap eder:

- **Instagram**: Görsel ağırlıklı işletmeler için ideal
- **Facebook**: Geniş yaş yelpazesi, yerel topluluklar
- **LinkedIn**: B2B ve profesyonel hizmetler

## İçerik Türleri

1. Ürün/hizmet tanıtımları
2. Müşteri hikayeleri
3. Eğitici içerikler
4. Perde arkası paylaşımlar
5. Kampanya duyuruları

## Önemli Noktalar

- Düzenli paylaşım yapın
- Takipçilerinizle etkileşime girin
- Hashtag kullanın
- Analitikleri takip edin

## Sonuç

Tutarlı bir içerik stratejisi, sosyal medyada başarının anahtarıdır.`,
    },
];

async function seed() {
    console.log('🌱 Starting Sanity seed...\n');

    // Create categories
    console.log('📁 Creating categories...');
    for (const category of categories) {
        try {
            await client.createOrReplace(category);
            console.log(`  ✓ Created category: ${category.name}`);
        } catch (error) {
            console.error(`  ✗ Error creating category ${category.name}:`, error.message);
        }
    }

    // Create posts
    console.log('\n📝 Creating posts...');
    for (const post of posts) {
        try {
            await client.create(post);
            console.log(`  ✓ Created post: ${post.title}`);
        } catch (error) {
            console.error(`  ✗ Error creating post ${post.title}:`, error.message);
        }
    }

    console.log('\n✅ Seed complete!');
}

seed().catch(console.error);
