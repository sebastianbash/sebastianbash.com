import React, { useState, useEffect, createContext } from 'react'

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
    }

    // If you want to use dark theme as the default, return 'dark' instead
    return 'light';

}

const ThemeContext = createContext();
export default ThemeContext;

export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('theme', rawTheme);
    };

    if (initialTheme) {
        rawSetTheme(initialTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};