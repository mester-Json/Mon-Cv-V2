import React from "react";

import win11Default from '../../assets/wallpapers/win11-default.jpg';

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
    SKILLS: { title: "Compétences", icon: '📁', content: () => (
            <>
                <h3> Compétences Techniques</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                    <div>
                        <h4>Frontend & Langages</h4>
                        <ul>
                            <li>Langages : Html/Css/Javascript, Typescript, Python, Php, Java</li>
                            <li>Frameworks : React, Angular, Symfony, Spring</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Backend & DevOps</h4>
                        <ul>
                            <li>Bases de Données : Sql, MongoDb</li>
                            <li>DevOps : Docker, Git lab Ci, Kubernetes, Jenkins, Mini Kube</li>
                            <li>Server : Node.js, Express, Apache, Nginx, Spring Boot, Proxmox</li>
                        </ul>
                    </div>
                </div>
            </>
        )},
    XP: { title: "Expériences", icon: '📁', content: () => (
            <>
                <h3> Expériences Professionnelles</h3>
                <h4>Apprenti Concepteur Développeur d'Application - Dawan (10/2024-09/2025)</h4>
                <p>Conception et développement d'une application SIRH. Stack : React (JavaScript), Java Spring Boot et UML. Méthode : Agile.</p>
                <h4>Stagiaire Développeur Full Stack - Hizen dev (02/2024-03/2024)</h4>
                <p>Création d'une application de **location de serveur**. **Stack :** React, Node.js, Express, l'API PayPal.</p>
            </>
        )},
    EDUCATION: { title: "Paramètres - Formation & Diplômes", icon: '🎓', content: () => (
            <>
                <h3> Formation & Diplômes</h3>
                <h4>Concepteur Développeur d'Application (Bac+3) - Dawan (10/2024-09/2025)</h4>
                <p>Formation approfondie en POO, Architecture logicielle, Tests, Développement Web et APIs REST. <br/>Stack principale :Angular, Java Spring Boot, MongoDB.</p>
                <h4>POEI Java - Dawan (07/2024-10/2024)</h4>
                <p>Projet de fin de formation : Développement d'une application Web pour un site de rencontre. <br/>**Stack :** Java Spring Boot (Backend), React (Frontend).</p>
                <h4>Ms Déveloper Full Stack - Afpa (01/2024-03/2024)</h4>
                <p>Initiation et approfondissement de la stack PHP/JS et des méthodologies de travail en équipe.</p>
                <h4>Développeur Web, Web Mobile (Bac+2) - Centre de Formation Pop'Shcool (11/2022-06/2023)</h4>
                <p>Apprentissage des bases du développement logiciel, bases de données, réseaux et gestion de projets informatiques.</p>
            </>
        )},
    PROJECTS: { title: "Explorateur de fichiers - Mes Projets Personnels", icon: '💡', content: () => (
            <>
                <h3>Projets Personnels</h3>
                <h4>Application de Gestion de Tâches (React, Node.js, MongoDB)</h4>
                <p>Développement d'une application CRUD complète pour gérer des listes de tâches, avec authentification utilisateur et persistance des données.</p>
                <h4>Script d'Automatisation Python</h4>
                <p>Création de scripts Python pour automatiser des tâches répétitives (ex: traitement de fichiers, scraping simple) pour optimiser mon flux de travail.</p>
            </>
        )},
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