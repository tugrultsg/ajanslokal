import { BlogPost, BlogCategory } from "@/types/blog";

// Sample blog posts data (in production, this would come from MDX files or a CMS)
const blogPosts: BlogPost[] = [
    {
        slug: "google-business-profile-optimizasyonu-2024",
        title: "Google Business Profile Optimizasyonu: 2024 Tam Rehberi",
        description:
            "Google Business Profile'ınızı optimize ederek yerel aramalarda öne çıkın. Adım adım rehberimizle işletmenizin görünürlüğünü artırın.",
        category: "google-business-profile",
        tags: ["google-business", "yerel-seo", "optimizasyon"],
        author: "ajanslokal Ekibi",
        date: "2024-12-15",
        featured_image: "/images/blog/gbp-optimization.jpg",
        featured: true,
        read_time: 8,
        content: `
## Giriş

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

**İşletmenizi dijital dünyada büyütmeye hazır mısınız?** Demo talep edin ve ajanslokal ile başlayın.
    `,
    },
    {
        slug: "yerel-seo-nedir-2024-rehberi",
        title: "Yerel SEO Nedir? 2024 Tam Rehberi",
        description:
            "Yerel SEO nedir, nasıl çalışır? İşletmenizi yerel aramalarda öne çıkarmak için bilmeniz gereken her şey bu rehberde.",
        category: "yerel-seo",
        tags: ["yerel-seo", "seo", "dijital-pazarlama"],
        author: "ajanslokal Ekibi",
        date: "2024-12-10",
        featured_image: "/images/blog/local-seo.jpg",
        featured: false,
        read_time: 10,
        content: `
## Giriş

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

Yerel SEO, küçük ve orta ölçekli işletmeler için en etkili dijital pazarlama stratejilerinden biridir.
    `,
    },
    {
        slug: "sosyal-medya-icerik-stratejisi",
        title: "KOBİ'ler İçin Sosyal Medya İçerik Stratejisi",
        description:
            "Küçük işletmeniz için etkili bir sosyal medya içerik stratejisi oluşturun. Pratik ipuçları ve örneklerle dolu rehber.",
        category: "sosyal-medya",
        tags: ["sosyal-medya", "içerik-stratejisi", "kobi"],
        author: "ajanslokal Ekibi",
        date: "2024-12-05",
        featured_image: "/images/blog/social-media.jpg",
        featured: false,
        read_time: 7,
        content: `
## Giriş

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

Tutarlı bir içerik stratejisi, sosyal medyada başarının anahtarıdır.
    `,
    },
];

// Category metadata
const categoryData: Record<string, { name: string; description: string; color: string }> = {
    "google-business-profile": {
        name: "Google Business Profile",
        description: "Google Business Profile optimizasyonu ve yönetimi hakkında rehberler",
        color: "#0066FF",
    },
    "yerel-seo": {
        name: "Yerel SEO",
        description: "Yerel arama motoru optimizasyonu stratejileri ve ipuçları",
        color: "#10B981",
    },
    "sosyal-medya": {
        name: "Sosyal Medya",
        description: "Sosyal medya pazarlama ve içerik stratejileri",
        color: "#FF6B6B",
    },
    "itibar-yonetimi": {
        name: "İtibar Yönetimi",
        description: "Online itibar ve yorum yönetimi rehberleri",
        color: "#F59E0B",
    },
    "dijital-pazarlama": {
        name: "Dijital Pazarlama",
        description: "Dijital pazarlama stratejileri ve trendler",
        color: "#8B5CF6",
    },
};

export function getAllPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
    return blogPosts.find((post) => post.slug === slug) || null;
}

export function getPostsByCategory(category: string): BlogPost[] {
    return getAllPosts().filter((post) => post.category === category);
}

export function getFeaturedPost(): BlogPost | null {
    return blogPosts.find((post) => post.featured) || blogPosts[0] || null;
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
    const currentPost = getPostBySlug(slug);
    if (!currentPost) return [];

    return getAllPosts()
        .filter(
            (post) => post.slug !== slug && post.category === currentPost.category
        )
        .slice(0, limit);
}

export function getCategories(): BlogCategory[] {
    const posts = getAllPosts();
    const categories = new Map<string, number>();

    posts.forEach((post) => {
        const count = categories.get(post.category) || 0;
        categories.set(post.category, count + 1);
    });

    return Array.from(categories.entries()).map(([slug, count]) => ({
        slug,
        name: categoryData[slug]?.name || slug,
        description: categoryData[slug]?.description || "",
        color: categoryData[slug]?.color || "#64748B",
        count,
    }));
}

export function getCategoryInfo(slug: string): BlogCategory | null {
    const data = categoryData[slug];
    if (!data) return null;

    const count = getAllPosts().filter((post) => post.category === slug).length;

    return {
        slug,
        name: data.name,
        description: data.description,
        color: data.color,
        count,
    };
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}
