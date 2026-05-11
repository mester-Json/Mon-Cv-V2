import { useState } from 'react';
import WINDOW_DATA from "../components/Data/WindowData.jsx";

export const useWindowManager = () => {
    const [openWindows, setOpenWindows] = useState({});
    const [topZIndex, setTopZIndex] = useState(100);

    const openWindow = (key, customData = null) => {
        setTopZIndex(prev => prev + 1);
        const windowKey = customData?.title ? `${key}_${customData.title.replace(/\s+/g, '')}` : key;

        setOpenWindows(prev => {
            if (prev[windowKey]) {
                return {
                    ...prev,
                    [windowKey]: { ...prev[windowKey], minimized: false, zIndex: topZIndex + 1 }
                };
            }
            const offset = Object.keys(prev).length * 20;
            const baseData = WINDOW_DATA[key] || {};

            return {
                ...prev,
                [windowKey]: {
                    ...baseData,
                    ...customData,
                    minimized: false,
                    isMaximized: false,
                    zIndex: topZIndex + 1,
                    x: (window.innerWidth / 2 - 350 + offset),
                    y: (window.innerHeight / 2 - 250 + offset),
                    width: baseData.width || 700,
                    height: baseData.height || 500,
                }
            };
        });
    };

    const closeWindow = (key) => {
        setOpenWindows(prev => {
            const newState = { ...prev };
            delete newState[key];
            return newState;
        });
    };

    const focusWindow = (key) => {
        setTopZIndex(prev => prev + 1);
        setOpenWindows(prev => ({
            ...prev,
            [key]: { ...prev[key], minimized: false, zIndex: topZIndex + 1 }
        }));
    };

    const toggleMaximize = (key) => {
        setOpenWindows(prev => ({
            ...prev, [key]: { ...prev[key], isMaximized: !prev[key].isMaximized }
        }));
    };

    const minimizeWindow = (key) => {
        setOpenWindows(prev => ({
            ...prev, [key]: { ...prev[key], minimized: true }
        }));
    };

    return {
        openWindows,
        setOpenWindows,
        topZIndex,
        openWindow,
        closeWindow,
        focusWindow,
        toggleMaximize,
        minimizeWindow
    };
};