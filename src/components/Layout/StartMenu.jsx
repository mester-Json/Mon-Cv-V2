import Tile from '../Common/Tile.jsx';
import userIcon from '../../assets/user.png';
import { FolderOpen, Power } from 'lucide-react'

const formatTimeAgo = (dateStr) => {
    if (!dateStr) return 'non disponible';

    const date = new Date(dateStr);

    if (isNaN(date.getTime())) {
        return 'récemment';
    }

    return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};

const StartMenu = ({ setIsStartMenuOpen, openWindow, WINDOW_DATA, latestProject, onShutdown }) => {

    const pinnedTiles = [
        { label: 'MonProfil.txt', key: 'PROFILE', icon: WINDOW_DATA.PROFILE.icon },
        { label: 'Compétences', key: 'SKILLS', icon: WINDOW_DATA.SKILLS.icon },
        { label: 'Exp. Pro', key: 'XP', icon: WINDOW_DATA.XP.icon },
        { label: 'Formation', key: 'EDUCATION', icon: WINDOW_DATA.EDUCATION.icon },
        { label: 'Projets', key: 'PROJECTS', icon: WINDOW_DATA.PROJECTS.icon },
        { label: 'Intérêts', key: 'INTERESTS', icon: WINDOW_DATA.INTERESTS.icon },
        { label: 'Paramètres', key: 'SETTINGS', icon: WINDOW_DATA.SETTINGS.icon },
        { label: 'Email', key: 'MAIL', icon: WINDOW_DATA.MAIL.icon },
    ];

    const recommendedContent = latestProject ? (
        <div
            className="recommended-item"
            onClick={() => {
                const url = latestProject.url || latestProject.html_url;
                if (url) window.open(url, '_blank');
            }}
            style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px',
                borderRadius: '4px',
                transition: 'background 0.2s'
            }}
        >
            <span style={{ fontSize: '24px' }}><FolderOpen  strokeWidth={1} /></span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontWeight: 'bold', margin: '0', fontSize: '0.85rem'}}>
                    {latestProject.name || "Projet GitHub"}
                </p>
                <small style={{  fontSize: '0.75rem' }}>
                    {`Modifié le ${formatTimeAgo(latestProject.updatedAt || latestProject.updated_at)}`}
                </small>
            </div>
        </div>
    ) : (
        <div className="recommended-item" style={{ padding: '10px' }}>
            <p style={{ margin: '0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
                Aucun projet récent trouvé
            </p>
        </div>
    );

    return (
        <div className="start-menu">
            <div className="start-menu-section">
                <div className="section-header">
                    <h2>Épinglé</h2>
                </div>
                <div className="pinned">
                    {pinnedTiles.map(tile => (
                        <Tile
                            key={tile.key}
                            label={tile.label}
                            iconSrc={tile.icon}
                            onClick={() => {
                                openWindow(tile.key);
                                setIsStartMenuOpen(false);
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="start-menu-section" style={{ marginTop: '20px' }}>
                <div className="section-header">
                    <h2>Recommandé</h2>
                </div>
                <div className="recommended">
                    {recommendedContent}
                </div>
            </div>

            <div className="start-menu-footer">
                <div className="profile-button">
                    <img src={userIcon} alt="Profile" />
                    <span>Jayson Decubber</span>
                </div>
                <button
                    className="power-button"
                    onClick={() => {
                        setIsStartMenuOpen(false);
                        onShutdown();
                    }}
                    title="Arrêter"
                >
                    <span><Power size={15} /></span>
                </button>
            </div>

        </div>
    );
};

export default StartMenu;