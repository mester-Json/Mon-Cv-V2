import React from 'react';
import Tile from './Tile';
import userIcon from '../assets/user.png';
import '../index.css';

const formatTimeAgo = (dateStr) => {
    if (!dateStr) return '';
    return `Le ${dateStr}`;
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
        <a
            href={latestProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="recommended-item"
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <p style={{ fontWeight: 'bold', margin: '0' }}>
                {latestProject.error ? latestProject.name : `Dernier Projet : ${latestProject.name}`}
            </p>
            <small style={{ color: 'var(--win11-text-secondary)' }}>
                {latestProject.error ? 'Vérifiez la connexion ou le nom d\'utilisateur.' : `Mis à jour : ${formatTimeAgo(latestProject.updatedAt)}`}
            </small>
        </a>
    ) : (
        <div className="recommended-item">
            <p style={{ margin: '0' }}>Chargement des données GitHub...</p>
        </div>
    );

    return (
        <div className="start-menu">
            <h2>Épinglé</h2>
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

            <h2>Recommandé</h2>
            <div className="recommended">
                {recommendedContent}
            </div>

            <div className="start-menu-footer">
                <button className="profile-button">
                    <img src={userIcon} alt="Profile" />
                    <span>Jayson Decubber</span>
                </button>
                <button
                    className="power-button"
                    onClick={() => {
                        setIsStartMenuOpen(false);
                        onShutdown(); // Déclenche le shutdown
                    }}
                >
                    <span style={{fontSize: '1.2rem'}}>⏻</span>
                </button>
            </div>
        </div>
    );
};

export default StartMenu;