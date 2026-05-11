
import { Sun, Moon } from "lucide-react";
import win11Default from "../../assets/wallpapers/win11-default.png";
import win11Dark from "../../assets/wallpapers/win11-dark.png";

const SettingsData = ({ setCurrentWallpaper, currentWallpaper, theme, setTheme }) => {

    const themeOptions = [
        {
            id: 'light',
            label: 'Clair',
            wallpaper: 'win11-default',
            Icon: Sun
        },
        {
            id: 'dark',
            label: 'Sombre',
            wallpaper: 'win11-dark',
            Icon: Moon
        }
    ];

    const handleThemeChange = (id, wallpaper) => {
        setTheme(id);
        setCurrentWallpaper(wallpaper);
        localStorage.setItem('theme', id);
        localStorage.setItem('wallpaper', wallpaper);
    };

    return (
        <div className="settings-content">
            <h3>Changer le fond d'écran</h3>
            <div className="wallpaper-options">
                {[
                    { key: 'win11-default', path: win11Default },
                    { key: 'win11-dark', path: win11Dark }
                ].map((wall) => (
                    <div key={wall.key}
                         className={`wallpaper-option ${currentWallpaper === wall.key ? 'selected' : ''}`}
                         onClick={() => {
                             setCurrentWallpaper(wall.key);
                             localStorage.setItem('wallpaper', wall.key);
                         }}>
                        <img src={wall.path} alt={wall.key} />
                    </div>
                ))}
            </div>

            <h3 className="section-title">Mode d'affichage</h3>
            <div className="theme-selection-container" style={{ display: 'flex', gap: '20px' }}>
                {themeOptions.map(({ id, label, wallpaper, Icon }) => (
                    <div
                        key={id}
                        className={`theme-card ${theme === id ? 'active' : ''}`}
                        onClick={() => handleThemeChange(id, wallpaper)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '10px',
                            borderRadius: '8px',
                            border: theme === id ? '2px solid #0078d4' : '2px solid transparent',
                            background: theme === id ? 'rgba(0, 120, 212, 0.1)' : 'transparent',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <Icon size={32} strokeWidth={theme === id ? 2.5 : 1.5} />
                        <span style={{ marginTop: '8px', fontSize: '14px' }}>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SettingsData;