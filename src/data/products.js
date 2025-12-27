// Product catalog for CarbonCeylon
// Prices are stored in USD (base currency)

// LOOSE GEMSTONES
export const gemstones = [
    {
        id: 'gem-1',
        type: 'gemstone',
        name: "Royal Blue Sapphire",
        slug: "royal-blue-sapphire-3ct",
        gemType: "Sapphire",
        carat: 3.2,
        origin: "Sri Lanka (Ceylon)",
        color: "Royal Blue",
        clarity: "VVS - Eye Clean",
        treatment: "Unheated",
        certificate: "GIA",
        shape: "Oval",
        priceUSD: 28500,
        description: "An exceptional 3.2-carat unheated Ceylon Blue Sapphire exhibiting the coveted 'Royal Blue' color. GIA certified with outstanding clarity and brilliance.",
        images: ["https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800"],
        featured: true
    },
    {
        id: 'gem-2',
        type: 'gemstone',
        name: "Padparadscha Sapphire",
        slug: "padparadscha-sapphire-2ct",
        gemType: "Padparadscha",
        carat: 2.1,
        origin: "Sri Lanka (Ceylon)",
        color: "Pink-Orange",
        clarity: "VS - Eye Clean",
        treatment: "Unheated",
        certificate: "GRS",
        shape: "Cushion",
        priceUSD: 45000,
        description: "The rarest of all sapphires - a natural Padparadscha displaying the perfect lotus flower color. GRS certified, unheated, and exceptionally rare.",
        images: ["https://images.unsplash.com/photo-1551122087-f99a4b5e2b38?auto=format&fit=crop&q=80&w=800"],
        featured: true
    },
    {
        id: 'gem-3',
        type: 'gemstone',
        name: "Pigeon Blood Ruby",
        slug: "pigeon-blood-ruby-2ct",
        gemType: "Ruby",
        carat: 1.8,
        origin: "Myanmar (Burma)",
        color: "Pigeon Blood Red",
        clarity: "VS",
        treatment: "Heated",
        certificate: "Gübelin",
        shape: "Oval",
        priceUSD: 35000,
        description: "A stunning Burmese Ruby exhibiting the highly prized 'Pigeon Blood' color. Certified by Gübelin laboratory with exceptional saturation.",
        images: ["https://images.unsplash.com/photo-1599458252573-56ae36120de1?auto=format&fit=crop&q=80&w=800"],
        featured: true
    },
    {
        id: 'gem-4',
        type: 'gemstone',
        name: "Colombian Emerald",
        slug: "colombian-emerald-4ct",
        gemType: "Emerald",
        carat: 4.2,
        origin: "Colombia (Muzo)",
        color: "Vivid Green",
        clarity: "VS - Minor Garden",
        treatment: "Minor Oil",
        certificate: "SSEF",
        shape: "Emerald Cut",
        priceUSD: 52000,
        description: "A magnificent Colombian Emerald from the legendary Muzo mines. Displays rich, vivid green color with exceptional transparency.",
        images: ["https://images.unsplash.com/photo-1599458252573-56ae36120de1?auto=format&fit=crop&q=80&w=800"],
        featured: false
    },
    {
        id: 'gem-5',
        type: 'gemstone',
        name: "Yellow Sapphire",
        slug: "yellow-sapphire-5ct",
        gemType: "Yellow Sapphire",
        carat: 5.1,
        origin: "Sri Lanka (Ceylon)",
        color: "Canary Yellow",
        clarity: "VVS - Loupe Clean",
        treatment: "Unheated",
        certificate: "GIA",
        shape: "Cushion",
        priceUSD: 18500,
        description: "A brilliant 5+ carat unheated Yellow Ceylon Sapphire. Perfect canary yellow color with exceptional clarity and fire.",
        images: ["https://images.unsplash.com/photo-1599458252573-56ae36120de1?auto=format&fit=crop&q=80&w=800"],
        featured: true
    },
    {
        id: 'gem-6',
        type: 'gemstone',
        name: "Pink Sapphire",
        slug: "pink-sapphire-3ct",
        gemType: "Pink Sapphire",
        carat: 2.8,
        origin: "Sri Lanka (Ceylon)",
        color: "Vivid Pink",
        clarity: "VVS",
        treatment: "Unheated",
        certificate: "GRS",
        shape: "Heart",
        priceUSD: 22000,
        description: "A romantic heart-shaped Pink Ceylon Sapphire with vivid saturation. Perfect for a custom engagement ring.",
        images: ["https://images.unsplash.com/photo-1599458252573-56ae36120de1?auto=format&fit=crop&q=80&w=800"],
        featured: false
    }
];

// FINE JEWELRY
export const jewelry = [
    {
        id: 'jew-1',
        type: 'jewelry',
        name: "Royal Blue Sapphire Ring",
        slug: "royal-blue-sapphire-ring",
        category: "Rings",
        gemType: "Sapphire",
        priceUSD: 12500,
        description: "A stunning 2.5-carat Ceylon Blue Sapphire set in 18k white gold with diamond halo.",
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
        id: 'jew-2',
        type: 'jewelry',
        name: "Crimson Radiance Ring",
        slug: "crimson-radiance-ring",
        category: "Rings",
        gemType: "Ruby",
        priceUSD: 8200,
        description: "A captivating 1.8-carat Burmese Ruby set in 18k rose gold.",
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
        id: 'jew-3',
        type: 'jewelry',
        name: "Ocean's Tear Pendant",
        slug: "oceans-tear-pendant",
        category: "Pendants",
        gemType: "Sapphire",
        priceUSD: 5400,
        description: "An elegant 1.2-carat Ceylon Sapphire pendant in 18k white gold with diamond accents.",
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
        id: 'jew-4',
        type: 'jewelry',
        name: "Emerald Envy Earrings",
        slug: "emerald-envy-earrings",
        category: "Earrings",
        gemType: "Emerald",
        priceUSD: 6800,
        description: "A pair of 1.5-carat Colombian Emerald drop earrings in 18k yellow gold.",
        specs: {
            gemWeight: "1.5 carats each",
            metal: "18k Yellow Gold",
            origin: "Colombia",
            clarity: "VS",
            treatment: "Minor Oil"
        },
        images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800"],
        featured: false
    }
];

// Combined products for backward compatibility
export const products = [...gemstones, ...jewelry];

export const gemCategories = ["All", "Sapphire", "Ruby", "Emerald", "Padparadscha", "Yellow Sapphire", "Pink Sapphire"];
export const jewelryCategories = ["All", "Rings", "Pendants", "Earrings", "Bracelets", "Necklaces"];

export const getGemstoneBySlug = (slug) => gemstones.find(g => g.slug === slug);
export const getJewelryBySlug = (slug) => jewelry.find(j => j.slug === slug);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getFeaturedGemstones = () => gemstones.filter(g => g.featured);
export const getFeaturedJewelry = () => jewelry.filter(j => j.featured);
export const getFeaturedProducts = () => products.filter(p => p.featured);
