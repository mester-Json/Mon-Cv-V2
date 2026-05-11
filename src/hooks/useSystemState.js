import { useState, useEffect } from 'react';

export const useSystemState = (theme) => {
    const [bootState, setBootState] = useState('booting');
    const [isShuttingDown, setIsShuttingDown] = useState(false);
    const [activeNotif, setActiveNotif] = useState(null);

    useEffect(() => {
        if (bootState === 'desktop') {
            const timer = setTimeout(() => {
                setActiveNotif({
                    title: "Système Jayson",
                    message: "Bienvenue ! N'hésitez pas à explorer les icônes pour découvrir mon parcours.",
                });
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [bootState]);

    return {
        bootState,
        setBootState,
        isShuttingDown,
        setIsShuttingDown,
        activeNotif,
        setActiveNotif
    };
};