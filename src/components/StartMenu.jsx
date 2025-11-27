import React from 'react';
import Tile from './Tile';
import userIcon from '../assets/user.png';
import '../index.css';

const StartMenu = ({ setIsStartMenuOpen, openWindow, WINDOW_DATA }) => {

    const pinnedTiles = [
        { label: 'Mon Profil', key: 'PROFILE', icon: WINDOW_DATA.PROFILE.icon },
        { label: 'Compétences', key: 'SKILLS', icon: WINDOW_DATA.SKILLS.icon },
        { label: 'Exp. Pro', key: 'XP', icon: WINDOW_DATA.XP.icon },
        { label: 'Formation', key: 'EDUCATION', icon: WINDOW_DATA.EDUCATION.icon },
        { label: 'Projets', key: 'PROJECTS', icon: WINDOW_DATA.PROJECTS.icon },
        { label: 'Intérêts', key: 'INTERESTS', icon: WINDOW_DATA.INTERESTS.icon },
        { label: 'Paramètres', key: 'SETTINGS', icon: WINDOW_DATA.SETTINGS.icon },
    ];

    return (
        <div className="start-menu">
            <h2>Pinné</h2>
            <div className="pinned">
                {pinnedTiles.map(tile => (
                    <Tile
                        key={tile.key}
                        label={tile.label}
                        iconSrc={tile.icon}
                        onClick={() => openWindow(tile.key)}
                    />
                ))}
            </div>

            <h2>Recommandé</h2>
            <div className="recommended">
                <div className="recommended-item">
                    <p>Dernier Projet : SIRH (React/Java)</p>
                    <small>Il y a 2h</small>
                </div>
            </div>

            <div className="start-menu-footer">
                <button className="profile-button">
                    <img src={userIcon} alt="Profile" />
                    <span>Jayson Decubber</span>
                </button>
                <button className="power-button">
                    <span style={{fontSize: '1.2rem'}}>🔌</span>
                </button>
            </div>
        </div>
    );
};

export default StartMenu;