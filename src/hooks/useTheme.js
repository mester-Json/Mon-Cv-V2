import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setThemeState] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    const setTheme = (newTheme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.className = theme === 'dark' ? 'dark-mode' : '';
    }, [theme]);

    return { theme, setTheme };
};