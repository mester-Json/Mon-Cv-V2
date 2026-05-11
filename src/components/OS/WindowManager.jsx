import React from 'react';
import CvWindow from '../../components/Apps/CvWindow';
import WINDOW_DATA from "../Data/WindowData.jsx";
import Notepad from '../../components/Apps/Notepad';
import Terminal from '../../components/Apps/Terminal';

const WindowManager = ({
                           openWindows,
                           focusedAppKey,
                           closeWindow,
                           minimizeWindow,
                           focusWindow,
                           toggleMaximize,
                           updateWindowDimensions,
                           setCurrentWallpaper,
                           currentWallpaper,
                           theme,
                           setTheme,
                           allProjects,
                           openWindow
                       }) => {
    return (
        <>
            {Object.entries(openWindows).map(([key, windowProps]) => {
                const configKey = key.toUpperCase().startsWith('NOTEPAD') ? 'NOTEPAD' : key;
                const baseConfig = WINDOW_DATA[configKey] || {};

                let renderedContent;
                let statusBar = baseConfig.statusBar || false;

                const rawContent = windowProps.content || baseConfig.content;

                if (configKey === 'SETTINGS') {
                    renderedContent = typeof rawContent === 'function'
                        ? rawContent({ setCurrentWallpaper, currentWallpaper, theme, setTheme })
                        : rawContent;
                }
                else if (configKey === 'TERMINAL') {
                    renderedContent = <Terminal openWindow={openWindow} repos={allProjects} />;
                }
                else if (configKey.startsWith('NOTEPAD')) {
                    renderedContent = <Notepad content={rawContent} />;
                    statusBar = true;
                }
                else if (typeof rawContent === 'function') {
                    renderedContent = rawContent({ openWindow });
                }
                else {
                    renderedContent = rawContent;
                }

                if (renderedContent && typeof renderedContent === 'object' && !React.isValidElement(renderedContent)) {
                    console.error ( `Le contenu de la fenêtre ${key} n'est pas un élément React valide :` , renderedContent );
                    renderedContent =<div></div>
                }
                return (
                    <CvWindow
                        key={key}
                        appKey={key}
                        title={windowProps.title || baseConfig.title || "Fenêtre"}
                        icon={windowProps.icon || baseConfig.icon || ""}
                        content={renderedContent}
                        x={windowProps.x}
                        y={windowProps.y}
                        width={windowProps.width}
                        height={windowProps.height}
                        minimized={windowProps.minimized}
                        zIndex={windowProps.zIndex}
                        isMaximized={windowProps.isMaximized}
                        toggleMaximize={() => toggleMaximize(key)}
                        isFocused={key === focusedAppKey && !windowProps.minimized}
                        onClose={() => closeWindow(key)}
                        onMinimize={() => minimizeWindow(key)}
                        onFocus={() => focusWindow(key)}
                        onUpdateDimensions={(id, data) => updateWindowDimensions(key, data)}
                        statusBar={statusBar}
                    />
                );
            })}
        </>
    );
};

export default WindowManager;