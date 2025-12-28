import { createContext, useContext, useState, useEffect } from 'react';
import { gemstones as initialGemstones, jewelry as initialJewelry } from '../data/products';

const ProductContext = createContext();

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};

export const ProductProvider = ({ children }) => {
    // Initialize from localStorage or use default data
    const [gemstones, setGemstones] = useState(() => {
        const saved = localStorage.getItem('carbonceylon_gemstones');
        return saved ? JSON.parse(saved) : initialGemstones;
    });

    const [jewelry, setJewelry] = useState(() => {
        const saved = localStorage.getItem('carbonceylon_jewelry');
        return saved ? JSON.parse(saved) : initialJewelry;
    });

    // Persist to localStorage on changes
    useEffect(() => {
        localStorage.setItem('carbonceylon_gemstones', JSON.stringify(gemstones));
    }, [gemstones]);

    useEffect(() => {
        localStorage.setItem('carbonceylon_jewelry', JSON.stringify(jewelry));
    }, [jewelry]);

    // GEMSTONE CRUD
    const addGemstone = (gemstone) => {
        const newGem = {
            ...gemstone,
            id: `gem-${Date.now()}`,
            type: 'gemstone',
            slug: gemstone.name.toLowerCase().replace(/\s+/g, '-')
        };
        setGemstones(prev => [...prev, newGem]);
        return newGem;
    };

    const updateGemstone = (id, updates) => {
        setGemstones(prev => prev.map(gem =>
            gem.id === id ? { ...gem, ...updates } : gem
        ));
    };

    const deleteGemstone = (id) => {
        setGemstones(prev => prev.filter(gem => gem.id !== id));
    };

    const getGemstoneBySlug = (slug) => gemstones.find(g => g.slug === slug);
    const getGemstoneById = (id) => gemstones.find(g => g.id === id);

    // JEWELRY CRUD
    const addJewelry = (item) => {
        const newItem = {
            ...item,
            id: `jew-${Date.now()}`,
            type: 'jewelry',
            slug: item.name.toLowerCase().replace(/\s+/g, '-')
        };
        setJewelry(prev => [...prev, newItem]);
        return newItem;
    };

    const updateJewelry = (id, updates) => {
        setJewelry(prev => prev.map(item =>
            item.id === id ? { ...item, ...updates } : item
        ));
    };

    const deleteJewelry = (id) => {
        setJewelry(prev => prev.filter(item => item.id !== id));
    };

    const getJewelryBySlug = (slug) => jewelry.find(j => j.slug === slug);
    const getJewelryById = (id) => jewelry.find(j => j.id === id);

    // Combined products
    const products = [...gemstones, ...jewelry];
    const featuredGemstones = gemstones.filter(g => g.featured);
    const featuredJewelry = jewelry.filter(j => j.featured);

    // Reset to default data
    const resetToDefaults = () => {
        setGemstones(initialGemstones);
        setJewelry(initialJewelry);
        localStorage.removeItem('carbonceylon_gemstones');
        localStorage.removeItem('carbonceylon_jewelry');
    };

    return (
        <ProductContext.Provider value={{
            // Data
            gemstones,
            jewelry,
            products,
            featuredGemstones,
            featuredJewelry,

            // Gemstone CRUD
            addGemstone,
            updateGemstone,
            deleteGemstone,
            getGemstoneBySlug,
            getGemstoneById,

            // Jewelry CRUD
            addJewelry,
            updateJewelry,
            deleteJewelry,
            getJewelryBySlug,
            getJewelryById,

            // Utilities
            resetToDefaults
        }}>
            {children}
        </ProductContext.Provider>
    );
};
