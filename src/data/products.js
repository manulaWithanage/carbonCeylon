// Product catalog for CarbonCeylon
// Prices are stored in USD (base currency)

export const products = [
    {
        id: 1,
        name: "Royal Blue Sapphire Ring",
        slug: "royal-blue-sapphire-ring",
        category: "Rings",
        gemType: "Sapphire",
        priceUSD: 12500,
        description: "A stunning 2.5-carat Ceylon Blue Sapphire set in 18k white gold. The sapphire displays exceptional clarity and a deep, velvety blue color that has made Ceylon sapphires world-renowned.",
        specs: {
            gemWeight: "2.5 carats",
            metal: "18k White Gold",
            origin: "Sri Lanka (Ceylon)",
            clarity: "VVS",
            treatment: "Unheated"
        },
        images: ["/images/hero-ring.png"],
        featured: true
    },
    {
        id: 2,
        name: "Crimson Radiance Ring",
        slug: "crimson-radiance-ring",
        category: "Rings",
        gemType: "Ruby",
        priceUSD: 8200,
        description: "A captivating 1.8-carat Burmese Ruby set in 18k rose gold. This pigeon blood ruby exhibits an intense red color with excellent brilliance.",
        specs: {
            gemWeight: "1.8 carats",
            metal: "18k Rose Gold",
            origin: "Myanmar (Burma)",
            clarity: "VS",
            treatment: "Heated"
        },
        images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800"],
        featured: true
    },
    {
        id: 3,
        name: "Ocean's Tear Pendant",
        slug: "oceans-tear-pendant",
        category: "Pendants",
        gemType: "Sapphire",
        priceUSD: 5400,
        description: "An elegant 1.2-carat Ceylon Sapphire pendant in 18k white gold with diamond accents. The teardrop cut maximizes the stone's natural brilliance.",
        specs: {
            gemWeight: "1.2 carats",
            metal: "18k White Gold",
            origin: "Sri Lanka (Ceylon)",
            clarity: "VS",
            treatment: "Unheated"
        },
        images: ["https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800"],
        featured: true
    },
    {
        id: 4,
        name: "Emerald Envy Earrings",
        slug: "emerald-envy-earrings",
        category: "Earrings",
        gemType: "Emerald",
        priceUSD: 6800,
        description: "A pair of 1.5-carat Colombian Emerald drop earrings in 18k yellow gold. These emeralds showcase a rich, vivid green with excellent transparency.",
        specs: {
            gemWeight: "1.5 carats each",
            metal: "18k Yellow Gold",
            origin: "Colombia",
            clarity: "VS",
            treatment: "Minor Oil"
        },
        images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800"],
        featured: true
    },
    {
        id: 5,
        name: "Pink Star Bracelet",
        slug: "pink-star-bracelet",
        category: "Bracelets",
        gemType: "Pink Sapphire",
        priceUSD: 9500,
        description: "A delicate tennis bracelet featuring 15 pink Ceylon sapphires totaling 4.5 carats, set in platinum. Each stone is hand-selected for color consistency.",
        specs: {
            gemWeight: "4.5 carats total",
            metal: "Platinum",
            origin: "Sri Lanka (Ceylon)",
            clarity: "VS",
            treatment: "Unheated"
        },
        images: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=800"],
        featured: false
    },
    {
        id: 6,
        name: "Golden Amber Necklace",
        slug: "golden-amber-necklace",
        category: "Necklaces",
        gemType: "Yellow Sapphire",
        priceUSD: 7200,
        description: "A striking 3-carat Yellow Ceylon Sapphire pendant with a graduated diamond halo, set in 18k yellow gold on a delicate chain.",
        specs: {
            gemWeight: "3 carats",
            metal: "18k Yellow Gold",
            origin: "Sri Lanka (Ceylon)",
            clarity: "VVS",
            treatment: "Unheated"
        },
        images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"],
        featured: false
    }
];

export const categories = ["All", "Rings", "Pendants", "Earrings", "Bracelets", "Necklaces"];
export const gemTypes = ["All", "Sapphire", "Ruby", "Emerald", "Pink Sapphire", "Yellow Sapphire"];

export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getFeaturedProducts = () => products.filter(p => p.featured);
