// Currency exchange rates (base: USD)
// In production, these would come from a live API
export const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    LKR: 323.50,
    AUD: 1.57,
};

export const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    LKR: 'Rs.',
    AUD: 'A$',
};

export const currencyNames = {
    USD: 'US Dollar',
    EUR: 'Euro',
    GBP: 'British Pound',
    LKR: 'Sri Lankan Rupee',
    AUD: 'Australian Dollar',
};

// Country to currency mapping for auto-detection
export const countryToCurrency = {
    US: 'USD',
    GB: 'GBP',
    AU: 'AUD',
    LK: 'LKR',
    DE: 'EUR',
    FR: 'EUR',
    IT: 'EUR',
    ES: 'EUR',
    NL: 'EUR',
    // Default to USD for unmapped countries
};

export const convertPrice = (priceInUSD, targetCurrency) => {
    const rate = exchangeRates[targetCurrency] || 1;
    return priceInUSD * rate;
};

export const formatPrice = (priceInUSD, currency) => {
    const converted = convertPrice(priceInUSD, currency);
    const symbol = currencySymbols[currency] || '$';

    // Format with appropriate decimal places
    if (currency === 'LKR') {
        return `${symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};
