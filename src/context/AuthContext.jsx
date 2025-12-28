import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Hardcoded admin credentials
const ADMIN_EMAIL = 'admin@carbonceylon.com';
const ADMIN_PASSWORD = 'admin123';

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('carbonceylon_admin');
        return saved ? JSON.parse(saved) : null;
    });
    const [loading, setLoading] = useState(false);

    const login = async (email, password) => {
        setLoading(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            const userData = {
                email,
                name: 'Store Admin',
                role: 'admin'
            };
            setUser(userData);
            localStorage.setItem('carbonceylon_admin', JSON.stringify(userData));
            setLoading(false);
            return { success: true };
        }

        setLoading(false);
        return { success: false, error: 'Invalid email or password' };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('carbonceylon_admin');
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            logout,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    );
};
