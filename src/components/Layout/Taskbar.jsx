import { useState, useEffect } from 'react';
import {
    Grip, VolumeOff, Volume, Volume1, Volume2,
    Wifi, Mail, Terminal, FolderOpen
} from 'lucide-react';
import WeatherWidget from '../Widget/WeatherWidget';

const Taskbar = ({

                     toggleStartMenu,
                     activeApps,
                     restoreWindow,
                     focusWindow,
                     focusedAppKey,
                     openWindow
                 }) => {
    const [time, setTime] = useState(new Date());
    const [isVolumeOpen, setIsVolumeOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [volume, setVolume] = useState(50);
    const [viewDate, setViewDate] = useState(new Date());


    const pinnedApps = [
        { key: 'PROJECTS', icon: <FolderOpen size={20} strokeWidth={1.5} />, title: 'Projets' },
        { key: 'TERMINAL', icon: <Terminal size={20} strokeWidth={1.5} />, title: 'Terminal' },
        { key: 'MAIL', icon: <Mail size={20} strokeWidth={1.5} />, title: 'Mail' },
    ];

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    const handleClickApp = (key) => {
        const activeApp = activeApps.find(app => app.key === key);

        if (activeApp) {
            if (activeApp.minimized) {
                restoreWindow(key);
            } else {
                focusWindow(key);
            }
        } else {
            openWindow(key);
        }
    };

    const toggleVolume = () => { setIsVolumeOpen(!isVolumeOpen); setIsCalendarOpen(false); };
    const toggleCalendar = () => { setIsCalendarOpen(!isCalendarOpen); setIsVolumeOpen(false); };
    const changeMonth = (offset) => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));

    const generateDays = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        const days = [];
        for (let i = startOffset; i > 0; i--) days.push({ day: daysInPrevMonth - i + 1, currentMonth: false });
        for (let i = 1; i <= daysInMonth; i++) days.push({ day: i, currentMonth: true });
        return days;
    };

    const getVolumeIcon = () => {
        const vol = parseInt(volume);
        if (vol === 0) return <VolumeOff strokeWidth={1} />;
        if (vol < 33) return <Volume strokeWidth={1} /> ;
        if (vol < 67) return <Volume1 strokeWidth={1}/>;
        return <Volume2 strokeWidth={1} />;
    };

    return (
        <div className="taskbar">
            <WeatherWidget />

            {isVolumeOpen && (
                <div className="taskbar-popup volume-popup">
                    <span>{getVolumeIcon()}</span>
                    <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(e.target.value)} className="volume-slider" />
                    <span className="volume-value">{volume}%</span>
                </div>
            )}

            {isCalendarOpen && (
                <div className="taskbar-popup calendar-popup">
                    <div className="calendar-top-header">
                        <span>{time.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                    </div>
                    <div className="calendar-month-selector">
                        <span className="month-year-label">{viewDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</span>
                        <div className="selectors">
                            <button className="icon-btn-small" onClick={() => changeMonth(-1)}>⌃</button>
                            <button className="icon-btn-small" onClick={() => changeMonth(1)}>⌄</button>
                        </div>
                    </div>
                    <div className="calendar-grid">
                        {['lu', 'ma', 'me', 'je', 've', 'sa', 'di'].map(d => <div key={d} className="day-name">{d}</div>)}
                        {generateDays().map((item, index) => (
                            <span key={index} className={!item.currentMonth ? 'day out' : (item.day === new Date().getDate() && viewDate.getMonth() === new Date().getMonth() ? 'day today' : 'day')} >
                                {item.day}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="taskbar-center">
                <button className="start-button" onClick={toggleStartMenu}>
                    <Grip strokeWidth={1} />
                </button>

                <div className="active-apps">
                    {pinnedApps.map(app => {
                        const isActive = activeApps.find(a => a.key === app.key);
                        const isFocused = focusedAppKey === app.key && isActive && !isActive.minimized;
                        return (
                            <div key={app.key} className="taskbar-app-container">
                                <button className={`taskbar-app-icon ${isFocused ? 'active' : ''}`} onClick={() => handleClickApp(app.key)} title={app.title}>
                                    {app.icon}
                                </button>
                                {isActive && <div className={`app-indicator ${isFocused ? 'focused' : ''}`} />}
                            </div>
                        );
                    })}

                    <div className="taskbar-separator" />

                    {activeApps
                        .filter(app => !pinnedApps.find(p => p.key === app.key))
                        .map(app => (
                            <div key={app.key} className="taskbar-app-container">
                                <button className={`taskbar-app-icon ${app.key === focusedAppKey && !app.minimized ? 'active' : ''}`} onClick={() => handleClickApp(app.key)} title={app.title}>
                                    {app.icon}
                                </button>
                                <div className={`app-indicator focused`} />
                            </div>
                        ))}
                </div>
            </div>

            <div className="taskbar-right">
                <span onClick={toggleVolume} className={`taskbar-icon ${isVolumeOpen ? 'active-icon' : ''}`}>{getVolumeIcon()}</span>
                <span className="taskbar-icon"><Wifi color={"#2798F5"} /></span>
                <div className={`time-date ${isCalendarOpen ? 'active-icon' : ''}`} onClick={toggleCalendar}>
                    <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <span>{time.toLocaleDateString([], { day: '2-digit', month: '2-digit' })}</span>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;