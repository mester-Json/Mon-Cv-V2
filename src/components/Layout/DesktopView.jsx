import { useState } from 'react';
import Taskbar from '../../components/Layout/Taskbar';
import StartMenu from '../../components/Layout/StartMenu';
import DesktopIcon from '../../components/Common/DesktopIcon';
import Notification from '../../components/Common/Notification';
import WindowManager from '../../components/OS/WindowManager';
import desktopIconsData from "../../components/Data/DesktopIconsData.jsx";
import WINDOW_DATA from "../Data/WindowData.jsx";
import CookieBanner from '../Cookie/CookieBanner';

import win11Default from '../../assets/wallpapers/win11-default.png';
import win11Dark from '../../assets/wallpapers/win11-dark.png';

const DesktopView = ({
                         theme,
                         setTheme,
                         activeNotif,
                         setActiveNotif,
                         latestProject,
                         allProjects,
                         onShutdown,
                         playSoundOpen,
                         playSoundClose,
                         openWindows,
                         setOpenWindows,
                         topZIndex,
                         openWindow,
                         closeWindow,
                         focusWindow,
                         toggleMaximize,
                         minimizeWindow
                     }) => {

    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const [desktopIcons, setDesktopIcons] = useState(desktopIconsData);
    const [currentWallpaper, setCurrentWallpaper] = useState(() => {
        const savedWall = sessionStorage.getItem('wallpaper');
        if (savedWall) return savedWall;
        return theme === 'dark' ? 'win11-dark' : 'win11-default';
    });

    const wallImg = currentWallpaper === 'win11-dark' ? win11Dark : win11Default;
    const isLightWallpaper = currentWallpaper === 'win11-default';
    const desktopContrastClass = isLightWallpaper ? 'force-light-bg' : 'force-dark-bg';

    const handleDesktopClick = (e) => {
        if (e.target.classList.contains('desktop-container')) {
            setIsStartMenuOpen(false);
        }
    };

    const handleOpenApp = (key, data) => {
        setIsStartMenuOpen(false);
        openWindow(key, data);
        playSoundOpen();
    };

    const handleCloseApp = (key) => {
        closeWindow(key);
        playSoundClose();
    };

    return (
        <div
            className="desktop-container"
            style={{
                backgroundImage: `url(${wallImg})`,
                backgroundSize: 'cover',
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                position: 'relative'
            }}
            onClick={handleDesktopClick}
        >
            {activeNotif && (
                <Notification
                    title={activeNotif.title}
                    message={activeNotif.message}
                    onClose={() => setActiveNotif(null)}
                />
            )}

            <div className={`desktop-icons-area ${desktopContrastClass}`}>
                {Object.values(desktopIcons).map(icon => (
                    <DesktopIcon
                        key={icon.id}
                        {...icon}
                        iconSrc={icon.icon}
                        onClick={(e) => handleOpenApp(icon.appKey)}
                        onDragStop={(id, x, y) => setDesktopIcons(prev => ({
                            ...prev,
                            [id]: { ...prev[id], initialX: x, initialY: y }
                        }))}
                    />
                ))}
            </div>

            <WindowManager
                openWindows={openWindows}
                focusedAppKey={Object.keys(openWindows).find(k => openWindows[k].zIndex === topZIndex)}
                closeWindow={handleCloseApp}
                minimizeWindow={minimizeWindow}
                focusWindow={focusWindow}
                toggleMaximize={toggleMaximize}
                updateWindowDimensions={(key, data) => setOpenWindows(prev => ({
                    ...prev, [key]: { ...prev[key], ...data }
                }))}
                setCurrentWallpaper={setCurrentWallpaper}
                currentWallpaper={currentWallpaper}
                setTheme={setTheme}
                theme={theme}
                allProjects={allProjects}
                openWindow={handleOpenApp}
            />

            {isStartMenuOpen && (
                <StartMenu
                    openWindow={handleOpenApp}
                    WINDOW_DATA={WINDOW_DATA}
                    setIsStartMenuOpen={setIsStartMenuOpen}
                    latestProject={latestProject}
                    onShutdown={onShutdown}
                />
            )}

            <Taskbar
                isStartMenuOpen={isStartMenuOpen}
                toggleStartMenu={(e) => {
                    e?.stopPropagation();
                    setIsStartMenuOpen(!isStartMenuOpen);
                }}
                activeApps={Object.keys(openWindows).map(key => ({ key, ...openWindows[key] }))}
                restoreWindow={focusWindow}
                closeWindow={handleCloseApp}
                openWindow={handleOpenApp}
                WINDOW_DATA={WINDOW_DATA}
                focusWindow={focusWindow}
                theme={theme}
            />

            <CookieBanner openWindow={openWindow} />
        </div>
    );
};

export default DesktopView;