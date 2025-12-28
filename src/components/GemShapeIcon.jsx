// SVG shapes for different gemstone cuts
export const GemShapeIcon = ({ shape, className = "w-full h-full" }) => {
    const shapes = {
        "Round Brilliant": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <circle cx="50" cy="50" r="45" />
            </svg>
        ),
        "Princess": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <rect x="10" y="10" width="80" height="80" />
            </svg>
        ),
        "Marquise": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <ellipse cx="50" cy="50" rx="45" ry="25" transform="rotate(0 50 50)" />
            </svg>
        ),
        "Heart": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <path d="M50,85 C50,85 15,60 15,40 C15,25 25,15 35,15 C42,15 48,20 50,25 C52,20 58,15 65,15 C75,15 85,25 85,40 C85,60 50,85 50,85 Z" />
            </svg>
        ),
        "Oval": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <ellipse cx="50" cy="50" rx="30" ry="45" />
            </svg>
        ),
        "Cushion": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <rect x="15" y="15" width="70" height="70" rx="15" />
            </svg>
        ),
        "Emerald": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <polygon points="20,15 80,15 85,20 85,80 80,85 20,85 15,80 15,20" />
            </svg>
        ),
        "Asscher": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" />
            </svg>
        ),
        "Pear": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <path d="M50,10 C35,10 25,20 25,35 C25,60 50,90 50,90 C50,90 75,60 75,35 C75,20 65,10 50,10 Z" />
            </svg>
        ),
        "Radiant": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <polygon points="25,10 75,10 90,25 90,75 75,90 25,90 10,75 10,25" />
            </svg>
        ),
        "Trillion": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <polygon points="50,10 90,85 10,85" />
            </svg>
        ),
        "Baguette": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <rect x="30" y="15" width="40" height="70" />
            </svg>
        ),
        "Rose": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <circle cx="50" cy="50" r="40" />
                <polygon points="50,15 60,40 85,40 65,55 75,80 50,65 25,80 35,55 15,40 40,40" opacity="0.5" />
            </svg>
        ),
        "Cabochon": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <ellipse cx="50" cy="55" rx="40" ry="35" />
                <ellipse cx="50" cy="45" rx="40" ry="25" opacity="0.3" />
            </svg>
        ),
        "Briolette": (
            <svg viewBox="0 0 100 100" className={className} fill="currentColor">
                <ellipse cx="50" cy="55" rx="25" ry="40" />
                <polygon points="50,10 70,40 30,40" opacity="0.4" />
            </svg>
        )
    };

    return shapes[shape] || shapes["Round Brilliant"];
};

export default GemShapeIcon;
