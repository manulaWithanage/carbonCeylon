import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { currencySymbols, currencyNames } from '../utils/currency';

const currencies = ['USD', 'EUR', 'GBP', 'LKR', 'AUD'];

const CurrencySelector = () => {
    const { currency, changeCurrency } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-sm hover:text-[#d4af37] transition-colors"
            >
                <Globe className="w-4 h-4" />
                <span>{currencySymbols[currency]} {currency}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg border border-gray-100 min-w-[160px] z-50">
                    {currencies.map(curr => (
                        <button
                            key={curr}
                            onClick={() => { changeCurrency(curr); setIsOpen(false); }}
                            className={`w-full text-left px-4 py-2 text-sm flex justify-between items-center hover:bg-[#fafaf9] transition-colors ${currency === curr ? 'text-[#d4af37] font-medium' : ''
                                }`}
                        >
                            <span>{currencyNames[curr]}</span>
                            <span className="text-gray-400">{currencySymbols[curr]}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencySelector;
