import { createContext, useContext, useState, useEffect } from 'react';
import { countryToCurrency } from '../utils/currency';

const CurrencyContext = createContext();

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
};

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem('carbonceylon_currency');
        return saved || 'USD';
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Auto-detect currency on first visit
        const detectCurrency = async () => {
            const saved = localStorage.getItem('carbonceylon_currency');
            if (saved) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch('http://ip-api.com/json/?fields=countryCode');
                const data = await response.json();
                const detectedCurrency = countryToCurrency[data.countryCode] || 'USD';
                setCurrency(detectedCurrency);
                localStorage.setItem('carbonceylon_currency', detectedCurrency);
            } catch (error) {
                console.log('Could not detect location, using USD');
            } finally {
                setLoading(false);
            }
        };

        detectCurrency();
    }, []);

    const changeCurrency = (newCurrency) => {
        setCurrency(newCurrency);
        localStorage.setItem('carbonceylon_currency', newCurrency);
    };

    return (
        <CurrencyContext.Provider value={{ currency, changeCurrency, loading }}>
            {children}
        </CurrencyContext.Provider>
    );
};
