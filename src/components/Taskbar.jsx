import React, { useState, useEffect, useRef } from 'react';
import StartLogo from '../assets/windows-logo.svg';
import '../index.css';

/*import openSound from '../assets/sounds/
import closeSound from '../assets/sounds/ */


const Taskbar = ({ isStartMenuOpen, toggleStartMenu, activeApps, restoreWindow, focusWindow, focusedAppKey }) => {

    const [time, setTime] = useState(new Date());

    const openAudioRef = useRef(null);

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const handleClickApp = (key, isMinimized) => {
        if (isMinimized) {
            restoreWindow(key);
            openAudioRef.current.play();
        } else {
            focusWindow(key);
        }
    };

    return (
        <div className="taskbar">
            {/* Balises audio cachées */}
       {/*  <audio ref={openAudioRef} src={openSound} preload="auto" />
            <audio ref={closeAudioRef} src={closeSound} preload="auto" />
       */}
            <div className="taskbar-center">
                <button
                    className="start-button"
                    onClick={toggleStartMenu}
                    style={{
                        backgroundColor: isStartMenuOpen ? 'rgba(0,0,0,0.15)' : 'transparent'
                    }}
                >
                    <img src={StartLogo} alt="Start Menu" />
                </button>

                <div className="active-apps">
                    {activeApps.map(app => (
                        <button
                            key={app.key}
                            className={`taskbar-app-icon ${app.key === focusedAppKey && !app.minimized ? 'active' : ''}`}
                            onClick={() => handleClickApp(app.key, app.minimized)}
                            title={app.title}
                            style={{
                                opacity: app.minimized ? 0.7 : 1,
                            }}
                        >
                            {app.icon}
                        </button>
                    ))}
                </div>
            </div>
            <div className="taskbar-right">
                <span style={{marginRight: '10px', fontSize: '1rem'}}>🔊</span>
                <span style={{marginRight: '10px', fontSize: '1rem'}}>🌐</span>
                <div className="time-date">
                    <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <span>{time.toLocaleDateString([], { day: '2-digit', month: '2-digit' })}</span>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;