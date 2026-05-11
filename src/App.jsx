import { useRef } from 'react';

import { useTheme } from './hooks/useTheme';
import { useSystemState } from './hooks/useSystemState';
import { useWindowManager } from './hooks/useWindowManager';
import { useGitHubProjects } from './hooks/useGitHubProjects';

import BootScreen from '../src/components/OS/BootScreen.jsx';
import LockScreen from '../src/components/OS/LockScreen';
import DesktopView from '../src/components/Layout/DesktopView';

import './style/index.css';

const App = () => {
    const { theme, setTheme } = useTheme();

    const {
        bootState,
        setBootState,
        isShuttingDown,
        setIsShuttingDown,
        activeNotif,
        setActiveNotif
    } = useSystemState(theme);

    const windowTools = useWindowManager();

    const { latestProject, allProjects } = useGitHubProjects();

    const openAudioRef = useRef(null);
    const closeAudioRef = useRef(null);

    const playSound = (audioRef) => {
        if (audioRef?.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch((err) => console.log("Audio play blocked:", err));
        }
    };

    if (bootState === 'booting') {
        return (
            <BootScreen
                onBootComplete={() => setBootState('locked')}
                isShutdown={isShuttingDown}
            />
        );
    }

    if (bootState === 'locked') {
        return (
            <LockScreen
                onLogin={() => setBootState('desktop')}
                theme={theme}
            />
        );
    }


    return (
        <div className={`app-container ${theme === 'dark' ? 'dark-mode' : ''}`}>

            <DesktopView
                theme={theme}
                setTheme={setTheme}
                activeNotif={activeNotif}
                setActiveNotif={setActiveNotif}
                latestProject={latestProject}
                allProjects={allProjects}
                onShutdown={() => {
                    setIsShuttingDown(true);
                    setBootState('booting');
                }}
                playSoundOpen={() => playSound(openAudioRef)}
                playSoundClose={() => playSound(closeAudioRef)}
                {...windowTools}
            />

            <audio ref={openAudioRef} src="/sounds/open.mp3" preload="auto" />
            <audio ref={closeAudioRef} src="/sounds/close.mp3" preload="auto" />
        </div>
    );
};

export default App;