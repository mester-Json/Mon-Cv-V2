import React from "react";
import FileExplorer from "../FileExplorer";
import win11Default from '../../assets/wallpapers/win11-default.jpg';
import MailApp from "../MailApp.jsx";
import EDUCATION_DATA from "./EducationData.jsx";
import XP_DATA from "./ExperienceData.jsx";
import SKILLS_DATA from "./SkillsData.jsx";

const WINDOW_DATA = {
    PROFILE: { title: " MonProfil.txt " , icon: '📝', content: () => (
            <>
                <h3>Mon Profil (Jayson Decubber)</h3>
                <p>Développeur Full Stack de 23 ans, diplômé Bac+3 Concepteur Développeur d'Applications. Je maîtrise un large ensemble de langages et frameworks modernes <br/> (Java, PHP, JavaScript/TypeScript, React, Angular, Symfony,
                    Spring Boot) ainsi que des outils DevOps tels que Docker et GitLab CI/CD.
                    <br/> Fort de plusieurs expériences en développement d'applications web (SIRH, plateformes en ligne, solutions de location), j'applique les méthodologies Agile
                    pour concevoir et maintenir des solutions fiables, performantes et évolutives.</p>
                <p>Contact: decubberjayson@gmail.com | 07 63 88 03 95</p>
                <p><a href="https://github.com/mester-Json" target="_blank" rel="noopener noreferrer">Mon GitHub</a> | <a href="https://www.linkedin.com/in/package-lock-json/" target="_blank" rel="noopener noreferrer">Mon LinkedIn</a></p>
            </>
        )},
    SKILLS: { title: "Compétences", icon: '📁',
        content: () => (
            <FileExplorer
                folderName="Compétences"
                data={SKILLS_DATA}
            />
        ) },
    XP: {
        title: "Explorateur - Expériences Professionnelles",
        icon: '📁',
        content: () => (
            <FileExplorer
                folderName="Expériences Professionnelles"
                data={XP_DATA}
            />
        )
    },

    EDUCATION: {
        title: "Explorateur - Diplômes et Formations",
        icon: '📁',
        content: () => (
            <FileExplorer
                folderName="Diplômes et Formations"
                data={EDUCATION_DATA}
            />
        )
    },

    PROJECTS: {
        title: "Explorateur de fichiers - Mes Projets Personnels",
        icon: '📁',
    },
    INTERESTS: { title: "Paramètres - Loisirs & Intérêts", icon: '🎮', content: () => (
            <>
                <h3>Loisirs & Intérêts</h3>
                <ul>
                    <li>Coder : Ma passion principale, la résolution de problèmes par la logique et le développement de solutions propres.</li>
                    <li>Jeux Vidéo : Passionné par les mondes ouverts et les jeux de stratégie.</li>
                    <li>Twitch : Veille active sur les tendances technologiques et e-sport.</li>
                </ul>
            </>
        )},
    MAIL: {
        title: "Email",
        icon: '📧',
        content: () => <MailApp />
    },
    SETTINGS: {
        title: "Paramètres - Personnalisation",
        icon: '⚙️',
        content: (setCurrentWallpaper, currentWallpaper, theme, setTheme) => (
            <div className="settings-content" style={{ color: 'var(--win11-text)' }}>
                <h3>Changer le fond d'écran</h3>
                <div className="wallpaper-options">
                    {Object.entries({
                        'win11-default': win11Default,
                    }).map(([key, path]) => (
                        <div key={key}
                             className={`wallpaper-option ${currentWallpaper === key ? 'selected' : ''}`}
                             onClick={() => { setCurrentWallpaper(key); }}>
                            <img src={path} alt={key} />
                        </div>
                    ))}
                </div>

                <h3 style={{ marginTop: '30px' }}>Mode d'affichage</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <label>
                        <input
                            type="radio"
                            name="theme"
                            value="light"
                            checked={theme === 'light'}
                            onChange={() => setTheme('light')}
                        />
                        Clair
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="theme"
                            value="dark"
                            checked={theme === 'dark'}
                            onChange={() => setTheme('dark')}
                        />
                        Sombre
                    </label>
                </div>
            </div>

        ),
    },
};

export default WINDOW_DATA;