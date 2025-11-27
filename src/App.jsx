import React, { useState, useRef, useEffect } from 'react';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import CvWindow from './components/CvWindow';
import DesktopIcon from './components/DesktopIcon';
import BootScreen from './components/BootScreen';
import LockScreen from './components/LockScreen';
import desktopIconsData from "./components/Data/DesktopIconsData.jsx";
import WINDOW_DATA from "./components/Data/WindowData.jsx";
import './index.css';
import win11Default from './assets/wallpapers/win11-default.jpg';



const App = () => {
    const [bootState, setBootState] = useState('booting');
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const [openWindows, setOpenWindows] = useState({});
    const [topZIndex, setTopZIndex] = useState(100);
    const [desktopIcons, setDesktopIcons] = useState(desktopIconsData);

    const [currentWallpaper, setCurrentWallpaperState] = useState(() => {
        return localStorage.getItem('wallpaper') || 'win11-default';
    });

    const [theme, setThemeState] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'dark-mode' : '';
    }, [theme]);

    const playSound = (audioRef) => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(e => console.error("Error playing sound:", e));
        }
    };

    const openAudioRef = useRef(null);
    const closeAudioRef = useRef(null);

    const setCurrentWallpaper = (wallpaperKey) => {
        setCurrentWallpaperState(wallpaperKey);
        localStorage.setItem('wallpaper', wallpaperKey);
    };

    const setTheme = (newTheme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const getWallpaperPath = (key) => {
        switch(key) {
            case 'win11-default': return win11Default;

            default: return win11Default;
        }
    };

    const focusWindow = (key) => {
        setTopZIndex(prev => prev + 1);
        setOpenWindows(prev => ({
            ...prev,
            [key]: {
                ...prev[key],
                minimized: false,
                zIndex: topZIndex + 1
            }
        }));
    };

    const openWindow = (key) => {
        setIsStartMenuOpen(false);
        setTopZIndex(prev => prev + 1);

        setOpenWindows(prev => {
            const newWindows = { ...prev };
            const offset = Object.keys(newWindows).length * 20;

            newWindows[key] = {
                ...WINDOW_DATA[key],
                ...prev[key],
                minimized: false,
                zIndex: topZIndex + 1,
                x: prev[key] && prev[key].x !== undefined ? prev[key].x : window.innerWidth / 2 - 350 + offset,
                y: prev[key] && prev[key].y !== undefined ? prev[key].y : window.innerHeight / 2 - 250 + offset,
                width: prev[key] && prev[key].width !== undefined ? prev[key].width : 700,
                height: prev[key] && prev[key].height !== undefined ? prev[key].height : 500,
            };
            return newWindows;
        });
        playSound(openAudioRef);
    };

    const closeWindow = (key) => {
        setOpenWindows(prev => {
            const newState = { ...prev };
            delete newState[key];
            return newState;
        });
        playSound(closeAudioRef);
    };

    const minimizeWindow = (key) => {
        setOpenWindows(prev => ({
            ...prev,
            [key]: { ...prev[key], minimized: true }
        }));
    };

    const updateWindowDimensions = (key, data) => {
        setOpenWindows(prev => ({
            ...prev,
            [key]: {
                ...prev[key],
                ...data
            }
        }));
    };

    const handleDesktopIconDragStop = (id, x, y) => {
        setDesktopIcons(prev => ({
            ...prev,
            [id]: { ...prev[id], initialX: x, initialY: y }
        }));
    };

    if (bootState === 'booting') {
        return <BootScreen onBootComplete={() => setBootState('locked')} />;
    }

    if (bootState === 'locked') {
        return <LockScreen onLogin={() => setBootState('desktop')} theme={theme} />;
    }

    const activeAppKeys = Object.keys(openWindows);
    const activeApps = activeAppKeys.map(key => ({
        key,
        title: WINDOW_DATA[key].title,
        icon: WINDOW_DATA[key].icon,
        minimized: openWindows[key].minimized,
    }));

    const focusedAppKey = activeAppKeys.sort((a, b) => (openWindows[b]?.zIndex || 0) - (openWindows[a]?.zIndex || 0))[0];


    return (
        <div className="App">

            <div className="desktop" style={{ backgroundImage: `url(${getWallpaperPath(currentWallpaper)})` }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'calc(100% - 48px)' }}>
                    {Object.values(desktopIcons).map(icon => (
                        <DesktopIcon
                            key={icon.id}
                            id={icon.id}
                            label={icon.label}
                            iconSrc={icon.icon}
                            initialX={icon.initialX}
                            initialY={icon.initialY}
                            onClick={() => openWindow(icon.appKey)}
                            onDragStop={handleDesktopIconDragStop}
                        />
                    ))}
                </div>

                {isStartMenuOpen && (
                    <StartMenu
                        openWindow={openWindow}
                        WINDOW_DATA={WINDOW_DATA}
                        setIsStartMenuOpen={setIsStartMenuOpen}
                    />
                )}

                {Object.entries(openWindows).map(([key, windowProps]) => (
                    <CvWindow
                        key={key}
                        appKey={key}
                        title={windowProps.title}
                        icon={windowProps.icon}
                        content={key === 'SETTINGS' ? WINDOW_DATA.SETTINGS.content(setCurrentWallpaper, currentWallpaper, theme, setTheme) : windowProps.content()}
                        x={windowProps.x}
                        y={windowProps.y}
                        width={windowProps.width}
                        height={windowProps.height}
                        minimized={windowProps.minimized}
                        zIndex={windowProps.zIndex}
                        isFocused={key === focusedAppKey && !windowProps.minimized}
                        onClose={() => closeWindow(key)}
                        onMinimize={() => minimizeWindow(key)}
                        onFocus={() => focusWindow(key)}
                        onUpdateDimensions={updateWindowDimensions}
                    />
                ))}
            </div>

            <Taskbar
                isStartMenuOpen={isStartMenuOpen}


/*
                toggleStartMenu={toggleStartMenu}
*/


                activeApps={activeApps}
                restoreWindow={openWindow}
                focusWindow={focusWindow}
                focusedAppKey={focusedAppKey}
            />
        </div>
    );
};

export default App;