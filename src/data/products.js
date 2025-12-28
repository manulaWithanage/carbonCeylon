// Product catalog for CarbonCeylon
// Prices are stored in USD (base currency)
// Focused on authentic Ceylon (Sri Lankan) Sapphires - Complete 14-Color Collection

// Available color options for sapphires - Extended palette
export const gemColorOptions = {
    "Blue Sapphire": [
        { name: "Royal Blue", hex: "#1e3a5f" },
        { name: "Ceylon Blue", hex: "#2563eb" },
        { name: "Cornflower Blue", hex: "#6495ed" },
        { name: "Pastel Blue", hex: "#93c5fd" }
    ],
    "Pink Sapphire": [
        { name: "Vivid Pink", hex: "#ec4899" },
        { name: "Hot Pink", hex: "#ff1493" },
        { name: "Pastel Pink", hex: "#fbcfe8" }
    ],
    "Yellow Sapphire": [
        { name: "Golden Yellow", hex: "#f59e0b" },
        { name: "Canary Yellow", hex: "#fde047" },
        { name: "Pastel Yellow", hex: "#fef08a" }
    ],
    "Special Sapphire": [
        { name: "Padparadscha", hex: "#f97316" },
        { name: "Peach", hex: "#fda4af" },
        { name: "Purple", hex: "#a855f7" },
        { name: "Champagne", hex: "#d4a574" },
        { name: "Orange", hex: "#ea580c" }
    ],
    "Ruby": [
        { name: "Pigeon Blood", hex: "#dc2626" }
    ]
};

// LOOSE GEMSTONES - Complete 14. Ceylon Sapphire Collection
export const gemstones = [
    // === BLUE TONES ===
    {
        id: 'gem-1',
        type: 'gemstone',
        name: "Royal Blue Ceylon Sapphire",
        slug: "royal-blue-ceylon-sapphire-3ct",
        gemType: "Royal Blue Sapphire",
        carat: 3.24,
        origin: "Ratnapura, Sri Lanka",
        color: "Royal Blue",
        clarity: "VVS - Eye Clean",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 9.2, width: 7.1, height: 5.8 },
        priceUSD: 32500,
        description: "An exceptional unheated Ceylon Blue Sapphire displaying the coveted 'Royal Blue' color with excellent saturation. Mined from the legendary Ratnapura gem mines, this stone exhibits the deep, velvety blue that has made Sri Lankan sapphires world-renowned. GIA certified with outstanding clarity and brilliance.",
        images: ["/images/sapphire-royal-blue.png"],
        featured: true
    },
    {
        id: 'gem-2',
        type: 'gemstone',
        name: "Ceylon Blue Sapphire",
        slug: "ceylon-blue-sapphire-4ct",
        gemType: "Ceylon Blue Sapphire",
        carat: 4.18,
        origin: "Elahera, Sri Lanka",
        color: "Ceylon Blue",
        clarity: "VVS - Loupe Clean",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Princess Cut",
        dimensions: { length: 8.5, width: 8.5, height: 5.9 },
        priceUSD: 38500,
        description: "A classic Ceylon Blue Sapphire from the Elahera region, known for producing stones of exceptional quality. This medium-tone blue sapphire exhibits the perfect balance of color saturation and brilliance that defines premium Ceylon stones.",
        images: ["/images/sapphire-ceylon-blue.png"],
        featured: true
    },
    {
        id: 'gem-3',
        type: 'gemstone',
        name: "Cornflower Blue Sapphire",
        slug: "cornflower-blue-sapphire-3ct",
        gemType: "Cornflower Sapphire",
        carat: 2.95,
        origin: "Ratnapura, Sri Lanka",
        color: "Cornflower Blue",
        clarity: "VVS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 8.8, width: 7.0, height: 5.2 },
        priceUSD: 45000,
        description: "A rare Cornflower Blue Ceylon Sapphire displaying the ethereal, violet-tinged blue reminiscent of Kashmir sapphires. This highly sought-after color is characterized by a silky, dreamlike quality that has captivated collectors worldwide.",
        images: ["/images/sapphire-cornflower.png"],
        featured: true
    },
    {
        id: 'gem-4',
        type: 'gemstone',
        name: "Pastel Blue Sapphire",
        slug: "pastel-blue-sapphire-2ct",
        gemType: "Pastel Blue Sapphire",
        carat: 2.34,
        origin: "Balangoda, Sri Lanka",
        color: "Pastel Blue",
        clarity: "VS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Cushion",
        dimensions: { length: 7.5, width: 6.8, height: 4.5 },
        priceUSD: 12800,
        description: "A delicate Pastel Blue Ceylon Sapphire perfect for those who prefer a softer, more subtle blue. The light, airy color makes this stone ideal for everyday jewelry while maintaining the quality and authenticity of genuine Ceylon sapphires.",
        images: ["/images/sapphire-pastel-blue.png"],
        featured: false
    },

    // === PINK TONES ===
    {
        id: 'gem-5',
        type: 'gemstone',
        name: "Vivid Pink Sapphire",
        slug: "vivid-pink-sapphire-3ct",
        gemType: "Vivid Pink Sapphire",
        carat: 2.87,
        origin: "Ratnapura, Sri Lanka",
        color: "Vivid Pink",
        clarity: "VVS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 8.5, width: 6.8, height: 5.1 },
        priceUSD: 26000,
        description: "A stunning Vivid Pink Ceylon Sapphire with exceptional color saturation. Sri Lanka produces the world's finest pink sapphires, known for their pure, bright pink hue without secondary tones. Perfect for a unique engagement ring.",
        images: ["/images/sapphire-vivid-pink.png"],
        featured: true
    },
    {
        id: 'gem-6',
        type: 'gemstone',
        name: "Hot Pink Sapphire",
        slug: "hot-pink-sapphire-2ct",
        gemType: "Hot Pink Sapphire",
        carat: 1.92,
        origin: "Embilipitiya, Sri Lanka",
        color: "Hot Pink",
        clarity: "VVS - Eye Clean",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 7.8, width: 6.2, height: 4.3 },
        priceUSD: 18500,
        description: "An intense Hot Pink Ceylon Sapphire with electrifying color. This vivid magenta-pink stone commands attention and is perfect for statement jewelry pieces. Unheated and naturally colored from the gem fields of southern Sri Lanka.",
        images: ["/images/sapphire-hot-pink.png"],
        featured: true
    },
    {
        id: 'gem-7',
        type: 'gemstone',
        name: "Pastel Pink Sapphire",
        slug: "pastel-pink-sapphire-2ct",
        gemType: "Pastel Pink Sapphire",
        carat: 2.15,
        origin: "Ratnapura, Sri Lanka",
        color: "Pastel Pink",
        clarity: "VS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Cushion",
        dimensions: { length: 7.2, width: 6.5, height: 4.2 },
        priceUSD: 9800,
        description: "A delicate Pastel Pink Ceylon Sapphire with a soft, romantic blush color. This feminine stone is perfect for minimalist jewelry designs or as a gentle alternative to traditional engagement rings.",
        images: ["/images/sapphire-pastel-pink.png"],
        featured: false
    },

    // === YELLOW/ORANGE TONES ===
    {
        id: 'gem-8',
        type: 'gemstone',
        name: "Canary Yellow Sapphire",
        slug: "canary-yellow-sapphire-4ct",
        gemType: "Canary Yellow Sapphire",
        carat: 3.85,
        origin: "Elahera, Sri Lanka",
        color: "Canary Yellow",
        clarity: "VVS - Loupe Clean",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 10.5, width: 8.2, height: 5.5 },
        priceUSD: 16500,
        description: "A brilliant Canary Yellow Ceylon Sapphire with pure, vivid yellow color. Sri Lanka's yellow sapphires, known as 'Pukhraj' in Vedic tradition, are prized for their astrological significance and exceptional beauty.",
        images: ["/images/sapphire-canary-yellow.png"],
        featured: true
    },
    {
        id: 'gem-9',
        type: 'gemstone',
        name: "Pastel Yellow Sapphire",
        slug: "pastel-yellow-sapphire-3ct",
        gemType: "Pastel Yellow Sapphire",
        carat: 2.67,
        origin: "Balangoda, Sri Lanka",
        color: "Pastel Yellow",
        clarity: "VS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Round Brilliant",
        dimensions: { length: 8.0, width: 8.0, height: 5.2 },
        priceUSD: 8500,
        description: "A soft Pastel Yellow Ceylon Sapphire with a gentle lemon hue. This understated beauty is perfect for those who appreciate subtle elegance. Naturally occurring light yellow sapphires are increasingly popular for engagement rings.",
        images: ["/images/sapphire-pastel-yellow.png"],
        featured: false
    },

    // === SPECIAL COLORS ===
    {
        id: 'gem-10',
        type: 'gemstone',
        name: "Padparadscha Sapphire",
        slug: "padparadscha-sapphire-2ct",
        gemType: "Padparadscha Sapphire",
        carat: 2.12,
        origin: "Ratnapura, Sri Lanka",
        color: "Pink-Orange",
        clarity: "VVS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 8.0, width: 6.5, height: 4.8 },
        priceUSD: 68000,
        description: "An exceptionally rare Padparadscha Sapphire displaying the signature pink-orange color of a lotus blossom. The name 'Padparadscha' derives from the Sinhalese word for lotus flower. This is among the rarest and most valuable sapphire varieties, found almost exclusively in Sri Lanka.",
        images: ["/images/sapphire-padparadscha.png"],
        featured: true
    },
    {
        id: 'gem-11',
        type: 'gemstone',
        name: "Peach Sapphire",
        slug: "peach-sapphire-2ct",
        gemType: "Peach Sapphire",
        carat: 2.45,
        origin: "Kahawatte, Sri Lanka",
        color: "Peach",
        clarity: "VS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 8.2, width: 6.8, height: 4.5 },
        priceUSD: 15500,
        description: "A delightful Peach Ceylon Sapphire with a soft, warm blush. This romantic color has become increasingly popular for modern engagement rings. The unique peachy-pink hue is 100% natural and unheated.",
        images: ["/images/sapphire-peach.png"],
        featured: true
    },
    {
        id: 'gem-12',
        type: 'gemstone',
        name: "Purple Sapphire",
        slug: "purple-sapphire-3ct",
        gemType: "Purple Sapphire",
        carat: 2.78,
        origin: "Rakwana, Sri Lanka",
        color: "Vivid Purple",
        clarity: "VVS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 8.5, width: 7.0, height: 4.8 },
        priceUSD: 22000,
        description: "A magnificent Purple Ceylon Sapphire displaying rich violet tones. Purple sapphires from Sri Lanka are prized for their unique color that bridges the gap between pink and blue sapphires. This stone has exceptional brilliance and fire.",
        images: ["/images/sapphire-purple.png"],
        featured: true
    },
    {
        id: 'gem-13',
        type: 'gemstone',
        name: "Champagne Sapphire",
        slug: "champagne-sapphire-4ct",
        gemType: "Champagne Sapphire",
        carat: 3.56,
        origin: "Nivitigala, Sri Lanka",
        color: "Champagne",
        clarity: "VS",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Cushion",
        dimensions: { length: 9.0, width: 7.5, height: 5.2 },
        priceUSD: 11500,
        description: "An elegant Champagne Ceylon Sapphire with warm, neutral tones. This sophisticated color is perfect for those who prefer understated luxury. The brownish-tan hue adds warmth to any jewelry setting.",
        images: ["/images/sapphire-champagne.png"],
        featured: false
    },

    // === RUBY ===
    {
        id: 'gem-14',
        type: 'gemstone',
        name: "Pigeon Blood Ruby",
        slug: "pigeon-blood-ruby-2ct",
        gemType: "Pigeon Blood Ruby",
        carat: 1.85,
        origin: "Ratnapura, Sri Lanka",
        color: "Pigeon Blood Red",
        clarity: "VVS - Eye Clean",
        treatment: "Unheated",
        certificate: "Certified",
        shape: "Oval",
        dimensions: { length: 7.5, width: 5.8, height: 4.2 },
        priceUSD: 55000,
        description: "An exceptional Pigeon Blood Ruby displaying the most desirable red color in the gemstone world. While rubies and sapphires are both corundum, rubies command premium prices for their rarity. This Sri Lankan ruby exhibits the coveted 'pigeon blood' color with excellent clarity.",
        images: ["/images/ruby-pigeon-blood.png"],
        featured: true
    }
];

// FINE JEWELRY - 3 pieces with visible gems
export const jewelry = [
    {
        id: 'jew-1',
        type: 'jewelry',
        name: "Ceylon Sapphire Halo Ring",
        slug: "ceylon-sapphire-halo-ring",
        category: "Rings",
        gemType: "Blue Sapphire",
        priceUSD: 14500,
        description: "A stunning 2.5-carat Ceylon Blue Sapphire set in 18k white gold with a brilliant diamond halo. Handcrafted by master jewelers.",
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
        name: "Ceylon Sapphire Pendant",
        slug: "ceylon-sapphire-pendant",
        category: "Pendants",
        gemType: "Blue Sapphire",
        priceUSD: 8500,
        description: "An elegant Ceylon Blue Sapphire pendant featuring a 1.8-carat oval sapphire surrounded by brilliant diamonds in 18k white gold.",
        specs: {
            gemWeight: "1.8 carats",
            metal: "18k White Gold",
            origin: "Sri Lanka (Ceylon)",
            clarity: "VS",
            treatment: "Unheated"
        },
        images: ["/images/sapphire-necklace.png"],
        featured: true
    },
    {
        id: 'jew-3',
        type: 'jewelry',
        name: "Sapphire Drop Earrings",
        slug: "sapphire-drop-earrings",
        category: "Earrings",
        gemType: "Blue Sapphire",
        priceUSD: 6800,
        description: "Elegant Ceylon Blue Sapphire drop earrings featuring brilliant oval sapphires with diamond halos in 18k white gold.",
        specs: {
            gemWeight: "1.2 carats each",
            metal: "18k White Gold",
            origin: "Sri Lanka (Ceylon)",
            clarity: "VS",
            treatment: "Unheated"
        },
        images: ["/images/sapphire-earrings.png"],
        featured: true
    }
];

// Combined products for backward compatibility
export const products = [...gemstones, ...jewelry];

// Category lists - Extended
export const gemCategories = [
    "All",
    "Royal Blue Sapphire",
    "Ceylon Blue Sapphire",
    "Cornflower Sapphire",
    "Pastel Blue Sapphire",
    "Vivid Pink Sapphire",
    "Hot Pink Sapphire",
    "Pastel Pink Sapphire",
    "Canary Yellow Sapphire",
    "Pastel Yellow Sapphire",
    "Padparadscha Sapphire",
    "Peach Sapphire",
    "Purple Sapphire",
    "Champagne Sapphire",
    "Pigeon Blood Ruby"
];
export const jewelryCategories = ["All", "Rings", "Pendants", "Earrings"];

// Helper functions
export const getGemstoneBySlug = (slug) => gemstones.find(g => g.slug === slug);
export const getJewelryBySlug = (slug) => jewelry.find(j => j.slug === slug);
export const getProductBySlug = (slug) => products.find(p => p.slug === slug);
export const getFeaturedGemstones = () => gemstones.filter(g => g.featured);
export const getFeaturedJewelry = () => jewelry.filter(j => j.featured);
export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getColorHex = (gemType, colorName) => {
    const colors = gemColorOptions[gemType] || [];
    const color = colors.find(c => c.name === colorName);
    return color ? color.hex : '#cccccc';
};

// For backward compatibility
export const categories = ["All", "Rings", "Pendants", "Earrings"];
export const gemTypes = [
    "All",
    "Blue Sapphire",
    "Pink Sapphire",
    "Yellow Sapphire",
    "Padparadscha Sapphire",
    "Purple Sapphire",
    "Ruby"
];
